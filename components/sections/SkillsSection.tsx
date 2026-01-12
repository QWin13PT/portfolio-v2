'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { tools } from '@/lib/constants';
import SkillCard from '@/components/cards/SkillCard';
import Accordion from '@/components/ui/Accordion';
import RevealSection from '@/components/animations/RevealSection';

export default function SkillsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <RevealSection>
      <section className="mb-12" id="skills">
        <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 uppercase">Technical <br />Skills</h2>
        
        {/* Skills by Category in Accordions */}
        <div className="flex flex-col gap-4">
          {tools.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <Accordion
                title={category.name}
                isOpen={openIndex === categoryIndex}
                onToggle={() => handleToggle(categoryIndex)}
              >
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard key={`${skill}-${skillIndex}`} name={skill} />
                  ))}
                </div>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>
    </RevealSection>
  );
}
