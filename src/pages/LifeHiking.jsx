import { useNavigate } from 'react-router-dom'
import GradientText from '../components/GradientText'
import { motion } from 'framer-motion'
import { FaMountain, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const TRIPS = [
  {
    id: 'huangshan-2023',
    title: 'Alone in the Clouds: Mount Huangshan',
    date: '2023.11',
    location: 'Anhui, China',
    image: '../assets/life_hiking.png', 
    desc: 'A solitary winter trek through the misty peaks. Sea of clouds, granite spires, and the silence of high altitude.'
  },
  {
    id: 'yosemite-2022',
    title: 'Valley of Giants: Yosemite',
    date: '2022.06',
    location: 'California, USA',
    image: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop', // Placeholder for now
    desc: 'Camping under El Capitan. Half Dome cables and the roar of the falls.'
  }
]

export default function LifeHiking() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-8 pb-20 max-w-7xl mx-auto pointer-events-auto">
      <div className="mb-16">
        <GradientText
          className="text-4xl font-bold sm:text-5xl mb-4"
          colors={["#40c9ff", "#e81cff", "#40c9ff"]}
          animationSpeed={6}
          showBorder={false}
        >
          Trekking Logs
        </GradientText>
        <p className="text-white/60 max-w-xl">
           Documentation of paths taken, elevations gained, and thoughts found along the way.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {TRIPS.map((trip, idx) => (
          <motion.div 
            key={trip.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
            onClick={() => navigate(`/life/hiking/${trip.id}`)}
          >
             {/* Thumbnail */}
             <div className="h-48 md:h-full rounded-2xl overflow-hidden relative">
               <img 
                src={trip.image.startsWith('http') ? trip.image : new URL(trip.image, import.meta.url).href}
                alt={trip.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
               />
             </div>

             {/* Content */}
             <div className="flex flex-col justify-center py-2">
               <div className="flex items-center gap-4 text-xs text-[#40c9ff] font-mono mb-2">
                  <span className="flex items-center gap-1"><FaCalendarAlt /> {trip.date}</span>
                  <span className="flex items-center gap-1"><FaMapMarkerAlt /> {trip.location}</span>
               </div>
               <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#40c9ff] transition-colors">
                 {trip.title}
               </h3>
               <p className="text-white/60 leading-relaxed max-w-2xl">
                 {trip.desc}
               </p>
               <div className="mt-4 flex items-center gap-2 text-sm text-white/40 group-hover:text-white transition-colors">
                 Read Log <span className="text-lg">→</span>
               </div>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
