import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useMemo } from 'react'
import PageLayout from './components/PageLayout'
import HeroSection from './components/HeroSection'
import Contact from './pages/Contact'
import Experience from './pages/Experience'

import Notes from './pages/Notes'
import NoteDetail from './pages/NoteDetail'

import Life from './pages/Life'
import LifePhotos from './pages/LifePhotos'
import LifeHiking from './pages/LifeHiking'
import HikingArticle from './pages/HikingArticle'

function App() {
  const etherColors = useMemo(() => ['#C0C0C0', '#818dfaff', '#fde4ce09'], [])

  return (
    <BrowserRouter>
      <PageLayout etherColors={etherColors}>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/life" element={<Life />} />
          <Route path="/life/photos" element={<LifePhotos />} />
          <Route path="/life/hiking" element={<LifeHiking />} />
          <Route path="/life/hiking/:slug" element={<HikingArticle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:slug" element={<NoteDetail />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  )
}

export default App
