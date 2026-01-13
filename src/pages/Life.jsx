
import { useNavigate } from 'react-router-dom'
import BentoCard from '../components/BentoCard'
import GradientText from '../components/GradientText'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaQuoteLeft, FaBookOpen, FaExternalLinkAlt, FaWalking, FaRunning, FaSwimmer, FaBiking, FaDumbbell, FaMusic } from 'react-icons/fa'
import { useState, useEffect } from 'react'

import hikePhotoBg from '../assets/hike_photo.jpeg'
import hikingBg from '../assets/life_hiking.png'
import lifePhotoBg from '../assets/life_photo.jpeg'
import dashPhoto from '../assets/dash_photo.jpeg'

// --- Sub-Components ---

const LifeDashboard = () => {
    const [yearProgress, setYearProgress] = useState(0)

    useEffect(() => {
        const calculateProgress = () => {
            const now = new Date()
            const start = new Date(now.getFullYear(), 0, 1) // Jan 1st
            const end = new Date(now.getFullYear() + 1, 0, 1) // Next Jan 1st
            const percentage = ((now - start) / (end - start)) * 100
            setYearProgress(percentage.toFixed(1))
        }
        calculateProgress()
        const timer = setInterval(calculateProgress, 60000) // Update every minute
        return () => clearInterval(timer)
    }, [])

    return (
        <BentoCard 
            className="col-span-1 md:col-span-2 row-span-2 md:col-start-1 md:row-start-1 bg-neutral-900/90 p-4 md:p-6 lg:p-8 flex flex-col overflow-hidden"
            delay={0.1}
        >
            {/* Header: Status & Location */}
            <div className="flex items-center justify-between z-10 mb-0 shrink-0">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-white/80 font-mono text-[10px] md:text-xs tracking-wider uppercase">In the graduation thesis</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                    <FaMapMarkerAlt className="text-xs" />
                    <span className="font-serif italic text-[10px] md:text-xs lg:text-sm font-bold">Shanghai, CN</span>
                </div>
            </div>
            
            {/* Middle: Split Layout */}
            <div className="flex flex-row gap-4 md:gap-6 lg:gap-8 h-full items-center overflow-hidden flex-1 -mt-2">
                {/* Left: Photo (Square) - Responsive Width */}
                <div className="relative w-1/3 md:w-2/5 aspect-square shrink-0 rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                    <img 
                        src={dashPhoto} 
                        alt="Profile" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Right: Info & Stats */}
                <div className="flex flex-col justify-center gap-2 md:gap-4 h-full flex-1 min-w-0">
                    <div>
                        <h3 className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-widest mb-1 md:mb-2 font-bold">Current Focus</h3>
                        {/* Focus List */}
                         <div className="flex flex-col gap-1 md:gap-1.5">
                            {['Agentic Workflows', 'Generative AI', 'React Performance'].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-blue-500/50" />
                                    <span className="text-white/80 text-[10px] md:text-xs font-mono">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-widest mb-1 md:mb-2 font-bold">Tech Stack</h3>
                        <div className="flex flex-wrap gap-1 md:gap-1.5">
                             {['React', 'Deep Learning', 'Python', 'PyTorch', 'Next.js'].map((tag, i) => (
                                <span key={i} className="px-2 py-0.5 md:px-2.5 md:py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-[9px] md:text-[11px] text-blue-200 font-mono tracking-tight hover:bg-blue-500/20 transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer: Year Progress */}
            <div className="w-full z-10 pt-2 md:pt-3 border-t border-white/5 shrink-0">
                 <div className="flex justify-between items-end mb-1 md:mb-2">
                    <span className="text-white/50 text-[9px] md:text-[10px] font-bold font-mono tracking-wider">YEAR PROGRESS</span>
                    <span className="text-white text-[9px] md:text-[10px] font-mono font-bold animate-pulse">{yearProgress}%</span>
                 </div>
                 {/* Progress Bar (Platinum/Silver) */}
                 <div className="relative w-full h-4 md:h-5 bg-white/5 rounded-full overflow-hidden">
                     <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${yearProgress}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-neutral-200 via-white to-neutral-300 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                     />
                 </div>
            </div>
        </BentoCard>
    )
}

const MusicCard = () => {
    return (
        <BentoCard 
            className="col-span-1 row-span-1 md:col-start-3 md:row-start-1 bg-neutral-900/50 p-6 flex flex-col justify-between group overflow-hidden"
            delay={0.2}
        >
             <div className="flex justify-between items-start">
                 <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center animate-spin-slow">
                    <FaMusic className="text-white/60 text-xs" />
                 </div>
                 <div className="flex gap-1">
                     {[1,2,3,4].map(i => (
                         <motion.div 
                            key={i}
                            animate={{ height: [8, 16, 8] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                            className="w-1 bg-green-400/80 rounded-full"
                         />
                     ))}
                 </div>
             </div>

             <div>
                 <h3 className="text-white text-lg font-bold leading-tight mb-1">初恋旧爱新欢</h3>
                 <p className="text-white/40 text-xs font-mono uppercase tracking-widest">On Repeat</p>
             </div>
             
             {/* Background Decoration */}
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors duration-500" />
        </BentoCard>
    )
}

const FitnessCard = () => {
    const stats = [
        { icon: FaDumbbell, label: 'Gym', value: '120h' },
        { icon: FaRunning, label: 'Run', value: '450km' },
        { icon: FaSwimmer, label: 'Swim', value: '20km' },
        { icon: FaBiking, label: 'Cycle', value: '800km' },
        { icon: FaWalking, label: 'Hike', value: '50km' },
    ]

    return (
        <BentoCard 
            className="col-span-1 row-span-1 md:col-start-3 md:row-start-2 bg-[#1c1c24] p-5 flex flex-col justify-center gap-3"
            delay={0.25}
        >
            <div className="flex items-center justify-between mb-2">
                <span className="text-white/50 text-xs font-bold uppercase tracking-widest transition-colors">Activity 2025</span>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            </div>
            
            <div className="grid grid-cols-2 gap-x-3 gap-y-4">
                {stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-3 group/item cursor-default">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/5 transition-colors">
                            <stat.icon className="text-white/90 text-sm" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-sm font-bold font-mono tracking-tight group-hover/item:text-green-400 transition-colors">{stat.value}</span>
                            <span className="text-white/60 text-[9px] uppercase font-bold tracking-wider group-hover/item:text-green-400/80 transition-colors">{stat.label}</span>
                        </div>
                    </div>
                ))}
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
            style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
        >
             <img 
               src={lifePhotoBg} 
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
      style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
    >
      {/* Map Background (Styled) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen transition-all duration-700 group-hover:opacity-60 group-hover:scale-105"
        style={{ backgroundImage: `url(${hikePhotoBg})`, filter: 'contrast(1.1)' }}
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

      <div className="absolute bottom-3 left-3">
           <div className="bg-white/10 backdrop-blur-md border border-white/10 p-2 rounded-lg">
              <FaExternalLinkAlt className="text-white text-xs" />
           </div>
       </div>
    </BentoCard>
  )
}

const AchievementsCabinet = () => {
    const milestones = [
        { year: '2026', tags: ['Personal Site V2', 'Agentic Workflow', 'Full Stack'] },
        { year: '2025', tags: ['M.Sc Degree', 'Remote Sensing', 'Thesis Award', 'Paper Published'] },
        { year: '2024', tags: ['First Marathon', 'Swim 5km', 'Cycling Tour'] },
        { year: '2023', tags: ['Senior Dev Promotion', 'Team Lead', 'Mentorship'] },
        { year: '2022', tags: ['Iceland Solo Trip', 'Photography', 'Vlogging'] },
    ]

    // Duplicate for seamless loop (Grouped)
    const stream = [...milestones, ...milestones]

    return (
        <BentoCard 
            className="col-span-1 row-span-1 md:row-span-3 md:col-start-4 md:row-start-1 bg-zinc-900/95 flex flex-col p-0 overflow-hidden relative group"
            delay={0.4}
        >
             {/* Gradient Masks */}
             <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-zinc-900 via-zinc-900/80 to-transparent z-10 pointer-events-none" />
             <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent z-10 pointer-events-none" />

             {/* Scrolling Container with CSS Animation & Hover Pause */}
             <div className="h-full overflow-hidden flex flex-col items-center">
                 <style>{`
                    @keyframes scrollDown {
                        from { transform: translateY(-50%); }
                        to { transform: translateY(0%); }
                    }
                    .animate-scroll-vertical {
                        animation: scrollDown 40s linear infinite;
                    }
                    .group:hover .animate-scroll-vertical {
                        animation-play-state: paused;
                    }
                 `}</style>
                 
                 <div 
                    className="flex flex-col gap-6 py-8 items-center w-full px-1 animate-scroll-vertical"
                 >
                    {stream.map((item, i) => (
                        <div key={i} className="flex flex-col items-start gap-2 w-full">
                            {/* Year - Larger & Left Aligned */}
                            <div className="text-blue-500/50 text-3xl font-black font-mono tracking-tighter w-full text-left">
                                {item.year}
                            </div>
                            
                            {/* Groups Tags - Flex Grow for Justified Block */}
                            <div className="flex flex-wrap gap-2 w-full">
                                {item.tags.map((tag, tIdx) => (
                                    <div 
                                        key={tIdx}
                                        className="flex-grow text-center px-2 py-1.5 bg-zinc-800/50 border border-white/5 text-white/70 text-xs font-medium hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:text-white hover:shadow-lg rounded-sm cursor-default transition-all duration-300"
                                    >
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
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

           {/* Row 1 & 2: Col 3 (Filled) */}
           <MusicCard />
           <FitnessCard />
           
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
