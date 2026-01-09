import { Experience } from '@/types';
import { HugeiconsIcon } from '@hugeicons/react';
import { Calendar01Icon, Location01Icon } from '@hugeicons-pro/core-stroke-standard';

interface ExperienceCardProps {
  experience: Experience;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { company, position, description, startDate, endDate, location, technologies } = experience;

  const formattedStart = formatDate(startDate);
  const formattedEnd = endDate ? formatDate(endDate) : 'Present';

  return (
    <article className="hover:bg-background-light transition-colors duration-300 rounded-3xl overflow-hidden p-4 group">
      <div className="flex flex-col md:flex-row md:gap-6">

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-foreground mb-2">{position}</h3>
          <p className="font-medium text-secondary mb-4 leading-relaxed">{company}</p>
          <p className="text-secondary leading-relaxed mb-4">{description}</p>

          <div className="flex flex-row items-center gap-2 flex-wrap">
            {/* Date with icon */}
            <div className="flex items-center gap-1.5">
              <HugeiconsIcon icon={Calendar01Icon} className="w-4 h-4 text-secondary" />
              <span className="text-sm text-secondary font-medium whitespace-nowrap">
                {formattedStart} - {formattedEnd}
              </span>
            </div>

            {/* Location with icon */}
            {location && (
              <div className="flex items-center gap-1.5">
                <HugeiconsIcon icon={Location01Icon} className="w-4 h-4 text-secondary" />
                <span className="text-sm text-secondary">{location}</span>
              </div>
            )}
          </div>



          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-background-light rounded-full text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

