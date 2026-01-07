import { motion } from 'framer-motion'

const pageVariants = {
  initial: { 
    opacity: 0, 
    y: 20, 
    filter: 'blur(10px)' 
  },
  animate: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)' 
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    filter: 'blur(10px)' 
  }
}

const pageTransition = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1] // Custom cubic bezier for smooth, premium feel
}

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
