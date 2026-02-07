import { useEffect, useState } from "react";

export function useHeartbeat(bpm = 72) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = (60 / bpm) * 1000;
    let frame: number;

    const beat = () => {
      setScale(1.15);
      setTimeout(() => setScale(1.05), interval * 0.15);
      setTimeout(() => setScale(1.12), interval * 0.3);
      setTimeout(() => setScale(1), interval * 0.5);
      frame = window.setTimeout(beat, interval);
    };

    beat();
    return () => clearTimeout(frame);
  }, [bpm]);

  return scale;
}
