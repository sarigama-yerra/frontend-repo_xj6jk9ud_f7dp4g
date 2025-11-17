import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Product', href: '#features' },
    { name: 'Use cases', href: '#use-cases' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Docs', href: '#docs' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-purple-500 to-fuchsia-500 shadow-lg shadow-purple-500/30" />
          <span className="text-white font-semibold tracking-tight">Orbiflow</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.name} href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
              {l.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-white/80 hover:text-white">Sign in</a>
          <a href="#cta" className="text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 px-3.5 py-2 rounded-md shadow-lg shadow-purple-600/30 transition-colors">
            Get started
          </a>
        </div>

        <button className="md:hidden grid place-items-center h-10 w-10 rounded-md bg-white/5 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="block text-white/80 hover:text-white py-1">
                {l.name}
              </a>
            ))}
            <div className="pt-2 flex gap-3">
              <a href="#" className="text-sm text-white/80 hover:text-white">Sign in</a>
              <a href="#cta" className="text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 px-3 py-2 rounded-md shadow-lg shadow-purple-600/30 transition-colors">
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
