
import { useState } from 'react'
import NoteCard from '../components/NoteCard'
import GradientText from '../components/GradientText'

// Placeholder data - in a real app this would come from a CMS or local markdown files
const NOTES = [
  {
    slug: 'attention-is-all-you-need',
    title: 'Visualizing Attention Mechanisms',
    date: '2025-01-02',
    tags: ['Deep Learning', 'NLP', 'Visualization'],
    excerpt: 'Detailed breakdown of the Self-Attention mechanism with interactive visualizations. Understanding Query, Key, and Value matrices through geometric interpretations.',
    content: `
# Visualizing Attention Mechanisms

The Transformer architecture has revolutionized NLP. At its core lies the **Self-Attention** mechanism.

## The Equation

The core equation is:

$$
Attention(Q, K, V) = softmax(\\frac{QK^T}{\\sqrt{d_k}})V
$$

Where:
- $Q$ is the Query matrix
- $K$ is the Key matrix
- $V$ is the Value matrix

## Why Scale by $\\sqrt{d_k}$?

We scale by $\\sqrt{d_k}$ to prevent the dot products from growing too large in magnitude, which pushes the softmax function into regions where it has extremely small gradients.
    `
  },
  {
    slug: 'contrastive-learning-remote-sensing',
    title: 'Contrastive Learning in Remote Sensing',
    date: '2024-12-28',
    tags: ['Remote Sensing', 'Contrastive Learning', 'CV'],
    excerpt: 'Adapting SimCLR and MoCo for multi-spectral satellite imagery. Handling the domain gap between natural images and overhead perspective.',
    content: '# Contrastive Learning in Remote Sensing\n\nNotes coming soon...'
  },
  {
    slug: 'math-of-diffusion',
    title: 'The Math Behind Diffusion Models',
    date: '2024-12-15',
    tags: ['Generative AI', 'Math', 'Diffusion'],
    excerpt: 'Deriving the ELBO for DDPMs. Understanding the forward and reverse stochastic processes.',
    content: '# The Math Behind Diffusion Models\n\nNotes coming soon...'
  },
  {
    slug: 'react-server-components',
    title: 'Rethinking React Server Components',
    date: '2024-11-20',
    tags: ['Web Dev', 'React', 'Architecture'],
    excerpt: 'Deep dive into RSC wire format and how it changes the mental model of data fetching in React applications.',
    content: '# Rethinking React Server Components\n\nNotes coming soon...'
  },
   {
    slug: 'kalman-filters',
    title: 'Kalman Filters for Object Tracking',
    date: '2024-10-05',
    tags: ['Robotics', 'Math', 'Algorithms'],
    excerpt: 'Implementation of Extended Kalman Filter (EKF) for non-linear state estimation in autonomous driving scenarios.',
    content: '# Kalman Filters\n\nNotes coming soon...'
  }
]

export default function Notes() {
  const [filter, setFilter] = useState('All')
  
  // Extract unique tags
  const tags = ['All', ...new Set(NOTES.flatMap(note => note.tags))]
  
  const filteredNotes = filter === 'All' 
    ? NOTES 
    : NOTES.filter(note => note.tags.includes(filter))

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-10 pb-20 pointer-events-auto">
       <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <GradientText
            className="text-4xl font-bold sm:text-5xl mb-4"
            colors={["#E0E0E0", "#A0A0A0", "#FFFFFF", "#808080", "#E0E0E0"]}
            animationSpeed={8}
            showBorder={false}
          >
            Digital Garden
          </GradientText>
          <p className="text-white/60 max-w-2xl text-lg">
            A collection of thoughts, research notes, and technical explorations. 
            Cultivating knowledge one node at a time.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="mb-10 flex flex-wrap gap-2">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 border ${
                filter === tag 
                  ? 'bg-white text-black border-white font-medium' 
                  : 'bg-white/5 text-white/60 border-white/10 hover:border-white/30 hover:text-white'
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

export { NOTES } // Export for Detail page to use simply
