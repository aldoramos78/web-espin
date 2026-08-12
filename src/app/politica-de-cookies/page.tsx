import React from "react";
import { Metadata } from "next";
import { LegalModalLayout } from "@/components/ui/LegalModalLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies | espín",
  description: "Política de Cookies de Espín Labs.",
  robots: { index: false, follow: true },
};

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen bg-black">
      <LegalModalLayout title="Protocolo Legal">
        <h1 className="font-michroma text-2xl md:text-4xl text-[#F5B700] uppercase tracking-tighter mb-8 relative z-10">
          POLÍTICA DE COOKIES
        </h1>
        
        <p className="mb-12 font-light text-zinc-300 leading-relaxed text-sm md:text-base border-l-2 border-[#F5B700] pl-4 relative z-10">
          En espín detestamos el rastreo invasivo y la recolección de datos basura. Nuestro ecosistema digital (espinlabs.com) utiliza cookies de forma quirúrgica: exclusivamente para garantizar el rendimiento técnico de la plataforma y analizar métricas de uso anonimizadas. No vendemos tu historial de navegación ni te perseguiremos con anuncios por la red.
          <br /><br />
          A continuación, detallamos exactamente qué inyectamos en tu navegador y para qué.
        </p>

        <div className="space-y-12 font-light text-zinc-300 leading-relaxed text-sm md:text-base relative z-10">
          
          <section>
            <h2 className="font-michroma text-lg text-white mb-4 flex items-center gap-4">
              <span className="text-[#F5B700] text-sm">/01</span> ¿QUÉ ES UNA COOKIE?
            </h2>
            <p>
              Una cookie es un pequeño archivo de texto que los servidores web envían al disco duro o a la memoria del dispositivo del usuario (ordenador, smartphone, tablet) cuando accede a espinlabs.com. Su función no es espiarte, sino permitir que el servidor recuerde tus preferencias de sesión, garantice la seguridad de la conexión y mida los tiempos de carga de nuestra arquitectura.
            </p>
          </section>

          <section>
            <h2 className="font-michroma text-lg text-white mb-4 flex items-center gap-4">
              <span className="text-[#F5B700] text-sm">/02</span> TIPOLOGÍA DE COOKIES QUE UTILIZAMOS
            </h2>
            <p className="mb-4">
              En nuestra infraestructura operamos únicamente con dos tipos de cookies:
            </p>
            <div className="space-y-6 pl-4 border-l border-zinc-800">
              <div>
                <h3 className="text-white font-normal mb-2">Cookies Técnicas y de Seguridad (Estrictamente Necesarias):</h3>
                <p>
                  Son el núcleo de la web. Permiten la navegación a través del ecosistema y la utilización de las diferentes opciones o servicios que existen en él. Controlan el tráfico, la comunicación de datos, la identificación de sesiones (para evitar ataques de denegación de servicio) y el funcionamiento de nuestros formularios encriptados. Sin estas cookies, la web simplemente se rompe. Por ley, no requieren tu consentimiento expreso para ser instaladas.
                </p>
              </div>
              <div>
                <h3 className="text-white font-normal mb-2">Cookies de Rendimiento y Analítica:</h3>
                <p>
                  Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de cómo interactúan con la interfaz. Analizamos tu navegación con un único objetivo: detectar cuellos de botella en el código y mejorar la oferta de productos y servicios que te ofrecemos. Los datos recogidos son agregados y anonimizados.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-michroma text-lg text-white mb-4 flex items-center gap-4">
              <span className="text-[#F5B700] text-sm">/03</span> COOKIES DE TERCEROS
            </h2>
            <p>
              Para escalar nuestro rendimiento, espinlabs.com se apoya en proveedores de élite. Es posible que herramientas externas (como Vercel para el despliegue de la red global o soluciones analíticas asépticas) instalen cookies en tu navegador bajo sus propios dominios. En ningún caso permitimos que estos terceros utilicen nuestra infraestructura para perfilarte publicitariamente.
            </p>
          </section>

          <section>
            <h2 className="font-michroma text-lg text-white mb-4 flex items-center gap-4">
              <span className="text-[#F5B700] text-sm">/04</span> CONTROL Y DESTRUCCIÓN DE COOKIES
            </h2>
            <p className="mb-4">
              Tienes el control absoluto de tu entorno local. Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo en cualquier momento mediante la configuración de las opciones del navegador que utilices.
            </p>
            <p className="mb-4 text-zinc-400 italic">
              Ten en cuenta que si aplicas un bloqueo estricto a las cookies técnicas, es altamente probable que ciertas secciones de nuestra web (como el modal de auditoría o los esquemas interactivos del Hero) no funcionen con la fluidez de 60fps para la que han sido diseñados.
            </p>
            <p className="mb-4">Puedes gestionar tus preferencias directamente desde tu navegador:</p>
            <ul className="space-y-2 pl-4 border-l border-zinc-800">
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-zinc-600"><strong className="text-white font-normal">Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-zinc-600"><strong className="text-white font-normal">Safari:</strong> Preferencias &gt; Privacidad &gt; Bloquear todas las cookies.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-zinc-600"><strong className="text-white font-normal">Firefox:</strong> Ajustes &gt; Privacidad & Seguridad &gt; Cookies y datos del sitio.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-zinc-600"><strong className="text-white font-normal">Edge:</strong> Configuración &gt; Cookies y permisos del sitio.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-michroma text-lg text-white mb-4 flex items-center gap-4">
              <span className="text-[#F5B700] text-sm">/05</span> ACTUALIZACIONES DE ESTA POLÍTICA
            </h2>
            <p className="mb-4">
              espín se reserva el derecho a modificar esta Política de Cookies en función de nuevas exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos (AEPD) o cambios en nuestra propia arquitectura de software.
            </p>
            <p>
              Para cualquier duda técnica sobre el tratamiento de tus datos de sesión, contacta directamente con nuestro equipo en <a href="mailto:contacto@espinlabs.com" className="hover:text-[#F5B700] transition-colors">contacto@espinlabs.com</a>.
            </p>
          </section>

        </div>
      </LegalModalLayout>
    </div>
  );
}
