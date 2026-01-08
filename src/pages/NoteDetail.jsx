import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import { notesData } from '../data/notesData' // Import external data
import 'katex/dist/katex.min.css' // Import Katex CSS
import { motion } from 'framer-motion'

// Import all markdown files as raw strings
const noteFiles = import.meta.glob('../posts/notes/*.md', { query: '?raw', import: 'default' })

// Custom components for Markdown rendering
const MarkdownComponents = {
  // Override padding and margins for better typography
  p: ({node, ...props}) => <p className="mb-6 leading-7 text-gray-300" {...props} />,
  h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-white mt-10 mb-6 pb-2 border-b border-white/10" {...props} />,
  h2: ({node, ...props}) => <h2 className="text-2xl font-semibold text-white mt-8 mb-4" {...props} />,
  h3: ({node, ...props}) => <h3 className="text-xl font-medium text-white mt-6 mb-3" {...props} />,
  ul: ({node, ...props}) => <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-gray-300" {...props} />,
  ol: ({node, ...props}) => <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-gray-300" {...props} />,
  li: ({node, ...props}) => <li className="pl-1" {...props} />,
  blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-white/20 pl-4 py-1 my-6 text-gray-400 italic bg-white/5 rounded-r" {...props} />,
  code: ({node, inline, className, children, ...props}) => {
    const match = /language-(\w+)/.exec(className || '')
    return !inline ? (
      <div className="relative group my-6">
        <div className="absolute top-2 right-2 px-2 py-1 text-xs text-white/30 bg-white/5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          {match ? match[1] : 'text'}
        </div>
        <pre className="bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto text-sm border border-white/10">
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      </div>
    ) : (
      <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-blue-200 font-mono" {...props}>
        {children}
      </code>
    )
  },
  a: ({node, ...props}) => <a className="text-blue-400 hover:text-blue-300 hover:underline transition-colors" {...props} />,
}

export default function NoteDetail() {
  const { slug } = useParams()
  const note = notesData.find(n => n.slug === slug)
  const [content, setContent] = useState('')

  useEffect(() => {
    async function loadNote() {
      if (!slug) return

      // Construct expected path
      const filePath = `../posts/notes/${slug}.md`
      
      if (noteFiles[filePath]) {
        try {
          const rawMd = await noteFiles[filePath]()
          setContent(rawMd)
        } catch (error) {
          console.error('Error loading note markdown:', error)
          setContent('# Error loading note')
        }
      } else {
        setContent('# Note not found\nContent coming soon...')
      }
    }
    loadNote()
  }, [slug])

  if (!note) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="mb-8 text-white/60">Note not found</p>
            <Link to="/notes" className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                Back to Research
            </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="min-h-screen pt-32 px-4 pb-20 pointer-events-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl"
      >
        {/* Breadcrumb / Back Navigation */}
        <Link 
            to="/notes" 
            className="inline-flex items-center text-sm font-sans text-white/40 hover:text-white transition-colors mb-12 group"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 group-hover:-translate-x-1 transition-transform">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Research
        </Link>
        
        {/* Header */}
        <header className="mb-16 border-b border-white/10 pb-12">
            <div className="flex gap-4 mb-6">
                {note.tags.map(tag => (
                     <span key={tag} className="text-xs font-mono text-blue-300/80 px-2 py-0.5 border-b border-blue-500/30">
                        #{tag}
                    </span>
                ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
                {note.title}
            </h1>
            <div className="text-white/40 font-mono text-sm">
                Posted on {note.date}
            </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none font-serif leading-loose text-white/90">
            <ReactMarkdown 
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex]}
                components={MarkdownComponents}
            >
                {note.content}
            </ReactMarkdown>
        </div>
      </motion.div>
    </article>
  )
}
