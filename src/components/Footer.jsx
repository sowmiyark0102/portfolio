import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-12 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
              style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
            >
              S
            </div>
            <span className="text-slate-400 text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>
              Sowmiya R K
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-600 flex items-center gap-1.5">
            Built with <Heart size={12} className="text-indigo-500" fill="currentColor" /> by Sowmiya · {new Date().getFullYear()}
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/sowmiyark0102' },
              { icon: Linkedin, href: 'https://linkedin.com/in/sowmiyark02' },
              { icon: Mail, href: 'mailto:rksowmiya17@jnn.edu.in' },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.1 }}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-indigo-400 transition-colors"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
