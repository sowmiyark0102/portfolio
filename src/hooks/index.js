import { useState, useEffect, useRef } from 'react'

// Hook for scroll-based section detection
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observers = []
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [sectionIds])

  return activeSection
}

// Hook for mouse tilt effect on cards
export function useTilt(strength = 15) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * strength, y: -x * strength })
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ x: 0, y: 0 })
  }

  return {
    ref,
    tilt,
    isHovered,
    handlers: { onMouseMove: handleMouseMove, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
  }
}

// Typing animation hook
export function useTypingAnimation(texts, speed = 80, pause = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    let timeout

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed)
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setTextIndex((t) => (t + 1) % texts.length)
    }

    setDisplayText(currentText.substring(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts, speed, pause])

  return displayText
}
