"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { IntroPreloader } from "./IntroPreloader";
import { ProgressBar } from "./ProgressBar";

export function PreloaderManager() {
  const [showPreloader, setShowPreloader] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenPreloader");
    if (!hasSeen) {
      setShowPreloader(true);
    }
    setIsChecking(false);
    
    // Clear session storage on hard refresh (F5/Reload)
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("hasSeenPreloader");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);
  
  useEffect(() => {
    // We add a specific class to body to prevent scrolling while preloader is active
    if (showPreloader || isChecking) {
      document.documentElement.classList.add("overflow-hidden", "h-screen");
    } else {
      document.documentElement.classList.remove("overflow-hidden", "h-screen");
    }
  }, [showPreloader, isChecking]);

  const handleComplete = () => {
    setShowPreloader(false);
    sessionStorage.setItem("hasSeenPreloader", "true");
  };

  if (isChecking) {
    return <div className="fixed inset-0 z-[100] bg-black"></div>;
  }

  return (
    <>
      <AnimatePresence>
        {showPreloader && <IntroPreloader onComplete={handleComplete} />}
      </AnimatePresence>
      {!showPreloader && <ProgressBar />}
    </>
  );
}
