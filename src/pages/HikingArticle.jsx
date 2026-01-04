import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import DistillLayout from '../components/DistillLayout'

export default function HikingArticle() {
  const navigate = useNavigate()

  return (
    <>
      <button 
        onClick={() => navigate('/life/hiking')}
        className="fixed top-24 left-8 z-50 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
      >
        <FaArrowLeft className="text-white" />
      </button>

      <DistillLayout
        title="Alone in the Clouds: Mount Huangshan"
        subtitle="A solitary winter trek through the misty peaks of Anhui."
        date="November 2023"
      >
        <p>
          There is a silence in the mountains that feels heavy, not empty. As I stepped onto the granite stairs of 
          <span className="text-[#40c9ff]"> Mount Huangshan</span>, the world below disappeared into a thick blanket of white.
        </p>

        <h3>The Ascent</h3>
        <p>
          The path winds upward like a stone serpent. Pine trees, twisted by centuries of wind, cling to the vertical rock faces.
          They call them <em>Yingkesong</em> — welcoming pines — but in this mist, they looked more like guardians.
        </p>

        <figure className="my-12 -mx-6 md:-mx-20 lg:-mr-[calc((100vw-680px)/2)] lg:w-[calc(680px+(100vw-680px)/2-40px)] rounded-xl overflow-hidden border border-white/10">
           <img 
            src="/src/assets/life_hiking.png" 
            alt="Huangshan Mist" 
            className="w-full h-[500px] object-cover"
           />
           <figcaption className="p-4 text-sm text-gray-500 font-sans border-t border-white/10 bg-black/50">
             Figure 1: The sea of clouds viewed from the West Sea Canyon.
           </figcaption>
        </figure>

        <h3>Geological Time</h3>
        <p>
          Walking here is an exercise in perspective. These formations were carved by glaciers during the Quaternary Glaciation.
          Every step is a step through millions of years of erosion.
        </p>
        
        <p>
          It reminds me of code, in a way. The layers of abstraction we build are like these sedimentary layers—fragile, 
          yet capable of standing the test of time if the foundation is solid.
        </p>

      </DistillLayout>
    </>
  )
}
