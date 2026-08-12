"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { IntroPreloader } from "./IntroPreloader";
import { ProgressBar } from "./ProgressBar";

export function PreloaderManager() {
  const [showPreloader, setShowPreloader] = useState(true);
  
  useEffect(() => {
    // We add a specific class to body to prevent scrolling while preloader is active
    if (showPreloader) {
      document.documentElement.classList.add("overflow-hidden", "h-screen");
    } else {
      document.documentElement.classList.remove("overflow-hidden", "h-screen");
    }
  }, [showPreloader]);

  return (
    <>
      <AnimatePresence>
        {showPreloader && <IntroPreloader onComplete={() => setShowPreloader(false)} />}
      </AnimatePresence>
      {!showPreloader && <ProgressBar />}
    </>
  );
}
