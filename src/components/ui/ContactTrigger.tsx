"use client";
import React from "react";
import Link from "next/link";

export function ContactTrigger({ 
  children, 
  className = "",
  servicio
}: { 
  children: React.ReactNode, 
  className?: string,
  servicio?: "web" | "agentes" | "marca" | "ecosistema"
}) {
  const targetUrl = servicio ? `/auditoria?servicio=${servicio}` : "/auditoria";
  
  return (
    <Link href={targetUrl} className={`block ${className}`}>
      {children}
    </Link>
  );
}
