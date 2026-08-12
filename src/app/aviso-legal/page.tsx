import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | espín",
  description: "Aviso Legal y Condiciones de Uso de Espín Labs.",
};

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-black text-white font-inter flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-0"></div>

      {/* "Popup" Container */}
      <div className="w-full max-w-4xl bg-black border border-zinc-800 shadow-2xl relative z-10 flex flex-col overflow-hidden max-h-[90vh]">
        
        {/* Header / Top Bar */}
        <div className="flex justify-between items-center px-6 md:px-10 py-6 border-b border-zinc-800 bg-black sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#F5B700]"></div>
            <span className="font-michroma text-xs md:text-sm tracking-widest text-zinc-400 uppercase">Protocolo Legal</span>
          </div>
          <Link href="/#footer" className="group flex items-center gap-2 hover:text-[#F5B700] transition-colors cursor-pointer">
            <span className="text-xs font-space-mono tracking-widest uppercase text-zinc-500 group-hover:text-[#F5B700] transition-colors">Cerrar</span>
            <svg className="w-5 h-5 text-zinc-500 group-hover:text-[#F5B700] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Link>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-12 overflow-y-auto custom-scrollbar">
          <h1 className="font-michroma text-2xl md:text-4xl text-[#F5B700] uppercase tracking-tighter mb-12">
            AVISO LEGAL Y CONDICIONES DE USO
          </h1>

          <div className="space-y-12 font-light text-zinc-300 leading-relaxed text-sm md:text-base">
            
            {/* Section 1 */}
            <section>
              <h2 className="font-michroma text-lg text-white mb-4 flex items-center gap-4">
                <span className="text-[#F5B700] text-sm">/01</span> DATOS IDENTIFICATIVOS
              </h2>
              <p className="mb-4">
                En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se detallan a continuación los datos del titular del ecosistema digital:
              </p>
              <ul className="list-none space-y-2 pl-4 border-l border-zinc-800">
                <li><strong className="text-white font-normal">Titular:</strong> espín labs S.L.U. (en adelante, espín)</li>
                <li><strong className="text-white font-normal">CIF:</strong> B12345678</li>
                <li><strong className="text-white font-normal">Domicilio corporativo:</strong> Calle La Avutarda, 11, Tuineje, Las Palmas, España.</li>
                <li><strong className="text-white font-normal">Correo electrónico:</strong> <a href="mailto:contacto@espinlabs.com" className="hover:text-[#F5B700] transition-colors">contacto@espinlabs.com</a></li>
                <li><strong className="text-white font-normal">Sitio web principal:</strong> <Link href="/" className="hover:text-[#F5B700] transition-colors">espinlabs.com</Link></li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-michroma text-lg text-white mb-4 flex items-center gap-4">
                <span className="text-[#F5B700] text-sm">/02</span> OBJETO Y ÁMBITO DE APLICACIÓN
              </h2>
              <p className="mb-4">
                El presente aviso establece las condiciones que regulan el acceso, navegación y uso de la infraestructura digital alojada bajo el dominio espinlabs.com.
              </p>
              <p>
                El acceso a este ecosistema web le atribuye la condición de usuario e implica la aceptación rotunda y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal. espín se reserva el derecho a modificar, sin previo aviso, la estructura, el diseño y el contenido de la web, así como sus condiciones de uso, para mantener la precisión de nuestra oferta de servicios de consultoría tecnológica, arquitectura de software e Inteligencia Artificial.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-michroma text-lg text-white mb-4 flex items-center gap-4">
                <span className="text-[#F5B700] text-sm">/03</span> PROPIEDAD INTELECTUAL E INDUSTRIAL
              </h2>
              <p className="mb-4">
                La arquitectura visual, el código fuente, la estructura de navegación, las bases de datos y todos los elementos que conforman este sitio web (incluyendo, a título enunciativo, el isotipo de la marca, los textos, animaciones, tipografías y logotipos) son titularidad exclusiva de espín o de terceros que han autorizado expresamente su uso.
              </p>
              <p>
                Queda estrictamente prohibida la reproducción, distribución, comunicación pública y transformación, total o parcial, del contenido de esta web sin la autorización previa y por escrito de la dirección de espín. El usuario se compromete a respetar los derechos de Propiedad Intelectual e Industrial, pudiendo visualizar los elementos del portal exclusivamente para su uso personal y privado.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-michroma text-lg text-white mb-4 flex items-center gap-4">
                <span className="text-[#F5B700] text-sm">/04</span> EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD
              </h2>
              <p className="mb-4">
                El ecosistema de espín opera bajo estándares técnicos de alto rendimiento. No obstante, no garantizamos la inexistencia de interrupciones o errores en el acceso a la web o a su contenido, ni que este se encuentre permanentemente actualizado en tiempo real.
              </p>
              <p className="mb-4">
                espín no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionarse por:
              </p>
              <ul className="space-y-2 pl-4 border-l border-zinc-800">
                <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-zinc-600">Errores u omisiones en los contenidos desplegados.</li>
                <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-zinc-600">Caídas de la red, falta de disponibilidad temporal del portal o problemas de resolución de DNS ajenos a nuestra infraestructura.</li>
                <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-zinc-600">La transmisión de software malicioso desde redes externas, a pesar de haber adoptado todas las medidas tecnológicas de seguridad necesarias para evitarlo.</li>
              </ul>
              <p className="mt-4">
                En el caso de que espinlabs.com contenga enlaces hacia otros sitios de Internet, espín no ejercerá ningún tipo de control sobre dichos sitios y contenidos, declinando cualquier responsabilidad sobre la infraestructura o políticas de plataformas de terceros.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-michroma text-lg text-white mb-4 flex items-center gap-4">
                <span className="text-[#F5B700] text-sm">/05</span> LEGISLACIÓN APLICABLE Y JURISDICCIÓN
              </h2>
              <p>
                La relación entre espín y el usuario se regirá por la normativa española vigente. Cualquier controversia que pudiera derivarse del acceso o la utilización de este ecosistema digital se someterá a los Juzgados y Tribunales de Las Palmas, renunciando expresamente las partes a cualquier otro fuero que pudiera corresponderles.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
