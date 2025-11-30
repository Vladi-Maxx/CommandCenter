import { useState, useEffect } from 'react';

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('bg-BG', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
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

  return (
    <div
      className="
        fixed top-4 right-4 md:top-6 md:right-6
        font-[var(--font-mono)] text-xs md:text-sm
        tracking-wider
        z-50
      "
      aria-live="polite"
      aria-label="Current time and date"
    >
      <span className="text-[var(--text-secondary)]">
        {formatTime(time)}
      </span>
      <span className="mx-2 text-[var(--border-hover)]">|</span>
      <span className="text-[var(--text-secondary)] opacity-70">
        {formatDate(time)}
      </span>
    </div>
  );
}
