import LiquidEther from './LiquidEther'
import Navbar from './Navbar'

export default function PageLayout({ children, etherColors }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
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
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/80 to-[#050505]"
          aria-hidden="true"
        />
  <div className="relative z-10 pointer-events-none">{children}</div>
      </main>
    </div>
  )
}
