"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Manifiesto() {
  const scrollContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Solo en escritorio mapeamos el scroll vertical a horizontal
      if (window.innerWidth >= 768 && e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY * 1.5;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  const BackButton = () => (
    <div className="mb-12 md:mb-16">
      <Link 
        href="/"
        className="group inline-flex items-center gap-3 text-[#888888] hover:text-[#F5B700] transition-colors duration-300 font-michroma text-xs tracking-widest uppercase"
      >
        <span className="relative flex items-center justify-center w-8 h-8 border border-[#222222] group-hover:border-[#F5B700] transition-colors duration-300">
          <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </span>
        VOLVER
      </Link>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#E0E0E0] font-inter overflow-hidden selection:bg-[#F5B700] selection:text-black">
      
      {/* Sello de agua fondo (Isotipo gigante) */}
      <div 
        className="fixed top-0 right-0 -mr-40 -mt-20 opacity-[0.03] pointer-events-none select-none text-[60vw] font-michroma leading-none"
        aria-hidden="true"
      >
        e
      </div>

      <main 
        ref={scrollContainerRef}
        className="relative z-10 w-full h-screen overflow-y-auto md:overflow-x-auto md:overflow-y-hidden scroll-smooth"
      >
        
        {/* --- MOBILE VIEW (Vertical) --- */}
        <div className="md:hidden max-w-3xl mx-auto px-6 pt-12 pb-32">
          
          <BackButton />

          <div className="mb-12 font-inter font-thin tracking-widest text-[#888888] text-sm uppercase">
            [ DOC.00 / DOCTRINA OPERATIVA ]
          </div>

          <h1 className="font-michroma text-4xl text-[#FFFFFF] leading-tight mb-8">
            EL <span className="text-[#F5B700]">LUJO</span> ES LA<br />
            AUSENCIA DE <span className="text-[#F5B700]">RUIDO.</span>
          </h1>
          
          <p className="text-xl font-inter font-light text-[#CCCCCC] leading-relaxed mb-16">
            Por qué espín se ve, se lee y opera como lo hace.
          </p>

          <section className="mb-16">
            <p className="text-lg leading-relaxed mb-6 font-light">
              No somos una agencia creativa. Somos una consultora de infraestructura tecnológica. Nuestro trabajo consiste en auditar sistemas lentos, ineficientes y desfasados, para reconstruirlos con la precisión de un bisturí.
            </p>
            <p className="text-lg leading-relaxed font-light">
              Esa obsesión por erradicar lo innecesario en el código de nuestros clientes es exactamente la misma que rige nuestra propia marca. No hay adornos. No hay colores de relleno. No hay ruido.
            </p>
          </section>

          <hr className="border-t border-[#222222] my-16" />

          <section className="mb-16">
            <h2 className="font-michroma text-xl text-[#FFFFFF] mb-6">
              LA <span className="text-[#F5B700]">REGLA</span> DEL VACÍO
              <span className="text-[#888888] text-sm tracking-widest font-inter font-thin mt-2 block">[ NUESTRO CÓDIGO CROMÁTICO ]</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6 font-light">
              El 90% de nuestro entorno opera en un negro absoluto. En la mayoría de las agencias, el color se utiliza para compensar la falta de contenido o para distraer. Nosotros usamos el vacío como herramienta arquitectónica. El negro no compite con la información, la aísla. El blanco puro es la única voz permitida sobre ese vacío.
            </p>
            <p className="text-lg leading-relaxed font-light">
              Nuestro único acento, el amarillo industrial (#F5B700), funciona como una luz forense: no rellena espacios, solo ilumina los datos críticos o las acciones que generan negocio.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-michroma text-xl text-[#FFFFFF] mb-6">
              <span className="text-[#F5B700]">JUNTOS</span>, PERO NO REVUELTOS
              <span className="text-[#888888] text-sm tracking-widest font-inter font-thin mt-2 block">[ EL ISOTIPO ]</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6 font-light">
              El símbolo de espín —nuestra 'e' minúscula atravesada por una cuña amarilla— no es un capricho geométrico. Genera un corte en espacio negativo que separa visualmente dos masas dentro de la misma forma.
            </p>
            <p className="text-lg leading-relaxed font-light">
              Representa la intersección entre los dos sistemas que operan en nuestros ecosistemas: la Inteligencia Artificial y la decisión humana. El código y el negocio. La máquina y el criterio. El corte demuestra que conviven en el mismo entorno, pero delimita sus funciones.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="font-michroma text-xl text-[#FFFFFF] mb-6">
              <span className="text-[#F5B700]">ARQUITECTURA</span> ANTES QUE ESTÉTICA
              <span className="text-[#888888] text-sm tracking-widest font-inter font-thin mt-2 block">[ LA TIPOGRAFÍA ]</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6 font-light">
              Solo operamos con dos fuentes porque no necesitamos más para establecer jerarquía. Utilizamos <span className="font-michroma text-sm">MICHROMA</span> para nuestros titulares no porque sea estética, sino porque su geometría extendida y fría funciona como el plano técnico de un edificio. Transmite orden de un solo vistazo.
            </p>
            <p className="text-lg leading-relaxed font-light">
              Para el cuerpo de texto, donde tú necesitas comprender lo que hacemos, liberamos la familia Inter: neutra, implacable y diseñada para leerse en pantallas de alto rendimiento sin cansar el ojo humano.
            </p>
          </section>

          <section className="mt-24 p-8 border border-[#222222] bg-[#0F0F0F] relative">
            <div className="absolute top-0 left-0 w-2 h-2 bg-[#F5B700]"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#F5B700]"></div>
            <h2 className="font-michroma text-lg text-[#F5B700] mb-4">
              ALTA COSTURA TECNOLÓGICA
            </h2>
            <p className="text-base leading-relaxed text-[#CCCCCC] font-light">
              Esta doctrina estética es el reflejo de nuestro código. Si eliminamos lo superfluo en nuestra propia casa, imagina lo que hacemos cuando entramos a auditar la tuya. No seguimos tendencias, construimos infraestructuras que aguantan el peso de tu facturación.
            </p>
          </section>

        </div>

        {/* --- DESKTOP VIEW (Horizontal Apaisado) --- */}
        <div className="hidden md:flex h-full w-max items-center px-12 lg:px-24 gap-24 lg:gap-32">
          
          <div className="w-[600px] flex flex-col pt-12">
            <BackButton />
            <div className="mb-12 font-inter font-thin tracking-widest text-[#888888] text-sm uppercase">
              [ DOC.00 / DOCTRINA OPERATIVA ]
            </div>
            <h1 className="font-michroma text-5xl lg:text-6xl xl:text-7xl text-[#FFFFFF] leading-tight mb-8">
              EL <span className="text-[#F5B700]">LUJO</span> ES LA<br />
              AUSENCIA DE <span className="text-[#F5B700]">RUIDO.</span>
            </h1>
            <p className="text-2xl font-inter font-light text-[#CCCCCC] leading-relaxed mb-12">
              Por qué espín se ve, se lee y opera como lo hace.
            </p>
            <p className="text-lg leading-relaxed mb-6 font-light">
              No somos una agencia creativa. Somos una consultora de infraestructura tecnológica. Nuestro trabajo consiste en auditar sistemas lentos, ineficientes y desfasados, para reconstruirlos con la precisión de un bisturí.
            </p>
            <p className="text-lg leading-relaxed font-light">
              Esa obsesión por erradicar lo innecesario en el código de nuestros clientes es exactamente la misma que rige nuestra propia marca. No hay adornos. No hay colores de relleno. No hay ruido.
            </p>
          </div>

          <div className="w-[450px] lg:w-[500px] flex flex-col border-l border-[#222222] pl-16">
            <h2 className="font-michroma text-2xl text-[#FFFFFF] mb-6">
              LA <span className="text-[#F5B700]">REGLA</span> DEL VACÍO
              <span className="text-[#888888] text-sm tracking-widest font-inter font-thin mt-2 block">[ NUESTRO CÓDIGO CROMÁTICO ]</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6 font-light">
              El 90% de nuestro entorno opera en un negro absoluto. En la mayoría de las agencias, el color se utiliza para compensar la falta de contenido o para distraer. Nosotros usamos el vacío como herramienta arquitectónica. El negro no compite con la información, la aísla. El blanco puro es la única voz permitida sobre ese vacío.
            </p>
            <p className="text-lg leading-relaxed font-light">
              Nuestro único acento, el amarillo industrial (#F5B700), funciona como una luz forense: no rellena espacios, solo ilumina los datos críticos o las acciones que generan negocio.
            </p>
          </div>

          <div className="w-[450px] lg:w-[500px] flex flex-col border-l border-[#222222] pl-16">
            <h2 className="font-michroma text-2xl text-[#FFFFFF] mb-6">
              <span className="text-[#F5B700]">JUNTOS</span>, PERO NO REVUELTOS
              <span className="text-[#888888] text-sm tracking-widest font-inter font-thin mt-2 block">[ EL ISOTIPO ]</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6 font-light">
              El símbolo de espín —nuestra 'e' minúscula atravesada por una cuña amarilla— no es un capricho geométrico. Genera un corte en espacio negativo que separa visualmente dos masas dentro de la misma forma.
            </p>
            <p className="text-lg leading-relaxed font-light">
              Representa la intersección entre los dos sistemas que operan en nuestros ecosistemas: la Inteligencia Artificial y la decisión humana. El código y el negocio. La máquina y el criterio. El corte demuestra que conviven en el mismo entorno, pero delimita sus funciones.
            </p>
          </div>

          <div className="w-[450px] lg:w-[500px] flex flex-col border-l border-[#222222] pl-16">
            <h2 className="font-michroma text-2xl text-[#FFFFFF] mb-6">
              <span className="text-[#F5B700]">ARQUITECTURA</span> ANTES QUE ESTÉTICA
              <span className="text-[#888888] text-sm tracking-widest font-inter font-thin mt-2 block">[ LA TIPOGRAFÍA ]</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6 font-light">
              Solo operamos con dos fuentes porque no necesitamos más para establecer jerarquía. Utilizamos <span className="font-michroma text-sm">MICHROMA</span> para nuestros titulares no porque sea estética, sino porque su geometría extendida y fría funciona como el plano técnico de un edificio. Transmite orden de un solo vistazo.
            </p>
            <p className="text-lg leading-relaxed font-light">
              Para el cuerpo de texto, donde tú necesitas comprender lo que hacemos, liberamos la familia Inter: neutra, implacable y diseñada para leerse en pantallas de alto rendimiento sin cansar el ojo humano.
            </p>
          </div>

          <div className="w-[400px] lg:w-[450px] ml-8 mr-24">
            <div className="p-12 border border-[#333333] bg-[#0F0F0F] relative group hover:border-[#F5B700] transition-colors duration-500">
              <div className="absolute top-0 left-0 w-2 h-2 bg-[#F5B700]"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#F5B700]"></div>
              <h2 className="font-michroma text-2xl text-[#F5B700] mb-6 leading-tight">
                ALTA COSTURA TECNOLÓGICA
              </h2>
              <p className="text-lg leading-relaxed text-[#CCCCCC] font-light">
                Esta doctrina estética es el reflejo de nuestro código. Si eliminamos lo superfluo en nuestra propia casa, imagina lo que hacemos cuando entramos a auditar la tuya. No seguimos tendencias, construimos infraestructuras que aguantan el peso de tu facturación.
              </p>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
