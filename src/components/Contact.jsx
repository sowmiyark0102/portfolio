import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, Send, CheckCircle } from 'lucide-react'

const CONTACT_INFO = [
  { icon: Mail, label: 'Email', value: 'rksowmiya17@jnn.edu.in', href: 'mailto:rksowmiya17@jnn.edu.in' },
  { icon: Phone, label: 'Phone', value: '+91 7708620111', href: 'tel:+917708620111' },
  { icon: Github, label: 'GitHub', value: 'sowmiyark0102', href: 'https://github.com/sowmiyark0102' },
  { icon: Linkedin, label: 'LinkedIn', value: 'sowmiyark02', href: 'https://linkedin.com/in/sowmiyark02' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState(null)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mailto fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:rksowmiya17@jnn.edu.in?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="orb absolute"
        style={{
          width: '600px', height: '600px',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
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
            <span className="section-label">Contact</span>
          </div>
          <h2 className="section-title">
            Let's{' '}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-md mx-auto">
            Open to internships, collaborations, and exciting AI projects. Let's build something remarkable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-4"
          >
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-xl transition-all group"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.25)' }}
                >
                  <Icon size={16} className="text-indigo-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-600 uppercase tracking-wider mb-0.5">{label}</div>
                  <div className="text-sm text-slate-300 font-medium group-hover:text-indigo-400 transition-colors">
                    {value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 p-4 rounded-xl"
              style={{
                background: 'rgba(16,185,129,0.08)',
                border: '1px solid rgba(16,185,129,0.2)',
              }}
            >
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <div
                  className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60"
                  style={{ animationDuration: '2s' }}
                />
              </div>
              <span className="text-sm text-emerald-400 font-medium">Available for opportunities</span>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-2xl space-y-5"
              style={{ background: 'rgba(13,13,20,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {[
                { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Jane Smith' },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={form[name]}
                    onChange={(e) => setForm({ ...form, [name]: e.target.value })}
                    onFocus={() => setFocused(name)}
                    onBlur={() => setFocused(null)}
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: focused === name
                        ? '1px solid rgba(99,102,241,0.6)'
                        : '1px solid rgba(255,255,255,0.07)',
                      boxShadow: focused === name ? '0 0 0 3px rgba(99,102,241,0.1)' : 'none',
                    }}
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-200 resize-none"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: focused === 'message'
                      ? '1px solid rgba(99,102,241,0.6)'
                      : '1px solid rgba(255,255,255,0.07)',
                    boxShadow: focused === 'message' ? '0 0 0 3px rgba(99,102,241,0.1)' : 'none',
                  }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full justify-center py-3.5"
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} />
                    Opening your mail client...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
