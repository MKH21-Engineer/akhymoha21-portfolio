'use client'
import { useEffect, useState, startTransition } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    // startTransition tells React this is a non-urgent update,
    // preventing the "cascading renders" warning in React 19
    startTransition(() => setMounted(true))

    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between
      transition-all duration-300 backdrop-blur-xl
      ${scrolled ? 'border-b border-neutral-800 bg-[#0a0a0a]/80' : ''}`}>
      <Link href="/" className="text-sm font-medium tracking-tight text-neutral-100">
        akhymoha21
      </Link>
      <div className="flex items-center gap-8">
        {['Work','Case Studies','About','Contact'].map(item => (
          <a key={item}
            href={`#${item.toLowerCase().replace(' ','-')}`}
            className="hidden md:block text-xs text-neutral-400 hover:text-neutral-100 transition-colors tracking-wide">
            {item}
          </a>
        ))}
        {/* suppressHydrationWarning prevents the server/client mismatch error
            on the theme label — next-themes resolves theme only on the client */}
        <button
          suppressHydrationWarning
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-xs text-neutral-400 hover:text-neutral-100 border border-neutral-700
            hover:border-neutral-500 px-3 py-1.5 rounded-md transition-all">
          {mounted ? (theme === 'dark' ? '☀ Light' : '☾ Dark') : '☀ Light'}
        </button>
      </div>
    </nav>
  )
}