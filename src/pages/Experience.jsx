import { motion, useScroll, useSpring, useMotionValue, useMotionValueEvent } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import GradientText from '../components/GradientText'

const EXPERIENCES = [
  {
    id: 5,
    period: '2026.02 — Present',
    role: 'Recommendation Algorithm Engineer',
    company: 'Xiaohongshu Inc.', 
    description: [
      'Live Feed Ranking & Streamer Growth.',
      'Optimized long-tail ID representation via Meta-learning and Contrastive Learning, boosting prediction accuracy for Re-ranking.',
      'Improved new streamer retention through potential-based distribution strategies.',
      'Achieved resource and duration gains via Mixup and architecture optimization.'
    ],
    tags: ['Recommender Systems', 'Meta Learning', 'Contrastive Learning', 'Cold Start', 'RankMixer', 'CGC'],
  },
  {
    id: 4,
    period: '2023.09 — 2026.06',
    role: 'Master of Remote Sensing',
    company: 'Tongji University',
    description: [
      'Optimizing Deep Learning for Remote Sensing via Contrastive Learning and Multimodal Fusion.',
      'Researching efficient inference pipelines for large-scale scene interpretation.'
    ],
    tags: ['Deep Learning', 'Contrastive Learning', 'Multimodal'],
  },
  {
    id: 3,
    period: '2025.04 — 2025.12',
    role: 'Algorithm Engineer Intern',
    company: 'Xiaohongshu Inc.', 
    description: [
      'Live Feed Ranking & Streamer Growth.',
      'Optimized long-tail ID representation via Meta-learning and Contrastive Learning, boosting prediction accuracy for Re-ranking.',
      'Improved new streamer retention through potential-based distribution strategies.',
      'Achieved resource and duration gains via Mixup and architecture optimization.'
    ],
    tags: ['Recommender Systems', 'Meta Learning', 'Contrastive Learning', 'Cold Start', 'RankMixer', 'CGC'],
  },
  {
    id: 2,
    period: '2024.12 — 2025.03',
    role: 'Algorithm Engineer Intern',
    company: '4Paradigm Inc.',
    description: [
      'Iterated Multi-Task Learning (MTL) models by upgrading SharedBottom to MMoE structure, mitigating conflicts between View Completion and Like tasks.',
      'Implemented fine-grained score fusion strategies based on user segments and categories, achieving dual metric gains.'
    ],
    tags: ['Multi-Task Learning', 'MMoE', 'Gradient Conflict', 'Score Fusion', 'User Segmentation'],
  },
  {
    id: 1,
    period: '2018.09 — 2023.06',
    role: 'Undergraduate of Surveying and Mapping',
    company: 'Tongji University',
    description: [
      'Awarded "Excellent Graduate of Tongji University 2023".',
      'Led the University Water Polo Team as Captain to win the National Championship (Group A).',
      'Won National 1st Prize in Surveying Paper Competition and "Internet+" Shanghai Bronze.',
      'Completed 1-year intensive German training.'
    ],
    tags: ['Excellent Graduate', 'Water Polo Captain', 'National Champion', 'German', 'Surveying'],
  },
]

const DescriptionList = ({ items, level = 0 }) => (
  <ul className={`list-outside ${level > 0 ? 'ml-4 mt-1' : 'ml-4'} ${level === 0 ? 'list-disc' : 'list-[circle]'} space-y-1`}>
    {items.map((item, index) => (
      <li key={index} className={Array.isArray(item) ? "list-none" : ""}>
        {Array.isArray(item) ? (
          <DescriptionList items={item} level={level + 1} />
        ) : (
          item
        )}
      </li>
    ))}
  </ul>
)

const ExperienceCard = ({ item, index, setRef }) => {
  return (
    <motion.div
      ref={setRef}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Content Card */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 highlight-card">
        <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-bold text-white group-hover:text-white/100">
            {item.role} <span className="text-white/60">@ {item.company}</span>
          </h3>
          <span className="font-mono text-xs text-white/50 group-hover:text-white/80">{item.period}</span>
        </div>
        
        <div className="mb-4 text-sm leading-relaxed text-white/70 group-hover:text-white/90">
          {Array.isArray(item.description) ? (
            <DescriptionList items={item.description} />
          ) : (
            <p>{item.description}</p>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/60 transition-colors group-hover:border-white/20 group-hover:text-white/90"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const containerRef = useRef(null)
  const itemsRef = useRef(new Map())

  const { scrollY } = useScroll({
    container: containerRef,
  })

  const targetHeight = useMotionValue(0)
  
  const smoothHeight = useSpring(targetHeight, {
    stiffness: 100,
    damping: 30,
    restDelta: 1
  })

  const updateTimeline = (currentScrollY) => {
    if (!containerRef.current) return

    // 1. Get container metrics
    const containerHeight = containerRef.current.offsetHeight
    const scrollHeight = containerRef.current.scrollHeight
    const activePoint = currentScrollY + containerHeight * 0.35

    // 2. Find the closest card
    let activeIndex = 0
    
    // Boundary checks
    const isAtTop = currentScrollY < 50
    const isAtBottom = (currentScrollY + containerHeight) >= (scrollHeight - 1)

    // Get sorted cards based on EXPERIENCES order
    const cards = EXPERIENCES.map(item => itemsRef.current.get(item.id)).filter(Boolean)

    if (isAtTop) {
      activeIndex = 0
    } else if (isAtBottom) {
      activeIndex = cards.length - 1
    } else {
      let closestDist = Infinity
      
      cards.forEach((card, index) => {
        const cardCenter = card.offsetTop + card.offsetHeight / 2
        
        const dist = Math.abs(cardCenter - activePoint)
        if (dist < closestDist) {
          closestDist = dist
          activeIndex = index
        }
      })
    }

    // 3. Calculate target height
    const activeCard = cards[activeIndex]
    if (activeCard) {
      const cardCenter = activeCard.offsetTop + activeCard.offsetHeight / 2
      targetHeight.set(cardCenter)
    }
  }

  // Update logic on scroll
  useMotionValueEvent(scrollY, "change", updateTimeline)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0
      // Initialize timeline position
      updateTimeline(0)
    }
  }, [])

  return (
    <section className="relative flex h-screen flex-col overflow-hidden px-4 pt-24 sm:px-10 pointer-events-auto">
      {/* Header Section */}
      <div className="flex-none pb-8 text-left sm:text-center z-10">
        <div className="mx-auto max-w-4xl space-y-4">
          <GradientText
            className="block text-4xl font-bold sm:text-5xl"
            colors={["#E0E0E0", "#A0A0A0", "#FFFFFF", "#808080", "#E0E0E0"]}
            animationSpeed={10}
            showBorder={false}
          >
            Journey
          </GradientText>
          <p className="text-white/60">Head down for the mission. Head up for the horizon.</p>
        </div>
      </div>

      {/* Scrollable Timeline Area with Fade Mask */}
      <div 
        ref={containerRef}
        className="relative flex-1 overflow-y-auto scrollbar-hide pointer-events-auto"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
        }}
      >
        <div className="mx-auto min-h-full max-w-4xl pb-32 relative" style={{ paddingBottom: '5vh'}}>
          <div className="relative ml-8 md:ml-12 border-l border-white/10 pl-8 md:pl-12">

            {/* Scroll Line - Animated Progress Overlay */}
            <motion.div 
              className="absolute left-[-1px] top-0 w-[2px] bg-white origin-top"
              style={{ height: smoothHeight }}
            />
            
            <div className="flex flex-col gap-12" style={{ paddingTop: '5vh'}} >
              {EXPERIENCES.map((item, index) => (
                <ExperienceCard 
                  key={item.id} 
                  item={item} 
                  index={index} 
                  setRef={(el) => {
                    if (el) itemsRef.current.set(item.id, el)
                    else itemsRef.current.delete(item.id)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
