import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="
      noise-overlay
      min-h-screen bg-[var(--bg-primary)]
      px-6 py-8 md:px-12 md:py-12
      relative
    ">
      {/* Radial vignette overlay */}
      <div className="
        fixed inset-0 pointer-events-none
        radial-vignette
      " />

      {/* Accent border on left */}
      <div className="
        fixed left-0 top-0 bottom-0 w-1
        bg-gradient-to-b from-[var(--accent-orange)] via-transparent to-[var(--accent-orange)]
        opacity-60
      " />

      <div className="mx-auto max-w-6xl relative z-10">
        {children}
      </div>
    </div>
  );
}
