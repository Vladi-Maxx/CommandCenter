import { useState } from 'react';
import { motion, type Variants, type Easing } from 'motion/react';
import type { Tool } from '../../data/tools';

interface ToolCardProps {
  tool: Tool;
}

const easeOut: Easing = [0.4, 0, 0.2, 1];

const cardVariants: Variants = {
  idle: {
    y: 0,
    boxShadow: '0 0 0 rgba(255, 107, 53, 0)',
  },
  hover: {
    y: -4,
    boxShadow: '0 8px 32px rgba(255, 107, 53, 0.15)',
    transition: { duration: 0.2, ease: easeOut },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

export function ToolCard({ tool }: ToolCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      initial="idle"
      whileHover="hover"
      whileTap="tap"
      title={tool.description || tool.name}
      className="
        flex flex-col items-center justify-center
        w-36 h-36 md:w-40 md:h-40 p-4 md:p-6
        bg-[var(--bg-card)]
        border-2 border-[var(--border-default)]
        rounded
        hover:border-[var(--accent-orange)]
        hover:bg-[var(--bg-card-hover)]
        transition-colors duration-200
        no-underline
        cursor-pointer
      "
    >
      {imageError ? (
        <div className="
          w-16 h-16 md:w-20 md:h-20
          flex items-center justify-center
          bg-[var(--border-default)] rounded-lg
        ">
          <span className="
            text-3xl md:text-4xl font-bold
            text-[var(--accent-orange)]
          ">
            {tool.name.charAt(0)}
          </span>
        </div>
      ) : (
        <img
          src={`/logos/${tool.logo}`}
          alt={`${tool.name} logo`}
          onError={() => setImageError(true)}
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
        />
      )}
      <span className="
        mt-2 md:mt-3
        font-[var(--font-mono)] text-xs md:text-sm
        text-[var(--text-secondary)]
        uppercase tracking-wider
        text-center
      ">
        {tool.name}
      </span>
    </motion.a>
  );
}
