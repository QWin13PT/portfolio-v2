'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface AnimatedLayoutProps {
  children: ReactNode;
}

export default function AnimatedLayout({ children }: AnimatedLayoutProps) {
  return (
    <div className="flex flex-row max-md:flex-col gap-8 md:gap-20">
      {/* Animated Sidebar */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        <Sidebar />
      </motion.div>

      {/* Animated Content */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.15,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        className="flex-1"
      >
        {children}
      </motion.div>
    </div>
  );
}

