import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import DistillLayout from '../components/DistillLayout'
import { hikingTrips } from '../data/hikingTrips'

// Import all markdown files as raw strings
const postFiles = import.meta.glob('../posts/hiking/*.md', { query: '?raw', import: 'default' })

export default function HikingArticle() {
  const navigate = useNavigate()
  const { slug } = useParams()
  const [content, setContent] = useState('')
  
  // Find metadata
  const trip = hikingTrips.find(t => t.id === slug)

  useEffect(() => {
    async function loadPost() {
      if (!slug) return

      // Construct expected path
      const filePath = `../posts/hiking/${slug}.md`
      
      if (postFiles[filePath]) {
        try {
          const rawMd = await postFiles[filePath]()
          setContent(rawMd)
        } catch (error) {
          console.error('Error loading markdown:', error)
          setContent('# Error loading post')
        }
      } else {
        setContent('# Post not found\nSorry, the content for this trip has not been written yet.')
      }
    }
    loadPost()
  }, [slug])

  if (!trip) {
    return <div className="min-h-screen pt-32 text-center text-white">Trip not found</div>
  }

  return (
    <>
      <button 
        onClick={() => navigate('/life/hiking')}
        className="fixed top-24 left-8 z-50 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors pointer-events-auto"
      >
        <FaArrowLeft className="text-white" />
      </button>

      <DistillLayout>
        <div className="markdown-content">
            <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                    // Custom Image Renderer - Standard Style
                    img: ({src, alt}) => (
                        <figure className="my-8 rounded-xl overflow-hidden border border-white/10 bg-black/20">
                           <img 
                            src={src} 
                            alt={alt} 
                            className="w-full h-auto object-cover"
                           />
                           {alt && (
                            <figcaption className="p-3 text-center text-sm text-gray-400 font-sans border-t border-white/5">
                             {alt}
                            </figcaption>
                           )}
                        </figure>
                    ),
                    // Custom Paragraph to handle spacing
                    p: ({children}) => <p className="mb-6 leading-relaxed text-lg text-white/80 font-serif">{children}</p>,
                    h1: ({children}) => <h1 className="text-4xl md:text-5xl font-bold text-white font-sans mb-8 leading-tight">{children}</h1>,
                    h2: ({children}) => <h2 className="mt-12 mb-6 text-2xl font-bold text-white font-sans">{children}</h2>,
                    h3: ({children}) => <h3 className="mt-8 mb-4 text-xl font-bold text-white/90 font-sans">{children}</h3>,
                    blockquote: ({children}) => <blockquote className="pl-4 border-l-2 border-[#40c9ff] text-white/70 italic my-6">{children}</blockquote>
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
      </DistillLayout>
    </>
  )
}
