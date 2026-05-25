import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { NAV_LINKS } from '../data/portfolio'
import { useActiveSection } from '../hooks'

export default function Navbar({ darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''))
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 2.2 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`mx-auto max-w-6xl px-6 flex items-center justify-between rounded-2xl transition-all duration-500 ${
            scrolled
              ? 'glass border border-white/5 py-3 px-6 shadow-2xl shadow-black/30'
              : ''
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            className="flex items-center gap-3 group"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm transition-all duration-300 group-hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                boxShadow: '0 0 20px rgba(99,102,241,0.4)',
              }}
            >
              S
            </div>
            <span className="font-bold text-slate-200 text-sm tracking-wide hidden sm:block" style={{ fontFamily: 'Syne, sans-serif' }}>
              Sowmiya<span className="gradient-text-brand"> R K</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive ? 'text-indigo-400' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)' }}
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              )
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDark}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-200 transition-colors"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <motion.a
              href="mailto:rksowmiya17@jnn.edu.in"
              className="hidden md:flex btn-primary text-xs py-2 px-4"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Hire Me
            </motion.a>

            {/* Mobile menu button */}
            <button
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-200"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 inset-x-4 z-40 rounded-2xl p-4 flex flex-col gap-1"
            style={{
              background: 'rgba(13,13,20,0.95)',
              border: '1px solid rgba(255,255,255,0.06)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.href)}
                className="text-left px-4 py-3 rounded-xl text-slate-300 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all text-sm font-medium"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
