import { useMemo } from 'react'
import LiquidEther from './components/LiquidEther'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

function App() {
  const etherColors = useMemo(() => ['#5227FF', '#FF9FFC', '#B19EEF'], [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050212] text-white">
      <Navbar />
      <main className="relative min-h-screen">
        <div className="absolute inset-0">
          <LiquidEther
            colors={etherColors}
            mouseForce={20}
            cursorSize={120}
            resolution={0.55}
            autoDemo
            autoSpeed={0.4}
            autoIntensity={2.4}
            autoResumeDelay={2800}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050214]/35 via-[#050214]/70 to-[#050212]" aria-hidden="true" />
        <HeroSection />
      </main>
    </div>
  )
}

export default App
