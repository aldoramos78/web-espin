"use client";
import React, { useRef, useEffect } from "react";
import { animate, useInView } from "framer-motion";

export function Counter({ from, to, duration = 1.5, decimals = 0 }: { from: number, to: number, duration?: number, decimals?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: false, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = value.toFixed(decimals);
          }
        },
      });
      return () => controls.stop();
    } else {
      if (nodeRef.current) {
        nodeRef.current.textContent = from.toFixed(decimals);
      }
    }
  }, [from, to, duration, decimals, inView]);

  return <span ref={nodeRef}>{from.toFixed(decimals)}</span>;
}
