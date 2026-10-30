import React from 'react'

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative z-10 w-full min-h-screen py-24 sm:py-32 px-5 sm:px-8 md:px-12 max-w-6xl mx-auto flex flex-col justify-center"
    >
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-3 text-white/60 text-sm tracking-widest uppercase font-mono mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>01 / ABOUT ME</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white font-heading">
          Learning by building, step by step.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Main Narrative Column */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-white/80 text-lg sm:text-xl leading-relaxed font-light">
          <p>
            I am <strong className="text-white font-medium">Sami Shaikh</strong>, 
            a student and aspiring full-stack developer based in India. My journey in technology 
            began with an innate curiosity about how digital interfaces work under the hood, 
            which quickly evolved into a focused dedication to web development.
          </p>

          <p>
            Rather than jumping through shortcuts, my approach centers on cementing strong 
            fundamentals first. Having developed confidence in HTML5, CSS3, modern JavaScript, 
            and utility-first styling with Tailwind CSS, I am currently expanding into modern 
            component-driven architectures with React, as well as backend services with Node.js, 
            Express, and MongoDB.
          </p>

          <p>
            I enjoy breaking down complex problems into modular, maintainable pieces. Every project 
            I tackle is an opportunity to experiment, learn from debugging, and bridge the gap 
            between frontend aesthetics and robust application logic.
          </p>

          <p className="text-white/90">
            My immediate goal is to continue refining my craft, build thoughtful end-to-end applications, 
            and contribute meaningfully to real-world development teams and collaborative open-source projects.
          </p>
        </div>

        {/* Identity & Status Sidebar */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md relative overflow-hidden group hover:border-white/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.03] rounded-full blur-2xl pointer-events-none" />

            <h3 className="text-xs uppercase tracking-widest text-white/50 font-mono mb-6">
              PROFILE SNAPSHOT
            </h3>

            <dl className="flex flex-col gap-4 text-sm sm:text-base">
              <div className="flex justify-between items-baseline border-b border-white/5 pb-3">
                <dt className="text-white/50">Current Status</dt>
                <dd className="text-right text-white font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Aspiring Full Stack Dev
                </dd>
              </div>

              <div className="flex justify-between items-baseline border-b border-white/5 pb-3">
                <dt className="text-white/50">Profession</dt>
                <dd className="text-right text-white">Student & Web Developer</dd>
              </div>

              <div className="flex justify-between items-baseline border-b border-white/5 pb-3">
                <dt className="text-white/50">Location</dt>
                <dd className="text-right text-white">India 🇮🇳</dd>
              </div>

              <div className="flex justify-between items-baseline border-b border-white/5 pb-3">
                <dt className="text-white/50">Career Target</dt>
                <dd className="text-right text-white">Full Stack Engineering</dd>
              </div>

              <div className="flex justify-between items-baseline pt-1">
                <dt className="text-white/50">Primary Approach</dt>
                <dd className="text-right text-white">Fundamentals First</dd>
              </div>
            </dl>
          </div>

          {/* Core Mindset Card */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-white/70 text-sm leading-relaxed">
            <div className="flex items-center gap-2 text-white text-base font-medium mb-2 font-heading">
              <span>✳︎</span> Continuous Progression
            </div>
            Actively building daily, practicing data structures and algorithms fundamentals, reading documentation, and pushing incremental improvements to GitHub.
          </div>
        </div>
      </div>
    </section>
  )
}
