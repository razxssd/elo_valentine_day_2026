import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { chatMessages } from "../data/memories";

function ChatBubble({
  sender,
  text,
  delay,
}: {
  sender: string;
  text: string;
  delay: number;
}) {
  const isMe = sender === "me";

  return (
    <motion.div
      className={`flex ${isMe ? "justify-end" : "justify-start"}`}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: delay * 0.15,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <div
        className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm md:text-base ${
          isMe
            ? "bg-gradient-to-br from-pink-400 to-rose-400 text-white rounded-br-sm"
            : "bg-white/10 text-pink-100 rounded-bl-sm backdrop-blur-sm"
        }`}
      >
        {text}
      </div>
    </motion.div>
  );
}

export default function ChatReplay() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <span className="text-3xl mb-3 block">💬</span>
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-3">
          L&apos;Inizio
        </h2>
        <p className="text-pink-300/60 text-sm tracking-widest uppercase">
          Il nostro primo messaggio
        </p>
      </motion.div>

      <div className="w-full max-w-md space-y-3">
        {isVisible &&
          chatMessages.map((msg, i) => (
            <ChatBubble
              key={i}
              sender={msg.sender}
              text={msg.text}
              delay={i}
            />
          ))}
      </div>

      {/* Typing indicator at the end */}
      <motion.div
        className="mt-4 flex justify-start w-full max-w-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 bg-pink-300/60 rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      </motion.div>

      <motion.p
        className="mt-8 text-pink-200/40 text-sm italic text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2, duration: 1 }}
      >
        ...e da quel momento non abbiamo mai smesso di parlarci
      </motion.p>
    </section>
  );
}
