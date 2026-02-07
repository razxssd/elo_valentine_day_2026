import { motion } from "framer-motion";
import type { Memory } from "../data/memories";

export default function MemoryCard({
  memory,
  index,
}: {
  memory: Memory;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`flex items-center gap-6 md:gap-10 ${
        isEven ? "flex-row" : "flex-row-reverse"
      }`}
      initial={{
        opacity: 0,
        x: isEven ? -60 : 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {/* Timeline dot */}
      <div className="hidden md:flex flex-col items-center gap-2 flex-shrink-0">
        <motion.div
          className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-300 to-rose-400"
          whileInView={{ scale: [0, 1.3, 1] }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
        <div className="w-px h-20 bg-gradient-to-b from-pink-300/40 to-transparent" />
      </div>

      {/* Card */}
      <motion.div
        className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 flex-1 overflow-hidden"
        whileHover={{ scale: 1.02, borderColor: "rgba(244, 114, 182, 0.3)" }}
        transition={{ duration: 0.3 }}
      >
        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3">
            <div>
              <span className="text-2xl mb-2 block">{memory.emoji}</span>
              <h3 className="font-serif text-xl md:text-2xl text-white">
                {memory.title}
              </h3>
            </div>
          </div>

          {memory.date && (
            <p className="text-pink-300/50 text-xs tracking-widest uppercase mb-3">
              {memory.date}
            </p>
          )}

          <p className="text-pink-100/70 leading-relaxed text-sm md:text-base">
            {memory.text}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
