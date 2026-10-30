import React from 'react'
import { BackgroundVideo } from './components/BackgroundVideo'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      {/* Background Video with Mouse & Touch Scrubbing Control */}
      <BackgroundVideo />

      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-[1] flex flex-col">
        {/* Full-Screen Cinematic Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Minimal Cinematic Footer */}
      <Footer />
    </div>
  )
}

export default App
