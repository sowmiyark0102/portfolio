import { useState, useEffect } from 'react'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div className={`relative min-h-screen noise-bg ${darkMode ? 'dark' : ''}`} style={{ background: '#050507' }}>
      <Cursor />
      <Loader isLoading={isLoading} />

      {!isLoading && (
        <>
          <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(!darkMode)} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
