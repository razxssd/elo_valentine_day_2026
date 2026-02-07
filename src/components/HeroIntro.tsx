import { motion } from "framer-motion";

export default function HeroIntro() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(244,114,182,0.15)_0%,_transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.p
          className="text-pink-300/80 text-sm tracking-[0.3em] uppercase mb-6 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Una storia d&apos;amore
        </motion.p>

        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
        >
          La Nostra
          <br />
          <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-pink-400 bg-clip-text text-transparent">
            Storia
          </span>
        </motion.h1>

        <motion.p
          className="text-pink-200/60 text-lg md:text-xl max-w-md mx-auto font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
        >
          Ogni momento con te è un capitolo che non vorrei mai smettere di scrivere.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="text-pink-300/50 text-xs tracking-widest uppercase">Scorri</span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-pink-300/30 flex justify-center pt-1"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-pink-300/50 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
