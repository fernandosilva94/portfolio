import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contato', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(() =>
    typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#hero" className="text-white font-bold text-lg tracking-wide">
          Fernando Silva
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-teal-400 transition-colors text-sm uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="text-gray-300 hover:text-teal-400 text-xl transition-colors cursor-pointer"
            aria-label="Alternar modo escuro"
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>

        <button
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4 py-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-teal-400 transition-colors text-sm uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setDark(!dark)}
              className="text-gray-300 hover:text-teal-400 text-xl transition-colors cursor-pointer"
              aria-label="Alternar modo escuro"
            >
              {dark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
