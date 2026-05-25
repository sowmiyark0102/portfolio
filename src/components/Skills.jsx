import { motion } from 'framer-motion'
import { SKILLS } from '../data/portfolio'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="orb absolute"
        style={{
          width: '500px', height: '500px',
          top: '50%', left: '-150px',
          transform: 'translateY(-50%)',
          background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="section-label">Skills</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} custom={1} className="section-title">
            Technologies I{' '}
            <span className="gradient-text">Master</span>
          </motion.h2>
          <motion.p variants={fadeInUp} custom={2} className="mt-4 text-slate-400 max-w-xl mx-auto">
            A curated set of tools and technologies I use to build intelligent, scalable applications.
          </motion.p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([category, { icon, color, items }], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card-base p-6 group"
              whileHover={{ y: -4 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold font-mono transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${color}18`,
                    color: color,
                    border: `1px solid ${color}30`,
                  }}
                >
                  {icon}
                </div>
                <span
                  className="text-sm font-semibold"
                  style={{ color }}
                >
                  {category}
                </span>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + i * 0.06 }}
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: `${color}20`,
                      borderColor: `${color}50`,
                      color: color,
                    }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 transition-all duration-200 cursor-default"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar — decorative proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(168,85,247,0.05) 100%)',
            border: '1px solid rgba(99,102,241,0.15)',
          }}
        >
          <p className="text-slate-300 font-medium mb-2">
            Always learning, always building
          </p>
          <p className="text-slate-500 text-sm">
            Continuously expanding my skill set across AI, cloud, and modern web development.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
