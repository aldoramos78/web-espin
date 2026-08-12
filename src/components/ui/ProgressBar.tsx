"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

export function ProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#F5B700] origin-left z-[60]"
      style={{ scaleX: scrollYProgress }} 
    />
  );
}
