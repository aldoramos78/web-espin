"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ContactTrigger({ 
  children, 
  className = "",
  servicio
}: { 
  children: React.ReactNode, 
  className?: string,
  servicio?: "web" | "agentes" | "marca" | "ecosistema"
}) {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const prefix = isEn ? "/en" : "/es";
  const targetUrl = servicio ? `${prefix}/auditoria?servicio=${servicio}` : `${prefix}/auditoria`;
  
  return (
    <Link href={targetUrl} className={`block ${className}`}>
      {children}
    </Link>
  );
}
