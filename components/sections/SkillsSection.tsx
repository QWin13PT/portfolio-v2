'use client';

import { useState } from 'react';
import { tools } from '@/lib/constants';
import SkillCard from '@/components/cards/SkillCard';
import Accordion from '@/components/ui/Accordion';

export default function SkillsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-12" id="skills">
      <h2 className="text-7xl font-bold text-foreground mb-6 uppercase">Technical <br />Skills</h2>
      
      {/* Skills by Category in Accordions */}
      <div className="flex flex-col gap-4">
        {tools.categories.map((category, categoryIndex) => (
          <Accordion
            key={category.name}
            title={category.name}
            isOpen={openIndex === categoryIndex}
            onToggle={() => handleToggle(categoryIndex)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <SkillCard key={`${skill}-${skillIndex}`} name={skill} />
              ))}
            </div>
          </Accordion>
        ))}
      </div>
    </section>
  );
}

