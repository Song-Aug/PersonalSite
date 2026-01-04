import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import GradientText from '../components/GradientText'

const EXPERIENCES = [
  {
    id: 1,
    period: '2023.09 — Present',
    role: 'Master of Remote Sensing',
    company: 'Tongji University',
    description: 'Optimizing Deep Learning for Remote Sensing via Contrastive Learning and Multimodal Fusion. Researching efficient inference pipelines for large-scale scene interpretation.',
    tags: ['Deep Learning', 'Contrastive Learning', 'Multimodal'],
  },
  {
    id: 2,
    period: '2025.04 — 2025.12',
    role: 'Algorithm Engineer Intern',
    company: 'Xiaohongshu Inc.', 
    description: 'Live Feed Ranking & Streamer Growth. Optimized long-tail ID representation via Meta-learning and Contrastive Learning, boosting prediction accuracy for Re-ranking. Improved new streamer retention through potential-based distribution strategies. Achieved resource and duration gains via Mixup and architecture optimization.',
    tags: ['Recommender Systems', 'Meta Learning', 'Contrastive Learning', 'Cold Start', 'RankMixer', 'CGC'],
  },
  {
    id: 3,
    period: '2022 — 2023',
    role: 'Research Intern',
    company: 'AI Research Institute',
    description: 'Conducted research on self-supervised learning for computer vision tasks. Published at CVPR.',
    tags: ['Research', 'CV', 'Deep Learning'],
  },
  {
    id: 4,
    period: '2020 — 2022',
    role: 'Master of Computer Science',
    company: 'Top University',
    description: 'Thesis on efficient transformer architectures. Teaching assistant for Machine Learning course.',
    tags: ['Academic', 'Transformers', 'NLP'],
  },
  {
    id: 5,
    period: '2019 — 2020',
    role: 'Software Engineer Intern',
    company: 'Startup Inc.',
    description: 'Built full-stack web applications using React and Node.js. Optimized database queries for speed.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 6,
    period: '2016 — 2020',
    role: 'Bachelor of Software Engineering',
    company: 'Another University',
    description: 'Graduated with Honors. Lead developer for the university coding club. Organized hackathons.',
    tags: ['Algorithms', 'Java', 'Leadership'],
  },
  {
    id: 7,
    period: '2015 — 2016',
    role: 'Open Source Contributor',
    company: 'Community',
    description: 'Started journey into programming by contributing to various open source projects on GitHub.',
    tags: ['Open Source', 'Git', 'Linux'],
  },
]

const ExperienceCard = ({ item, index }) => {
  return (
    <motion.div
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
        
        <p className="mb-4 text-sm leading-relaxed text-white/70 group-hover:text-white/90">
          {item.description}
        </p>

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
  
  const { scrollYProgress } = useScroll({
    container: containerRef, // Track scroll within this specific container
    offset: ["start start", "end end"]
  })
  
  const mapY = useTransform(scrollYProgress, [0, 1], [0.08, 0.95])
  
  const scaleY = useSpring(mapY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

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
              className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-white origin-top"
              style={{ scaleY: scaleY}}
            />
            
            <div className="flex flex-col gap-12" style={{ paddingTop: '5vh'}} >
              {EXPERIENCES.map((item, index) => (
                <ExperienceCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
