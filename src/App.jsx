import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useMemo } from 'react'
import PageLayout from './components/PageLayout'
import HeroSection from './components/HeroSection'
import Contact from './pages/Contact'
import Experience from './pages/Experience'

function App() {
  const etherColors = useMemo(() => ['#C0C0C0', '#818dfaff', '#fde4ce09'], [])

  return (
    <BrowserRouter>
      <PageLayout etherColors={etherColors}>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  )
}

export default App
