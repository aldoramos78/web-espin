"use client";
import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";

function AuditoriaForm() {
  const easePremium: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [ecosistema, setEcosistema] = useState(false);
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState({ web: false, agentes: false, marca: false });

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const s = searchParams.get("servicio");
    if (s === "ecosistema") {
      setEcosistema(true);
      setServiciosSeleccionados({ web: false, agentes: false, marca: false });
    } else if (s === "web") {
      setServiciosSeleccionados(prev => ({ ...prev, web: true }));
    } else if (s === "agentes") {
      setServiciosSeleccionados(prev => ({ ...prev, agentes: true }));
    } else if (s === "marca") {
      setServiciosSeleccionados(prev => ({ ...prev, marca: true }));
    }
  }, [searchParams]);

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
      if (serviciosSeleccionados.marca) servicios.push("Imagen y Marca"); // wait, fixed this
    }
    data.servicios = servicios.join(", ");
    
    // Eliminamos los campos booleanos si existen
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

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 md:p-12">
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easePremium }}
        className="w-full max-w-2xl bg-black border border-zinc-800 p-8 md:p-14 shadow-2xl relative"
      >
        {status === "success" ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 md:py-24 text-center flex flex-col items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 border border-[#F5B700] rounded-full mx-auto mb-8 md:mb-10 flex items-center justify-center text-[#F5B700] text-3xl md:text-4xl">✓</div>
            <h3 className="font-clash font-semibold text-2xl md:text-4xl text-white uppercase mb-6">Auditoría Solicitada</h3>
            <p className="text-zinc-400 font-light text-base md:text-lg max-w-md mx-auto">La Dirección Estratégica analizará los datos y recibirá su Diagnóstico en las próximas 48h.</p>
          </motion.div>
        ) : (
          <>
            <div className="mb-10 md:mb-14">
              <div className="flex justify-between items-start gap-4">
                <h2 className="font-clash font-semibold text-2xl md:text-3xl uppercase text-white mb-4">
                  Solicitud de Auditoría<span className="text-[#F5B700]">.</span>
                </h2>
                <button type="button" onClick={() => router.back()} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#F5B700] md:border-zinc-700 flex items-center justify-center text-[#F5B700] md:text-zinc-400 hover:text-[#F5B700] md:hover:text-white hover:border-[#F5B700] md:hover:border-[#F5B700] transition-colors group flex-shrink-0 mt-1" aria-label="Volver">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                </button>
              </div>
              <p className="font-inter text-zinc-500 text-xs md:text-sm tracking-wide leading-relaxed max-w-lg italic">
                <span className="text-zinc-400">espín</span> desarrolla infraestructuras a medida. Complete los datos para que la Dirección Estratégica inicie su diagnóstico.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-10 font-inter">
              {/* HONEYPOT ANTI-SPAM (invisible para humanos, un bot lo rellenará al leer el DOM) */}
                <div className="absolute opacity-0 -z-50 w-0 h-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="contacto_directo">Deje este campo en blanco si es humano</label>
                  <input type="text" id="contacto_directo" name="contacto_directo" tabIndex={-1} autoComplete="off" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <input required type="text" name="nombre" placeholder="Nombre completo" className="w-full bg-transparent border-b border-zinc-700 py-3 text-white text-sm md:text-base outline-none focus:border-[#F5B700] caret-[#F5B700] transition-colors placeholder:text-zinc-400 rounded-none" />
                <input required type="text" name="empresa" placeholder="Empresa / Proyecto" className="w-full bg-transparent border-b border-zinc-700 py-3 text-white text-sm md:text-base outline-none focus:border-[#F5B700] caret-[#F5B700] transition-colors placeholder:text-zinc-400 rounded-none" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
                <input required type="email" name="email" placeholder="Email profesional" className="md:col-span-3 w-full bg-transparent border-b border-zinc-700 py-3 text-white text-sm md:text-base outline-none focus:border-[#F5B700] caret-[#F5B700] transition-colors placeholder:text-zinc-400 rounded-none" />
                <input required type="tel" name="telefono" placeholder="Teléfono" className="md:col-span-1 w-full bg-transparent border-b border-zinc-700 py-3 text-white text-sm md:text-base outline-none focus:border-[#F5B700] caret-[#F5B700] transition-colors placeholder:text-zinc-400 rounded-none" />
              </div>

              <input required type="text" name="url" placeholder="URL de la empresa (Ej: midominio.com)" className="w-full bg-transparent border-b border-zinc-700 py-3 text-white text-sm md:text-base outline-none focus:border-[#F5B700] caret-[#F5B700] transition-colors placeholder:text-zinc-400 rounded-none" />

              <div className="flex flex-col gap-4">
                <span className="text-zinc-400 text-sm md:text-base">Servicios requeridos:</span>
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

              <textarea required rows={3} name="problema" placeholder="Describa brevemente la fricción o problema que han detectado en su negocio" className="w-full bg-transparent border-b border-zinc-700 py-3 text-white text-sm md:text-base outline-none focus:border-[#F5B700] caret-[#F5B700] transition-colors placeholder:text-zinc-400 resize-none rounded-none"></textarea>

              <div className="flex justify-center w-full md:mt-4">
                <button type="submit" disabled={status === "loading"} className="rings-btn !border-[#F5B700] md:!border-[rgba(242,239,233,0.16)] !px-6 !py-3 md:!px-8 md:!py-4 flex items-center justify-center">
                  <i></i><i></i><i></i>
                  <span className="text-xs md:text-sm font-bold tracking-widest uppercase relative -top-[1px]">{status === "loading" ? "PROCESANDO..." : status === "error" ? "ERROR - REINTENTAR" : "ENVIAR"}</span>
                  <svg className="arr relative -top-[1px]" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
                </button>
              </div>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default function AuditoriaPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <AuditoriaForm />
    </Suspense>
  );
}
