import { useState, useEffect } from 'react';

interface TimeComponents {
  hours: string;
  minutes: string;
}

const formatTimeComponents = (date: Date): TimeComponents => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return { hours, minutes };
};

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('bg-BG', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

export function ClockWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { hours, minutes } = formatTimeComponents(time);

  return (
    <div
      className="
        fixed top-4 right-4 md:top-6 md:right-6
        font-[var(--font-mono)]
        z-50
        flex flex-col items-end
      "
      aria-live="polite"
      aria-label="Current time and date"
    >
      <div className="flex items-baseline">
        <span className="text-xl md:text-2xl text-[var(--text-primary)] font-bold tracking-tight">
          {hours}
        </span>
        <span className="clock-separator text-xl md:text-2xl text-[var(--accent-orange)] font-bold mx-0.5">
          :
        </span>
        <span className="text-xl md:text-2xl text-[var(--text-primary)] font-bold tracking-tight">
          {minutes}
        </span>
      </div>
      <span className="text-[10px] md:text-xs text-[var(--text-secondary)] opacity-60 tracking-wider mt-1">
        {formatDate(time)}
      </span>
    </div>
  );
}
