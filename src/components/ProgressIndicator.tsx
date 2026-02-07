import { motion, useScroll, useSpring } from "framer-motion";

export default function ProgressIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      {/* Track */}
      <div className="w-1 h-32 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="w-full bg-gradient-to-b from-pink-400 to-rose-400 rounded-full origin-top"
          style={{ scaleY, height: "100%" }}
        />
      </div>

      {/* Heart at current position */}
      <motion.div
        className="absolute -left-2 text-xs"
        style={{
          top: scrollYProgress as unknown as string,
        }}
      >
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          💗
        </motion.span>
      </motion.div>
    </div>
  );
}
