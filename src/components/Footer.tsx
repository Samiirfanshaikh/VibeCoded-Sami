import React from 'react'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative z-10 w-full py-12 px-5 sm:px-8 md:px-12 border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-white/60">
        <div className="flex items-center gap-3">
          <span
            className="text-white text-base tracking-wide font-rock-salt"
            style={{ fontFamily: 'var(--font-rock-salt)' }}
          >
            Sami Shaikh
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider text-white/50">
          <a
            href="https://github.com/Samiirfanshaikh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span className="text-white/30">•</span>
          <a
            href="https://www.linkedin.com/in/sami-shaikh-784a89284/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-white/30">•</span>
          <a
            href="https://www.instagram.com/samiirfanshaikh7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
        </div>

        <div>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
