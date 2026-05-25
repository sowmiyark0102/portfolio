import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const followerPos = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return

    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    cursor.style.opacity = '1'
    follower.style.opacity = '1'

    const onMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    const animate = () => {
      followerPos.current.x += (pos.current.x - followerPos.current.x) * 0.1
      followerPos.current.y += (pos.current.y - followerPos.current.y) * 0.1
      follower.style.left = `${followerPos.current.x}px`
      follower.style.top = `${followerPos.current.y}px`
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    const onMouseOver = (e) => {
      const interactive = e.target.closest('a, button, [data-cursor="pointer"], input, textarea, select')
      if (interactive) {
        cursor.classList.add('hovering')
        follower.classList.add('hovering')
      } else {
        cursor.classList.remove('hovering')
        follower.classList.remove('hovering')
      }
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div
        id="custom-cursor"
        ref={cursorRef}
        style={{ opacity: 0, transform: 'translate(-50%, -50%)', position: 'fixed', pointerEvents: 'none', zIndex: 9999 }}
      />
      <div
        id="cursor-follower"
        ref={followerRef}
        style={{ opacity: 0, transform: 'translate(-50%, -50%)', position: 'fixed', pointerEvents: 'none', zIndex: 9998 }}
      />
    </>
  )
}
