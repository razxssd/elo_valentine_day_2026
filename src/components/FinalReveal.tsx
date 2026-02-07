import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useHeartbeat } from "../hooks/useHeartbeat";

function fireConfetti() {
  const duration = 4000;
  const end = Date.now() + duration;

  const colors = ["#f9a8d4", "#f472b6", "#ec4899", "#fda4af", "#fecdd3"];

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  frame();

  // Big burst
  confetti({
    particleCount: 100,
    spread: 100,
    origin: { y: 0.6 },
    colors,
  });
}

function RunawayButton({ onAttempt }: { onAttempt: () => void }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const runAway = useCallback(() => {
    onAttempt();
    const x = (Math.random() - 0.5) * 250;
    const y = (Math.random() - 0.5) * 200;
    setPos({ x, y });
  }, [onAttempt]);

  return (
    <motion.button
      className="px-10 py-4 border border-white/20 text-pink-200/60 font-medium rounded-full text-lg cursor-pointer"
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      onMouseEnter={runAway}
      onTouchStart={runAway}
      whileHover={{ scale: 0.95 }}
    >
      Non sono sicura...
    </motion.button>
  );
}

export default function FinalReveal() {
  const [answered, setAnswered] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const heartScale = useHeartbeat(60);

  const yesScale = Math.min(1 + attempts * 0.15, 2.5);

  const handleYes = () => {
    setAnswered(true);
    fireConfetti();
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Dark overlay for cinematic feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50" />

      {/* Heart glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(244,114,182,0.12)_0%,_transparent_50%)]" />

      <AnimatePresence mode="wait">
        {!answered ? (
          <motion.div
            key="question"
            className="relative z-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            {/* Heartbeat icon */}
            <motion.div
              className="text-6xl md:text-7xl mb-8"
              style={{ scale: heartScale }}
            >
              💖
            </motion.div>

            <motion.p
              className="text-pink-300/60 text-sm tracking-widest uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              La domanda più importante
            </motion.p>

            <motion.h2
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
            >
              Vuoi essere la mia
              <br />
              <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-pink-400 bg-clip-text text-transparent">
                Valentine?
              </span>
            </motion.h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 min-h-[120px]">
              {/* Yes button - grows with each "no" attempt */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.8, duration: 0.8 }}
              >
              <motion.button
                onClick={handleYes}
                className="relative group px-10 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white font-medium rounded-full text-lg shadow-lg shadow-pink-500/25 overflow-hidden cursor-pointer"
                animate={{ scale: yesScale }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                whileHover={{ scale: yesScale * 1.05, boxShadow: "0 0 40px rgba(244, 114, 182, 0.4)" }}
                whileTap={{ scale: yesScale * 0.95 }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="relative z-10">Sì, lo voglio! 💕</span>
              </motion.button>
              </motion.div>

              {/* Runaway no button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.8, duration: 0.8 }}
              >
                <RunawayButton onAttempt={() => setAttempts((a) => a + 1)} />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="answer"
            className="relative z-10 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="text-7xl md:text-8xl mb-8"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💖
            </motion.div>

            <motion.h2
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Ti Amo
              <br />
              <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-pink-400 bg-clip-text text-transparent">
                Infinitamente
              </span>
            </motion.h2>

            <motion.p
              className="text-pink-200/60 text-lg md:text-xl font-light max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              Sei la cosa più bella che mi sia mai capitata. Grazie di esistere. ❤️
            </motion.p>

            {/* Extra hearts floating up */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl"
                style={{
                  left: `${15 + Math.random() * 70}%`,
                  bottom: "20%",
                }}
                animate={{
                  y: [0, -300],
                  opacity: [1, 0],
                  scale: [0.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
              >
                {["💖", "💕", "💗", "💝", "🌸"][i % 5]}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
