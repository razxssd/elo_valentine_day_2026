import { motion } from "framer-motion";
import { distanceInfo } from "../data/memories";

export default function MapDistance() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(244,114,182,0.08)_0%,_transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <span className="text-3xl mb-3 block">🌍</span>
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-3">
          La Distanza
        </h2>
        <p className="text-pink-300/60 text-sm tracking-widest uppercase">
          Lontani ma mai separati
        </p>
      </motion.div>

      {/* Distance visualization */}
      <div className="relative w-full max-w-lg mx-auto z-10">
        {/* Cities */}
        <div className="flex items-center justify-between mb-8">
          {/* City A */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-pink-400/20 to-rose-400/20 border border-pink-300/30 flex items-center justify-center mb-3 mx-auto"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(244, 114, 182, 0)",
                  "0 0 20px 10px rgba(244, 114, 182, 0.15)",
                  "0 0 0 0 rgba(244, 114, 182, 0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-2xl md:text-3xl">🏙️</span>
            </motion.div>
            <p className="text-white font-serif text-lg md:text-xl">
              {distanceInfo.cityA}
            </p>
          </motion.div>

          {/* Animated line between */}
          <div className="flex-1 mx-4 relative">
            <div className="h-px bg-pink-300/10 w-full" />
            <motion.div
              className="absolute top-0 left-0 h-px bg-gradient-to-r from-pink-400 to-rose-400"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />

            {/* Flying heart */}
            <motion.div
              className="absolute -top-3 text-lg"
              initial={{ left: "0%", opacity: 0 }}
              whileInView={{
                left: ["0%", "100%"],
                opacity: [0, 1, 1, 0],
              }}
              viewport={{ once: true }}
              transition={{ duration: 3, delay: 0.8, ease: "easeInOut" }}
            >
              💕
            </motion.div>

            {/* Distance label */}
            <motion.p
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-pink-300/70 text-xs font-light tracking-wider whitespace-nowrap"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              {distanceInfo.distance}
            </motion.p>
          </div>

          {/* City B */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-pink-400/20 to-rose-400/20 border border-pink-300/30 flex items-center justify-center mb-3 mx-auto"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(244, 114, 182, 0)",
                  "0 0 20px 10px rgba(244, 114, 182, 0.15)",
                  "0 0 0 0 rgba(244, 114, 182, 0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <span className="text-2xl md:text-3xl">🗼</span>
            </motion.div>
            <p className="text-white font-serif text-lg md:text-xl">
              {distanceInfo.cityB}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Message */}
      <motion.p
        className="mt-16 text-pink-100/60 text-center text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto italic relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2, duration: 1 }}
      >
        &ldquo;{distanceInfo.message}&rdquo;
      </motion.p>
    </section>
  );
}
