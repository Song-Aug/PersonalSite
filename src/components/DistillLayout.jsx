import { motion } from 'framer-motion'
import GradientText from './GradientText'

export default function DistillLayout({ title, subtitle, date, children }) {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#0a0a0a] text-gray-200 font-serif leading-relaxed">
      {/* Article Header */}
      <div className="max-w-[1200px] mx-auto px-6 mb-16 pt-10 text-center">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
         >
           <div className="text-sm font-sans tracking-widest text-[#40c9ff] uppercase mb-4">{date}</div>
           <GradientText
              className="text-4xl md:text-6xl font-bold mb-6 font-sans"
              colors={["#ffffff", "#a5f3fc", "#ffffff"]}
              animationSpeed={10}
              showBorder={false}
            >
              {title}
            </GradientText>
            {subtitle && <p className="text-xl md:text-2xl text-gray-400 italic font-sans max-w-2xl mx-auto">{subtitle}</p>}
         </motion.div>
      </div>

      {/* Main Content Area with Sidenote Support */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_680px_1fr] gap-8 px-6 relative">
          {/* Left Margin (Empty or TOC) */}
          <div className="hidden lg:block"></div>

          {/* Main Text Column */}
          <article className="prose prose-invert prose-lg max-w-none col-span-1">
             {children}
          </article>

          {/* Right Margin (Sidenotes) */}
          <div className="hidden lg:block">
            {/* The layout allows absolute positioning of sidenotes into this column */}
          </div>
      </div>
    </div>
  )
}
