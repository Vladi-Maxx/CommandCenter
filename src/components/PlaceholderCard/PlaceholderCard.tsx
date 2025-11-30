export function PlaceholderCard() {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        w-36 h-36 md:w-40 md:h-40 p-4 md:p-6
        bg-[var(--bg-card)]
        border-2 border-dashed border-[var(--border-default)]
        rounded
        opacity-40
      "
    >
      <div className="
        w-16 h-16 md:w-20 md:h-20
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
