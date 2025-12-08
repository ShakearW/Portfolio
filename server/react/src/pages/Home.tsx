// Home.tsx

import "../styles/hero.css"
import "../styles/navbar.css"
import "../styles/sections.css"

import Background from "../components/Background/Background"
import NavBar from "../components/NavBar/NavBar"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Experience from "../components/Experience/Experience"
import Skills from "../components/Skills/Skills"
import Contact from "../components/Contact/Contact"


// NEW: Hook to trigger fade/slide animation on scroll
import useSectionAnimation from "../hooks/useSectionAnimation"

export default function Home() {
  // Activate animation hook
  useSectionAnimation()

  return (
    <>
      <Background />
      <div className="page-root">
        {/* Top-right nav */}
        <NavBar />

        {/* Page content */}
        <main>
          {/* Each section gets the .section class for animation */}
          <div id="hero" className="section">
            <Hero />
          </div>

          <div id="about" className="section">
            <About />
          </div>

          <div id="experience" className="section">
            <Experience />
          </div>

          <div id="skills" className="section">
            <Skills />
          </div>

          <div id="contact" className="section">
            <Contact />
          </div>
        </main>
      </div>
    </>
  )
}
