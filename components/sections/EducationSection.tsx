import { education } from '@/lib/constants';
import EducationCard from '@/components/cards/EducationCard';

export default function EducationSection() {
  // Sort education by start date (most recent first)
  const sortedEducation = [...education].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  return (
    <section className="mb-12" id="education">
      <h2 className="text-7xl font-bold text-foreground mb-6 uppercase">Academic <br />Background</h2>
      
      {/* Education List */}
      <div className="flex flex-col gap-2">
        {sortedEducation.map((edu) => (
          <EducationCard key={edu.id} education={edu} />
        ))}
      </div>
    </section>
  );
}

