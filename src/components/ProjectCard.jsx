import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, X, ExternalLink, ChevronRight } from 'lucide-react'
import { useTilt } from '../hooks'

export function ProjectCard({ project, index }) {
  const [modalOpen, setModalOpen] = useState(false)
  const { ref, tilt, isHovered, handlers } = useTilt(12)

  return (
    <>
      <motion.div
        ref={ref}
        {...handlers}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setModalOpen(true)}
        data-cursor="pointer"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? 'scale(1.02)' : 'scale(1)'}`,
          transition: isHovered ? 'transform 0.1s ease' : 'transform 0.4s ease',
        }}
        className="card-base cursor-pointer overflow-hidden group"
      >
        {/* Glow border on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${project.color}30, transparent)`,
            boxShadow: `inset 0 0 1px ${project.color}60`,
          }}
        />

        {/* Top accent line */}
        <div
          className="h-px w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
        />

        <div className="p-6 relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
              style={{ background: `${project.color}15`, border: `1px solid ${project.color}25` }}
            >
              {project.icon}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              style={{ color: project.color }}
            >
              <ChevronRight size={18} />
            </motion.div>
          </div>

          {/* Title */}
          <h3
            className="font-bold text-slate-100 mb-2 text-base leading-tight transition-colors duration-200 group-hover:text-white"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            {project.title}
          </h3>

          {/* Short description */}
          <p className="text-sm text-slate-500 leading-relaxed mb-5">
            {project.short}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-md font-mono text-slate-500"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-xs px-2 py-1 rounded-md font-mono text-slate-600">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <ProjectModal project={project} onClose={() => setModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(5,5,7,0.85)', backdropFilter: 'blur(12px)' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl"
        style={{
          background: '#0D0D14',
          border: `1px solid ${project.color}30`,
          boxShadow: `0 40px 80px rgba(0,0,0,0.6), 0 0 40px ${project.color}20`,
        }}
      >
        {/* Header */}
        <div
          className="p-6 border-b"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                style={{ background: `${project.color}15`, border: `1px solid ${project.color}25` }}
              >
                {project.icon}
              </div>
              <div>
                <h2
                  className="text-xl font-bold text-slate-100"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-md font-mono"
                      style={{
                        background: `${project.color}15`,
                        color: project.color,
                        border: `1px solid ${project.color}25`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all flex-shrink-0"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-3">Overview</h3>
            <p className="text-slate-300 leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-400">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: project.color }}
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-0 flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary flex-1 justify-center text-sm py-3"
          >
            <Github size={16} />
            View on GitHub
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onClose}
            className="btn-ghost px-5 py-3 text-sm"
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
