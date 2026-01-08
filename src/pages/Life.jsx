
import { useNavigate } from 'react-router-dom'
import BentoCard from '../components/BentoCard'
import GradientText from '../components/GradientText'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaQuoteLeft, FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react'

import mapBg from '../assets/life_map_shanghai.png'
import hikingBg from '../assets/life_hiking.png'
import waterPoloBg from '../assets/life_water_polo.png'

// --- Sub-Components ---

// --- Sub-Components ---

const LifeDashboard = () => {
    return (
        <BentoCard 
            className="col-span-1 md:col-span-2 row-span-2 md:col-start-1 md:row-start-1 bg-neutral-900/80 p-8 flex flex-col justify-between"
            delay={0.1}
        >
            <div className="flex items-center justify-between">
                <span className="text-white/40 font-mono text-sm tracking-widest uppercase">Dashboard 2026</span>
                <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500/50" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <span className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
            </div>
            
            <div className="space-y-6">
                <div>
                   <h3 className="text-white/30 text-xs mb-2 uppercase font-bold tracking-wider">Keywords</h3>
                   <div className="flex flex-wrap gap-2">
                      {['BUILD', 'EXPLORE', 'CONNECT'].map(word => (
                          <span key={word} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm font-light">
                             {word}
                          </span>
                      ))}
                   </div>
                </div>
                <div>
                    <h3 className="text-white/30 text-xs mb-2 uppercase font-bold tracking-wider">Focus</h3>
                    <p className="text-2xl text-white font-serif italic">"Crafting digital experiences."</p>
                </div>
            </div>
        </BentoCard>
    )
}

const PhotoFrame = ({ onClick }) => {
    return (
        <BentoCard 
            className="col-span-1 row-span-1 md:col-start-1 md:row-start-3 group relative cursor-pointer overflow-hidden p-0"
            onClick={onClick}
            delay={0.2}
        >
             <img 
               src={waterPoloBg} 
               alt="Gallery Preview"
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
             <div className="absolute bottom-3 left-3">
                 <div className="bg-white/10 backdrop-blur-md border border-white/10 p-2 rounded-lg">
                    <FaExternalLinkAlt className="text-white text-xs" />
                 </div>
             </div>
        </BentoCard>
    )
}

const HikingCard = ({ onClick }) => {
  return (
    <BentoCard 
      className="col-span-1 md:col-span-2 row-span-1 md:col-start-2 md:row-start-3 group relative cursor-pointer overflow-hidden p-0 bg-[#0f172a]"
      onClick={onClick}
      delay={0.3}
    >
      {/* Map Background (Styled) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen transition-all duration-700 group-hover:opacity-60 group-hover:scale-105"
        style={{ backgroundImage: `url(${mapBg})`, filter: 'grayscale(100%) contrast(1.2)' }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/40 to-transparent" />

      <div className="absolute inset-0 flex items-center px-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
                <FaMapMarkerAlt className="text-orange-500" />
                <span className="text-orange-400 font-mono text-xs uppercase tracking-widest">Ongoing</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Wilderness Trek</h3>
            <p className="text-white/50 text-sm mt-1">Tracing the ridgelines.</p>
          </div>
      </div>
    </BentoCard>
  )
}

const AchievementsCabinet = () => {
    return (
        <BentoCard 
            className="col-span-1 row-span-1 md:row-span-3 md:col-start-4 md:row-start-1 bg-zinc-900 flex flex-col items-center py-8 gap-8 border-l border-white/5"
            delay={0.4}
        >
            <div className="text-white/20 font-mono text-xs rotate-90 whitespace-nowrap origin-center translate-y-4">
                TROPHY CASE
            </div>

            <div className="flex-1 flex flex-col gap-6 w-full px-4">
                 {/* Item 1 */}
                 <div className="aspect-square rounded-xl bg-gradient-to-br from-yellow-500/20 to-transparent border border-yellow-500/20 flex items-center justify-center group relative cursor-help">
                     <span className="text-2xl">🏆</span>
                     <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                        <span className="text-[10px] text-yellow-200">National Champ</span>
                     </div>
                 </div>

                 {/* Item 2 */}
                 <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/20 flex items-center justify-center group relative cursor-help">
                     <span className="text-2xl">🎓</span>
                     <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                        <span className="text-[10px] text-blue-200">M.Sc Remote Sensing</span>
                     </div>
                 </div>

                  {/* Item 3 */}
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/20 flex items-center justify-center opacity-50 border-dashed">
                     <span className="text-2xl text-white/20">?</span>
                 </div>
            </div>
        </BentoCard>
    )
}

// --- Main Page ---

export default function Life() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-16 pb-8 pointer-events-auto">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
           }} 
      />

      {/* Header */}
      <div className="mb-8 mt-2 text-center z-10 w-full max-w-2xl px-4 flex-shrink-0">
        {/* Divider Line */}
        <div className="mb-4 mx-auto h-[2px] w-72 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
        
        <p className="text-xl text-white/75 font-light italic font-serif tracking-widest opacity-90">
          Stability found in manifold passions.
        </p>
      </div>

      {/* Main Grid Container - Adaptive 4 Columns */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[calc((100vh-240px)/3)]">
           {/* Row 1 & 2: Col 1-2 */}
           <LifeDashboard />

           {/* Row 1 & 2: Col 3 (Empty Placeholders) */}
           <div className="hidden md:block col-span-1 row-span-1 md:col-start-3 md:row-start-1" />
           <div className="hidden md:block col-span-1 row-span-1 md:col-start-3 md:row-start-2" />
           
           {/* Row 1-3: Col 4 */}
           <AchievementsCabinet />

           {/* Row 3: Col 1 */}
           <PhotoFrame onClick={() => navigate('/life/photos')} />

           {/* Row 3: Col 2-3 */}
           <HikingCard onClick={() => navigate('/life/hiking')} />

        </div>
      </div>
    </div>
  )
}
