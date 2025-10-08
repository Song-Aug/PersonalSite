import { FaGithub, FaInstagram } from 'react-icons/fa'
import { SiTiktok, SiXiaohongshu } from 'react-icons/si'
import RotatingText from './RotatingText'
import GradientText from './GradientText'
import profileImg from '../assets/profile.jpg'

const ROTATING_WORDS = ['Coding', 'Hiking', 'Learning', 'Photographing']

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Song-Aug',
    Icon: FaGithub,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    Icon: FaInstagram,
  },
  {
    label: 'Rednote',
    href: 'https://www.xiaohongshu.com/',
    Icon: SiXiaohongshu,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/',
    Icon: SiTiktok,
  },
]

export default function HeroSection() {
  return (
    <section className="relative z-10 flex h-screen flex-col items-center justify-center px-6 py-16 text-white pointer-events-none">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-12 text-center">
        <div className="space-y-8 text-center">
          <h1 className="space-y-2 text-center text-[clamp(1.1rem,2.5vw,1.7rem)] font-normal leading-[1.25] tracking-tight text-white/85">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={7}
              showBorder={false}
              className="block text-center gradient-word-spaced"
            >
              Now the hardest thing: to begin again.
            </GradientText>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={7}
              animationDelay={3.5}
              showBorder={false}
              className="block text-center gradient-word-spaced"
            >
              And somehow, we always do.
            </GradientText>
          </h1>
        </div>

        <img
          src={profileImg}
          alt="Song Aug portrait"
          className="pointer-events-auto h-[250px] w-[250px] rounded-full border border-white/30 bg-white/10 object-cover shadow-[0_12px_40px_rgba(56,33,133,0.55)] transition-transform duration-500 hover:scale-105"
        />

        <div className="flex flex-wrap items-center justify-center gap-4 text-2xl font-bold text-white sm:text-4xl">
          <span className="leading-none text-white">
            Trying to
          </span>
          <RotatingText
            texts={ROTATING_WORDS}
            mainClassName="pointer-events-none inline-flex items-center justify-center overflow-hidden rounded-2xl bg-[#4c29f5] px-5 py-2 text-center shadow-[0_16px_36px_rgba(76,29,149,0.45)]"
            staggerFrom="last"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-120%', opacity: 0 }}
            staggerDuration={0.04}
            splitLevelClassName="overflow-hidden"
            elementLevelClassName="inline-block text-2xl font-bold text-white sm:text-4xl"
            transition={{ type: 'spring', damping: 32, stiffness: 360, mass: 0.6 }}
            rotationInterval={1900}
          />
        </div>

        <div className="flex items-center gap-10">
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.Icon
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white/80 shadow-[0_10px_30px_rgba(39,22,74,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-500/20 hover:text-white"
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
