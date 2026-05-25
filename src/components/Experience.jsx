import { motion } from 'framer-motion'
import { EXPERIENCE } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="orb absolute"
        style={{
          width: '400px', height: '400px',
          top: '20%', left: '-100px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-4">
            <span className="section-label">Experience</span>
          </div>
          <h2 className="section-title">
            My{' '}
            <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.4) 10%, rgba(99,102,241,0.4) 90%, transparent)',
              transform: 'translateX(-50%)',
            }}
          />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-5 z-10 flex-shrink-0"
                    style={{
                      background: exp.color,
                      boxShadow: `0 0 12px ${exp.color}80`,
                    }}
                  />

                  {/* Card — mobile offset, desktop half-width */}
                  <div className={`pl-12 md:pl-0 w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="card-base p-5 group"
                    >
                      {/* Top */}
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span
                            className="text-xs font-semibold px-2 py-0.5 rounded-full font-mono"
                            style={{ background: `${exp.color}18`, color: exp.color, border: `1px solid ${exp.color}30` }}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <span className="text-xs text-slate-600 font-mono">{exp.period}</span>
                      </div>

                      <h3
                        className="font-bold text-slate-100 mb-0.5"
                        style={{ fontFamily: 'Syne, sans-serif' }}
                      >
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium mb-3" style={{ color: exp.color }}>
                        {exp.company}
                      </p>
                      <p className="text-sm text-slate-500 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((s) => (
                          <span
                            key={s}
                            className="text-xs px-2 py-0.5 rounded-md text-slate-500 font-mono"
                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
