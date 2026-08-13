import React from 'react';
import Link from 'next/link';

export default function Manifiesto() {
  const BackButton = () => (
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
  );

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#E0E0E0] font-inter overflow-hidden selection:bg-[#F5B700] selection:text-black">
      
      {/* Sello de agua fondo (Isotipo gigante) */}
      <div 
        className="fixed -top-[20%] -right-[10%] w-[120vw] md:w-[80vw] opacity-[0.02] pointer-events-none select-none text-white"
        aria-hidden="true"
      >
        <svg viewBox="0 0 406 348" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M252.188 140.625L236.562 117.188L377.188 0L405.996 41.9922L252.188 140.625Z" fill="currentColor"/>
          <path d="M170.166 55.3789C206.136 55.3789 235.921 57.9017 259.521 62.9473C266.593 64.4591 273.124 66.3798 279.114 68.71L242.746 99.0166C238.964 98.2723 234.871 97.6421 230.469 97.127C215.332 95.3366 195.231 94.4414 170.166 94.4414C143.636 94.4414 122.233 95.418 105.957 97.3711C89.8438 99.3242 77.5553 103.149 69.0918 108.846C60.6283 114.38 54.8503 122.68 51.7578 133.748C48.8281 144.816 47.2819 159.383 47.1191 177.449H284.912V154.012C284.912 145.974 284.261 138.894 282.959 132.771L321.891 107.806C327.186 120.229 329.834 135.631 329.834 154.012V214.314H47.1191C47.2819 235.148 48.7467 251.831 51.5137 264.363C54.2806 276.896 59.8145 286.336 68.1152 292.684C76.416 299.031 88.7858 303.263 105.225 305.379C121.826 307.332 143.88 308.309 171.387 308.309C196.126 308.309 216.064 307.82 231.201 306.844C246.501 305.867 258.057 303.751 265.869 300.496C273.844 297.078 279.215 292.033 281.982 285.359C284.749 278.686 286.133 269.734 286.133 258.504H329.834C329.834 279.5 326.66 296.02 320.312 308.064C314.128 320.109 304.606 328.898 291.748 334.432C278.89 339.965 262.451 343.465 242.432 344.93C222.575 346.557 198.893 347.371 171.387 347.371C139.974 347.371 113.281 345.743 91.3086 342.488C69.4987 339.396 51.8392 332.967 38.3301 323.201C24.9837 313.273 15.2181 298.462 9.0332 278.768C3.01107 259.074 0 232.788 0 199.91C0 168.009 2.92969 142.456 8.78906 123.25C14.8112 104.044 24.4954 89.5586 37.8418 79.793C51.1882 70.0273 68.6849 63.5169 90.332 60.2617C112.142 57.0065 138.753 55.3789 170.166 55.3789Z" fill="currentColor"/>
        </svg>
      </div>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-12 pb-32 md:pt-24 md:pb-48">
        
        <BackButton />

        {/* --- CABECERA --- */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-32 md:mb-40 relative">
          <div className="md:w-7/12">
            <div className="mb-8 font-inter font-thin tracking-widest text-[#888888] text-xs md:text-sm uppercase flex items-center gap-4">
              [ DOC.00 / DOCTRINA OPERATIVA ]
              <span className="hidden md:block w-12 h-[1px] bg-[#333333]"></span>
            </div>
            <h1 className="font-michroma text-4xl md:text-6xl lg:text-7xl text-[#FFFFFF] leading-[1.1] mb-8">
              EL <span className="text-[#F5B700]">LUJO</span> ES LA<br />
              AUSENCIA DE <span className="text-[#F5B700]">RUIDO.</span>
            </h1>
            <p className="text-xl md:text-2xl font-inter font-extralight text-[#CCCCCC] leading-relaxed mb-12 md:mb-0">
              Por qué espín se ve, se lee y opera como lo hace.
            </p>
          </div>
          
          <div className="md:w-4/12 flex flex-col md:border-l md:border-[#222222] md:pl-10 relative">
            <div className="hidden md:block absolute -left-[1px] top-1/2 -translate-y-1/2 w-[1px] h-24 bg-[#F5B700]/40"></div>
            <p className="text-base md:text-lg leading-relaxed mb-6 font-thin text-[#FFFFFF]">
              No somos una agencia creativa. Somos una consultora de infraestructura tecnológica. Nuestro trabajo consiste en auditar sistemas lentos, ineficientes y desfasados, para reconstruirlos con la precisión de un bisturí.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-thin text-[#FFFFFF]">
              Esa obsesión por erradicar lo innecesario en el código de nuestros clientes es exactamente la misma que rige nuestra propia marca. No hay adornos. No hay colores de relleno. No hay ruido.
            </p>
          </div>
        </div>

        {/* --- GRID DESIGUAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20 md:gap-y-0 relative mb-32 md:mb-48">
          
          {/* Bloque 1 */}
          <section className="md:col-span-5 md:col-start-1 relative md:mt-0">
            <div className="hidden md:block absolute -left-6 top-2 w-[2px] h-8 bg-[#F5B700]/50"></div>
            <h2 className="font-michroma text-xl md:text-2xl text-[#FFFFFF] mb-6">
              LA <span className="text-[#F5B700]">REGLA</span> DEL VACÍO
              <span className="text-[#888888] text-xs md:text-sm tracking-widest font-inter font-thin mt-2 block">[ NUESTRO CÓDIGO CROMÁTICO ]</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6 font-thin text-[#FFFFFF]">
              El 90% de nuestro entorno opera en un negro absoluto. En la mayoría de las agencias, el color se utiliza para compensar la falta de contenido o para distraer. Nosotros usamos el vacío como herramienta arquitectónica. El negro no compite con la información, la aísla. El blanco puro es la única voz permitida sobre ese vacío.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-thin text-[#FFFFFF]">
              Nuestro único acento, el amarillo industrial (#F5B700), funciona como una luz forense: no rellena espacios, solo ilumina los datos críticos o las acciones que generan negocio.
            </p>
          </section>

          {/* Bloque 2 */}
          <section className="md:col-span-5 md:col-start-8 relative md:mt-40">
            <div className="hidden md:block absolute -left-6 top-2 w-[2px] h-8 bg-[#F5B700]/50"></div>
            <h2 className="font-michroma text-xl md:text-2xl text-[#FFFFFF] mb-6">
              <span className="text-[#F5B700]">JUNTOS</span>, PERO NO REVUELTOS
              <span className="text-[#888888] text-xs md:text-sm tracking-widest font-inter font-thin mt-2 block">[ EL ISOTIPO ]</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6 font-thin text-[#FFFFFF]">
              El símbolo de espín —nuestra 'e' minúscula atravesada por una cuña amarilla— no es un capricho geométrico. Genera un corte en espacio negativo que separa visualmente dos masas dentro de la misma forma.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-thin text-[#FFFFFF]">
              Representa la intersección entre los dos sistemas que operan en nuestros ecosistemas: la Inteligencia Artificial y la decisión humana. El código y el negocio. La máquina y el criterio. El corte demuestra que conviven en el mismo entorno, pero delimita sus funciones.
            </p>
          </section>

          {/* Bloque 3 */}
          <section className="md:col-span-6 md:col-start-3 relative md:mt-32">
            <div className="hidden md:block absolute -left-6 top-2 w-[2px] h-8 bg-[#F5B700]/50"></div>
            <h2 className="font-michroma text-xl md:text-2xl text-[#FFFFFF] mb-6">
              <span className="text-[#F5B700]">ARQUITECTURA</span> ANTES QUE ESTÉTICA
              <span className="text-[#888888] text-xs md:text-sm tracking-widest font-inter font-thin mt-2 block">[ LA TIPOGRAFÍA ]</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6 font-thin text-[#FFFFFF]">
              Solo operamos con dos fuentes porque no necesitamos más para establecer jerarquía. Utilizamos <span className="font-michroma text-[10px] md:text-xs text-[#CCCCCC]">MICHROMA</span> para nuestros titulares no porque sea estética, sino porque su geometría extendida y fría funciona como el plano técnico de un edificio. Transmite orden de un solo vistazo.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-thin text-[#FFFFFF]">
              Para el cuerpo de texto, donde tú necesitas comprender lo que hacemos, liberamos la familia Inter: neutra, implacable y diseñada para leerse en pantallas de alto rendimiento sin cansar el ojo humano.
            </p>
          </section>
        </div>

        {/* Separador fino amarillo / Artefacto divisor */}
        <div className="w-full flex items-center justify-center mb-16 md:mb-24 relative">
          <div className="h-px bg-[#F5B700]/20 w-full max-w-3xl"></div>
          <div className="absolute w-2 h-2 rotate-45 border border-[#F5B700]/50 bg-[#0A0A0A]"></div>
        </div>

        {/* --- CIERRE (ALARGADO Y SOLO) --- */}
        <section className="w-full">
          <div className="p-8 md:p-16 border border-[#222222] hover:border-[#F5B700]/40 transition-colors duration-500 bg-[#0F0F0F] relative group flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16">
            
            {/* Artefactos de esquina */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-[#F5B700]"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#F5B700]"></div>
            
            <div className="absolute -top-[1px] right-8 w-12 h-[1px] bg-[#F5B700]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-[1px] left-8 w-12 h-[1px] bg-[#F5B700]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="md:w-5/12 lg:w-1/3">
              <h2 className="font-michroma text-xl md:text-3xl lg:text-4xl text-[#F5B700] leading-tight">
                ALTA COSTURA TECNOLÓGICA
              </h2>
            </div>
            <div className="md:w-7/12 lg:w-2/3">
              <p className="text-base md:text-lg leading-relaxed text-[#FFFFFF] font-thin">
                Esta doctrina estética es el reflejo de nuestro código. Si eliminamos lo superfluo en nuestra propia casa, imagina lo que hacemos cuando entramos a auditar la tuya. No seguimos tendencias, construimos infraestructuras que aguantan el peso de tu facturación.
              </p>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}
