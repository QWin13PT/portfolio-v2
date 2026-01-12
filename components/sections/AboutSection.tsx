'use client';

import { motion, useSpring, useTransform, useInView } from 'motion/react';
import { useRef, useEffect } from 'react';
import { personalInfo } from '@/lib/constants';
import RevealSection from '@/components/animations/RevealSection';

// Animated number component
function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 1.5,
  });
  
  const display = useTransform(spring, (current) => 
    Math.round(current).toString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const stats = personalInfo.stats || [];

  return (
    <RevealSection>
      <section className="mb-12" id="about">
        <h2 className="text-7xl font-bold text-foreground mb-6 uppercase">
          Hello <br />There
        </h2>

        {/* Description */}
        <motion.p
          className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {personalInfo.bio} Based in{' '}
          <span className="text-accent font-medium">{personalInfo.location}</span>,
          I specialize in building modern, responsive web applications and mobile
          experiences that blend clean code with thoughtful design.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative p-8 rounded-2xl bg-background-light border border-foreground/10 overflow-hidden group"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {/* Accent glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <span className="block text-5xl md:text-6xl font-bold text-accent mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-foreground/60 text-lg">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </RevealSection>
  );
}

