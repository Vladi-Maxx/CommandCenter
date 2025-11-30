export function PlaceholderCard() {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        w-48 h-36 md:w-72 md:h-48 p-5 md:p-6
        bg-[var(--bg-card)]
        border-2 border-dashed border-[var(--border-default)]
        rounded-xl
        opacity-40
      "
    >
      <div className="
        w-14 h-14 md:w-16 md:h-16
        flex items-center justify-center
        border-2 border-dashed border-[var(--border-default)]
        rounded-lg
      ">
        <span className="text-2xl text-[var(--text-secondary)]">+</span>
      </div>
      <span className="
        mt-2 md:mt-3
        font-[var(--font-mono)] text-xs
        text-[var(--text-secondary)]
        uppercase tracking-wider
        text-center
      ">
        Add Tool
      </span>
    </div>
  );
}
