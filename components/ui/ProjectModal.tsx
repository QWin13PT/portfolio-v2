'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '@/types';
import Button from '@/components/ui/Button';
import { HugeiconsIcon } from '@hugeicons/react';
import { Cancel01Icon, LinkSquare02Icon } from '@hugeicons-pro/core-stroke-standard';
import { Github01Icon, QuoteUpIcon, Award04Icon } from '@hugeicons-pro/core-solid-standard';

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
              <Button
                onClick={onClose}
                variant="outline"
                className="absolute top-4 right-4 !p-0 z-10 w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:bg-background-light transition-colors"
                aria-label="Close modal"
                icon={
                  <HugeiconsIcon icon={Cancel01Icon} className="w-5 h-5" color="white" />
                }
              />

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

                      {/* Categories, WIP Badge & Release Date */}
                      <div className="flex flex-wrap items-center gap-2">
                        {project.workInProgress && (
                          <span className="text-xs px-3 py-1 font-semibold bg-accent/20 text-accent rounded-full">
                            Work in Progress
                          </span>
                        )}
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
                        {project.releaseDate && (
                          <span className="text-sm text-secondary">
                            •{' '}
                            {new Date(project.releaseDate).toLocaleDateString('en-US', {
                              month: 'long',
                              year: 'numeric',
                            })}
                          </span>
                        )}
                      </div>
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
                          <HugeiconsIcon icon={LinkSquare02Icon} className="w-5 h-5" />
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
                          <HugeiconsIcon icon={Github01Icon} className="w-5 h-5" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Awards */}
                  {project.awards && project.awards.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08, duration: 0.3 }}
                      className="mb-6"
                    >
                      {project.awards.map((award, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 px-4 py-3 bg-accent rounded-xl"
                        >
                          <HugeiconsIcon
                            icon={Award04Icon}
                            className="w-6 h-6 text-black shrink-0"
                          />
                          <span className="text-sm font-medium text-black">
                            {award}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: project.awards?.length ? 0.12 : 0.1, duration: 0.3 }}
                    className="text-lg text-secondary leading-relaxed mb-8"
                  >
                    {project.description.split('\n\n').map((paragraph, index) => (
                      <p key={index} className={index > 0 ? 'mt-4' : ''}>
                        {paragraph}
                      </p>
                    ))}
                  </motion.div>

                  {/* Story */}
                  {project.story && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.12, duration: 0.3 }}
                      className="mb-8 p-6 bg-background-light rounded-2xl relative"
                    >
                      <HugeiconsIcon
                        icon={QuoteUpIcon}
                        className="w-10 h-10 text-foreground/20 absolute top-4 left-4"
                      />
                      <div className="pl-12">
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                          My Story
                        </h3>
                        <div className="text-base text-secondary leading-relaxed">
                          {project.story.split('\n\n').map((paragraph, index) => (
                            <p key={index} className={index > 0 ? 'mt-4' : ''}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: project.story ? 0.17 : 0.15, duration: 0.3 }}
                      className="mb-8"
                    >
                      <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                        Stack Used
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
                      transition={{ delay: project.story ? 0.22 : 0.2, duration: 0.3 }}
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
                            transition={{ delay: (project.story ? 0.27 : 0.25) + index * 0.05, duration: 0.3 }}
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

