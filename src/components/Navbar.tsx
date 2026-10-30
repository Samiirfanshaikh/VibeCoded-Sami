import React, { useEffect, useState } from 'react'

interface NavLink {
  name: string
  href: string
  sectionId: string
  number: string
}

const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#top', sectionId: 'home', number: '01' },
  { name: 'About', href: '#about', sectionId: 'about', number: '02' },
  { name: 'Skills', href: '#skills', sectionId: 'skills', number: '03' },
  { name: 'Projects', href: '#projects', sectionId: 'projects', number: '04' },
  { name: 'Contact', href: '#contact', sectionId: 'contact', number: '05' },
]

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Subtle entrance animation on initial mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, 80)
    return () => clearTimeout(timer)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Scroll spy to detect active section & scroll state
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 25)

      // Check if at the bottom of the page -> activate Contact
      const scrollHeight = document.documentElement.scrollHeight
      const innerHeight = window.innerHeight
      if (innerHeight + scrollY >= scrollHeight - 70) {
        setActiveSection('contact')
        return
      }

      // Check if near top -> activate Home
      if (scrollY < 200) {
        setActiveSection('home')
        return
      }

      // Check sections from bottom to top
      const offsetTrigger = 220
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const item = NAV_LINKS[i]
        const selector = item.sectionId === 'home' ? '#top' : item.href
        const el = document.querySelector(selector) as HTMLElement | null
        if (el) {
          const top = el.offsetTop
          if (scrollY + offsetTrigger >= top) {
            setActiveSection(item.sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check on load

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll handler
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    sectionId: string
  ) => {
    e.preventDefault()
    setActiveSection(sectionId)
    setIsOpen(false)

    if (href === '#' || href === '#top' || href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      if (window.location.hash) {
        window.history.pushState(null, '', window.location.pathname)
      }
      return
    }

    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', href)
    }
  }

  return (
    <>
      {/* Fixed Navbar Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mounted ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
        } ${
          isScrolled
            ? 'bg-black/40 backdrop-blur-md border-b border-white/[0.06] py-3.5 sm:py-4 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-transparent backdrop-blur-[2px] py-5 sm:py-6'
        }`}
      >
        <div className="w-full px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Brand Name on the Left */}
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, '#top', 'home')}
            className="group flex items-center gap-2.5 text-white transition-opacity duration-300 hover:opacity-85 focus:outline-none select-none"
            aria-label="Sami Shaikh - Back to top"
          >
            
          </a>

          {/* Desktop Navigation Links Aligned to the Right */}
          <nav
            className="hidden md:flex items-center gap-7 lg:gap-9"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.sectionId
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.sectionId)}
                  className={`group relative py-1 text-[15px] lg:text-[16px] tracking-wide transition-all duration-300 focus:outline-none ${
                    isActive
                      ? 'text-white font-medium'
                      : 'text-white/60 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="relative z-10 transition-colors duration-300">
                    {link.name}
                  </span>

                  {/* Animated underline: expands left-to-right on hover; persistent subtle underline when active */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1.5px] bg-white transition-all duration-300 ease-out origin-left pointer-events-none ${
                      isActive
                        ? 'w-full scale-x-100 opacity-90'
                        : 'w-full scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-85'
                    }`}
                  />
                </a>
              )
            })}
          </nav>

          {/* Mobile Animated Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative z-50 flex md:hidden flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none cursor-pointer group"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            <span
              className={`w-6 h-[1.5px] bg-white transition-all duration-300 ease-out origin-center ${
                isOpen ? 'rotate-45 translate-y-[7.5px]' : ''
              }`}
            />
            <span
              className={`w-6 h-[1.5px] bg-white transition-all duration-300 ease-out ${
                isOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
              }`}
            />
            <span
              className={`w-6 h-[1.5px] bg-white transition-all duration-300 ease-out origin-center ${
                isOpen ? '-rotate-45 -translate-y-[7.5px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl md:hidden flex flex-col justify-between px-7 sm:px-10 pt-28 pb-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen
            ? 'opacity-100 pointer-events-auto visible translate-y-0'
            : 'opacity-0 pointer-events-none invisible -translate-y-4'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Navigation Links List */}
        <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
          {NAV_LINKS.map((link, idx) => {
            const isActive = activeSection === link.sectionId
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.sectionId)}
                className={`group flex items-baseline gap-4 py-2 transition-all duration-300 ${
                  isOpen
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-4'
                }`}
                style={{
                  transitionDelay: isOpen ? `${120 + idx * 50}ms` : '0ms',
                }}
              >
                <span className="text-xs font-mono text-white/40 tracking-wider">
                  {link.number}
                </span>
                <span
                  className={`text-3xl sm:text-4xl tracking-tight transition-colors duration-300 font-heading relative ${
                    isActive
                      ? 'text-white font-medium'
                      : 'text-white/60 group-hover:text-white'
                  }`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {link.name}
                  {/* Subtle underline for mobile active link */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-white/80" />
                  )}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1 animate-pulse" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Mobile Overlay Footer / Cinematic Status */}
        <div
          className={`border-t border-white/10 pt-6 flex flex-col gap-3 text-xs text-white/50 font-light transition-all duration-500 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: isOpen ? '420ms' : '0ms' }}
        >
          <div className="flex items-center gap-2 text-white/80">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono uppercase tracking-wider text-[11px]">
              Available for opportunities
            </span>
          </div>
          <div className="flex justify-between items-center text-white/40 font-mono text-[11px]">
            <span>samiirfanshaikh07@gmail.com</span>
            <span>India 🇮🇳</span>
          </div>
        </div>
      </div>
    </>
  )
}
