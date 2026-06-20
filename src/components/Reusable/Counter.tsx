import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

// Reusable Counter Component
export default function Counter({ from = 0, to = 0, duration = 2 }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Validate inputs
    const start = typeof from === "number" ? from : 0;
    const end = typeof to === "number" ? to : 0;
    const safeDuration = typeof duration === "number" && duration > 0 ? duration : 2;

    // If no change needed, render the final value
    if (start === end) {
      if (ref.current) ref.current.textContent = end.toString();
      return;
    }

    // Animate number counting
    const controls = animate(start, end, {
      duration: safeDuration,
      onUpdate(value) {
        if (ref.current) ref.current.textContent = Math.floor(value).toString();
      }
    });

    // Cleanup
    return () => controls.stop();
  }, [from, to, duration]);

  return (
    <span ref={ref} style={{ fontWeight: "bold" }}>
      {from}
    </span>
  );
}
