"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const easePremium: [number, number, number, number] = [0.76, 0, 0.24, 1]; // Custom brutalist ease

// --- PHASE ROW COMPONENT (Protocolo) ---
function PhaseRow({ phase, index }: { phase: { id: string, title: string, desc: string }, index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "end 10%"] });
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.2, 1, 1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.95, 1, 1, 0.95]);
  const numColor = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["#3f3f46", "#F5B700", "#F5B700", "#3f3f46"]); 
  const textColor = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["#52525b", "#ffffff", "#ffffff", "#52525b"]); 

  return (
    <motion.div ref={ref} style={{ opacity, scale }} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-24 py-10 md:py-20 border-t border-zinc-900 group">
      <motion.div style={{ color: numColor }} className="font-michroma text-6xl md:text-8xl leading-none">
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
      {/* Shifted up slightly with mb-[5vh] for optical vertical centering of the 'e' */}
      <div className="relative flex items-center justify-center font-michroma text-[65vw] md:text-[40vw] text-white leading-none mb-[5vh] md:mb-[8vh]">
        <motion.div
          initial={{ y: "15%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: easeDelicate }}
          className="relative z-10 flex items-center justify-center"
        >
          e
        </motion.div>
        
        {/* The Tilde - Box-content ensures the yellow fill strictly maintains font stem thickness */}
        <motion.div
          initial={{ y: "-120vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, delay: 0.6, ease: easeDelicate }}
          className="absolute bg-[#F5B700] border-black transform rotate-[-15deg] z-20 box-content"
          style={{
            top: "12%", 
            right: "4%", 
            width: "0.18em", 
            height: "0.08em",
            borderWidth: "0.05em",
            borderRadius: "0.01em"
          }}
        />
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

  // State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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

  const navLinks = [
    { label: "Diagnóstico", href: "#dolor" },
    { label: "Protocolo", href: "#protocolo" },
    { label: "Pilares", href: "#pilares" },
    { label: "Resultados", href: "#casos" },
  ];

  const dolorData = [
    { title: "Sistema Expuesto", desc: "Brechas de seguridad, plantillas web obsoletas, plugins de terceros vulnerados, enlaces rotos. Extirpamos tecnología vulnerable y desplegamos fortalezas digitales inquebrantables." },
    { title: "Fugas de Capital", desc: "Un sistema lento, caído u obsoleto hace que tu cliente se vaya a la competencia. Optimizamos la velocidad de tu ecosistema para que la retención sea máxima." },
    { title: "Devaluación de Marca", desc: "Una interfaz anticuada proyecta decadencia. Nuestra imagen digital es la puerta de entrada a nuestra casa. Reconstruimos tu presencia digital para blindar tu autoridad." }
  ];

  const pilaresData = [
    { title: "Cimientos y Escala", desc: "No solo intervenimos empresas consolidadas con ecosistemas desfasados. Acompañamos a nuevos negocios a nacer desde el día cero con una infraestructura digital inquebrantable." },
    { title: "Socios, no técnicos", desc: "Nuestro cliente no busca un informático para apagar fuegos. Entiende que el software es el motor principal de su rentabilidad y exige un partner tecnológico capaz de sostener y blindar su crecimiento a largo plazo." },
    { title: "Ingeniería de Negocio", desc: "Cada línea de código, cada automatización con IA y cada arquitectura que desplegamos tiene un único objetivo innegociable: erradicar ineficiencias y aumentar tu beneficio." }
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

      {/* 1. GLOBAL NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b-2 border-zinc-900 mt-[2px]">
        <div className="px-6 py-5 md:px-12 flex items-center justify-between md:grid md:grid-cols-3">
          {/* Logo con técnica de 'i' sin punto */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, ease: easePremium }} className="flex justify-start">
            <a href="#" aria-label="espín" className="font-michroma text-2xl md:text-3xl tracking-tighter lowercase flex items-start text-white hover:text-zinc-300 transition-colors">
              esp
              <span className="relative">
                ı
                <span className="absolute top-[0.34em] right-[-0.07em] w-[0.18em] h-[0.08em] bg-[#F5B700] transform rotate-[-15deg] rounded-[0.01em]" />
              </span>
              n
            </a>
          </motion.div>
          
          {/* Desktop Nav con ScrollSpy Automático */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.2, ease: easePremium }} className="hidden md:flex justify-center gap-8 lg:gap-12 items-center">
            {navLinks.map((link) => {
               const isActive = activeSection === link.href.substring(1);
               return (
               <a key={link.href} href={link.href} className={`group relative text-[10px] lg:text-xs uppercase tracking-[0.2em] transition-colors duration-500 pb-2 ${isActive ? 'text-white' : 'text-zinc-500 hover:text-white'}`}>
                 {link.label}
                 <span className={`absolute bottom-0 left-0 h-[2px] bg-[#F5B700] transition-all duration-500 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
               </a>
            )})}
            <button onClick={() => setIsContactModalOpen(true)} className="group relative text-[10px] lg:text-xs uppercase tracking-[0.2em] transition-colors duration-500 pb-2 text-zinc-500 hover:text-white">
              Contacto
              <span className="absolute bottom-0 left-0 h-[2px] bg-[#F5B700] transition-all duration-500 w-0 group-hover:w-full"></span>
            </button>
          </motion.div>

          {/* Contenedor vacío para mantener el grid de 3 columnas y que el menú quede en el centro exacto */}
          <div className="hidden md:block"></div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex justify-end">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 focus:outline-none">
              <div className="relative w-6 h-4">
                <span className={`absolute left-0 w-6 h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
                <span className={`absolute left-0 w-6 h-px bg-white transition-all duration-300 top-2 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute left-0 w-6 h-px bg-white transition-all duration-300 ${isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }} 
              exit={{ opacity: 0, height: 0 }} 
              className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-zinc-900 overflow-hidden"
            >
              <div className="flex flex-col px-6 py-8 gap-6">
                {navLinks.map((link) => (
                   <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="font-michroma text-sm uppercase tracking-[0.2em] text-zinc-400 hover:text-white">
                     {link.label}
                   </a>
                ))}
                <button onClick={() => { setIsMobileMenuOpen(false); setIsContactModalOpen(true); }} className="font-michroma text-sm uppercase tracking-[0.2em] text-[#F5B700] border border-[#F5B700] p-4 text-center mt-4">
                  Contacto
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* 2. HERO SECTION */}
        <section className="min-h-[100vh] flex flex-col justify-center px-6 md:px-12 pt-24 pb-16 md:pt-32 md:pb-24 border-b border-zinc-900 relative bg-black">
          <div className="absolute left-12 top-0 bottom-0 w-px bg-zinc-900 hidden md:block"></div>
          
          <div className="max-w-6xl w-full md:pl-20 mt-10 md:mt-0">
            <h1 className="font-michroma uppercase tracking-tighter mb-8 md:mb-12 text-[10vw] sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[1.1] md:leading-[1.1]">
              <div className="overflow-hidden pb-4 -mb-4 pt-6 -mt-6">
                <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1.4, ease: easePremium, delay: 0.1 }}>
                  ALTA COSTURA
                </motion.div>
              </div>
              <div className="overflow-hidden pb-4 -mb-4 pt-6 -mt-6">
                <motion.div 
                  initial={{ y: "100%" }} 
                  animate={{ y: 0 }} 
                  transition={{ duration: 1.4, ease: easePremium, delay: 0.2 }} 
                  className="text-zinc-300 md:text-white text-[8.5vw] sm:text-6xl md:text-7xl lg:text-[6.5rem]"
                >
                  TECNOLÓGICA<span className="text-[#F5B700]">.</span>
                </motion.div>
              </div>
            </h1>

            <div className="overflow-hidden mb-12 md:mb-20 pt-4 -mt-4">
              <motion.p initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.4, ease: easePremium, delay: 0.3 }} className="font-inter font-light text-zinc-400 text-lg md:text-2xl lg:text-3xl max-w-4xl leading-relaxed md:leading-tight tracking-tight">
                Auditamos y reconstruimos infraestructuras obsoletas. Transformamos negocios que pierden dinero en ecosistemas digitales de alto rendimiento.
              </motion.p>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8, ease: easePremium }}>
              <button onClick={() => setIsContactModalOpen(true)} className="group relative inline-flex items-center justify-center bg-[#F5B700] text-black px-8 py-5 md:px-12 md:py-7 rounded-none overflow-hidden transition-transform duration-500 hover:scale-[1.02] w-full md:w-[350px] text-center border border-[#F5B700]">
                <div className="absolute inset-0 bg-white transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0"></div>
                <span className="relative z-10 font-michroma text-xs md:text-sm uppercase tracking-widest font-bold">
                  Inicia la Auditoría
                </span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* 3. DOLOR SECTION (bg-zinc-950) */}
        <section id="dolor" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-zinc-950 border-b border-zinc-900 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto md:pl-20">
            <div className="mb-10 md:mb-20 max-w-4xl">
              <div className="overflow-hidden pt-4 -mt-4">
                <motion.h2 variants={fadeUpVariant} className="font-michroma text-2xl md:text-6xl uppercase tracking-tighter leading-tight md:leading-none mb-4 md:mb-6 text-white">
                  El coste real de<br className="hidden md:block" /> la obsolescencia<span className="text-[#F5B700]">.</span>
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
                <motion.div 
                  key={i}
                  variants={fadeUpVariant}
                  className="p-6 md:p-8 lg:p-10 xl:p-14 border-b border-zinc-900 md:border-r group hover:bg-zinc-900 transition-colors duration-700 flex flex-col min-h-[220px] md:min-h-[400px] overflow-hidden relative"
                >
                  <div className="h-px w-8 bg-[#F5B700] mb-6 md:mb-12 transform origin-left transition-transform duration-500 group-hover:scale-x-[2.5] relative z-10"></div>
                  
                  <h3 className="font-michroma text-lg md:text-base lg:text-xl xl:text-2xl uppercase mb-3 md:mb-6 tracking-tight lg:tracking-wide leading-tight text-white relative z-10 group-hover:translate-x-2 transition-transform duration-500">
                    {p.title}
                  </h3>
                  
                  <p className="font-inter font-light text-zinc-500 leading-relaxed mt-4 text-sm md:text-sm lg:text-base xl:text-lg group-hover:text-zinc-400 transition-colors duration-500 relative z-10">
                    {p.desc}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F5B700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 4. PROTOCOLO SECTION (bg-black) */}
        <section id="protocolo" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900">
          <div className="max-w-6xl mx-auto md:pl-20">
            <div className="overflow-hidden mb-10 md:mb-20 pt-6 -mt-6">
              <motion.h2 initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: easePremium }} className="font-michroma text-2xl md:text-5xl uppercase tracking-tighter text-white">
                Protocolo de intervención<span className="text-[#F5B700]">.</span>
              </motion.h2>
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
        
        {/* 5. PILARES SECTION (bg-zinc-950) */}
        <section id="pilares" className="px-6 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-zinc-950 border-b border-zinc-900 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto md:pl-20">
            <div className="overflow-hidden mb-10 md:mb-20 max-w-4xl pt-4 -mt-4">
              <motion.h2 variants={fadeUpVariant} className="font-michroma text-2xl md:text-5xl uppercase tracking-tighter leading-tight md:leading-none text-white">
                Los Pilares<span className="text-[#F5B700]">.</span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-900 md:border-l bg-black">
              {pilaresData.map((p, i) => (
                <motion.div 
                  key={i}
                  variants={fadeUpVariant}
                  className="p-6 md:p-8 lg:p-10 xl:p-14 border-b border-zinc-900 md:border-r group hover:bg-zinc-900 transition-colors duration-700 flex flex-col min-h-[220px] md:min-h-[400px] overflow-hidden relative"
                >
                  <div className="h-px w-8 bg-[#F5B700] mb-6 md:mb-12 transform origin-left transition-transform duration-500 group-hover:scale-x-[2.5] relative z-10"></div>
                  
                  <h3 className="font-michroma text-lg md:text-base lg:text-xl xl:text-2xl uppercase mb-3 md:mb-6 tracking-tight lg:tracking-wide leading-tight text-white relative z-10 group-hover:translate-x-2 transition-transform duration-500">
                    {p.title}
                  </h3>
                  
                  <p className="font-inter font-light text-zinc-500 leading-relaxed mt-4 text-sm md:text-sm lg:text-base xl:text-lg group-hover:text-zinc-400 transition-colors duration-500 relative z-10">
                    {p.desc}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F5B700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 6. CASOS / RESULTADOS SECTION (bg-black) */}
        <section id="casos" className="px-0 md:px-12 pt-16 pb-16 md:pt-24 md:pb-32 bg-black border-b border-zinc-900">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto md:pl-20 px-6 md:px-0">
            <div className="overflow-hidden mb-10 md:mb-16 pt-4 -mt-4">
              <motion.h2 variants={fadeUpVariant} className="font-michroma text-2xl md:text-5xl uppercase tracking-tighter text-white">
                Resultados<span className="text-[#F5B700]">.</span>
              </motion.h2>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto md:pl-20 px-6 md:px-0">
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
                    99.9
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
                    -60
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

      {/* FOOTER */}
      <footer className="bg-black border-t border-zinc-900 pt-12 pb-6 px-6 md:px-12 overflow-hidden">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-16 md:gap-8">
          
          {/* Footer Logo / Isotype */}
          <div className="flex-1 w-full flex justify-start">
            <div className="relative flex items-center justify-start font-michroma text-[45vw] md:text-[16vw] text-white leading-none -translate-x-[2%] -translate-y-[9%]">
              <div className="relative leading-none">
                e
                <div 
                  className="absolute bg-[#F5B700] border-black transform rotate-[-15deg] box-content"
                  style={{
                    top: "12%", 
                    right: "4%", 
                    width: "0.18em", 
                    height: "0.08em",
                    borderWidth: "0.05em",
                    borderRadius: "0.01em"
                  }}
                />
              </div>
            </div>
          </div>

          {/* Footer Interactive Legal Block */}
          <div className="flex flex-col w-full md:w-[400px] font-mono z-10">
            <div className="text-[10px] tracking-[0.4em] text-zinc-600 mb-6 uppercase flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-[#F5B700]"></div>
              Protocolo Legal
            </div>
            
            <div className="flex flex-col border-t border-zinc-900">
              {['Aviso Legal', 'Privacidad', 'Cookies'].map((item) => (
                <a key={item} href="#" className="group flex justify-between items-center py-6 border-b border-zinc-900 transition-colors">
                  <span className="text-xs md:text-sm tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors uppercase">{item}</span>
                  <span className="text-zinc-800 group-hover:text-[#F5B700] transition-colors transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-300 text-lg">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width separator and copyright */}
        <div className="-mx-6 md:-mx-12 px-6 md:px-12 mt-16 pt-6 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[9px] uppercase tracking-widest text-zinc-600">
          <p>© {new Date().getFullYear()} Espín Labs. Todos los derechos reservados.</p>
          <div className="flex items-center gap-3">
            <span className="w-1 h-1 bg-[#F5B700]"></span>
            <p>Alta Costura Tecnológica</p>
          </div>
        </div>
      </footer>

    </div>
    </>
  );
}
