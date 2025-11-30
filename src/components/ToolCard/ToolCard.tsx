import { useState } from 'react';
import { motion, type Variants, type Easing } from 'motion/react';
import type { Tool } from '../../data/tools';

interface ToolCardProps {
  tool: Tool;
}

const easeOutSpring: Easing = [0.34, 1.56, 0.64, 1];

const cardVariants: Variants = {
  idle: {
    y: 0,
    boxShadow: '0 0 0 rgba(255, 107, 53, 0)',
  },
  hover: {
    y: -8,
    boxShadow: '0 12px 40px rgba(255, 107, 53, 0.25)',
    transition: { duration: 0.3, ease: easeOutSpring },
  },
  tap: {
    scale: 0.97,
    y: -4,
    transition: { duration: 0.1 },
  },
};

const iconVariants: Variants = {
  idle: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.15,
    rotate: 5,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 15,
    },
  },
};

const labelVariants: Variants = {
  idle: {
    letterSpacing: '0.05em',
  },
  hover: {
    letterSpacing: '0.15em',
    transition: { duration: 0.3 },
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
        w-48 h-36 md:w-72 md:h-48 p-5 md:p-6
        bg-[var(--bg-card)]
        border-2 border-[var(--border-default)]
        rounded-xl
        hover:border-[var(--accent-orange)]
        hover:bg-[var(--bg-card-hover)]
        transition-colors duration-200
        no-underline
        cursor-pointer
      "
    >
      <motion.div
        variants={iconVariants}
        className="flex items-center justify-center"
      >
        {imageError ? (
          <div className="
            w-14 h-14 md:w-16 md:h-16
            flex items-center justify-center
            bg-[var(--border-default)] rounded-lg
          ">
            <span className="
              text-2xl md:text-3xl font-bold
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
            className="w-14 h-14 md:w-16 md:h-16 object-contain"
          />
        )}
      </motion.div>
      <motion.span
        variants={labelVariants}
        className="
          mt-2 md:mt-3
          font-[var(--font-mono)] text-xs md:text-sm
          text-[var(--text-secondary)]
          uppercase
          text-center
        "
      >
        {tool.name}
      </motion.span>
    </motion.a>
  );
}
