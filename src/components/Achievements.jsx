import { motion } from 'framer-motion'
import { ACHIEVEMENTS } from '../data/portfolio'

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      <div
        className="orb absolute"
        style={{
          width: '500px', height: '500px',
          bottom: '-100px', right: '-100px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-4">
            <span className="section-label">Achievements</span>
          </div>
          <h2 className="section-title">
            Milestones &{' '}
            <span className="gradient-text">Recognition</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map(({ icon, title, description, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="card-base p-6 group cursor-default"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${color}12`, border: `1px solid ${color}25` }}
              >
                {icon}
              </div>

              <h3
                className="font-bold text-slate-100 mb-2 text-sm"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {description}
              </p>

              {/* Bottom accent */}
              <div
                className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
