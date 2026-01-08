import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaMountain, FaCalendarAlt, FaMapMarkerAlt, FaRulerHorizontal, FaLevelUpAlt, FaClock } from 'react-icons/fa'
import { hikingTrips } from '../data/hikingTrips'

const TRIPS = hikingTrips

const TripCard = ({ trip, index, onClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative mb-8 break-inside-avoid rounded-3xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 transition-colors overflow-hidden cursor-pointer"
      onClick={onClick}
    >
       {/* Image Section */}
       <div className="relative w-full overflow-hidden">
         <img 
          src={trip.image.startsWith('http') ? trip.image : new URL(trip.image, import.meta.url).href}
          alt={trip.title}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
         />
         <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent opacity-60" />
         
         {/* Floating Badge (Top Left) */}
         <div className="absolute top-4 left-4 flex gap-2">
             <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider backdrop-blur-md border border-white/10 ${
                 trip.stats.diff === 'Hard' ? 'bg-orange-500/20 text-orange-200' : 
                 trip.stats.diff === 'Expert' ? 'bg-red-500/20 text-red-200' :
                 trip.stats.diff === 'Moderate' ? 'bg-yellow-500/20 text-yellow-200' :
                 'bg-green-500/20 text-green-200'
             }`}>
                 {trip.stats.diff}
             </span>
         </div>
       </div>

       {/* Content Section */}
       <div className="p-6 relative">
         {/* Meta Row */}
         <div className="flex items-center gap-4 text-xs text-white/40 mb-3 font-mono">
            <span className="flex items-center gap-1.5"><FaCalendarAlt className="text-white/20" /> {trip.date}</span>
            <span className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-white/20" /> {trip.location}</span>
         </div>

         {/* Title */}
         <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors">
           {trip.title}
         </h3>

         {/* Description */}
         <p className="text-white/60 text-sm leading-relaxed mb-6">
           {trip.desc}
         </p>

         {/* Stats Grid 2x2 - Compact & Dense */}
         <div className="grid grid-cols-2 gap-2">
             {/* Days */}
             <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5 border border-white/5">
                 <FaClock className="text-white/30 text-xs shrink-0" />
                 <div className="flex flex-col">
                     <div className="text-[9px] text-white/30 uppercase tracking-wider leading-none mb-1">Duration</div>
                     <div className="text-xs font-mono font-medium text-white/90 leading-none">{trip.stats.days}</div>
                 </div>
             </div>
             {/* Avg Elev */}
             <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5 border border-white/5">
                 <FaMountain className="text-white/30 text-xs shrink-0" />
                 <div className="flex flex-col">
                     <div className="text-[9px] text-white/30 uppercase tracking-wider leading-none mb-1">Avg Elev</div>
                     <div className="text-xs font-mono font-medium text-white/90 leading-none">{trip.stats.avgEle}</div>
                 </div>
             </div>
             {/* Distance */}
             <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5 border border-white/5">
                 <FaRulerHorizontal className="text-white/30 text-xs shrink-0" />
                 <div className="flex flex-col">
                     <div className="text-[9px] text-white/30 uppercase tracking-wider leading-none mb-1">Distance</div>
                     <div className="text-xs font-mono font-medium text-white/90 leading-none">{trip.stats.dist}</div>
                 </div>
             </div>
             {/* Elev Gain */}
             <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5 border border-white/5">
                 <FaLevelUpAlt className="text-white/30 text-xs shrink-0" />
                 <div className="flex flex-col">
                     <div className="text-[9px] text-white/30 uppercase tracking-wider leading-none mb-1">Gain</div>
                     <div className="text-xs font-mono font-medium text-white/90 leading-none">{trip.stats.ele}</div>
                 </div>
             </div>
         </div>
       </div>
    </motion.div>
  )
}

export default function LifeHiking() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-32 px-4 sm:px-8 pb-20 max-w-7xl mx-auto pointer-events-auto">
      {/* Waterfall Layout Container (Manual Split for Perfect Alignment) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
           {TRIPS.filter((_, i) => i % 3 === 0).map((trip, idx) => (
              <TripCard key={trip.id} trip={trip} index={idx * 3} onClick={() => navigate(`/life/hiking/${trip.id}`)} />
           ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6">
           {TRIPS.filter((_, i) => i % 3 === 1).map((trip, idx) => (
              <TripCard key={trip.id} trip={trip} index={idx * 3 + 1} onClick={() => navigate(`/life/hiking/${trip.id}`)} />
           ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6">
           {TRIPS.filter((_, i) => i % 3 === 2).map((trip, idx) => (
              <TripCard key={trip.id} trip={trip} index={idx * 3 + 2} onClick={() => navigate(`/life/hiking/${trip.id}`)} />
           ))}
        </div>
      </div>
    </div>
  )
}
