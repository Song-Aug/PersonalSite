
import BentoCard from '../components/BentoCard'
import GradientText from '../components/GradientText'
import { motion } from 'framer-motion'
import { FaSpotify, FaMapMarkerAlt, FaWalking, FaBook, FaCamera } from 'react-icons/fa'

export default function Life() {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-8 pb-20 max-w-7xl mx-auto pointer-events-auto">
      {/* Header */}
      <div className="mb-12">
        <GradientText
          className="text-4xl font-bold sm:text-5xl mb-4"
          colors={["#40c9ff", "#e81cff", "#40c9ff"]}
          animationSpeed={6}
          showBorder={false}
        >
          Life Slice
        </GradientText>
        <p className="text-white/60 max-w-xl">
          Beyond the terminal. Exploring the world, capturing moments, and living the algorithm of life.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
        
        {/* 1. Hero / Intro - Large Block */}
        <BentoCard className="col-span-1 md:col-span-2 row-span-2 flex flex-col justify-between group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">The Surveyor's Eye</h3>
            <p className="text-white/70 leading-relaxed">
              From utilizing GNSS for millimeter-level precision to training neural networks for semantic understanding. 
              My journey is about mapping the world, both physically and digitally.
            </p>
          </div>
          <div className="relative z-10 mt-4 h-full min-h-[120px] rounded-xl bg-white/5 border border-white/5 overflow-hidden flex items-center justify-center">
             <div className="text-center">
                <FaCamera className="text-4xl text-white/20 mx-auto mb-2" />
                <span className="text-xs font-mono text-white/40">LIFESTYLE_V1.0</span>
             </div>
          </div>
        </BentoCard>

        {/* 2. Map - Square Block */}
        <BentoCard className="col-span-1 row-span-1 flex flex-col items-center justify-center bg-blue-900/20 group cursor-pointer" delay={0.1}>
           <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/121.4737,31.2304,11,0/400x400?access_token=Pk.eyJ1IjoiZXhhbXBsZSJ9')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity mix-blend-luminosity" />
           <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-2 animate-pulse">
                <FaMapMarkerAlt className="text-blue-400 text-xl" />
              </div>
              <h4 className="text-lg font-bold text-white">Shanghai</h4>
              <p className="text-xs text-blue-200/60">Base Coordinates</p>
           </div>
        </BentoCard>

         {/* 3. Stat 1 - Steps */}
        <BentoCard className="col-span-1 row-span-1 flex flex-col justify-between" delay={0.2}>
           <div className="flex justify-between items-start">
             <div className="p-2 rounded-lg bg-orange-500/10">
                <FaWalking className="text-orange-400 text-lg" />
             </div>
             <span className="text-xs font-mono text-white/40">TODAY</span>
           </div>
           <div>
             <div className="text-3xl font-bold text-white">8,432</div>
             <div className="text-xs text-white/50">Steps Walked</div>
           </div>
        </BentoCard>


        {/* 4. Photo - Tall Vertical */}
        <BentoCard className="col-span-1 row-span-2 group relative p-0" delay={0.3}>
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
           {/* Placeholder for vertical photo (e.g. Hiking) */}
           <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-white/20 group-hover:scale-105 transition-transform duration-700">
              [Vertical Photo: Hiking]
           </div>
           <div className="absolute bottom-4 left-4 z-20">
              <h4 className="text-white font-bold">Mount Huangshan</h4>
              <p className="text-xs text-white/60">2023.11 · Trekking</p>
           </div>
        </BentoCard>

        {/* 5. Music - Wide width */}
        <BentoCard className="col-span-1 md:col-span-2 row-span-1 flex items-center gap-4 group" delay={0.4}>
           <div className="w-16 h-16 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-95 transition-transform">
              <FaSpotify className="text-green-500 text-3xl" />
           </div>
           <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                 <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Recently Played</span>
              </div>
              <h4 className="text-white font-bold truncate">Cornfield Chase</h4>
              <p className="text-white/50 text-sm truncate">Hans Zimmer · Interstellar OST</p>
           </div>
           {/* Visualizer bars */}
           <div className="hidden sm:flex items-end gap-1 h-8">
              {[40, 70, 30, 80, 50].map((h, i) => (
                 <motion.div 
                   key={i}
                   animate={{ height: [10, 30, 10] }}
                   transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                   className="w-1 bg-white/20 rounded-t-sm"
                   style={{ height: '50%' }}
                 />
              ))}
           </div>
        </BentoCard>

         {/* 6. Stat 2 - Reading */}
         <BentoCard className="col-span-1 row-span-1 flex flex-col justify-between" delay={0.5}>
           <div className="flex justify-between items-start">
             <div className="p-2 rounded-lg bg-purple-500/10">
                <FaBook className="text-purple-400 text-lg" />
             </div>
             <span className="text-xs font-mono text-white/40">2024 GOAL</span>
           </div>
           <div>
             <div className="text-3xl font-bold text-white">12/24</div>
             <div className="text-xs text-white/50">Books Read</div>
           </div>
        </BentoCard>

        {/* 7. Photo - Detailed */}
        <BentoCard className="col-span-1 md:col-span-2 row-span-1 relative overflow-hidden group p-0" delay={0.6}>
           <div className="absolute inset-0 bg-blue-900/20" />
           {/* Placeholder for horizontal photo (e.g. Water Polo) */}
           <div className="absolute inset-0 flex items-center justify-center text-white/20 group-hover:scale-105 transition-transform duration-700">
               [Wide Photo: Water Polo Match]
           </div>
           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-10" />
           <div className="absolute bottom-4 left-6 z-20">
               <div className="flex items-center gap-2 mb-1">
                 <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-500/20 text-yellow-300 border border-yellow-500/20">
                    GOLD MEDAL
                 </span>
               </div>
               <h4 className="text-white font-bold text-lg">National Championship</h4>
               <p className="text-xs text-white/60">Team Captain · 2023</p>
           </div>
        </BentoCard>

      </div>
    </div>
  )
}
