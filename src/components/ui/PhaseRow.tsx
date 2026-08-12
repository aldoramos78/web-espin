"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function PhaseRow({ phase }: { phase: { id: string, title: string, desc: string } }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "end 10%"] });
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.2, 1, 1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.95, 1, 1, 0.95]);
  const numOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.2, 1, 1, 0.2]); 
  const textColor = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["#52525b", "#ffffff", "#ffffff", "#52525b"]); 

  return (
    <motion.div ref={ref} style={{ opacity, scale }} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-24 py-10 md:py-20 border-t border-zinc-900 group">
      <motion.div style={{ WebkitTextStroke: "2px #F5B700", color: "transparent", opacity: numOpacity }} className="font-michroma text-6xl md:text-8xl leading-none">
        {phase.id}
      </motion.div>
      <div className="flex-1 mt-2 md:mt-0">
        <motion.h3 style={{ color: textColor }} className="font-michroma text-xl md:text-3xl uppercase tracking-widest mb-4 md:mb-6">{phase.title}</motion.h3>
        <p className="font-inter font-light text-base md:text-2xl text-zinc-400 leading-relaxed max-w-3xl">{phase.desc}</p>
      </div>
    </motion.div>
  );
}
