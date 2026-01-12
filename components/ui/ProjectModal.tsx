'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.article
              layoutId={`project-card-${project.id}`}
              className="relative w-full max-w-4xl max-h-[90vh] bg-background rounded-3xl overflow-hidden pointer-events-auto"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:bg-background-light transition-colors"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[90vh]">
                {/* Hero Background Image */}
                {project.background && (
                  <motion.div
                    layoutId={`project-image-${project.id}`}
                    className="relative w-full aspect-video"
                  >
                    <Image
                      src={project.background}
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  </motion.div>
                )}

                {/* Content */}
                <div className="p-8 -mt-16 relative">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <motion.h2
                        layoutId={`project-title-${project.id}`}
                        className="text-4xl font-bold text-foreground mb-2"
                      >
                        {project.title}
                      </motion.h2>

                      {/* Categories */}
                      {project.category && project.category.length > 0 && (
                        <motion.div
                          layoutId={`project-categories-${project.id}`}
                          className="flex flex-wrap gap-2"
                        >
                          {project.category.map((cat) => (
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

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-opacity"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          Visit Site
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-background-light text-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="text-lg text-secondary leading-relaxed mb-8"
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.3 }}
                      className="mb-8"
                    >
                      <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-background-light text-foreground rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Project Images Gallery */}
                  {project.images && project.images.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                        Project Gallery
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {project.images.map((image, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.25 + index * 0.05, duration: 0.3 }}
                            className="relative aspect-video rounded-xl overflow-hidden bg-background-light"
                          >
                            <Image
                              src={image}
                              alt={`${project.title} screenshot ${index + 1}`}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.article>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

