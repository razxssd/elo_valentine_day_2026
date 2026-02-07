import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const heartsData = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  size: 10 + Math.random() * 18,
  duration: 6 + Math.random() * 8,
  delay: Math.random() * 5,
  opacity: 0.15 + Math.random() * 0.2,
}));

export default function FloatingHearts() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!height) return null;

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {heartsData.map((h) => (
        <motion.div
          key={h.id}
          className="absolute text-pink-300"
          style={{
            left: `${h.x}%`,
            fontSize: h.size,
            bottom: -30,
          }}
          animate={{
            y: [0, -height - 100],
            x: [0, Math.sin(h.id) * 40],
            opacity: [0, h.opacity, h.opacity, 0],
            rotate: [0, h.id % 2 === 0 ? 20 : -20],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          &#x2665;
        </motion.div>
      ))}
    </div>
  );
}
