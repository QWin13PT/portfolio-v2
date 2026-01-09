import { projects } from '@/lib/constants';
import ProjectCard from '@/components/cards/ProjectCard';

export default function ProjectsSection() {
  // Filter featured projects or show all if none are featured
  const featuredProjects = projects.filter((p) => p.featured);
  const displayProjects = featuredProjects.length > 0 ? featuredProjects : projects;


  return (
    <section className="mb-12" id="projects">
      <h2 className="text-7xl font-bold text-foreground mb-6 uppercase">Featured <br />Work</h2>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6">
        {displayProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

