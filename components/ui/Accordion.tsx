'use client';

import { motion } from 'motion/react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export default function Accordion({ title, children, isOpen, onToggle }: AccordionProps) {
  return (
    <motion.div
      layout="position"
      className={`p-4 rounded-3xl border-secondary border-opacity-20 cursor-pointer hover:bg-background-light ${isOpen ? 'bg-background-light' : ''}`}
      onClick={onToggle}
    >
      <div className="flex flex-row justify-between items-center">
        <button className="p-0 m-0 h-full text-left" type="button">
          <h3 className="text-lg md:text-xl font-semibold text-foreground">{title}</h3>
        </button>
        <motion.div
          animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
          className="h-8 w-8 flex-shrink-0"
          transition={{ type: 'spring' }}
        >
          <svg
            className="h-8 w-8 text-foreground"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        </motion.div>
      </div>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className="overflow-hidden"
      >
        <div className="pt-6">{children}</div>
      </motion.div>
    </motion.div>
  );
}

