import React from "react";
import { Metadata } from "next";
import { LegalModalLayout } from "@/components/ui/LegalModalLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies Policy | espín",
  description: "Cookies Policy for Espín Labs.",
  robots: { index: false, follow: true },
};

export default async function PoliticaCookies({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === 'en';

  return (
    <div className="min-h-screen bg-black">
      <LegalModalLayout>
        <h1 className="font-clash font-bold text-xl md:text-4xl text-[#F5B700] uppercase mb-8 relative z-10"> 
          {isEn ? "COOKIES POLICY" : "POLÍTICA DE COOKIES"}
        </h1>
        
        <p className="mb-12 font-light text-zinc-300 leading-relaxed text-sm md:text-base border-l-2 border-[#F5B700] pl-4 relative z-10">
          {isEn 
            ? "At espín, we detest invasive tracking and garbage data collection. Our digital ecosystem (espinlabs.com) uses cookies surgically: exclusively to ensure the technical performance of the platform and to analyze anonymized usage metrics. We do not sell your browsing history nor will we chase you with ads across the web." 
            : "En espín detestamos el rastreo invasivo y la recolección de datos basura. Nuestro ecosistema digital (espinlabs.com) utiliza cookies de forma quirúrgica: exclusivamente para garantizar el rendimiento técnico de la plataforma y analizar métricas de uso anonimizadas. No vendemos tu historial de navegación ni te perseguiremos con anuncios por la red."}
          <br /><br />
          {isEn 
            ? "Below, we detail exactly what we inject into your browser and why." 
            : "A continuación, detallamos exactamente qué inyectamos en tu navegador y para qué."}
        </p>

        <div className="space-y-12 font-light text-zinc-300 leading-relaxed text-sm md:text-base relative z-10">
          
          <section>
            <h2 className="font-clash font-semibold text-lg text-white mb-4 leading-[1.1] md:leading-[1.1] flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4"> 
              <span className="text-[#F5B700] text-sm">/01</span> {isEn ? "WHAT IS A COOKIE?" : "¿QUÉ ES UNA COOKIE?"}
            </h2>
            <p>
              {isEn 
                ? "A cookie is a small text file that web servers send to the hard drive or memory of the user's device (computer, smartphone, tablet) when accessing espinlabs.com. Its function is not to spy on you, but to allow the server to remember your session preferences, ensure connection security, and measure load times of our architecture." 
                : "Una cookie es un pequeño archivo de texto que los servidores web envían al disco duro o a la memoria del dispositivo del usuario (ordenador, smartphone, tablet) cuando accede a espinlabs.com. Su función no es espiarte, sino permitir que el servidor recuerde tus preferencias de sesión, garantice la seguridad de la conexión y mida los tiempos de carga de nuestra arquitectura."}
            </p>
          </section>

          <section>
            <h2 className="font-clash font-semibold text-lg text-white mb-4 leading-[1.1] md:leading-[1.1] flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4"> 
              <span className="text-[#F5B700] text-sm">/02</span> {isEn ? "TYPES OF COOKIES WE USE" : "TIPOLOGÍA DE COOKIES QUE UTILIZAMOS"}
            </h2>
            <p className="mb-4">
              {isEn 
                ? "In our infrastructure, we only operate with two types of cookies:" 
                : "En nuestra infraestructura operamos únicamente con dos tipos de cookies:"}
            </p>
            <div className="space-y-6 pl-4 border-l border-zinc-800">
              <div>
                <h3 className="text-white font-normal mb-2">{isEn ? "Technical and Security Cookies (Strictly Necessary):" : "Cookies Técnicas y de Seguridad (Estrictamente Necesarias):"}</h3>
                <p>
                  {isEn 
                    ? "They are the core of the web. They allow navigation through the ecosystem and the use of the different options or services that exist within it. They control traffic, data communication, session identification (to prevent denial of service attacks), and the functioning of our encrypted forms. Without these cookies, the web simply breaks. By law, they do not require your express consent to be installed." 
                    : "Son el núcleo de la web. Permiten la navegación a través del ecosistema y la utilización de las diferentes opciones o servicios que existen en él. Controlan el tráfico, la comunicación de datos, la identificación de sesiones (para evitar ataques de denegación de servicio) y el funcionamiento de nuestros formularios encriptados. Sin estas cookies, la web simplemente se rompe. Por ley, no requieren tu consentimiento expreso para ser instaladas."}
                </p>
              </div>
              <div>
                <h3 className="text-white font-normal mb-2">{isEn ? "Analytical/Performance Cookies (Optional):" : "Cookies Analíticas/Rendimiento (Opcionales):"}</h3>
                <p>
                  {isEn 
                    ? "We use specialized software (like Vercel Web Analytics or similar) that generates telemetry. They allow us to quantify the number of users, analyze geographic origin, and measure which components of the page are optimized and which lose retention. All information collected is aggregated and strictly anonymous. We do not track you individually." 
                    : "Usamos software especializado (como Vercel Web Analytics o similares) que genera telemetría. Permiten cuantificar el número de usuarios, analizar la procedencia geográfica y medir qué componentes de la página están optimizados y cuáles pierden retención. Toda la información recogida es agregada y estrictamente anónima. No te rastreamos de forma individual."}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-clash font-semibold text-lg text-white mb-4 leading-[1.1] md:leading-[1.1] flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4"> 
              <span className="text-[#F5B700] text-sm">/03</span> {isEn ? "COOKIE MANAGEMENT AND BLOCKING" : "GESTIÓN Y BLOQUEO DE COOKIES"}
            </h2>
            <p className="mb-4">
              {isEn 
                ? "You have full power to allow, block, or delete cookies installed on your equipment through your browser options:" 
                : "Tienes todo el poder para permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador:"}
            </p>
            <ul className="list-none space-y-2 pl-4 border-l border-zinc-800">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5B700] transition-colors">- {isEn ? "Configure in Google Chrome" : "Configurar en Google Chrome"}</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5B700] transition-colors">- {isEn ? "Configure in Apple Safari" : "Configurar en Apple Safari"}</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5B700] transition-colors">- {isEn ? "Configure in Mozilla Firefox" : "Configurar en Mozilla Firefox"}</a></li>
            </ul>
            <p className="mt-4">
              {isEn 
                ? "If you block Technical Cookies, we warn you that the interface will experience critical failures and you will not be able to contact us." 
                : "En caso de bloquear las Cookies Técnicas, te advertimos que la interfaz experimentará fallos críticos y no podrás contactar con nosotros."}
            </p>
          </section>

          <section>
            <h2 className="font-clash font-semibold text-lg text-white mb-4 leading-[1.1] md:leading-[1.1] flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4"> 
              <span className="text-[#F5B700] text-sm">/04</span> {isEn ? "UPDATES" : "ACTUALIZACIONES"}
            </h2>
            <p>
              {isEn 
                ? "espín may modify this Cookies Policy based on legislative, regulatory requirements, or in order to adapt said policy to the instructions issued by the Spanish Data Protection Agency." 
                : "espín puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos."}
            </p>
          </section>

        </div>
      </LegalModalLayout>
    </div>
  );
}