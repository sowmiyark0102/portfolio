import { motion } from 'framer-motion'
import { PROJECTS } from '../data/portfolio'
import { ProjectCard } from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="orb absolute"
        style={{
          width: '600px', height: '600px',
          top: '50%', right: '-200px',
          transform: 'translateY(-50%)',
          background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)',
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
            <span className="section-label">Projects</span>
          </div>
          <h2 className="section-title">
            Things I've{' '}
            <span className="gradient-text">Built</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 max-w-xl mx-auto"
          >
            Production-grade AI and full-stack projects. Click any card to explore details.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/sowmiyark0102"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-ghost inline-flex items-center gap-2"
          >
            View all on GitHub →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
