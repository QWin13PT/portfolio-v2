'use client';

import { motion } from 'motion/react';
import { experience } from '@/lib/constants';
import ExperienceCard from '@/components/cards/ExperienceCard';
import RevealSection from '@/components/ui/RevealSection';

export default function ExperienceSection() {
  // Sort experiences by start date (most recent first)
  const sortedExperience = [...experience].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  return (
    <RevealSection>
      <section className="mb-12" id="experience">
        <h2 className="text-7xl font-bold text-foreground mb-6 uppercase">Work <br />Experience</h2>
        
        {/* Experience List */}
        <div className="flex flex-col gap-2">
          {sortedExperience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <ExperienceCard experience={exp} />
            </motion.div>
          ))}
        </div>
      </section>
    </RevealSection>
  );
}
