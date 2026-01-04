
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const NoteCard = ({ note, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/notes/${note.slug}`}
        className="group block h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/10"
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-xs text-white/40">{note.date}</span>
          <div className="flex gap-2">
            {note.tags.map((tag) => (
              <span key={tag} className="text-[10px] text-blue-300/80">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        
        <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-blue-200">
          {note.title}
        </h3>
        
        <p className="line-clamp-3 text-sm leading-relaxed text-white/60 group-hover:text-white/80">
          {note.excerpt}
        </p>
      </Link>
    </motion.div>
  )
}

export default NoteCard
