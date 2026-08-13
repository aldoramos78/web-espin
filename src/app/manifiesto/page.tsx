import React from 'react';
import Link from 'next/link';

export default function Manifiesto() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#E0E0E0] font-inter overflow-hidden selection:bg-[#F5B700] selection:text-black">
      
      {/* Sello de agua fondo (Isotipo gigante) */}
      <div 
        className="absolute top-0 right-0 -mr-40 -mt-20 opacity-[0.03] pointer-events-none select-none text-[60vw] font-michroma leading-none"
        aria-hidden="true"
      >
        e
      </div>

      <main className="relative z-10 max-w-3xl mx-auto px-6 pt-16 pb-32 md:pt-24 md:pb-48">
        
        {/* Botón Volver Técnico */}
        <div className="mb-16 md:mb-24">
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

        {/* Metadato / Etiqueta superior */}
        <div className="mb-12 font-inter font-thin tracking-widest text-[#888888] text-sm uppercase">
          [ DOC.00 / DOCTRINA OPERATIVA ]
        </div>

        {/* Titular Principal */}
        <h1 className="font-michroma text-4xl md:text-5xl lg:text-6xl text-[#FFFFFF] leading-tight mb-8">
          EL LUJO ES LA<br />
          <span className="text-[#F5B700]">AUSENCIA DE RUIDO.</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-inter font-light text-[#CCCCCC] leading-relaxed mb-20">
          Por qué espín se ve, se lee y opera como lo hace.
        </p>

        {/* Bloque 01 */}
        <section className="mb-16">
          <p className="text-lg leading-relaxed mb-6 font-normal">
            No somos una agencia creativa. Somos una consultora de infraestructura tecnológica. Nuestro trabajo consiste en auditar sistemas lentos, ineficientes y desfasados, para reconstruirlos con la precisión de un bisturí.
          </p>
          <p className="text-lg leading-relaxed font-normal">
            Esa obsesión por erradicar lo innecesario en el código de nuestros clientes es exactamente la misma que rige nuestra propia marca. No hay adornos. No hay colores de relleno. No hay ruido.
          </p>
        </section>

        {/* Divisor brutalista */}
        <hr className="border-t border-[#222222] my-16" />

        {/* Bloque 02 */}
        <section className="mb-16">
          <h2 className="font-michroma text-xl md:text-2xl text-[#FFFFFF] mb-6">
            LA REGLA DEL VACÍO <br className="hidden md:block" />
            <span className="text-[#888888] text-sm md:text-base tracking-widest font-inter font-thin mt-2 block">[ NUESTRO CÓDIGO CROMÁTICO ]</span>
          </h2>
          <p className="text-lg leading-relaxed mb-6 font-normal">
            El 90% de nuestro entorno opera en un negro absoluto. En la mayoría de las agencias, el color se utiliza para compensar la falta de contenido o para distraer. Nosotros usamos el vacío como herramienta arquitectónica. El negro no compite con la información, la aísla. El blanco puro es la única voz permitida sobre ese vacío.
          </p>
          <p className="text-lg leading-relaxed font-normal">
            Nuestro único acento, el amarillo industrial (#F5B700), funciona como una luz forense: no rellena espacios, solo ilumina los datos críticos o las acciones que generan negocio.
          </p>
        </section>

        {/* Bloque 03 */}
        <section className="mb-16">
          <h2 className="font-michroma text-xl md:text-2xl text-[#FFFFFF] mb-6">
            JUNTOS, PERO NO REVUELTOS <br className="hidden md:block" />
            <span className="text-[#888888] text-sm md:text-base tracking-widest font-inter font-thin mt-2 block">[ EL ISOTIPO ]</span>
          </h2>
          <p className="text-lg leading-relaxed mb-6 font-normal">
            El símbolo de espín —nuestra 'e' minúscula atravesada por una cuña amarilla— no es un capricho geométrico. Genera un corte en espacio negativo que separa visualmente dos masas dentro de la misma forma.
          </p>
          <p className="text-lg leading-relaxed font-normal">
            Representa la intersección entre los dos sistemas que operan en nuestros ecosistemas: la Inteligencia Artificial y la decisión humana. El código y el negocio. La máquina y el criterio. El corte demuestra que conviven en el mismo entorno, pero delimita sus funciones.
          </p>
        </section>

        {/* Bloque 04 */}
        <section className="mb-16">
          <h2 className="font-michroma text-xl md:text-2xl text-[#FFFFFF] mb-6">
            ARQUITECTURA ANTES QUE ESTÉTICA <br className="hidden md:block" />
            <span className="text-[#888888] text-sm md:text-base tracking-widest font-inter font-thin mt-2 block">[ LA TIPOGRAFÍA ]</span>
          </h2>
          <p className="text-lg leading-relaxed mb-6 font-normal">
            Solo operamos con dos fuentes porque no necesitamos más para establecer jerarquía. Utilizamos <span className="font-michroma text-sm">MICHROMA</span> para nuestros titulares no porque sea estética, sino porque su geometría extendida y fría funciona como el plano técnico de un edificio. Transmite orden de un solo vistazo.
          </p>
          <p className="text-lg leading-relaxed font-normal">
            Para el cuerpo de texto, donde tú necesitas comprender lo que hacemos, liberamos la familia Inter: neutra, implacable y diseñada para leerse en pantallas de alto rendimiento sin cansar el ojo humano.
          </p>
        </section>

        {/* Bloque 05 - Cierre */}
        <section className="mt-24 p-8 border border-[#222222] bg-[#0F0F0F]">
          <h2 className="font-michroma text-lg text-[#FFFFFF] mb-4">
            ALTA COSTURA TECNOLÓGICA
          </h2>
          <p className="text-base leading-relaxed text-[#CCCCCC] font-normal">
            Esta doctrina estética es el reflejo de nuestro código. Si eliminamos lo superfluo en nuestra propia casa, imagina lo que hacemos cuando entramos a auditar la tuya. No seguimos tendencias, construimos infraestructuras que aguantan el peso de tu facturación.
          </p>
        </section>

      </main>
    </div>
  );
}
