import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

export default function LifePhotos() {
  const [photos, setPhotos] = useState([])
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  useEffect(() => {
    // Dynamically import all images from the myphotos folder
    const images = import.meta.glob('../assets/myphotos/*.{png,jpg,jpeg,webp}', { eager: true })
    const photoList = Object.entries(images).map(([path, module], index) => {
      // Create a nice filename label
      const name = path.split('/').pop().split('.')[0].replace(/[-_]/g, ' ')
      return {
        id: index,
        src: module.default,
        title: name.charAt(0).toUpperCase() + name.slice(1), 
        date: '2023-2024' // Placeholder date, could be parsed from metadata in future
      }
    })
    
    // Fisher-Yates Shuffle
    for (let i = photoList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [photoList[i], photoList[j]] = [photoList[j], photoList[i]];
    }

    setPhotos(photoList)
  }, [])

  return (
    <div className="min-h-screen pt-32 px-3 sm:px-8 pb-20 max-w-7xl mx-auto pointer-events-auto">
      <div className="fixed top-0 left-0 right-0 h-30 bg-gradient-to-b from-[#050212] via-[#050212] via-50% to-transparent z-40 pointer-events-none" />
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: photo.id * 0.1 }}
            className="relative w-full inline-block group overflow-hidden cursor-pointer rounded-xl break-inside-avoid mb-4 align-top"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img 
              src={photo.src} 
              alt={photo.title}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
               <span className="text-white font-bold tracking-wide border-b border-white/50 pb-1">{photo.title}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-28 left-0 right-0 bottom-0 z-40 flex items-center justify-center bg-transparent backdrop-blur-md p-8"
            onClick={() => setSelectedPhoto(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white text-3xl"
              onClick={() => setSelectedPhoto(null)}
            >
              <FaTimes />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedPhoto.src} 
              alt={selectedPhoto.title}
              className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            />

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
