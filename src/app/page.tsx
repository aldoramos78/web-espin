"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView, animate, useMotionValue, useSpring, useMotionTemplate, useMotionValueEvent } from "framer-motion";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const easePremium: [number, number, number, number] = [0.76, 0, 0.24, 1]; // Custom brutalist ease

// --- COUNTER COMPONENT ---
function Counter({ from, to, duration = 1.5, decimals = 0 }: { from: number, to: number, duration?: number, decimals?: number }) {
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

// --- HERO BACKGROUND COMPONENT (X-Ray Spotlight) ---
function HeroBackground() {
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
                 {/* Light Side (Left) */}
                 {/* Load Balancer / Worker */}
                 <polygon points="calc(20% - 60px),15% calc(20% + 60px),15% 20%,calc(15% + 80px)" fill="rgba(255,255,255,0.02)"/>
                 <text x="14%" y="13%" fill="rgba(255,255,255,0.4)" stroke="none" className="text-xs">L4_LOAD_BALANCER</text>

                 {/* Progress Bars / Charts */}
                 <text x="10%" y="60%" fill="rgba(255,255,255,0.5)" stroke="none">SYSTEM_THROUGHPUT</text>
                 <rect x="10%" y="62%" width="200" height="6" fill="rgba(255,255,255,0.1)" stroke="none"/>
                 <rect x="10%" y="62%" width="140" height="6" fill="#F5B700" stroke="none"/>
                 <text x="10%" y="67%" fill="rgba(255,255,255,0.5)" stroke="none">LEGACY_REMOVAL_PROGRESS</text>
                 <rect x="10%" y="69%" width="200" height="6" fill="rgba(255,255,255,0.1)" stroke="none"/>
                 <rect x="10%" y="69%" width="180" height="6" fill="#F5B700" stroke="none"/>

                 {/* Dense Side (Right) */}
                 {/* Block 1 */}
                 <rect x="65%" y="15%" width="240" height="140" strokeDasharray="4 4" stroke="rgba(255,255,255,0.2)"/>
                 <text x="66%" y="13%" fill="rgba(255,255,255,0.4)" stroke="none" className="text-xs font-bold">API_GATEWAY_CLUSTER</text>
                 <rect x="67%" y="18%" width="200" height="24" fill="rgba(255,255,255,0.03)"/>
                 <text x="68%" y="22%" fill="currentColor" stroke="none">endpoint: /v1/telemetry</text>
                 <rect x="67%" y="25%" width="200" height="24" fill="rgba(255,255,255,0.03)"/>
                 <text x="68%" y="29%" fill="currentColor" stroke="none">endpoint: /v1/audit</text>
                 
                 <path d="M calc(65% - 50px) 22% L 65% 22%" strokeDasharray="2 2"/>
                 <circle cx="calc(65% - 50px)" cy="22%" r="4" fill="currentColor"/>

                 {/* Block 2: DB Schema */}
                 <rect x="45%" y="30%" width="260" height="220" fill="rgba(0,0,0,0.5)" stroke="rgba(255,255,255,0.3)"/>
                 <line x1="45%" y1="36%" x2="calc(45% + 260px)" y2="36%" stroke="rgba(255,255,255,0.3)"/>
                 <text x="47%" y="34%" fill="#F5B700" stroke="none" className="text-xs font-bold font-michroma">CORE_LEDGER_DB</text>
                 <text x="47%" y="41%" fill="currentColor" stroke="none">id: UUID (PK)</text>
                 <text x="47%" y="44%" fill="currentColor" stroke="none">client_ref: VARCHAR(255)</text>
                 <text x="47%" y="47%" fill="currentColor" stroke="none">obsolescence_score: FLOAT</text>
                 <text x="47%" y="50%" fill="currentColor" stroke="none">architectural_debt: JSONB</text>
                 <text x="47%" y="53%" fill="currentColor" stroke="none">status: ENUM('CRITICAL', 'OPTIMIZED')</text>
                 <text x="47%" y="56%" fill="currentColor" stroke="none">created_at: TIMESTAMPZ</text>
                 
                 {/* Connection Paths */}
                 <path d="M calc(65% + 120px) calc(15% + 140px) V 45% H calc(45% + 260px)" strokeDasharray="4 2" />
                 <path d="M 45% 45% H 25% V 65%" stroke="rgba(245,183,0,0.5)" strokeWidth="2" />
                 <circle cx="25%" cy="65%" r="4" fill="#F5B700" stroke="none"/>

                 {/* Code Snippet */}
                 <rect x="60%" y="65%" width="340" height="160" rx="4" fill="rgba(0,0,0,0.8)" stroke="rgba(255,255,255,0.1)"/>
                 <text x="62%" y="69%" fill="#F5B700" stroke="none">{'async function executeDemolition(targetId) {'}</text>
                 <text x="64%" y="72%" fill="currentColor" stroke="none">{'  const debt = await getTechnicalDebt(targetId);'}</text>
                 <text x="64%" y="75%" fill="currentColor" stroke="none">{'  if (debt.isCritical) {'}</text>
                 <text x="66%" y="78%" fill="rgba(255,255,255,0.8)" stroke="none">{'    await purgeLegacySystems(targetId);'}</text>
                 <text x="66%" y="81%" fill="rgba(255,255,255,0.8)" stroke="none">{'    await deployModernArchitecture(targetId);'}</text>
                 <text x="64%" y="84%" fill="currentColor" stroke="none">{'  }'}</text>
                 <text x="64%" y="87%" fill="currentColor" stroke="none">{'  return status.OPTIMIZED;'}</text>
                 <text x="62%" y="90%" fill="#F5B700" stroke="none">{'}'}</text>
              </g>
           </svg>
         </div>
      </motion.div>
    </div>
  );
}

// --- PHASE ROW COMPONENT (Protocolo) ---
function PhaseRow({ phase, index }: { phase: { id: string, title: string, desc: string }, index: number }) {
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

// --- PRELOADER COMPONENT ---
function IntroPreloader({ onComplete }: { onComplete: () => void }) {
  const easeDelicate: [number, number, number, number] = [0.22, 1, 0.36, 1]; // Premium, very soft glide

  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 1.2, ease: easeDelicate }}
    >
      {/* Shifted up slightly with mb-[5vh] for optical vertical centering */}
      <div className="relative flex items-center justify-center mb-[5vh] md:mb-[8vh]">
        <svg className="w-[65vw] md:w-[50vw] max-w-[600px] text-white overflow-visible" viewBox="0 0 406 348" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M252.188 140.625L236.562 117.188L377.188 0L405.996 41.9922L252.188 140.625Z" 
            fill="#F5B700"
            initial={{ x: 200, y: -400 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 2.2, delay: 0.6, type: "spring", bounce: 0.15 }}
          />
          <motion.path 
            d="M170.166 55.3789C206.136 55.3789 235.921 57.9017 259.521 62.9473C266.593 64.4591 273.124 66.3798 279.114 68.71L242.746 99.0166C238.964 98.2723 234.871 97.6421 230.469 97.127C215.332 95.3366 195.231 94.4414 170.166 94.4414C143.636 94.4414 122.233 95.418 105.957 97.3711C89.8438 99.3242 77.5553 103.149 69.0918 108.846C60.6283 114.38 54.8503 122.68 51.7578 133.748C48.8281 144.816 47.2819 159.383 47.1191 177.449H284.912V154.012C284.912 145.974 284.261 138.894 282.959 132.771L321.891 107.806C327.186 120.229 329.834 135.631 329.834 154.012V214.314H47.1191C47.2819 235.148 48.7467 251.831 51.5137 264.363C54.2806 276.896 59.8145 286.336 68.1152 292.684C76.416 299.031 88.7858 303.263 105.225 305.379C121.826 307.332 143.88 308.309 171.387 308.309C196.126 308.309 216.064 307.82 231.201 306.844C246.501 305.867 258.057 303.751 265.869 300.496C273.844 297.078 279.215 292.033 281.982 285.359C284.749 278.686 286.133 269.734 286.133 258.504H329.834C329.834 279.5 326.66 296.02 320.312 308.064C314.128 320.109 304.606 328.898 291.748 334.432C278.89 339.965 262.451 343.465 242.432 344.93C222.575 346.557 198.893 347.371 171.387 347.371C139.974 347.371 113.281 345.743 91.3086 342.488C69.4987 339.396 51.8392 332.967 38.3301 323.201C24.9837 313.273 15.2181 298.462 9.0332 278.768C3.01107 259.074 0 232.788 0 199.91C0 168.009 2.92969 142.456 8.78906 123.25C14.8112 104.044 24.4954 89.5586 37.8418 79.793C51.1882 70.0273 68.6849 63.5169 90.332 60.2617C112.142 57.0065 138.753 55.3789 170.166 55.3789Z" 
            fill="currentColor"
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.8, ease: easeDelicate }}
          />
        </svg>
      </div>
    </motion.div>
  );
}

// --- PROGRESS BAR COMPONENT ---
function ProgressBar() {
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

// --- CONTACT MODAL COMPONENT ---
function ContactModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];
  
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Sanitizar URL para evitar errores de validación estricta de Notion API
    if (!data.url || (typeof data.url === 'string' && data.url.trim() === '')) {
      delete data.url;
    } else if (typeof data.url === 'string' && !data.url.startsWith('http')) {
      data.url = `https://${data.url.trim()}`;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (res.success) {
        setStatus("success");
      } else {
        alert("ERROR DEL SERVIDOR: " + res.error);
        setStatus("error");
      }
    } catch (err: any) {
      alert("ERROR CLIENTE: " + err.message);
      setStatus("error");
    }
  };

  // Reset status when opened
  useEffect(() => { if (isOpen) setStatus("idle"); }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6 md:p-12 overflow-y-auto"
        >
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.8, ease: easePremium }}
            className="w-full max-w-2xl bg-black border border-zinc-800 p-8 md:p-14 relative my-auto shadow-2xl"
          >
            {/* Minimalist Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-4 group transition-transform duration-500 hover:rotate-90 z-10"
              aria-label="Cerrar modal"
            >
              <div className="relative w-6 h-6">
                <span className="absolute top-1/2 left-0 w-6 h-[1px] bg-zinc-500 group-hover:bg-[#F5B700] rotate-45 transition-colors duration-300"></span>
                <span className="absolute top-1/2 left-0 w-6 h-[1px] bg-zinc-500 group-hover:bg-[#F5B700] -rotate-45 transition-colors duration-300"></span>
              </div>
            </button>

            {status === "success" ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 md:py-24 text-center flex flex-col items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 border border-[#F5B700] rounded-full mx-auto mb-8 md:mb-10 flex items-center justify-center text-[#F5B700] text-3xl md:text-4xl">✓</div>
                <h3 className="font-michroma text-2xl md:text-4xl text-white uppercase tracking-widest mb-6">Solicitud Recibida</h3>
                <p className="text-zinc-400 font-light text-base md:text-lg max-w-md mx-auto">Nuestro equipo analizará tu consulta y te contactará en las próximas 24h.</p>
              </motion.div>
            ) : (
              <>
                <div className="mb-10 md:mb-14">
                  <h2 className="font-michroma text-2xl md:text-3xl uppercase tracking-tighter text-white mb-4">
                    Solicitud de Auditoría<span className="text-[#F5B700]">.</span>
                  </h2>
                  <p className="font-inter text-zinc-500 text-xs md:text-sm tracking-wide leading-relaxed max-w-lg italic">
                    <span className="text-zinc-400">espín</span> desarrolla infraestructuras a medida. No ofrecemos plantillas genéricas ni competimos en tarifas low-cost.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-10 font-inter">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  <input required type="text" name="nombre" placeholder="Nombre" className="w-full bg-transparent border-b border-zinc-700 py-3 text-white text-sm md:text-base outline-none focus:border-[#F5B700] caret-[#F5B700] transition-colors placeholder:text-zinc-400 rounded-none" />
                  <input required type="text" name="empresa" placeholder="Empresa" className="w-full bg-transparent border-b border-zinc-700 py-3 text-white text-sm md:text-base outline-none focus:border-[#F5B700] caret-[#F5B700] transition-colors placeholder:text-zinc-400 rounded-none" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
                  <input required type="email" name="email" placeholder="Email" className="md:col-span-3 w-full bg-transparent border-b border-zinc-700 py-3 text-white text-sm md:text-base outline-none focus:border-[#F5B700] caret-[#F5B700] transition-colors placeholder:text-zinc-400 rounded-none" />
                  <input required type="tel" name="telefono" placeholder="Teléfono" className="md:col-span-1 w-full bg-transparent border-b border-zinc-700 py-3 text-white text-sm md:text-base outline-none focus:border-[#F5B700] caret-[#F5B700] transition-colors placeholder:text-zinc-400 rounded-none" />
                </div>

                <input type="text" name="url" placeholder="URL de tu web actual" className="w-full bg-transparent border-b border-zinc-700 py-3 text-white text-sm md:text-base outline-none focus:border-[#F5B700] caret-[#F5B700] transition-colors placeholder:text-zinc-400 rounded-none" />

                <textarea required rows={3} name="problema" placeholder="¿Cuál es el problema técnico u operativo que más está penalizando a tu negocio?" className="w-full bg-transparent border-b border-zinc-700 py-3 text-white text-sm md:text-base outline-none focus:border-[#F5B700] caret-[#F5B700] transition-colors placeholder:text-zinc-400 resize-none rounded-none"></textarea>

                <button type="submit" disabled={status === "loading"} className="group relative w-full bg-[#F5B700] text-black py-5 md:py-6 mt-4 overflow-hidden disabled:opacity-50 transition-transform duration-500 hover:scale-[1.01] border border-[#F5B700]">
                  <div className="absolute inset-0 bg-white transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0"></div>
                  <span className="relative z-10 font-michroma text-xs md:text-sm uppercase tracking-widest font-bold">
                    {status === "loading" ? "Procesando..." : status === "error" ? "Error - Reintentar" : "Enviar Solicitud"}
                  </span>
                </button>
              </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- MAIN PAGE ---
export default function EspinLanding() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: easePremium } },
  };

  const textRevealVariant = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 1.2, ease: easePremium } },
  };

  // State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Use an offset of e.g. 150px before we start hiding
    if (latest > (previous ?? 0) && latest > 150) {
      setIsHeaderHidden(true);
    } else {
      setIsHeaderHidden(false);
    }
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 }); // Activa cuando el 30% de la sección es visible
    
    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Diagnóstico", href: "#dolor" },
    { label: "Protocolo", href: "#protocolo" },
    { label: "Pilares", href: "#pilares" },
    { label: "Resultados", href: "#casos" },
  ];

  const dolorData = [
    { 
      title: "Sistema Expuesto", 
      desc: "Brechas de seguridad, plantillas web obsoletas, plugins de terceros vulnerados, enlaces rotos. Extirpamos tecnología vulnerable y desplegamos fortalezas digitales inquebrantables.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-12 md:h-12 text-[#F5B700] group-hover:text-black transition-colors duration-700">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M13 8l-3 4h4l-3 4"></path>
        </svg>
      ),
      letter: "/A"
    },
    { 
      title: "Fugas de Capital", 
      desc: "Un sistema lento, caído u obsoleto hace que tu cliente se vaya a la competencia. Optimizamos la velocidad de tu ecosistema para que la retención sea máxima.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-12 md:h-12 text-[#F5B700] group-hover:text-black transition-colors duration-700">
          <path d="M4 10h12" />
          <path d="M4 14h9" />
          <path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
        </svg>
      ),
      letter: "/B"
    },
    { 
      title: "Devaluación de Marca", 
      desc: "Una interfaz anticuada proyecta decadencia. Nuestra imagen digital es la puerta de entrada a nuestra casa. Reconstruimos tu presencia digital para blindar tu autoridad.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-12 md:h-12 text-[#F5B700] group-hover:text-black transition-colors duration-700">
          <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
          <polyline points="16 17 22 17 22 11"></polyline>
        </svg>
      ),
      letter: "/C"
    }
  ];

  const pilaresData = [
    { 
      title: "Cimientos y Escala", 
      desc: "No solo intervenimos empresas consolidadas con ecosistemas desfasados. Acompañamos a nuevos negocios a nacer desde el día cero con una infraestructura digital inquebrantable.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-12 md:h-12 text-[#F5B700] group-hover:text-black transition-colors duration-700">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
      letter: "P.01"
    },
    { 
      title: "Socios, no técnicos", 
      desc: "Nuestro cliente no busca un informático para apagar fuegos. Entiende que el software es el motor principal de su rentabilidad y exige un partner tecnológico capaz de sostener y blindar su crecimiento a largo plazo.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-12 md:h-12 text-[#F5B700] group-hover:text-black transition-colors duration-700">
          <path d="M10 21l-3-3m0 0l-4-4a3.1 3.1 0 0 1 0-4.4l3.1-3.1a3.1 3.1 0 0 1 4.4 0l4 4" />
          <path d="M14 3l3 3m0 0l4 4a3.1 3.1 0 0 1 0 4.4l-3.1 3.1a3.1 3.1 0 0 1-4.4 0l-4-4" />
          <path d="M10 10l4 4" />
        </svg>
      ),
      letter: "P.02"
    },
    { 
      title: "Ingeniería de Negocio", 
      desc: "Cada línea de código, cada automatización con IA y cada arquitectura que desplegamos tiene un único objetivo innegociable: erradicar ineficiencias y aumentar tu beneficio.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 md:w-12 md:h-12 text-[#F5B700] group-hover:text-black transition-colors duration-700">
          <polyline points="7 8 3 12 7 16" />
          <polyline points="17 8 21 12 17 16" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
      letter: "P.03"
    }
  ];

  return (
    <>
      <AnimatePresence>
        {showPreloader && <IntroPreloader onComplete={() => setShowPreloader(false)} />}
      </AnimatePresence>

      <div className={`min-h-screen bg-black text-white selection:bg-[#F5B700] selection:text-black font-inter overflow-x-hidden ${showPreloader ? 'h-screen overflow-hidden' : ''}`}>
      
      {/* GLOBAL PROGRESS BAR */}
      {!showPreloader && <ProgressBar />}
      
      {/* CONTACT MODAL OVERLAY */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

        <motion.nav 
          variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" }
          }}
          animate={isHeaderHidden ? "hidden" : "visible"}
          transition={{ duration: 0.8, ease: easePremium }}
          className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b-2 border-zinc-900 mt-[2px]"
        >
          <div className="px-6 md:px-12 py-5 flex items-center justify-between w-full">
            {/* Logo */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, ease: easePremium }} className="flex justify-start">
              <a href="#" aria-label="espín" className="flex items-center text-white hover:text-zinc-300 transition-colors">
                <svg className="h-6 md:h-8 w-auto" viewBox="0 0 1606 564" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1277.06 469.262V188.012H1323.94V225.365C1330.94 215.925 1339.56 208.031 1349.82 201.684C1360.23 195.336 1374.07 190.616 1391.32 187.523C1408.74 184.268 1431.52 182.641 1459.68 182.641C1496.46 182.641 1525.43 186.221 1546.59 193.383C1567.92 200.544 1583.05 213.321 1592 231.713C1600.96 250.105 1605.43 276.146 1605.43 309.838V469.262H1558.31V309.838C1558.31 290.632 1556.68 275.17 1553.43 263.451C1550.17 251.732 1544.56 242.862 1536.58 236.84C1528.77 230.818 1517.95 226.83 1504.11 224.877C1490.28 222.761 1472.7 221.703 1451.38 221.703C1418.83 221.703 1393.27 224.389 1374.72 229.76C1356.16 235.131 1343.06 243.594 1335.41 255.15C1327.76 266.544 1323.94 281.436 1323.94 299.828V469.262H1277.06Z" fill="currentColor"/>
                  <path d="M1170.71 469.262V203.637H1217.59V469.262H1170.71ZM1139.46 141.625L1123.84 118.188L1264.46 1L1293.27 42.9922L1139.46 141.625Z" fill="currentColor"/>
                  <path d="M1138.77 142L1123 118.333L1264.93 0L1294 42.4028L1138.77 142Z" fill="#F5B700"/>
                  <path d="M1065.15 327.172C1065.15 303.897 1063.93 285.261 1061.49 271.264C1059.21 257.266 1054.08 246.768 1046.11 239.77C1038.13 232.608 1025.68 227.807 1008.75 225.365C991.988 222.924 969.038 221.703 939.904 221.703C913.374 221.703 891.89 222.924 875.451 225.365C859.012 227.807 846.398 232.608 837.609 239.77C828.82 246.768 822.798 257.266 819.543 271.264C816.288 285.261 814.66 303.897 814.66 327.172C814.66 351.26 816.288 370.548 819.543 385.033C822.798 399.519 828.82 410.424 837.609 417.748C846.398 424.91 859.012 429.711 875.451 432.152C891.89 434.431 913.374 435.57 939.904 435.57C969.038 435.57 991.988 434.431 1008.75 432.152C1025.68 429.711 1038.13 424.91 1046.11 417.748C1054.08 410.424 1059.21 399.519 1061.49 385.033C1063.93 370.548 1065.15 351.26 1065.15 327.172ZM767.785 563.012V188.012H814.66V219.994C826.542 204.206 842.818 194.034 863.488 189.477C884.322 184.919 909.794 182.641 939.904 182.641C971.48 182.641 998.173 184.268 1019.98 187.523C1041.96 190.779 1059.7 197.289 1073.21 207.055C1086.71 216.82 1096.56 231.306 1102.75 250.512C1108.93 269.717 1112.02 295.271 1112.02 327.172C1112.02 360.049 1108.93 386.335 1102.75 406.029C1096.56 425.723 1086.71 440.535 1073.21 450.463C1059.7 460.229 1041.96 466.658 1019.98 469.75C998.173 473.005 971.48 474.633 939.904 474.633C909.794 474.633 884.322 472.354 863.488 467.797C842.818 463.24 826.542 452.986 814.66 437.035V563.012H767.785Z" fill="currentColor"/>
                  <path d="M547.561 474.633C513.381 474.633 485.874 473.493 465.041 471.215C444.37 468.936 428.664 464.704 417.922 458.52C407.342 452.335 400.181 443.546 396.438 432.152C392.857 420.759 391.066 405.948 391.066 387.719H435.988C435.988 397.973 436.721 406.273 438.186 412.621C439.65 418.806 443.801 423.607 450.637 427.025C457.473 430.281 468.54 432.559 483.84 433.861C499.302 435.001 520.949 435.57 548.781 435.57C578.241 435.57 601.109 435.001 617.385 433.861C633.824 432.559 645.624 430.281 652.785 427.025C659.947 423.607 664.26 418.725 665.725 412.377C667.352 406.029 668.166 397.647 668.166 387.23C668.166 374.535 667.027 365.014 664.748 358.666C662.469 352.318 657.098 348.087 648.635 345.971C640.171 343.692 626.662 342.471 608.107 342.309L496.291 341.088C467.482 340.762 445.51 338.321 430.373 333.764C415.236 329.206 404.901 321.231 399.367 309.838C393.833 298.282 391.066 281.924 391.066 260.766C391.066 241.072 394.077 225.854 400.1 215.111C406.285 204.369 415.887 196.719 428.908 192.162C441.929 187.605 458.856 184.919 479.689 184.105C500.523 183.129 525.669 182.641 555.129 182.641C589.797 182.641 617.303 183.699 637.648 185.814C658.156 187.93 673.456 191.918 683.547 197.777C693.801 203.637 700.474 212.182 703.566 223.412C706.822 234.48 708.449 248.965 708.449 266.869H663.527C663.527 256.29 662.795 247.989 661.33 241.967C659.865 235.782 655.878 231.306 649.367 228.539C643.02 225.609 632.603 223.738 618.117 222.924C603.794 222.11 583.612 221.703 557.57 221.703C527.948 221.703 504.917 222.029 488.479 222.68C472.04 223.331 460.158 224.877 452.834 227.318C445.51 229.76 441.034 233.666 439.406 239.037C437.779 244.245 436.965 251.488 436.965 260.766C436.965 270.206 437.453 277.693 438.43 283.227C439.569 288.598 442.417 292.667 446.975 295.434C451.532 298.201 458.938 300.072 469.191 301.049C479.608 301.863 494.094 302.351 512.648 302.514L609.084 303.49C638.055 303.816 660.028 306.257 675.002 310.814C690.139 315.209 700.393 323.428 705.764 335.473C711.298 347.354 714.064 364.607 714.064 387.23C714.064 407.576 711.053 423.607 705.031 435.326C699.172 447.045 689.732 455.753 676.711 461.449C663.69 466.983 646.519 470.564 625.197 472.191C604.038 473.819 578.16 474.633 547.561 474.633Z" fill="currentColor"/>
                  <path d="M329.834 386.766C329.834 407.762 326.66 424.282 320.312 436.326C314.128 448.37 304.606 457.16 291.748 462.693C278.89 468.227 262.451 471.727 242.432 473.191C222.575 474.819 198.893 475.633 171.387 475.633C139.974 475.633 113.281 474.005 91.3086 470.75C69.4987 467.658 51.8392 461.229 38.3301 451.463C24.9837 441.535 15.2181 426.723 9.0332 407.029C3.01107 387.335 0 361.049 0 328.172C0 296.271 2.92969 270.717 8.78906 251.512C14.8112 232.306 24.4954 217.82 37.8418 208.055C51.1882 198.289 68.6849 191.779 90.332 188.523C112.142 185.268 138.753 183.641 170.166 183.641C206.136 183.641 235.921 186.163 259.521 191.209C283.122 196.255 300.7 205.857 312.256 220.018C323.975 234.178 329.834 254.93 329.834 282.273V342.576H47.1191C47.2819 363.41 48.7467 380.092 51.5137 392.625C54.2806 405.158 59.8145 414.598 68.1152 420.945C76.416 427.293 88.7858 431.525 105.225 433.641C121.826 435.594 143.88 436.57 171.387 436.57C196.126 436.57 216.064 436.082 231.201 435.105C246.501 434.129 258.057 432.013 265.869 428.758C273.844 425.34 279.215 420.294 281.982 413.621C284.749 406.948 286.133 397.996 286.133 386.766H329.834ZM170.166 222.703C143.636 222.703 122.233 223.68 105.957 225.633C89.8438 227.586 77.5553 231.411 69.0918 237.107C60.6283 242.641 54.8503 250.942 51.7578 262.01C48.8281 273.077 47.2819 287.645 47.1191 305.711H284.912V282.273C284.912 270.555 283.529 260.87 280.762 253.221C278.158 245.408 272.949 239.305 265.137 234.91C257.324 230.353 245.768 227.179 230.469 225.389C215.332 223.598 195.231 222.703 170.166 222.703Z" fill="currentColor"/>
                </svg>
              </a>
            </motion.div>
            
            {/* Nav Right (CTA + Hamburger) */}
            <div className="flex justify-end items-center gap-4 md:gap-8 relative z-[110]">
              <button type="button" className="rings-btn small !hidden md:!inline-flex" onClick={() => setIsContactModalOpen(true)}>
                <i></i><i></i><i></i>
                <span>Inicia la Auditoría</span>
                <svg className="arr" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="p-4 focus:outline-none transition-colors relative w-12 h-12 flex items-center justify-center bg-transparent group"
                aria-label="Toggle menu"
              >
                <div className="relative w-8 h-5">
                  <span className={`absolute left-0 w-8 h-[2px] bg-white group-hover:bg-[#F5B700] transition-all duration-300 ${isMobileMenuOpen ? 'top-2.5 rotate-45' : 'top-0'}`}></span>
                  <span className={`absolute left-0 w-8 h-[2px] bg-white group-hover:bg-[#F5B700] transition-all duration-300 top-2.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`absolute left-0 w-8 h-[2px] bg-white group-hover:bg-[#F5B700] transition-all duration-300 ${isMobileMenuOpen ? 'top-2.5 -rotate-45' : 'top-5'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </motion.nav>

          {/* Full-Screen Menu Overlay (Moved outside nav for proper fixed stacking) */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: "-100%" }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: "-100%" }} 
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                className="fixed inset-0 bg-[#111110] z-[100] flex flex-col justify-center overflow-y-auto"
              >
                <div className="flex items-center justify-between w-full px-6 md:px-12 absolute top-6 left-0 right-0 z-[120]">
                  <a href="#" onClick={() => setIsMobileMenuOpen(false)} aria-label="espín" className="flex items-center text-white md:hidden">
                    <svg className="h-6 w-auto" viewBox="0 0 1606 564" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1277.06 469.262V188.012H1323.94V225.365C1330.94 215.925 1339.56 208.031 1349.82 201.684C1360.23 195.336 1374.07 190.616 1391.32 187.523C1408.74 184.268 1431.52 182.641 1459.68 182.641C1496.46 182.641 1525.43 186.221 1546.59 193.383C1567.92 200.544 1583.05 213.321 1592 231.713C1600.96 250.105 1605.43 276.146 1605.43 309.838V469.262H1558.31V309.838C1558.31 290.632 1556.68 275.17 1553.43 263.451C1550.17 251.732 1544.56 242.862 1536.58 236.84C1528.77 230.818 1517.95 226.83 1504.11 224.877C1490.28 222.761 1472.7 221.703 1451.38 221.703C1418.83 221.703 1393.27 224.389 1374.72 229.76C1356.16 235.131 1343.06 243.594 1335.41 255.15C1327.76 266.544 1323.94 281.436 1323.94 299.828V469.262H1277.06Z" fill="currentColor"/>
                      <path d="M1170.71 469.262V203.637H1217.59V469.262H1170.71ZM1139.46 141.625L1123.84 118.188L1264.46 1L1293.27 42.9922L1139.46 141.625Z" fill="currentColor"/>
                      <path d="M1138.77 142L1123 118.333L1264.93 0L1294 42.4028L1138.77 142Z" fill="#F5B700"/>
                      <path d="M1065.15 327.172C1065.15 303.897 1063.93 285.261 1061.49 271.264C1059.21 257.266 1054.08 246.768 1046.11 239.77C1038.13 232.608 1025.68 227.807 1008.75 225.365C991.988 222.924 969.038 221.703 939.904 221.703C913.374 221.703 891.89 222.924 875.451 225.365C859.012 227.807 846.398 232.608 837.609 239.77C828.82 246.768 822.798 257.266 819.543 271.264C816.288 285.261 814.66 303.897 814.66 327.172C814.66 351.26 816.288 370.548 819.543 385.033C822.798 399.519 828.82 410.424 837.609 417.748C846.398 424.91 859.012 429.711 875.451 432.152C891.89 434.431 913.374 435.57 939.904 435.57C969.038 435.57 991.988 434.431 1008.75 432.152C1025.68 429.711 1038.13 424.91 1046.11 417.748C1054.08 410.424 1059.21 399.519 1061.49 385.033C1063.93 370.548 1065.15 351.26 1065.15 327.172ZM767.785 563.012V188.012H814.66V219.994C826.542 204.206 842.818 194.034 863.488 189.477C884.322 184.919 909.794 182.641 939.904 182.641C971.48 182.641 998.173 184.268 1019.98 187.523C1041.96 190.779 1059.7 197.289 1073.21 207.055C1086.71 216.82 1096.56 231.306 1102.75 250.512C1108.93 269.717 1112.02 295.271 1112.02 327.172C1112.02 360.049 1108.93 386.335 1102.75 406.029C1096.56 425.723 1086.71 440.535 1073.21 450.463C1059.7 460.229 1041.96 466.658 1019.98 469.75C998.173 473.005 971.48 474.633 939.904 474.633C909.794 474.633 884.322 472.354 863.488 467.797C842.818 463.24 826.542 452.986 814.66 437.035V563.012H767.785Z" fill="currentColor"/>
                      <path d="M547.561 474.633C513.381 474.633 485.874 473.493 465.041 471.215C444.37 468.936 428.664 464.704 417.922 458.52C407.342 452.335 400.181 443.546 396.438 432.152C392.857 420.759 391.066 405.948 391.066 387.719H435.988C435.988 397.973 436.721 406.273 438.186 412.621C439.65 418.806 443.801 423.607 450.637 427.025C457.473 430.281 468.54 432.559 483.84 433.861C499.302 435.001 520.949 435.57 548.781 435.57C578.241 435.57 601.109 435.001 617.385 433.861C633.824 432.559 645.624 430.281 652.785 427.025C659.947 423.607 664.26 418.725 665.725 412.377C667.352 406.029 668.166 397.647 668.166 387.23C668.166 374.535 667.027 365.014 664.748 358.666C662.469 352.318 657.098 348.087 648.635 345.971C640.171 343.692 626.662 342.471 608.107 342.309L496.291 341.088C467.482 340.762 445.51 338.321 430.373 333.764C415.236 329.206 404.901 321.231 399.367 309.838C393.833 298.282 391.066 281.924 391.066 260.766C391.066 241.072 394.077 225.854 400.1 215.111C406.285 204.369 415.887 196.719 428.908 192.162C441.929 187.605 458.856 184.919 479.689 184.105C500.523 183.129 525.669 182.641 555.129 182.641C589.797 182.641 617.303 183.699 637.648 185.814C658.156 187.93 673.456 191.918 683.547 197.777C693.801 203.637 700.474 212.182 703.566 223.412C706.822 234.48 708.449 248.965 708.449 266.869H663.527C663.527 256.29 662.795 247.989 661.33 241.967C659.865 235.782 655.878 231.306 649.367 228.539C643.02 225.609 632.603 223.738 618.117 222.924C603.794 222.11 583.612 221.703 557.57 221.703C527.948 221.703 504.917 222.029 488.479 222.68C472.04 223.331 460.158 224.877 452.834 227.318C445.51 229.76 441.034 233.666 439.406 239.037C437.779 244.245 436.965 251.488 436.965 260.766C436.965 270.206 437.453 277.693 438.43 283.227C439.569 288.598 442.417 292.667 446.975 295.434C451.532 298.201 458.938 300.072 469.191 301.049C479.608 301.863 494.094 302.351 512.648 302.514L609.084 303.49C638.055 303.816 660.028 306.257 675.002 310.814C690.139 315.209 700.393 323.428 705.764 335.473C711.298 347.354 714.064 364.607 714.064 387.23C714.064 407.576 711.053 423.607 705.031 435.326C699.172 447.045 689.732 455.753 676.711 461.449C663.69 466.983 646.519 470.564 625.197 472.191C604.038 473.819 578.16 474.633 547.561 474.633Z" fill="currentColor"/>
                      <path d="M329.834 386.766C329.834 407.762 326.66 424.282 320.312 436.326C314.128 448.37 304.606 457.16 291.748 462.693C278.89 468.227 262.451 471.727 242.432 473.191C222.575 474.819 198.893 475.633 171.387 475.633C139.974 475.633 113.281 474.005 91.3086 470.75C69.4987 467.658 51.8392 461.229 38.3301 451.463C24.9837 441.535 15.2181 426.723 9.0332 407.029C3.01107 387.335 0 361.049 0 328.172C0 296.271 2.92969 270.717 8.78906 251.512C14.8112 232.306 24.4954 217.82 37.8418 208.055C51.1882 198.289 68.6849 191.779 90.332 188.523C112.142 185.268 138.753 183.641 170.166 183.641C206.136 183.641 235.921 186.163 259.521 191.209C283.122 196.255 300.7 205.857 312.256 220.018C323.975 234.178 329.834 254.93 329.834 282.273V342.576H47.1191C47.2819 363.41 48.7467 380.092 51.5137 392.625C54.2806 405.158 59.8145 414.598 68.1152 420.945C76.416 427.293 88.7858 431.525 105.225 433.641C121.826 435.594 143.88 436.57 171.387 436.57C196.126 436.57 216.064 436.082 231.201 435.105C246.501 434.129 258.057 432.013 265.869 428.758C273.844 425.34 279.215 420.294 281.982 413.621C284.749 406.948 286.133 397.996 286.133 386.766H329.834ZM170.166 222.703C143.636 222.703 122.233 223.68 105.957 225.633C89.8438 227.586 77.5553 231.411 69.0918 237.107C60.6283 242.641 54.8503 250.942 51.7578 262.01C48.8281 273.077 47.2819 287.645 47.1191 305.711H284.912V282.273C284.912 270.555 283.529 260.87 280.762 253.221C278.158 245.408 272.949 239.305 265.137 234.91C257.324 230.353 245.768 227.179 230.469 225.389C215.332 223.598 195.231 222.703 170.166 222.703Z" fill="currentColor"/>
                    </svg>
                  </a>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-[#F5B700] p-4 text-4xl transition-colors font-light ml-auto" aria-label="Cerrar menú">✕</button>
                </div>
                <div className="w-full max-w-7xl mx-auto flex flex-col px-6 py-24 md:px-16 md:py-32 mt-12 md:mt-0">
                  {navLinks.map((link, index) => (
                     <a 
                       key={link.href} 
                       href={link.href} 
                       onClick={() => setIsMobileMenuOpen(false)} 
                       className="group block py-6 md:py-10 border-t border-zinc-800 transition-colors"
                     >
                       <div className="flex flex-row items-baseline gap-4 md:gap-10 transform group-hover:translate-x-3 md:group-hover:translate-x-6 transition-transform duration-300 ease-out">
                         <span className="font-space-mono text-sm md:text-xl text-[#F5B700]">0{index + 1}</span>
                         <span className="font-michroma font-bold uppercase text-white group-hover:text-[#F5B700] transition-colors duration-300" style={{ fontSize: 'clamp(1.8rem, 6vw, 6rem)', lineHeight: 1 }}>
                           {link.label}
                         </span>
                       </div>
                     </a>
                  ))}
                  <a 
                    href="#contacto" 
                    onClick={() => { setIsMobileMenuOpen(false); setIsContactModalOpen(true); }} 
                    className="group block py-6 md:py-10 border-t border-zinc-800 border-b transition-colors"
                  >
                    <div className="flex flex-row items-baseline gap-4 md:gap-10 transform group-hover:translate-x-3 md:group-hover:translate-x-6 transition-transform duration-300 ease-out">
                      <span className="font-space-mono text-sm md:text-xl text-[#F5B700]">05</span>
                      <span className="font-michroma font-bold uppercase text-white group-hover:text-[#F5B700] transition-colors duration-300" style={{ fontSize: 'clamp(1.8rem, 6vw, 6rem)', lineHeight: 1 }}>
                        Contacto
                      </span>
                    </div>
                  </a>
                </div>
              </motion.div>
            )}
        </AnimatePresence>

      <main>
        {/* 2. HERO SECTION */}
        <section className="min-h-[100vh] flex flex-col justify-center px-6 md:px-12 pt-16 pb-16 md:pt-32 md:pb-24 border-b border-zinc-900 relative bg-black">
          <HeroBackground />
          <div className="absolute left-12 top-0 bottom-0 w-px bg-zinc-900 hidden md:block z-0"></div>
          
          <div className="max-w-6xl w-full md:pl-20 mt-0 relative z-10">
            <h1 className="font-michroma uppercase tracking-tighter mb-8 md:mb-12 text-[10.5vw] sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[1.05] md:leading-[1.05] flex flex-col">
              <div className="overflow-hidden">
                <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.4, ease: easePremium, delay: 0.1 }}>
                  ALTA
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.4, ease: easePremium, delay: 0.15 }}>
                  COSTURA
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div 
                  initial={{ y: "100%" }} 
                  animate={{ y: 0 }} 
                  transition={{ duration: 1.4, ease: easePremium, delay: 0.2 }} 
                  className="text-white text-[9vw] sm:text-6xl md:text-7xl lg:text-[6.5rem]"
                >
                  TECNOLÓGICA<span className="text-[#F5B700]">.</span>
                </motion.div>
              </div>
            </h1>

            <div className="overflow-hidden mb-12 md:mb-20 pt-4">
              <motion.p initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.4, ease: easePremium, delay: 0.3 }} className="font-inter font-light text-zinc-400 text-lg md:text-2xl lg:text-3xl max-w-4xl leading-relaxed md:leading-tight tracking-tight">
                Auditamos y reconstruimos infraestructuras <span className="text-[#F5B700]">obsoletas</span>. Transformamos negocios que pierden dinero en ecosistemas digitales de <span className="text-[#F5B700]">alto rendimiento</span>.
              </motion.p>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8, ease: easePremium }}>
              <button type="button" className="rings-btn" onClick={() => setIsContactModalOpen(true)}>
                <i></i><i></i><i></i>
                <span>Inicia la Auditoría</span>
                <svg className="arr" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
              </button>
            </motion.div>
          </div>
        </section>

        {/* MARQUEE SEPARATOR */}
        <div className="marquee-container py-8 md:py-12 overflow-hidden bg-black border-b border-zinc-900">
          <div className="marquee-content flex whitespace-nowrap w-max">
            {[1,2,3,4].map((i) => (
              <div key={i} className="marquee-item flex items-center justify-center min-w-max">
                <span className="font-michroma text-transparent text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
                  DELOBSOLETOALRENDIMIENTO
                </span>
                <svg viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1 mx-4 md:mx-8" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* 3. DOLOR SECTION (bg-black) */}
        <section id="dolor" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={staggerContainer} className="w-full">
            <div className="mb-10 md:mb-20 w-full md:w-[80%]">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-10 md:w-16 h-[2px] bg-[#F5B700]"></div>
                <span className="font-michroma text-[11px] md:text-sm text-[#F5B700] tracking-widest uppercase">01 / EL PROBLEMA</span>
              </div>
              <div className="overflow-hidden pt-4 -mt-4">
                <motion.h2 variants={textRevealVariant} className="font-michroma uppercase tracking-tighter leading-[0.9] mb-4 md:mb-6 text-white" style={{ fontSize: 'clamp(1.75rem, 5vw, 4.5rem)' }}>
                  EL COSTE REAL<br />
                  DE LA OBSOLESCENCIA<span className="text-[#F5B700]">.</span>
                </motion.h2>
              </div>
              <div className="overflow-hidden pt-4 -mt-4">
                <motion.p variants={fadeUpVariant} className="font-inter font-light text-zinc-400 text-base md:text-xl">
                  No es un problema de diseño. Es un fallo crítico de infraestructura.
                </motion.p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-900 md:border-l bg-black">
              {dolorData.map((p, i) => (
                <div 
                  key={i}
                  className="p-6 md:p-8 lg:p-10 xl:p-14 border-b border-zinc-900 md:border-r group hover:bg-[#F5B700] transition-colors duration-700 flex flex-col min-h-[220px] md:min-h-[400px] overflow-hidden relative"
                >
                  <div className="flex justify-between items-start mb-6 md:mb-12 relative z-10 w-full">
                    <div className="flex items-center gap-6">
                      <div className="h-px w-8 bg-[#F5B700] group-hover:bg-black transform origin-left transition-all duration-500 group-hover:scale-x-[2.5]"></div>
                      {p.icon && (
                        <div className="transform transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-12">
                          {p.icon}
                        </div>
                      )}
                    </div>
                    {p.letter && (
                      <span className="font-space-mono text-xs md:text-sm text-zinc-600 group-hover:text-black mt-2 transition-colors duration-700">{p.letter}</span>
                    )}
                  </div>
                  
                  <h3 className="font-michroma text-lg md:text-base lg:text-xl xl:text-2xl uppercase mb-3 md:mb-6 tracking-tight lg:tracking-wide leading-tight text-white group-hover:text-black relative z-10 group-hover:translate-x-2 transition-all duration-500">
                    {p.title}
                  </h3>
                  
                  <p className="font-inter font-light text-zinc-500 leading-relaxed mt-4 text-sm md:text-sm lg:text-base xl:text-lg group-hover:text-black transition-colors duration-700 relative z-10">
                    {p.desc}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 4. PROTOCOLO SECTION (bg-black) */}
        <section id="protocolo" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900">
          <div className="w-full">
            <div className="w-full md:w-[80%]">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-10 md:w-16 h-[2px] bg-[#F5B700]"></div>
                <span className="font-michroma text-[11px] md:text-sm text-[#F5B700] tracking-widest uppercase">02 / EL MÉTODO</span>
              </div>
              <div className="overflow-hidden mb-10 md:mb-20 pt-6 -mt-6">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }}>
                  <motion.h2 variants={textRevealVariant} className="font-michroma uppercase tracking-tighter text-white" style={{ fontSize: 'clamp(1.75rem, 5vw, 4.5rem)', lineHeight: 0.9 }}>
                    PROTOCOLO DE<br />
                    INTERVENCIÓN<span className="text-[#F5B700]">.</span>
                  </motion.h2>
                </motion.div>
              </div>
            </div>

            <div className="flex flex-col">
              {[
                { id: "01", title: "Auditoría Forense", desc: "Radiografía exacta de tus cuellos de botella operativos. Detectamos dónde falla tu sistema actual y por dónde se está fugando el capital de tu empresa." },
                { id: "02", title: "Demolición y Arquitectura", desc: "Eliminamos los sistemas inestables que frenan tu negocio. Desplegamos tecnología a medida, rápida y segura, diseñada para que operes en automático y sin caídas de servidor." },
                { id: "03", title: "Automatización Inteligente", desc: "Integramos agentes IA para automatizar tus procesos. Tu empresa empieza a operar, responder y vender 24/7 sin depender de la intervención humana." },
                { id: "04", title: "Gobernanza Digital", desc: "No entregamos software huérfano. Aplicamos un 'Seguro a Todo Riesgo Tecnológico': mantenimiento, protección y evolución continua mensual." },
              ].map((phase, i) => (
                <PhaseRow phase={phase} index={i} key={phase.id} />
              ))}
            </div>
          </div>
        </section>
        
        {/* 5. PILARES SECTION (bg-black) */}
        <section id="pilares" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={staggerContainer} className="w-full">
            <div className="w-full md:w-[80%]">
              <div className="flex items-center gap-4 mb-6 md:mb-8 pt-4 -mt-4">
                <div className="w-10 md:w-16 h-[2px] bg-[#F5B700]"></div>
                <span className="font-michroma text-[11px] md:text-sm text-[#F5B700] tracking-widest uppercase">03 / LA DOCTRINA</span>
              </div>
              <div className="overflow-hidden mb-10 md:mb-20 max-w-full">
                <motion.h2 variants={textRevealVariant} className="font-michroma uppercase tracking-tighter leading-none text-white" style={{ fontSize: 'clamp(1.75rem, 5vw, 4.5rem)' }}>
                  LOS PILARES<span className="text-[#F5B700]">.</span>
                </motion.h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-900 md:border-l bg-black">
              {pilaresData.map((p, i) => (
                <div 
                  key={i}
                  className="p-6 md:p-8 lg:p-10 xl:p-14 border-b border-zinc-900 md:border-r group hover:bg-[#F5B700] transition-colors duration-700 flex flex-col min-h-[220px] md:min-h-[400px] overflow-hidden relative"
                >
                  <div className="flex justify-between items-start mb-6 md:mb-12 relative z-10 w-full">
                    <div className="flex items-center gap-6">
                      <div className="h-px w-8 bg-[#F5B700] group-hover:bg-black transform origin-left transition-all duration-500 group-hover:scale-x-[2.5]"></div>
                      {p.icon && (
                        <div className="transform transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-12">
                          {p.icon}
                        </div>
                      )}
                    </div>
                    {p.letter && (
                      <span className="font-space-mono text-xs md:text-sm text-zinc-600 group-hover:text-black mt-2 transition-colors duration-700">{p.letter}</span>
                    )}
                  </div>
                  
                  <h3 className="font-michroma text-lg md:text-base lg:text-xl xl:text-2xl uppercase mb-3 md:mb-6 tracking-tight lg:tracking-wide leading-tight text-white group-hover:text-black relative z-10 group-hover:translate-x-2 transition-all duration-500">
                    {p.title}
                  </h3>
                  
                  <p className="font-inter font-light text-zinc-500 leading-relaxed mt-4 text-sm md:text-sm lg:text-base xl:text-lg group-hover:text-black transition-colors duration-700 relative z-10">
                    {p.desc}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 6. CASOS / RESULTADOS SECTION (bg-black) */}
        <section id="casos" className="px-0 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={staggerContainer} className="w-full px-6 md:px-0">
            <div className="w-full md:w-[80%]">
              <div className="flex items-center gap-4 mb-6 md:mb-8 pt-4 -mt-4">
                <div className="w-10 md:w-16 h-[2px] bg-[#F5B700]"></div>
                <span className="font-michroma text-[11px] md:text-sm text-[#F5B700] tracking-widest uppercase">04 / CASOS</span>
              </div>
              <div className="overflow-hidden mb-10 md:mb-16">
                <motion.h2 variants={textRevealVariant} className="font-michroma uppercase tracking-tighter text-white" style={{ fontSize: 'clamp(1.75rem, 5vw, 4.5rem)', lineHeight: 0.9 }}>
                  RESULTADOS<span className="text-[#F5B700]">.</span>
                </motion.h2>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} variants={staggerContainer} className="w-full px-6 md:px-0">
            {/* Grid de Resultados */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative">
              {/* Línea divisoria central (solo en desktop) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-zinc-900 -translate-x-1/2"></div>

              {/* TARJETA 1: FLOTA MARÍTIMA */}
              <motion.div variants={fadeUpVariant} className="flex flex-col pr-0 md:pr-12 group">
                {/* Contexto */}
                <div className="mb-12">
                  <span className="text-[#F5B700] text-[10px] md:text-xs font-mono tracking-widest uppercase mb-4 block">
                    Sector Tradicional
                  </span>
                  <h3 className="text-xl md:text-2xl text-white mb-4 uppercase font-michroma group-hover:translate-x-2 transition-transform duration-500">
                    Flota Marítima Comercial
                  </h3>
                  <p className="font-inter font-light text-zinc-400 text-sm md:text-base leading-relaxed">
                    Reestructuración completa de arquitectura web y creación de pasarela de reservas inquebrantable.
                  </p>
                </div>

                {/* La Métrica Dominante */}
                <div className="mb-12 border-l border-[#F5B700] pl-6 py-2">
                  <div className="text-6xl md:text-7xl text-white mb-2 font-michroma tracking-tighter flex items-baseline">
                    <Counter from={0} to={99.9} decimals={1} />
                    <span className="text-[#F5B700] text-6xl md:text-7xl ml-1 font-inter tracking-normal">
                      %
                    </span>
                  </div>
                  <div className="text-zinc-500 text-[10px] md:text-xs font-mono uppercase tracking-widest">
                    Uptime Garantizado en Pico de Demanda
                  </div>
                </div>

                {/* Impacto Verificado */}
                <div className="mt-auto">
                  <div className="h-[1px] w-full bg-zinc-900 mb-8"></div>
                  <span className="text-[#F5B700] text-[10px] md:text-xs font-mono tracking-widest uppercase mb-6 block">
                    Impacto Verificado
                  </span>
                  <ul className="space-y-4 font-inter font-light">
                    {["Blindaje antihackeo y seguridad de base de datos.", "Cero caídas de servidor durante temporada alta.", "Aumento drástico en la retención de reservas online."].map((item, idx) => (
                      <li key={idx} className="flex items-start text-zinc-400 text-sm">
                        <svg className="w-4 h-4 text-[#F5B700] mr-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* TARJETA 2: RED DE LAVANDERÍAS */}
              <motion.div variants={fadeUpVariant} className="flex flex-col pl-0 md:pl-12 mt-8 md:mt-0 group">
                {/* Contexto */}
                <div className="mb-12">
                  <span className="text-[#F5B700] text-[10px] md:text-xs font-mono tracking-widest uppercase mb-4 block">
                    Sector Servicios B2B
                  </span>
                  <h3 className="text-xl md:text-2xl text-white mb-4 uppercase font-michroma group-hover:translate-x-2 transition-transform duration-500">
                    Red de Lavanderías
                  </h3>
                  <p className="font-inter font-light text-zinc-400 text-sm md:text-base leading-relaxed">
                    Sustitución de procesos manuales por un ecosistema digital automatizado para clientes corporativos.
                  </p>
                </div>

                {/* La Métrica Dominante */}
                <div className="mb-12 border-l border-[#F5B700] pl-6 py-2">
                  <div className="text-6xl md:text-7xl text-white mb-2 font-michroma tracking-tighter flex items-baseline">
                    <Counter from={0} to={-60} decimals={0} />
                    <span className="text-[#F5B700] text-6xl md:text-7xl ml-1 font-inter tracking-normal">
                      %
                    </span>
                  </div>
                  <div className="text-zinc-500 text-[10px] md:text-xs font-mono uppercase tracking-widest">
                    Reducción de Carga Administrativa
                  </div>
                </div>

                {/* Impacto Verificado */}
                <div className="mt-auto">
                  <div className="h-[1px] w-full bg-zinc-900 mb-8"></div>
                  <span className="text-[#F5B700] text-[10px] md:text-xs font-mono tracking-widest uppercase mb-6 block">
                    Impacto Verificado
                  </span>
                  <ul className="space-y-4 font-inter font-light">
                    {["Automatización 24/7 de reservas y flujos de cobro.", "Erradicación absoluta de errores humanos logísticos.", "Posicionamiento de marca como líder tecnológico del sector."].map((item, idx) => (
                      <li key={idx} className="flex items-start text-zinc-400 text-sm">
                        <svg className="w-4 h-4 text-[#F5B700] mr-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

      </main>

      {/* OLD MARQUEE SEPARATOR (Above footer) */}
      <div className="marquee-container py-8 md:py-12 overflow-hidden bg-black border-t border-zinc-900">
        <div className="marquee-content flex whitespace-nowrap w-max" style={{ animationDuration: '60s' }}>
          {[1,2,3,4].map((i) => (
            <div key={i} className="marquee-item flex items-center justify-center min-w-max">
              <span className="font-michroma text-transparent text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
                AUDITORÍA FORENSE
              </span>
              <svg viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
              </svg>
              <span className="font-michroma text-transparent text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
                DEMOLICIÓN Y ARQUITECTURA
              </span>
              <svg viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
              </svg>
              <span className="font-michroma text-transparent text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
                AUTOMATIZACIÓN INTELIGENTE
              </span>
              <svg viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
              </svg>
              <span className="font-michroma text-transparent text-3xl md:text-5xl lg:text-[4.5rem] tracking-tighter uppercase mx-4 md:mx-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>
                GOBERNANZA DIGITAL
              </span>
              <svg viewBox="0 0 24 24" className="text-[#F5B700] w-8 h-8 md:w-12 md:h-12 shrink-0 pb-1 mx-4 md:mx-8" style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}>
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black border-t border-zinc-900 pt-12 pb-6 px-6 md:px-12 overflow-hidden">
        <div className="w-full flex flex-row justify-between items-center gap-6 md:gap-8">
          
          {/* Footer Logo / Isotype */}
          <div className="w-[40vw] md:flex-1 md:w-full flex justify-start pb-0">
            <div className="w-full md:w-[20vw] max-w-[150px] md:max-w-[300px] text-white">
              <svg viewBox="0 0 406 348" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity duration-500">
                <path d="M252.188 140.625L236.562 117.188L377.188 0L405.996 41.9922L252.188 140.625Z" fill="#F5B700"/>
                <path d="M170.166 55.3789C206.136 55.3789 235.921 57.9017 259.521 62.9473C266.593 64.4591 273.124 66.3798 279.114 68.71L242.746 99.0166C238.964 98.2723 234.871 97.6421 230.469 97.127C215.332 95.3366 195.231 94.4414 170.166 94.4414C143.636 94.4414 122.233 95.418 105.957 97.3711C89.8438 99.3242 77.5553 103.149 69.0918 108.846C60.6283 114.38 54.8503 122.68 51.7578 133.748C48.8281 144.816 47.2819 159.383 47.1191 177.449H284.912V154.012C284.912 145.974 284.261 138.894 282.959 132.771L321.891 107.806C327.186 120.229 329.834 135.631 329.834 154.012V214.314H47.1191C47.2819 235.148 48.7467 251.831 51.5137 264.363C54.2806 276.896 59.8145 286.336 68.1152 292.684C76.416 299.031 88.7858 303.263 105.225 305.379C121.826 307.332 143.88 308.309 171.387 308.309C196.126 308.309 216.064 307.82 231.201 306.844C246.501 305.867 258.057 303.751 265.869 300.496C273.844 297.078 279.215 292.033 281.982 285.359C284.749 278.686 286.133 269.734 286.133 258.504H329.834C329.834 279.5 326.66 296.02 320.312 308.064C314.128 320.109 304.606 328.898 291.748 334.432C278.89 339.965 262.451 343.465 242.432 344.93C222.575 346.557 198.893 347.371 171.387 347.371C139.974 347.371 113.281 345.743 91.3086 342.488C69.4987 339.396 51.8392 332.967 38.3301 323.201C24.9837 313.273 15.2181 298.462 9.0332 278.768C3.01107 259.074 0 232.788 0 199.91C0 168.009 2.92969 142.456 8.78906 123.25C14.8112 104.044 24.4954 89.5586 37.8418 79.793C51.1882 70.0273 68.6849 63.5169 90.332 60.2617C112.142 57.0065 138.753 55.3789 170.166 55.3789Z" fill="currentColor"/>
              </svg>
            </div>
          </div>

          {/* Footer Interactive Legal Block */}
          <div className="flex flex-col w-[50vw] md:w-[400px] font-mono z-10">
            <div className="text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.4em] text-zinc-600 mb-4 md:mb-6 uppercase flex items-center gap-2 md:gap-3">
              <div className="w-1.5 h-1.5 bg-[#F5B700]"></div>
              Protocolo Legal
            </div>
            
            <div className="flex flex-col border-t border-zinc-900">
              {['Aviso Legal', 'Privacidad', 'Cookies'].map((item) => (
                <a key={item} href="#" className="group flex justify-between items-center py-4 md:py-6 border-b border-zinc-900 transition-colors">
                  <span className="text-[9px] md:text-sm tracking-[0.1em] md:tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors uppercase">{item}</span>
                  <span className="text-zinc-800 group-hover:text-[#F5B700] transition-colors transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-300 text-sm md:text-lg">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width separator and copyright */}
        <div className="-mx-6 md:-mx-12 px-6 md:px-12 mt-16 pt-6 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[9px] uppercase tracking-widest text-zinc-600">
          <p className="flex-1 text-center md:text-left order-2 md:order-1">© {new Date().getFullYear()} Espín Labs. Todos los derechos reservados.</p>
          <a href="mailto:contacto@espinlabs.com" className="flex-1 text-center hover:text-[#F5B700] transition-colors order-1 md:order-2 text-zinc-400 font-inter normal-case text-xs md:text-sm">
            contacto@espinlabs.com
          </a>
          <div className="flex-1 flex justify-center md:justify-end items-center gap-3 order-3">
            <span className="w-1 h-1 bg-[#F5B700]"></span>
            <p>Alta Costura Tecnológica</p>
          </div>
        </div>
      </footer>

    </div>
    </>
  );
}
