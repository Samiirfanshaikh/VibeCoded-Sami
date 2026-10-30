import React, { useEffect, useState } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'

export const Hero: React.FC = () => {
  const [pillsVisible, setPillsVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  const typewriterText =
    'Building my way from frontend fundamentals to full-stack applications. Currently learning, experimenting, and turning ideas into real projects.'

  const { displayed, done } = useTypewriter(typewriterText, {
    speed: 38,
    startDelay: 600,
  })

  // Action pills become visible 400ms after page load, independently of typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setPillsVisible(true)
    }, 400)
    return () => clearTimeout(timer)
  }, [])

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCopyEmail = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    navigator.clipboard.writeText('samiirfanshaikh07@gmail.com')
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <section
      id="top"
      className="relative z-[1] w-full h-screen flex flex-col justify-end pb-12 md:justify-center md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden"
    >
      <div className="max-w-xl relative z-10 text-left">
        {/* Hero Intro & Name Heading */}
        <div className="mb-4 sm:mb-5">
          <p className="text-white/70 text-xs sm:text-sm font-mono uppercase tracking-widest mb-1.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Hey, I'm</span>
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-relaxed my-1 tracking-wide font-rock-salt"
            style={{ fontFamily: 'var(--font-rock-salt)' }}
          >
            Sami Shaikh
          </h1>
          <p className="text-white/80 text-base sm:text-lg md:text-xl font-light tracking-wide">
            Aspiring Full Stack Developer
          </p>
        </div>

        {/* 2. Typewriter Introduction */}
        <p
          className="text-white mb-5 sm:mb-6 text-left"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.35,
            fontWeight: 400,
            minHeight: '54px',
          }}
        >
          {displayed}
          {!done && (
            <span
              className="inline-block w-[2px] h-[1.1em] bg-white align-middle ml-[2px] animate-blink"
              aria-hidden="true"
            />
          )}
        </p>

        {/* 3. Action Pill Buttons */}
        <div
          className={`flex flex-wrap gap-y-1 transition-all duration-400 ease-out ${
            pillsVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          {/* 4 White pill buttons */}
          <button
            type="button"
            onClick={() => handleScrollTo('#about')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
          >
            About me
          </button>

          <button
            type="button"
            onClick={() => handleScrollTo('#projects')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Explore projects
          </button>

          <button
            type="button"
            onClick={() => handleScrollTo('#skills')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
          >
            My tech stack
          </button>

          <button
            type="button"
            onClick={() => handleScrollTo('#contact')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Get in touch
          </button>

          {/* 1 Outline pill button */}
          <div
            onClick={() => handleCopyEmail()}
            className="inline-flex items-center justify-center text-white bg-transparent border border-white rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap gap-2 sm:gap-3 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer select-none group relative"
            title="Click to copy email address"
          >
            <span>
              Email:{' '}
              <a
                href="mailto:samiirfanshaikh07@gmail.com"
                onClick={(e) => {
                  e.stopPropagation()
                }}
                className="underline underline-offset-1 hover:opacity-80 transition-opacity"
              >
                samiirfanshaikh07@gmail.com
              </a>
            </span>

            {/* Small 12x12 copy icon (inline SVG of two overlapping rectangles) */}
            <span
              onClick={(e) => {
                e.stopPropagation()
                handleCopyEmail()
              }}
              className="inline-flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Copy email address"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 flex-shrink-0"
              >
                <rect
                  x="3.5"
                  y="3.5"
                  width="7"
                  height="7"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.1"
                />
                <path
                  d="M8.5 2V1.5C8.5 0.947715 8.05228 0.5 7.5 0.5H1.5C0.947715 0.5 0.5 0.947715 0.5 1.5V7.5C0.5 8.05228 0.947715 8.5 1.5 8.5H2"
                  stroke="currentColor"
                  strokeWidth="1.1"
                />
              </svg>
            </span>

            {/* Copied notification tooltip */}
            {copied && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white text-black text-[11px] font-medium px-2 py-0.5 rounded shadow-lg animate-fadeIn pointer-events-none">
                Copied!
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
