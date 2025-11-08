import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useMemo } from 'react'
import PageLayout from './components/PageLayout'
import HeroSection from './components/HeroSection'
import Contact from './pages/Contact'

function App() {
  const etherColors = useMemo(() => ['#5227FF', '#FF9FFC', '#B19EEF'], [])

  return (
    <BrowserRouter>
      <PageLayout etherColors={etherColors}>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  )
}

export default App
