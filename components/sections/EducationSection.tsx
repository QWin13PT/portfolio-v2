'use client';

import { motion } from 'motion/react';
import { education } from '@/lib/constants';
import EducationCard from '@/components/cards/EducationCard';
import RevealSection from '@/components/animations/RevealSection';

export default function EducationSection() {
  // Sort education by start date (most recent first)
  const sortedEducation = [...education].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  return (
    <RevealSection>
      <section className="mb-12" id="education">
        <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 uppercase">Academic <br />Background</h2>
        
        {/* Education List */}
        <div className="flex flex-col gap-2">
          {sortedEducation.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <EducationCard education={edu} />
            </motion.div>
          ))}
        </div>
      </section>
    </RevealSection>
  );
}
