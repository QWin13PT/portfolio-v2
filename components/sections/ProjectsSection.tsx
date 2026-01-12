'use client';

import { useState } from 'react';
import { motion, LayoutGroup } from 'motion/react';
import { projects } from '@/lib/constants';
import { Project } from '@/types';
import ProjectCard from '@/components/cards/ProjectCard';
import ProjectModal from '@/components/ui/ProjectModal';
import RevealSection from '@/components/animations/RevealSection';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const displayProjects = featuredProjects.length > 0 ? featuredProjects : projects;

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <LayoutGroup>
      <RevealSection>
        <section className="mb-12" id="projects">
          <h2 className="text-7xl font-bold text-foreground mb-6 uppercase">
            Featured <br />
            Work
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-6">
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </RevealSection>

      {/* Modal */}
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </LayoutGroup>
  );
}
