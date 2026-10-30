import React from 'react'

interface SkillItem {
  name: string
  status: 'fundamental' | 'learning'
  note?: string
}

interface SkillCategory {
  title: string
  description: string
  skills: SkillItem[]
}

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      description: 'Building accessible, responsive, and interactive user interfaces.',
      skills: [
        { name: 'HTML5', status: 'fundamental', note: 'Semantic markup & SEO' },
        { name: 'CSS3', status: 'fundamental', note: 'Modern layouts & flex/grid' },
        { name: 'JavaScript (ES6+)', status: 'fundamental', note: 'DOM manipulation & async logic' },
        { name: 'Tailwind CSS', status: 'fundamental', note: 'Utility-first rapid styling' },
        { name: 'React', status: 'learning', note: 'Components, hooks & state management' },
      ],
    },
    {
      title: 'Backend Development',
      description: 'Developing server-side APIs, routing, and middleware architectures.',
      skills: [
        { name: 'Node.js', status: 'learning', note: 'Event-driven runtime & NPM' },
        { name: 'Express.js', status: 'learning', note: 'REST APIs & route handlers' },
      ],
    },
    {
      title: 'Database & Storage',
      description: 'Modeling document data and persistent schema storage.',
      skills: [
        { name: 'MongoDB', status: 'learning', note: 'Collections, queries & CRUD operations' },
      ],
    },
    {
      title: 'Workflow & Tools',
      description: 'Daily development environment and version control utilities.',
      skills: [
        { name: 'Git', status: 'fundamental', note: 'Branching, committing & workflows' },
        { name: 'GitHub', status: 'fundamental', note: 'Repositories, versioning & collaboration' },
        { name: 'VS Code', status: 'fundamental', note: 'Custom environment & debugging' },
        { name: 'Figma', status: 'fundamental', note: 'UI inspection & wireframe prototyping' },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="relative z-10 w-full min-h-screen py-24 sm:py-32 px-5 sm:px-8 md:px-12 max-w-6xl mx-auto flex flex-col justify-center"
    >
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-3 text-white/60 text-sm tracking-widest uppercase font-mono mb-3">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>02 / TECH STACK & CAPABILITIES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white font-heading">
          Skills & Technologies
        </h2>
        <p className="mt-3 text-white/60 text-base sm:text-lg max-w-2xl font-light">
          A transparent overview of the technologies I use daily to build projects, 
          clearly distinguishing active learning topics from core fundamentals.
        </p>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/90">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Established Fundamental</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Actively Learning / In Progress</span>
          </div>
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-white/20 transition-all duration-300 group"
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl sm:text-2xl font-medium text-white font-heading">
                  {cat.title}
                </h3>
                <span className="text-xs font-mono text-white/40">
                  {cat.skills.length} {cat.skills.length === 1 ? 'tech' : 'techs'}
                </span>
              </div>
              <p className="text-white/60 text-sm mb-6 font-light">
                {cat.description}
              </p>

              <div className="flex flex-col gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5 hover:border-white/15 transition-colors gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-white font-medium text-base">
                        {skill.name}
                      </span>
                      {skill.note && (
                        <span className="text-white/40 text-xs hidden sm:inline">
                          — {skill.note}
                        </span>
                      )}
                    </div>

                    <div>
                      {skill.status === 'learning' ? (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                          Learning
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-400/15 text-emerald-300 border border-emerald-400/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Fundamental
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
