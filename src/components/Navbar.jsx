import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar({ openQuote, phoneNumbers = [] }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {/* Top bar */}
      <div className={`hidden md:flex items-center justify-end gap-6 px-8 py-1.5 text-xs font-body transition-all ${scrolled ? 'bg-cement-900 text-white' : 'bg-black/40 text-white/90'}`}>
        {phoneNumbers.map(number => (
          <a key={number} href={`tel:${number.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-white">
            <FaPhone className="text-[10px]" /> {number}
          </a>
        ))}
        <a href="mailto:sribalajicementblocks@gmail.com" className="hover:text-white">
          sribalajicementblocks@gmail.com
        </a>
      </div>

      {/* Main nav */}
      <nav className={`flex items-center justify-between px-6 md:px-10 py-4 transition-all ${scrolled ? 'text-cement-900' : 'text-white'}`}>
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-heading text-2xl md:text-3xl font-black tracking-wide uppercase">Sri Balaji</span>
          <span className="font-heading text-sm font-semibold tracking-[0.2em] uppercase opacity-80">Cement Blocks</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-body text-sm font-500 tracking-wide uppercase transition-all hover:opacity-100 relative group ${location.pathname === l.to ? 'opacity-100 font-semibold' : 'opacity-75'}`}
            >
              {l.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-current transition-all ${location.pathname === l.to ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
          <button
            onClick={() => openQuote()}
            className={`ml-2 px-5 py-2 font-heading font-bold uppercase tracking-wider text-sm transition-all ${scrolled ? 'bg-cement-900 text-white hover:bg-cement-700' : 'bg-white text-cement-900 hover:bg-cement-100'}`}
          >
            Get Quote
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-xl">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-cement-200 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-body text-sm uppercase tracking-wide font-semibold ${location.pathname === l.to ? 'text-cement-900' : 'text-cement-500'}`}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => { openQuote(); setOpen(false) }}
            className="mt-2 bg-cement-900 text-white px-5 py-2 font-heading font-bold uppercase tracking-wider text-sm"
          >
            Get Quote
          </button>
          <div className="border-t border-cement-100 pt-3 flex flex-col gap-2 text-xs text-cement-500">
            {phoneNumbers.map(number => (
              <a key={number} href={`tel:${number.replace(/\s+/g, '')}`} className="block">
                {number}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
