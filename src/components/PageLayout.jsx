import LiquidEther from './LiquidEther'
import Navbar from './Navbar'

export default function PageLayout({ children, etherColors }) {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#050505] text-white">
      {/* Navbar sits on top layer */}
      <Navbar />

      {/* Independent Scroll Container */}
      <main className="absolute inset-0 z-0 overflow-y-auto overflow-x-hidden custom-scrollbar">
        {/* Background Layer (Fixed relative to scroller or absolute? 
            If we want background to be static, it should be outside main or fixed inside. 
            Original was absolute inset-0 in main. Let's keep it fixed behind content.) 
        */}
        
        {/* Actually, for parallax/static background, it's better to put it *outside* the scroller if we want it to stay still, 
            OR fixed position inside. The previous code had LiquidEther in absolute inset-0 of main. 
            Let's put Background *behind* the scroller interaction layer, but we need click-through? 
            No, scroller needs to capture clicks. 
            
            Let's structure:
            1. Fixed Background (z-0)
            2. Scroller (z-10, transparent bg)
            3. Navbar (z-50)
        */}
      </main>

      {/* Correct Structure Implementation */}
      {/* 1. Background Layer (Static) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
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
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/80 to-[#050505]"
            aria-hidden="true"
          />
      </div>

      {/* 2. Scrollable Content Layer */}
      <div className="absolute inset-0 z-10 overflow-y-auto overflow-x-hidden" id="scroll-container">
         {/* Content Wrapper */}
         <div className="relative min-h-full w-full pointer-events-auto">
            {children}
         </div>
      </div>

    </div>
  )
}
