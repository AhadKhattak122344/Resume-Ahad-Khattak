import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Awards from '@/components/awards'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Awards />
      <Contact />
    </div>
  )
}

