import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaMountain, FaCalendarAlt, FaMapMarkerAlt, FaRulerHorizontal, FaLevelUpAlt } from 'react-icons/fa'

const TRIPS = [
  {
    id: 'huangshan-2023',
    title: 'Alone in the Clouds: Mount Huangshan',
    date: '2023.11',
    location: 'Anhui, China',
    image: '../assets/life_hiking.png', 
    desc: 'A solitary winter trek through the misty peaks. Sea of clouds, granite spires, and the silence of high altitude.',
    stats: { dist: '18km', ele: '1864m', diff: 'Hard' }
  },
  {
    id: 'yosemite-2022',
    title: 'Valley of Giants: Yosemite',
    date: '2022.06',
    location: 'California, USA',
    image: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop',
    desc: 'Camping under El Capitan. Half Dome cables and the roar of the falls.',
    stats: { dist: '24km', ele: '850m', diff: 'Moderate' }
  },
  {
    id: 'patagonia-2024',
    title: 'W Trek: Torres del Paine',
    date: '2024.01',
    location: 'Patagonia, Chile',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1587&auto=format&fit=crop',
    desc: 'Battling the famous Patagonian winds. Turquoise lakes, calving glaciers, and the iconic towers at sunrise.',
    stats: { dist: '80km', ele: '2800m', diff: 'Expert' }
  },
  {
    id: 'dolomites-2023',
    title: 'Alta Via 1: Italian Alps',
    date: '2023.08',
    location: 'Dolomites, Italy',
    image: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?q=80&w=2070&auto=format&fit=crop',
    desc: 'Jagged limestone peaks piercing the sky. Rifugio culture, espresso on the trail, and wildflowers everywhere.',
    stats: { dist: '120km', ele: '4500m', diff: 'Hard' }
  },
  {
    id: 'banff-2022',
    title: 'Icefields Parkway: Banff',
    date: '2022.09',
    location: 'Alberta, Canada',
    image: 'https://images.unsplash.com/photo-1506103004358-132d75cb1c2b?q=80&w=2070&auto=format&fit=crop',
    desc: 'Turquoise waters of Lake Louise and Moraine Lake. The sheer scale of the Canadian Rockies.',
    stats: { dist: '15km', ele: '600m', diff: 'Easy' }
  },
  {
    id: 'fuji-2019',
    title: 'Sunrise Summit: Mt. Fuji',
    date: '2019.08',
    location: 'Honshu, Japan',
    image: 'https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?q=80&w=2069&auto=format&fit=crop',
    desc: 'The night climb. A sea of headlights zigzagging up the volcanic ash. Watching the sun break the horizon.',
    stats: { dist: '14km', ele: '1300m', diff: 'Moderate' }
  }
]

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

         {/* Stats Grid */}
         <div className="grid grid-cols-2 gap-2">
             <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                 <FaRulerHorizontal className="text-white/30" />
                 <div>
                     <div className="text-[10px] text-white/30 uppercase tracking-wider">Distance</div>
                     <div className="text-sm font-mono text-white/90">{trip.stats.dist}</div>
                 </div>
             </div>
             <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                 <FaMountain className="text-white/30" />
                 <div>
                     <div className="text-[10px] text-white/30 uppercase tracking-wider">Elevation</div>
                     <div className="text-sm font-mono text-white/90">{trip.stats.ele}</div>
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
