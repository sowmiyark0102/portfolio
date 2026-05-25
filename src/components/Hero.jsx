import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { useTypingAnimation } from '../hooks'

const TAGLINES = [
  'Building intelligent AI systems.',
  'Crafting full-stack experiences.',
  'Solving real-world problems.',
  'Turning data into decisions.',
]

export default function Hero() {
  const typed = useTypingAnimation(TAGLINES, 75, 2200)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated mesh background */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient orbs */}
        <div
          className="orb mesh-gradient"
          style={{
            width: '600px', height: '600px',
            top: '-100px', left: '-150px',
            background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)',
          }}
        />
        <div
          className="orb"
          style={{
            width: '500px', height: '500px',
            bottom: '-50px', right: '-100px',
            background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)',
            animation: 'mesh-move 15s ease-in-out infinite reverse',
          }}
        />
        <div
          className="orb"
          style={{
            width: '400px', height: '400px',
            top: '40%', left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
            animation: 'mesh-move 25s ease-in-out infinite',
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99,102,241,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99,102,241,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Radial vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, rgba(5,5,7,0.9) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="section-label">
            <Sparkles size={12} />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <span className="text-slate-100">Sowmiya</span>
            <br />
            <span className="gradient-text">R K</span>
          </h1>
        </motion.div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.9 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-500/60" />
          <p className="text-base md:text-lg text-slate-400 font-medium tracking-widest uppercase font-mono">
            AI Engineer · Full Stack Developer
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-indigo-500/60" />
        </motion.div>

        {/* Typing tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.1 }}
          className="h-12 flex items-center justify-center mb-12"
        >
          <p className="text-xl md:text-2xl text-slate-300 font-light">
            <span>{typed}</span>
            <span className="typing-cursor" />
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-sm px-7 py-3.5"
          >
            View Projects
            <ArrowDown size={15} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-ghost text-sm px-7 py-3.5"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.5 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: 'https://github.com/sowmiyark0102', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/sowmiyark02', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:rksowmiya17@jnn.edu.in', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-colors"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
              aria-label={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-slate-600"
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      {/* Floating stats */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.6, duration: 0.6 }}
        className="absolute left-8 bottom-32 hidden xl:flex flex-col gap-4"
      >
        {[
          { value: '6+', label: 'AI Projects' },
          { value: '8.7', label: 'CGPA' },
          { value: '3+', label: 'Internships' },
        ].map(({ value, label }) => (
          <div key={label} className="flex flex-col">
            <span className="text-2xl font-bold gradient-text-brand" style={{ fontFamily: 'Syne, sans-serif' }}>
              {value}
            </span>
            <span className="text-xs text-slate-500">{label}</span>
          </div>
        ))}
      </motion.div>

      {/* Tech stack floating */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.6, duration: 0.6 }}
        className="absolute right-8 bottom-32 hidden xl:flex flex-col gap-2 items-end"
      >
        {['Python', 'React', 'Node.js', 'ML/AI', 'NLP'].map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3.8 + i * 0.1 }}
            className="text-xs font-mono text-slate-500 px-3 py-1 rounded-full"
            style={{ border: '1px solid rgba(255,255,255,0.05)' }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}
