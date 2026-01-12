'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { title, smallDescription, background, technologies, category, workInProgress } = project;

  return (
    <motion.article
      layoutId={`project-card-${project.id}`}
      onClick={onClick}
      className="cursor-pointer hover:bg-background-light transition-colors duration-300 rounded-3xl overflow-hidden flex p-4 items-center"
    >
      {/* Project Image */}
      {background && (
        <motion.div
          layoutId={`project-image-${project.id}`}
          className="relative h-36 aspect-square bg-white rounded-2xl overflow-hidden mr-4 shrink-0"
        >
          <Image
            src={background}
            alt={title}
            fill
            className="object-cover"
          />
        </motion.div>
      )}

      {/* Project Content */}
      <div className="min-w-0">
        <div className="flex gap-2 items-center flex-wrap">
          <motion.h3
            layoutId={`project-title-${project.id}`}
            className="text-2xl font-bold text-foreground mb-2"
          >
            {title}
          </motion.h3>
          {/* WIP Badge */}
          {workInProgress && (
            <span className="text-xs px-3 py-1 font-semibold bg-accent/20 text-accent rounded-full mb-2">
              WIP
            </span>
          )}
          {/* Categories */}
          {category && category.length > 0 && (
            <motion.div
              layoutId={`project-categories-${project.id}`}
              className="flex flex-wrap gap-2 mb-2"
            >
              {category.map((cat) => (
                <span
                  key={cat}
                  className="text-xs px-3 py-1 font-semibold bg-background-light text-foreground rounded-full"
                >
                  {cat}
                </span>
              ))}
            </motion.div>
          )}
        </div>
        <p className="font-medium text-secondary mb-4 leading-relaxed line-clamp-2">
          {smallDescription}
        </p>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 items-center">
            <span className="text-sm text-secondary uppercase font-semibold">Stack:</span>
            {technologies.map((tech, index) => (
              <span key={tech} className="text-sm text-secondary">
                {tech}
                {index < technologies.length - 1 && ','}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
