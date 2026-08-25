"use client";
import React from "react";
import { motion } from "framer-motion";

const easePremium: [number, number, number, number] = [0.76, 0, 0.24, 1];

export function ScrollReveal({ 
  children, 
  className = "", 
  variant = "fadeUp", 
  delay = 0,
  style = {}
}: { 
  children: React.ReactNode, 
  className?: string, 
  variant?: "fadeUp" | "stagger" | "textReveal" | "slideRight",
  delay?: number,
  style?: React.CSSProperties
}) {
  
  if (variant === "slideRight") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: easePremium, delay }}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    );
  }
  if (variant === "stagger") {
    return (
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false, margin: "-100px" }} 
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: delay } },
        }} 
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    );
  }

  if (variant === "textReveal") {
    return (
      <motion.div 
        variants={{
          hidden: { y: "100%" },
          visible: { y: 0, transition: { duration: 1.2, ease: easePremium, delay } },
        }} 
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    );
  }

  // default fadeUp
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: easePremium, delay } },
      }} 
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
