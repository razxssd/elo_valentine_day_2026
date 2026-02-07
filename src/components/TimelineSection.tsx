import { motion } from "framer-motion";
import { memories } from "../data/memories";
import MemoryCard from "./MemoryCard";

export default function TimelineSection() {
  return (
    <section className="relative min-h-screen px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-3xl mb-3 block">📸</span>
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-3">
          I Nostri Momenti
        </h2>
        <p className="text-pink-300/60 text-sm tracking-widest uppercase">
          Ogni ricordo racconta qualcosa di noi
        </p>
      </motion.div>

      {/* Timeline line */}
      <div className="relative max-w-2xl mx-auto">
        <div className="space-y-12 md:space-y-16">
          {memories
            .filter((m) => m.type !== "chat")
            .map((memory, i) => (
              <MemoryCard key={memory.id} memory={memory} index={i} />
            ))}
        </div>
      </div>
    </section>
  );
}
