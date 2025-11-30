import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] px-6 py-8 md:px-12 md:py-12">
      <div className="mx-auto max-w-6xl">
        {children}
      </div>
    </div>
  );
}
