import { motion } from "framer-motion";
import { specialTraits } from "../data/memories";

export default function SpecialTraits() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background gradient shift */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(244,114,182,0.1)_0%,_transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <span className="text-3xl mb-3 block">✨</span>
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-3">
          Perché Sei Speciale
        </h2>
        <p className="text-pink-300/60 text-sm tracking-widest uppercase">
          Le cose che amo di te
        </p>
      </motion.div>

      {/* Traits grid */}
      <div className="relative z-10 max-w-2xl mx-auto w-full">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {specialTraits.map((trait, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(244, 114, 182, 0.15)",
              }}
              className="bg-white/5 backdrop-blur-sm border border-pink-300/15 rounded-full px-5 py-2.5 md:px-6 md:py-3 cursor-default"
            >
              <span className="text-pink-100/80 text-sm md:text-base font-light">
                {trait}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating whisper */}
      <motion.p
        className="mt-16 text-pink-200/30 text-sm italic text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5, duration: 1.5 }}
      >
        ...e potrei continuare all&apos;infinito
      </motion.p>
    </section>
  );
}
