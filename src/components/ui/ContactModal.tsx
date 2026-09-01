"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];
  
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [ecosistema, setEcosistema] = useState(false);
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState({ web: false, agentes: false, marca: false });

  const handleEcosistemaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setEcosistema(isChecked);
    if (isChecked) {
      setServiciosSeleccionados({ web: false, agentes: false, marca: false });
    }
  };

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

    const servicios = [];
    if (ecosistema) {
      servicios.push("Ecosistema Completo");
    } else {
      if (serviciosSeleccionados.web) servicios.push("Desarrollo Web");
      if (serviciosSeleccionados.agentes) servicios.push("Agentes");
      if (serviciosSeleccionados.marca) servicios.push("Imagen y Marca");
    }
    data.servicios = servicios.join(", ");
    
    delete data.servicio_web;
    delete data.servicio_agentes;
    delete data.servicio_marca;
    delete data.servicio_ecosistema;

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
    } catch (err: unknown) {
      alert("ERROR CLIENTE: " + (err instanceof Error ? err.message : String(err)));
      setStatus("error");
    }
  };

  // Reset status when modal finishes closing
  useEffect(() => { 
    if (!isOpen) {
      const timer = setTimeout(() => {
        setStatus("idle");
        setEcosistema(false);
        setServiciosSeleccionados({ web: false, agentes: false, marca: false });
      }, 500);
      return () => clearTimeout(timer);
    } 
  }, [isOpen]);

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
                <h3 className="font-clash font-semibold text-2xl md:text-4xl text-white uppercase mb-6">Solicitud Recibida</h3> 
                <p className="text-zinc-400 font-light text-base md:text-lg max-w-md mx-auto">Nuestro equipo analizará tu consulta y te contactará en las próximas 24h.</p>
              </motion.div>
            ) : (
              <>
                <div className="mb-10 md:mb-14">
                  <h2 className="font-clash font-semibold text-2xl md:text-3xl uppercase text-white mb-4"> 
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

                <div className="flex flex-col gap-4">
                  <span className="text-zinc-400 text-sm md:text-base">Servicios de interés:</span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className={`flex items-center gap-3 cursor-pointer group ${ecosistema ? 'opacity-30 pointer-events-none' : ''} transition-opacity duration-300`}>
                      <div className="relative flex items-center justify-center">
                        <input type="checkbox" name="servicio_web" checked={serviciosSeleccionados.web} onChange={(e) => setServiciosSeleccionados({ ...serviciosSeleccionados, web: e.target.checked })} className="peer appearance-none w-5 h-5 border border-zinc-700 bg-transparent checked:bg-[#F5B700] checked:border-[#F5B700] transition-colors cursor-pointer" />
                        <span className="absolute text-black opacity-0 peer-checked:opacity-100 pointer-events-none text-xs">✓</span>
                      </div>
                      <span className="text-zinc-300 text-sm group-hover:text-white transition-colors">Desarrollo Web</span>
                    </label>

                    <label className={`flex items-center gap-3 cursor-pointer group ${ecosistema ? 'opacity-30 pointer-events-none' : ''} transition-opacity duration-300`}>
                      <div className="relative flex items-center justify-center">
                        <input type="checkbox" name="servicio_agentes" checked={serviciosSeleccionados.agentes} onChange={(e) => setServiciosSeleccionados({ ...serviciosSeleccionados, agentes: e.target.checked })} className="peer appearance-none w-5 h-5 border border-zinc-700 bg-transparent checked:bg-[#F5B700] checked:border-[#F5B700] transition-colors cursor-pointer" />
                        <span className="absolute text-black opacity-0 peer-checked:opacity-100 pointer-events-none text-xs">✓</span>
                      </div>
                      <span className="text-zinc-300 text-sm group-hover:text-white transition-colors">Agentes de IA</span>
                    </label>

                    <label className={`flex items-center gap-3 cursor-pointer group ${ecosistema ? 'opacity-30 pointer-events-none' : ''} transition-opacity duration-300`}>
                      <div className="relative flex items-center justify-center">
                        <input type="checkbox" name="servicio_marca" checked={serviciosSeleccionados.marca} onChange={(e) => setServiciosSeleccionados({ ...serviciosSeleccionados, marca: e.target.checked })} className="peer appearance-none w-5 h-5 border border-zinc-700 bg-transparent checked:bg-[#F5B700] checked:border-[#F5B700] transition-colors cursor-pointer" />
                        <span className="absolute text-black opacity-0 peer-checked:opacity-100 pointer-events-none text-xs">✓</span>
                      </div>
                      <span className="text-zinc-300 text-sm group-hover:text-white transition-colors">Imagen y Marca</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer group transition-opacity duration-300">
                      <div className="relative flex items-center justify-center">
                        <input type="checkbox" name="servicio_ecosistema" checked={ecosistema} onChange={handleEcosistemaChange} className="peer appearance-none w-5 h-5 border border-zinc-700 bg-transparent checked:bg-[#F5B700] checked:border-[#F5B700] transition-colors cursor-pointer" />
                        <span className="absolute text-black opacity-0 peer-checked:opacity-100 pointer-events-none text-xs">✓</span>
                      </div>
                      <span className="text-white font-semibold text-sm group-hover:text-[#F5B700] transition-colors">Ecosistema Completo</span>
                    </label>
                  </div>
                </div>

                <textarea required rows={3} name="problema" placeholder="¿Cuál es el problema técnico u operativo que más está penalizando a tu negocio?" className="w-full bg-transparent border-b border-zinc-700 py-3 text-white text-sm md:text-base outline-none focus:border-[#F5B700] caret-[#F5B700] transition-colors placeholder:text-zinc-400 resize-none rounded-none"></textarea>

                <button type="submit" disabled={status === "loading"} className="group relative w-full bg-[#F5B700] text-black py-5 md:py-6 mt-4 overflow-hidden disabled:opacity-50 transition-transform duration-500 hover:scale-[1.01] border border-[#F5B700]">
                  <div className="absolute inset-0 bg-white transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0"></div>
                  <span className="relative z-10 font-clash font-semibold text-xs md:text-sm uppercase font-bold"> 
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
