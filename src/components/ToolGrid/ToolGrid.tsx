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
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

const easeOut: Easing = [0.4, 0, 0.2, 1];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: easeOut },
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
            <motion.div key={`placeholder-${index}`} variants={itemVariants}>
              <PlaceholderCard />
            </motion.div>
          ))}
      </motion.div>
    </AnimatePresence>
  );
}
