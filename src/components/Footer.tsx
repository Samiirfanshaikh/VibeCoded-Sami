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
          <span className="text-white text-base select-none">✳︎</span>
          <span className="text-white/40">|</span>
          <span className="text-xs font-mono uppercase tracking-wider text-white/50">
            India 🇮🇳
          </span>
        </div>

        <div className="text-xs text-center font-light text-white/50">
          Personal Developer Portfolio • Strengthening fundamentals daily
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
