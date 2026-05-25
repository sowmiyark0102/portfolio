import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Code2, Brain } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

const STATS = [
  { value: '8.7', label: 'CGPA', suffix: '/10' },
  { value: '6+', label: 'AI Projects', suffix: '' },
  { value: '3+', label: 'Internships', suffix: '' },
  { value: '1+', label: 'Years Coding', suffix: '' },
]

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background orb */}
      <div
        className="orb absolute"
        style={{
          width: '400px', height: '400px',
          top: '50%', right: '-100px',
          transform: 'translateY(-50%)',
          background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="section-label">About Me</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} custom={1} className="section-title">
            Crafting Intelligence,<br />
            <span className="gradient-text">One System at a Time</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <motion.p variants={fadeInUp} className="text-lg text-slate-300 leading-relaxed">
              A passionate{' '}
              <span className="gradient-text font-semibold">Computer Science Engineering student</span>{' '}
              with deep expertise in AI, Machine Learning, NLP, and Full Stack Development.
            </motion.p>
            <motion.p variants={fadeInUp} custom={1} className="text-slate-400 leading-relaxed">
              I build scalable, intelligent, real-world applications — from AI-powered resume analyzers to emotion-detecting chatbots. My work sits at the intersection of cutting-edge AI research and practical software engineering.
            </motion.p>
            <motion.p variants={fadeInUp} custom={2} className="text-slate-400 leading-relaxed">
              Currently pursuing my degree at{' '}
              <span className="text-indigo-400 font-medium">JNN Institute of Engineering</span>, I'm focused on building systems that make a tangible difference — and having a great time doing it.
            </motion.p>

            {/* Info pills */}
            <motion.div variants={fadeInUp} custom={3} className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: GraduationCap, text: 'JNN Institute of Engineering' },
                { icon: MapPin, text: 'Tamil Nadu, India' },
                { icon: Code2, text: 'CSE Student' },
                { icon: Brain, text: 'AI Enthusiast' },
              ].map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="flex items-center gap-2 text-sm text-slate-400 px-3 py-2 rounded-lg"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <Icon size={14} className="text-indigo-400" />
                  {text}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Stats grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map(({ value, label, suffix }, i) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                custom={i}
                className="card-base p-6 text-center group cursor-default"
                whileHover={{ y: -4 }}
              >
                <div
                  className="text-4xl font-bold mb-2 transition-all duration-300"
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    background: 'linear-gradient(135deg, #818cf8, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {value}
                  <span className="text-xl">{suffix}</span>
                </div>
                <div className="text-sm text-slate-500 font-medium">{label}</div>
              </motion.div>
            ))}

            {/* Feature card */}
            <motion.div
              variants={fadeInUp}
              custom={4}
              className="col-span-2 p-6 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(168,85,247,0.05) 100%)',
                border: '1px solid rgba(99,102,241,0.2)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ background: 'rgba(99,102,241,0.2)' }}
                >
                  🎯
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-200 mb-1">Current Focus</div>
                  <div className="text-sm text-slate-400 leading-relaxed">
                    Building production-grade AI systems with LLMs, NLP pipelines, and full-stack architectures that scale.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
