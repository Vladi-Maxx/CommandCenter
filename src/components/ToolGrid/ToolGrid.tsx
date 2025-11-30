import { motion, AnimatePresence, type Variants, type Easing } from 'motion/react';
import type { Tool } from '../../data/tools';
import { ToolCard } from '../ToolCard/ToolCard';
import { PlaceholderCard } from '../PlaceholderCard/PlaceholderCard';

interface ToolGridProps {
  tools: Tool[];
  placeholderCount?: number;
  tabId: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

const easeOutSpring: Easing = [0.34, 1.56, 0.64, 1];

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
    rotate: -2,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: easeOutSpring,
    },
  },
};

export function ToolGrid({ tools, placeholderCount = 0, tabId }: ToolGridProps) {
  const showPlaceholders = tools.length === 0 && placeholderCount > 0;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={tabId}
        role="tabpanel"
        id={`panel-${tabId}`}
        aria-labelledby={tabId}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="
          grid
          grid-cols-2 md:grid-cols-3
          gap-4 md:gap-6
          justify-items-center
        "
      >
        {tools.map((tool) => (
          <motion.div key={tool.id} variants={itemVariants}>
            <ToolCard tool={tool} />
          </motion.div>
        ))}

        {showPlaceholders &&
          Array.from({ length: placeholderCount }).map((_, index) => (
            <motion.div key={`placeholder-${tabId}-${index}`} variants={itemVariants}>
              <PlaceholderCard />
            </motion.div>
          ))}
      </motion.div>
    </AnimatePresence>
  );
}
