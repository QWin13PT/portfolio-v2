import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, image, technologies, category, liveUrl, githubUrl } = project;

  return (
    <Link href={liveUrl || githubUrl || '/'}>
      <article className="hover:bg-background-light transition-colors duration-300 rounded-3xl overflow-hidden flex p-4 items-center">
        {/* Project Image */}
        {image && (
          <div className="relative h-36 aspect-square bg-white rounded-2xl overflow-hidden mr-4">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover "
            />
          </div>
        )}

        {/* Project Content */}
        <div >
          <div className="flex gap-2 items-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
            {/* Categories */}
            {category && category.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {category.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs px-3 py-1 font-semibold bg-background-light text-foreground rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}</div>
          <p className="font-medium text-secondary mb-4 leading-relaxed">{description}</p>

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-1 items-center">
              <span className=" text-sm text-secondary">Stack:</span>
              {technologies.map((tech, index) => (
                <span key={tech} className="text-sm text-secondary">
                  {tech}
                  {index < technologies.length - 1 && ','}
                </span>
              ))}
            </div>
          )}

        </div>
      </article>
    </Link>
  );
}

