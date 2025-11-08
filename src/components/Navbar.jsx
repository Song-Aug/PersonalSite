import { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const mergeClasses = (...classes) => classes.filter(Boolean).join(' ')

const NAV_LINKS = [
  { label: 'About', href: '/' },
  { label: 'Notes', href: '/notes' },
  { label: 'Life', href: '/life' },
  { label: 'Experience', href: '/experience' },
]

export default function Navbar() {
  // Controls the visibility of the mobile navigation drawer.
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  const menuItems = useMemo(
    () =>
      NAV_LINKS.map(link => ({
        ...link,
        isActive: pathname === link.href,
      })),
    [pathname],
  )

  const contactLink = useMemo(
    () => ({ label: 'Contact', href: '/contact', isActive: pathname === '/contact' }),
    [pathname],
  )

  const toggleMenu = () => setIsOpen(prev => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="fixed inset-x-0 top-0 z-50 pointer-events-none">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-7 pointer-events-none">
        <Link
          to="/"
          className={mergeClasses(
            'pointer-events-auto text-3xl font-extrabold tracking-wide text-white/95 transform transition-transform duration-200 hover:scale-105 hover:font-black hover:drop-shadow-[0_0_24px_rgba(196,181,253,0.55)]',
            pathname === '/'
              ? 'text-white drop-shadow-[0_0_26px_rgba(192,132,252,0.6)]'
              : '',
          )}
          onClick={closeMenu}
        >
          Rove
        </Link>

        <div className="flex items-center gap-4 pointer-events-none md:gap-6">
          <ul className="hidden items-center gap-5 pointer-events-none md:flex md:gap-8">
            {menuItems.map(link => (
              <li key={link.label} className="pointer-events-none">
                <Link
                  to={link.href}
                  className={mergeClasses(
                    'pointer-events-auto text-base font-semibold tracking-wide text-white/90 transform transition-transform duration-200 md:text-lg hover:-translate-y-0.5 hover:scale-105 hover:font-bold hover:drop-shadow-[0_0_22px_rgba(196,181,253,0.5)]',
                    link.isActive
                      ? 'font-bold text-white drop-shadow-[0_0_24px_rgba(192,132,252,0.55)]'
                      : '',
                  )}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pointer-events-none">
              <Link
                to={contactLink.href}
                onClick={closeMenu}
                className={mergeClasses(
                  'pointer-events-auto rounded-full border px-5 py-2.5 text-base font-semibold transition-all duration-200 md:text-lg shadow-[0_0_8px_rgba(15,23,42,0.35)]',
                  contactLink.isActive
                    ? 'border-violet-500 bg-violet-500/20 text-violet-100 shadow-[0_0_26px_rgba(139,92,246,0.5)]'
                    : 'border-white/35 text-white/90 hover:border-violet-400 hover:bg-violet-500/15 hover:text-violet-100 hover:shadow-[0_0_24px_rgba(139,92,246,0.45)]',
                )}
              >
                {contactLink.label}
              </Link>
            </li>
          </ul>

          <button
            type="button"
            onClick={toggleMenu}
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-slate-100 transition-colors duration-200 hover:border-white/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/** Mobile menu rendered when hamburger is open */}
      <div
        className={mergeClasses(
          'md:hidden transition-opacity duration-200',
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-slate-950/90 p-6 text-base text-slate-200 shadow-lg backdrop-blur-lg transition-opacity duration-200">
          <ul className="space-y-5">
            {menuItems.map(link => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={closeMenu}
                  className={mergeClasses(
                    'block rounded-lg px-2 py-2 text-base font-semibold transform transition-transform duration-200',
                    link.isActive
                      ? 'bg-slate-900/90 text-white drop-shadow-[0_0_22px_rgba(192,132,252,0.45)]'
                      : 'hover:-translate-y-0.5 hover:bg-slate-900/70 hover:drop-shadow-[0_0_18px_rgba(196,181,253,0.4)]',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to={contactLink.href}
                onClick={closeMenu}
                className={mergeClasses(
                  'block rounded-full border px-4 py-2 text-center text-base font-semibold transition-all duration-200 shadow-[0_0_8px_rgba(15,23,42,0.35)]',
                  contactLink.isActive
                    ? 'border-violet-500 bg-violet-500/20 text-violet-100 shadow-[0_0_26px_rgba(139,92,246,0.5)]'
                    : 'border-white/35 text-white/90 hover:border-violet-400 hover:bg-violet-500/15 hover:text-violet-100 hover:shadow-[0_0_24px_rgba(139,92,246,0.45)]',
                )}
              >
                {contactLink.label}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
