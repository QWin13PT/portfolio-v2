import { experience } from '@/lib/constants';
import ExperienceCard from '@/components/cards/ExperienceCard';

export default function ExperienceSection() {
  // Sort experiences by start date (most recent first)
  const sortedExperience = [...experience].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  return (
    <section className="mb-12" id="experience">
      <h2 className="text-7xl font-bold text-foreground mb-6 uppercase">Work <br />Experience</h2>
      
      {/* Experience List */}
      <div className="flex flex-col gap-2">
        {sortedExperience.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
}

