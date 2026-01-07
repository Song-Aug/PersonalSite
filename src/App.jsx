import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import { Suspense, lazy } from 'react'
import { AnimatePresence } from 'framer-motion'
import PageLayout from './components/PageLayout'
import HeroSection from './components/HeroSection'
import PageTransition from './components/PageTransition'

// Lazy load pages for code splitting
const Contact = lazy(() => import('./pages/Contact'))
const Experience = lazy(() => import('./pages/Experience'))
const Notes = lazy(() => import('./pages/Notes'))
const NoteDetail = lazy(() => import('./pages/NoteDetail'))
const Life = lazy(() => import('./pages/Life'))
const LifePhotos = lazy(() => import('./pages/LifePhotos'))
const LifeHiking = lazy(() => import('./pages/LifeHiking'))
const HikingArticle = lazy(() => import('./pages/HikingArticle'))

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingSpinner />}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><HeroSection /></PageTransition>} />
                <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
                <Route path="/life" element={<PageTransition><Life /></PageTransition>} />
                <Route path="/life/photos" element={<PageTransition><LifePhotos /></PageTransition>} />
                <Route path="/life/hiking" element={<PageTransition><LifeHiking /></PageTransition>} />
                <Route path="/life/hiking/:slug" element={<PageTransition><HikingArticle /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/notes" element={<PageTransition><Notes /></PageTransition>} />
                <Route path="/notes/:slug" element={<PageTransition><NoteDetail /></PageTransition>} />
            </Routes>
        </Suspense>
    </AnimatePresence>
  )
}

function App() {
  const etherColors = useMemo(() => ['#C0C0C0', '#818dfaff', '#fde4ce09'], [])

  return (
    <BrowserRouter>
      <PageLayout etherColors={etherColors}>
        <AnimatedRoutes />
      </PageLayout>
    </BrowserRouter>
  )
}

export default App
