"use client";
import React from "react";

export function ContactTrigger({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode, 
  className?: string 
}) {
  return (
    <div onClick={() => document.dispatchEvent(new Event("open-contact-modal"))} className={className}>
      {children}
    </div>
  );
}
