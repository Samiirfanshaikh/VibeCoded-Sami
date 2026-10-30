import React, { useState } from 'react'

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('samiirfanshaikh07@gmail.com')
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <section
      id="contact"
      className="relative z-10 w-full min-h-screen py-24 sm:py-32 px-5 sm:px-8 md:px-12 max-w-6xl mx-auto flex flex-col justify-center"
    >
      {/* Section Header */}
      <div className="mb-10 sm:mb-14">
        <div className="flex items-center gap-3 text-white/60 text-sm tracking-widest uppercase font-mono mb-3">
          <span className="w-2 h-2 rounded-full bg-pink-400" />
          <span>04 / CONNECT</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white font-heading">
          Let's connect.
        </h2>
        <p className="mt-4 text-white/70 text-lg sm:text-xl max-w-xl font-light leading-relaxed">
          I am always open to discussing web development, collaborating on open-source projects, 
          learning opportunities, or exploring entry-level roles.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Email Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-white/25 transition-all duration-300 group">
          <div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h3 className="text-sm font-mono uppercase text-white/50 tracking-wider mb-1">
              Email Directly
            </h3>
            <p className="text-white text-base sm:text-lg font-medium break-all">
              samiirfanshaikh07@gmail.com
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-sm">
            <a
              href="mailto:samiirfanshaikh07@gmail.com"
              className="text-white font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              Open Mail ↗
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="text-white/60 hover:text-white transition-colors cursor-pointer text-xs font-mono"
            >
              {copied ? '✓ Copied' : 'Copy'}
            </button>
          </div>
        </div>

        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/sami-shaikh-784a89284/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-white/25 transition-all duration-300 group"
        >
          <div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <h3 className="text-sm font-mono uppercase text-white/50 tracking-wider mb-1">
              Professional Network
            </h3>
            <p className="text-white text-base sm:text-lg font-medium">
              LinkedIn Profile
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-sm text-white/80 group-hover:text-white">
            <span>Connect on LinkedIn</span>
            <span className="text-base group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </a>

        {/* GitHub Card */}
        <a
          href="https://github.com/Samiirfanshaikh"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-white/25 transition-all duration-300 group"
        >
          <div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </div>
            <h3 className="text-sm font-mono uppercase text-white/50 tracking-wider mb-1">
              Source Code
            </h3>
            <p className="text-white text-base sm:text-lg font-medium">
              GitHub Repositories
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-sm text-white/80 group-hover:text-white">
            <span>Explore Repositories</span>
            <span className="text-base group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </a>

        {/* Instagram Card */}
        <a
          href="https://www.instagram.com/samiirfanshaikh7/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-white/25 transition-all duration-300 group"
        >
          <div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
            <h3 className="text-sm font-mono uppercase text-white/50 tracking-wider mb-1">
              Social Network
            </h3>
            <p className="text-white text-base sm:text-lg font-medium">
              Instagram Profile
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-sm text-white/80 group-hover:text-white">
            <span>Follow on Instagram</span>
            <span className="text-base group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}
