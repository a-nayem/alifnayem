import { createFileRoute } from '@tanstack/react-router'

import { useScrollEngineInit } from '@/lib/use-scroll-engine'
import { Background } from '@/components/Background'
import { CustomCursor } from '@/components/CustomCursor'
import { ScrollProgressBar } from '@/components/ScrollProgressBar'
import { Nav } from '@/components/Nav'
import { SpiralRail } from '@/components/hud/SpiralRail'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  useScrollEngineInit()

  return (
    <>
      <CustomCursor />
      <Background />
      <ScrollProgressBar />
      <Nav />
      <SpiralRail />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
