import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9997] flex flex-col items-center justify-center"
          style={{ background: '#050507' }}
        >
          {/* Animated rings */}
          <div className="relative w-24 h-24 flex items-center justify-center mb-8">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border"
                style={{
                  width: `${(i + 1) * 32}px`,
                  height: `${(i + 1) * 32}px`,
                  borderColor: `rgba(99, 102, 241, ${0.8 - i * 0.25})`,
                  borderTopColor: 'transparent',
                  borderRightColor: 'transparent',
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.2 + i * 0.4,
                  repeat: Infinity,
                  ease: 'linear',
                  direction: i % 2 === 0 ? 'normal' : 'reverse',
                }}
              />
            ))}
            <div className="w-3 h-3 rounded-full bg-indigo-500" style={{ boxShadow: '0 0 20px #6366f1' }} />
          </div>

          <motion.div
            className="flex items-center gap-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span
              className="text-2xl font-bold tracking-tight"
              style={{ fontFamily: 'Syne, sans-serif', background: 'linear-gradient(135deg, #818cf8, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Sowmiya R K
            </span>
          </motion.div>

          <motion.p
            className="mt-3 text-sm text-slate-500 font-mono tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            INITIALIZING...
          </motion.p>

          {/* Progress bar */}
          <div className="absolute bottom-12 w-48 h-px bg-slate-800 overflow-hidden rounded-full">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #6366f1, #a855f7)' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
