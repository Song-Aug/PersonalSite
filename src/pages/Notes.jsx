
import { useState } from 'react'
import NoteCard from '../components/NoteCard'
import { notesData } from '../data/notesData'

// Use shared data
const NOTES = notesData

export default function Notes() {
  const [filter, setFilter] = useState('All')
  
  // Extract unique tags
  const tags = ['All', ...new Set(NOTES.flatMap(note => note.tags))]
  
  const filteredNotes = filter === 'All' 
    ? NOTES 
    : NOTES.filter(note => note.tags.includes(filter))

  return (
    <div className="min-h-screen pt-24 pb-20 pointer-events-auto">

      <div className="mx-auto max-w-7xl px-4 md:px-12">
        {/* Ultra-Minimal Header */}
        <div className="mb-8 border-b border-white/10 pb-4 mt-4">
          <p className="text-white/50 max-w-2xl text-base font-light leading-relaxed font-sans">
            Technical explorations, paper readings, and thoughts on AI & Systems.
          </p>
        </div>

        {/* Filter Tags - Minimal Style */}
        <div className="mb-12 flex flex-wrap gap-x-6 gap-y-2">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`text-sm transition-all duration-200 border-b-2 pb-0.5 ${
                filter === tag 
                  ? 'text-white border-blue-400 font-medium' 
                  : 'text-white/40 border-transparent hover:text-white/80 hover:border-white/20'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Masonry Grid (Simulated with Columns for now) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {filteredNotes.map((note, index) => (
            <NoteCard key={note.slug} note={note} index={index} />
          ))}
        </div>
        
        {filteredNotes.length === 0 && (
           <div className="py-20 text-center text-white/40">
             No notes found with tag "{filter}".
           </div>
        )}
      </div>
    </div>
  )
}
