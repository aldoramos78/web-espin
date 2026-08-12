"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export function HeroBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring for the trailing spotlight effect
  const springX = useSpring(mouseX, { stiffness: 400, damping: 40, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 40, mass: 0.5 });

  const maskImage = useMotionTemplate`radial-gradient(400px circle at ${springX}px ${springY}px, black 0%, transparent 100%)`;
  const spotlightX = useMotionTemplate`${springX}px`;
  const spotlightY = useMotionTemplate`${springY}px`;

  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set spotlight visible and centered by default on mobile
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsHovering(true);
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 3);
    }

    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (window.innerWidth >= 768) return;
      
      const { gamma, beta } = e;
      if (gamma === null || beta === null) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const x = Math.min(Math.max((gamma + 45) / 90, 0), 1) * width;
      const y = Math.min(Math.max((beta - 20) / 50, 0), 1) * height;

      mouseX.set(x);
      mouseY.set(y);
      setIsHovering(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768 || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      // Check if mouse is within bounds
      if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
        setIsHovering(true);
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("deviceorientation", handleOrientation);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden bg-black"
    >
      {/* Base Layer: Pure Black / Subtle Grid */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

      {/* Hidden Technical Layer (Masked by Mouse) */}
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
          opacity: isHovering ? 1 : 0
        }}
      >
         {/* The Technical Content inside the mask */}
         <div className="absolute inset-0 bg-[#0a0a0a]">
           {/* Yellow Tint/Glow following the mouse exactly */}
           <motion.div 
             className="absolute w-[600px] h-[600px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
             style={{
                background: "radial-gradient(circle, rgba(245,183,0,0.15) 0%, rgba(245,183,0,0) 70%)",
                left: spotlightX,
                top: spotlightY,
             }}
           />

           {/* High-end Technical Schemas (SVG) */}
           <svg className="absolute inset-0 w-full h-full opacity-60 text-zinc-600 font-mono text-[11px]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
                </pattern>
                <pattern id="largeGrid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <rect width="100" height="100" fill="url(#smallGrid)"/>
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#largeGrid)" />
              
              {/* Architecture Schemas */}
              <g stroke="currentColor" strokeWidth="1.5" fill="none">
                 
                 {/* --- SUBTLE DETAILS (LAS RAYITAS ROJAS) --- */}
                 
                 {/* Top Left (Above ALTA) */}
                 <path d="M 10% 12% H 18%" stroke="rgba(255,255,255,0.1)" strokeDasharray="2 4"/>
                 <text x="10%" y="10%" fill="rgba(255,255,255,0.3)" stroke="none" className="text-[10px]">L4_LOAD_BALANCER</text>

                 {/* Top Middle (Above TECNOLOGICA) */}
                 <path d="M 45% 25% H 52%" stroke="rgba(255,255,255,0.1)"/>
                 <text x="45%" y="23%" fill="rgba(255,255,255,0.3)" stroke="none" className="text-[10px]">NODE_RTT: 12ms</text>

                 {/* Bottom Left (Under Button) */}
                 <path d="M 10% 90% H 15%" stroke="rgba(255,255,255,0.1)" strokeDasharray="1 3"/>
                 <text x="10%" y="88%" fill="rgba(255,255,255,0.3)" stroke="none" className="text-[10px]">SYS_STATE: SECURE</text>

                 {/* --- DENSE ELEMENTS (LAS 3 CAJAS ROJAS) --- */}

                 {/* Box 1: Top Right (API Gateway) */}
                 <rect x="70%" y="15%" width="240" height="140" strokeDasharray="4 4" stroke="rgba(255,255,255,0.2)"/>
                 <text x="71%" y="13%" fill="rgba(255,255,255,0.4)" stroke="none" className="text-xs font-bold">API_GATEWAY_CLUSTER</text>
                 <rect x="72%" y="18%" width="200" height="24" fill="rgba(255,255,255,0.03)"/>
                 <text x="73%" y="22%" fill="currentColor" stroke="none">endpoint: /v1/telemetry</text>
                 <rect x="72%" y="25%" width="200" height="24" fill="rgba(255,255,255,0.03)"/>
                 <text x="73%" y="29%" fill="currentColor" stroke="none">endpoint: /v1/audit</text>
                 <path d="M calc(70% - 50px) 22% L 70% 22%" strokeDasharray="2 2"/>
                 <circle cx="calc(70% - 50px)" cy="22%" r="4" fill="currentColor"/>

                 {/* Box 2: Bottom Middle (DB Schema - under ecosistemas) */}
                 <g className="hidden md:block">
                   <rect x="42%" y="60%" width="260" height="220" fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.3)"/>
                   <line x1="42%" y1="66%" x2="calc(42% + 260px)" y2="66%" stroke="rgba(255,255,255,0.3)"/>
                   <text x="44%" y="64%" fill="#F5B700" stroke="none" className="text-xs font-bold font-michroma">CORE_LEDGER_DB</text>
                   <text x="44%" y="71%" fill="currentColor" stroke="none">id: UUID (PK)</text>
                   <text x="44%" y="74%" fill="currentColor" stroke="none">client_ref: VARCHAR(255)</text>
                   <text x="44%" y="77%" fill="currentColor" stroke="none">obsolescence_score: FLOAT</text>
                   <text x="44%" y="80%" fill="currentColor" stroke="none">architectural_debt: JSONB</text>
                   <text x="44%" y="83%" fill="currentColor" stroke="none">status: ENUM('CRITICAL', 'OPTIMIZED')</text>
                   <text x="44%" y="86%" fill="currentColor" stroke="none">created_at: TIMESTAMPZ</text>
                   <path d="M 42% 70% H 35% V 50%" stroke="rgba(245,183,0,0.5)" strokeWidth="2" />
                   <circle cx="35%" cy="50%" r="4" fill="#F5B700" stroke="none"/>
                 </g>

                 {/* Box 3: Bottom Right (Code Snippet) */}
                 <g className="hidden md:block">
                   <rect x="75%" y="70%" width="340" height="160" rx="4" fill="rgba(0,0,0,0.8)" stroke="rgba(255,255,255,0.1)"/>
                   <text x="77%" y="74%" fill="#F5B700" stroke="none">{'async function executeDemolition(targetId) {'}</text>
                   <text x="79%" y="77%" fill="currentColor" stroke="none">{'  const debt = await getTechnicalDebt(targetId);'}</text>
                   <text x="79%" y="80%" fill="currentColor" stroke="none">{'  if (debt.isCritical) {'}</text>
                   <text x="81%" y="83%" fill="rgba(255,255,255,0.8)" stroke="none">{'    await purgeLegacySystems(targetId);'}</text>
                   <text x="81%" y="86%" fill="rgba(255,255,255,0.8)" stroke="none">{'    await deployModernArchitecture(targetId);'}</text>
                   <text x="79%" y="89%" fill="currentColor" stroke="none">{'  }'}</text>
                   <text x="79%" y="92%" fill="currentColor" stroke="none">{'  return status.OPTIMIZED;'}</text>
                   <text x="77%" y="95%" fill="#F5B700" stroke="none">{'}'}</text>
                 </g>
                 
                 {/* Connection from Box 1 to Box 3 */}
                 <path d="M 80% 29% V 70%" strokeDasharray="4 2" />
              </g>
           </svg>
         </div>
      </motion.div>
    </div>
  );
}
