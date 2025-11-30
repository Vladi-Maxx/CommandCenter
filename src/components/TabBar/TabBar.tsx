import { motion } from 'motion/react';
import type { Tab } from '../../data/tools';

interface TabBarProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function TabBar({ tabs, activeTab, onTabChange }: TabBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % tabs.length;
      onTabChange(tabs[nextIndex].id);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      onTabChange(tabs[prevIndex].id);
    }
  };

  return (
    <nav
      role="tablist"
      aria-label="Tool categories"
      className="flex gap-6 md:gap-8 border-b-2 border-[var(--border-default)] mb-8 md:mb-12"
    >
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onTabChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`
              relative pb-4
              font-[var(--font-mono)] text-xs md:text-sm uppercase tracking-[0.15em]
              transition-colors duration-200
              cursor-pointer
              bg-transparent border-none
              ${isActive
                ? 'text-[var(--text-primary)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }
            `}
          >
            {tab.label}
            {isActive && (
              <motion.div
                layoutId="activeTabIndicator"
                className="
                  absolute bottom-0 left-0 right-0
                  h-[4px] bg-[var(--accent-orange)]
                  tab-glow
                  rounded-full
                "
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 25
                }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}
