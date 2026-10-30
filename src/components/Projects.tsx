import React from 'react'

interface Project {
  id: string
  title: string
  statusBadge: string
  description: string
  technologies: string[]
  image: string
  githubUrl: string
  liveUrl?: string
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'cinematic-portfolio',
      title: 'Cinematic Developer Portfolio',
      statusBadge: 'Current Project',
      description:
        'A full-screen cinematic hero and personal portfolio engineered with React, TypeScript, and Tailwind CSS. Features precision mouse-scrubbed video synchronization, custom typewriter animations, and seamless responsive navigation.',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'HTML5 Video API'],
      image: '/projects/hero-preview.jpg',
      githubUrl: 'https://github.com/Samiirfanshaikh',
      liveUrl: '#top',
    },
    {
      id: 'fullstack-task-api',
      title: 'MERN Application & Task Board',
      statusBadge: 'In Active Learning',
      description:
        'Hands-on full-stack learning project implementing RESTful API endpoints with Express.js, document modeling with MongoDB, and an interactive Kanban dashboard client built in React.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      image: '/projects/mern-dashboard.jpg',
      githubUrl: 'https://github.com/Samiirfanshaikh',
      // No live URL yet, in active learning
    },
    {
      id: 'interactive-ui-library',
      title: 'Interactive UI Components & Practice',
      statusBadge: 'Core Practice',
      description:
        'A showcase of responsive user interface components built to master pure CSS layouts, DOM events, semantic structure, accessibility patterns, and Figma-to-code design fidelity.',
      technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Figma'],
      image: '/projects/ui-challenge.jpg',
      githubUrl: 'https://github.com/Samiirfanshaikh',
      // No live URL yet
    },
  ]

  const handleLiveClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url?: string
  ) => {
    if (url === '#top') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="projects"
      className="relative z-10 w-full min-h-screen py-24 sm:py-32 px-5 sm:px-8 md:px-12 max-w-6xl mx-auto flex flex-col justify-center"
    >
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-3 text-white/60 text-sm tracking-widest uppercase font-mono mb-3">
          <span className="w-2 h-2 rounded-full bg-violet-400" />
          <span>03 / SELECTED WORKS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white font-heading">
          Personal Projects & Code
        </h2>
        <p className="mt-3 text-white/60 text-base sm:text-lg max-w-2xl font-light">
          A collection of projects built to explore fundamentals, test new frontend techniques, 
          and practice building full-stack workflows from the ground up.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden backdrop-blur-md group hover:border-white/25 transition-all duration-300"
          >
            {/* Image Preview Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-black/50 border-b border-white/10">
              <img
                src={project.image}
                alt={`${project.title} Preview`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white">
                  {project.statusBadge}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-xl font-medium text-white mb-2 font-heading">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-5 font-light">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-sm">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors group/link"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <span>GitHub</span>
                  <span className="text-xs transition-transform group-hover/link:translate-x-0.5">
                    →
                  </span>
                </a>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    onClick={(e) => handleLiveClick(e, project.liveUrl)}
                    className="inline-flex items-center gap-1.5 text-white font-medium hover:underline underline-offset-2"
                  >
                    <span>Live Preview</span>
                    <span className="text-xs">↗</span>
                  </a>
                ) : (
                  <span className="text-xs text-white/40 italic">
                    Repository in progress
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
