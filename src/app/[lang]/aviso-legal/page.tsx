import React from "react";
import { Metadata } from "next";
import { LegalModalLayout } from "@/components/ui/LegalModalLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Notice | espín",
  description: "Legal Notice for Espín Labs.",
  robots: { index: false, follow: true },
};

export default async function AvisoLegal({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === 'en';

  return (
    <LegalModalLayout>
      <h1 className="font-clash font-bold text-xl md:text-4xl text-[#F5B700] uppercase mb-12 relative z-10"> 
        {isEn ? "LEGAL NOTICE" : "AVISO LEGAL"}
      </h1>

      <div className="space-y-12 font-light text-zinc-300 leading-relaxed text-sm md:text-base relative z-10">
        
        <section>
          <h2 className="font-clash font-semibold text-lg text-white mb-4 leading-[1.1] md:leading-[1.1] flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4"> 
            <span className="text-[#F5B700] text-sm">/01</span> {isEn ? "IDENTIFICATION DATA" : "DATOS IDENTIFICATIVOS"}
          </h2>
          <p className="mb-4">
            {isEn ? "In compliance with the duty of information contained in article 10 of Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSI-CE), the details of the digital ecosystem owner are set out below:" : "En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se detallan a continuación los datos del titular del ecosistema digital:"}
          </p>
          <ul className="list-none space-y-2 pl-4 border-l border-zinc-800">
            <li><strong className="text-white font-normal">{isEn ? "Owner:" : "Titular:"}</strong> ALDO RAMOS ESPÍN ({isEn ? "hereinafter, espín" : "en adelante, espín"})</li>
            <li><strong className="text-white font-normal">NIF:</strong> 39737023S</li>
            <li><strong className="text-white font-normal">{isEn ? "Corporate address:" : "Domicilio corporativo:"}</strong> Calle La Avutarda, 11, Tuineje, Las Palmas, {isEn ? "Spain" : "España"}.</li>
            <li><strong className="text-white font-normal">{isEn ? "Email:" : "Correo electrónico:"}</strong> <a href="mailto:contacto@espinlabs.com" className="hover:text-[#F5B700] transition-colors">contacto@espinlabs.com</a></li>
            <li><strong className="text-white font-normal">{isEn ? "Main website:" : "Sitio web principal:"}</strong> <Link href={`/${lang}`} className="hover:text-[#F5B700] transition-colors">espinlabs.com</Link></li>
          </ul>
        </section>

        <section>
          <h2 className="font-clash font-semibold text-lg text-white mb-4 leading-[1.1] md:leading-[1.1] flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4"> 
            <span className="text-[#F5B700] text-sm">/02</span> {isEn ? "OBJECT AND SCOPE OF APPLICATION" : "OBJETO Y ÁMBITO DE APLICACIÓN"}
          </h2>
          <p className="mb-4">
            {isEn ? "This notice establishes the conditions governing the access, navigation, and use of the digital infrastructure hosted under the espinlabs.com domain." : "El presente aviso establece las condiciones que regulan el acceso, navegación y uso de la infraestructura digital alojada bajo el dominio espinlabs.com."}
          </p>
          <p>
            {isEn ? "Access to this web ecosystem attributes the status of user and implies the absolute and unreserved acceptance of each and every one of the provisions included in this Legal Notice. espín reserves the right to modify, without prior notice, the structure, design, and content of the website, as well as its conditions of use, to maintain the accuracy of our technology consulting, software architecture, and Artificial Intelligence services." : "El acceso a este ecosistema web le atribuye la condición de usuario e implica la aceptación rotunda y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal. espín se reserva el derecho a modificar, sin previo aviso, la estructura, el diseño y el contenido de la web, así como sus condiciones de uso, para mantener la precisión de nuestra oferta de servicios de consultoría tecnológica, arquitectura de software e Inteligencia Artificial."}
          </p>
        </section>

        <section>
          <h2 className="font-clash font-semibold text-lg text-white mb-4 leading-[1.1] md:leading-[1.1] flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4"> 
            <span className="text-[#F5B700] text-sm">/03</span> {isEn ? "INTELLECTUAL AND INDUSTRIAL PROPERTY" : "PROPIEDAD INTELECTUAL E INDUSTRIAL"}
          </h2>
          <p className="mb-4">
            {isEn ? "The visual architecture, source code, navigation structure, databases, and all elements that make up this website (including, but not limited to, the brand isotype, texts, animations, typography, and logos) are the exclusive property of espín or third parties who have expressly authorized their use." : "La arquitectura visual, el código fuente, la estructura de navegación, las bases de datos y todos los elementos que conforman este sitio web (incluyendo, a título enunciativo, el isotipo de la marca, los textos, animaciones, tipografías y logotipos) son titularidad exclusiva de espín o de terceros que han autorizado expresamente su uso."}
          </p>
          <p>
            {isEn ? "The reproduction, distribution, public communication, and transformation, whether total or partial, of the content of this website without the prior written authorization of espín's management is strictly prohibited. The user undertakes to respect the Intellectual and Industrial Property rights, and may view the elements of the portal exclusively for their personal and private use." : "Queda estrictamente prohibida la reproducción, distribución, comunicación pública y transformación, total o parcial, del contenido de esta web sin la autorización previa y por escrito de la dirección de espín. El usuario se compromete a respetar los derechos de Propiedad Intelectual e Industrial, pudiendo visualizar los elementos del portal exclusivamente para su uso personal y privado."}
          </p>
        </section>

        <section>
          <h2 className="font-clash font-semibold text-lg text-white mb-4 leading-[1.1] md:leading-[1.1] flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4"> 
            <span className="text-[#F5B700] text-sm">/04</span> {isEn ? "EXCLUSION OF GUARANTEES AND LIABILITY" : "EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD"}
          </h2>
          <p className="mb-4">
            {isEn ? "The espín ecosystem operates under high-performance technical standards. However, we do not guarantee the absence of interruptions or errors in accessing the website or its content, nor that it will be permanently updated in real-time." : "El ecosistema de espín opera bajo estándares técnicos de alto rendimiento. No obstante, no garantizamos la inexistencia de interrupciones o errores en el acceso a la web o a su contenido, ni que este se encuentre permanentemente actualizado en tiempo real."}
          </p>
          <p className="mb-4">
            {isEn ? "espín is not liable, under any circumstances, for damages of any nature that may arise from:" : "espín no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionarse por:"}
          </p>
          <ul className="space-y-2 pl-4 border-l border-zinc-800">
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-zinc-600">{isEn ? "Errors or omissions in the displayed content." : "Errores u omisiones en los contenidos desplegados."}</li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-zinc-600">{isEn ? "Network outages, temporary unavailability of the portal, or DNS resolution problems beyond our infrastructure." : "Caídas de la red, falta de disponibilidad temporal del portal o problemas de resolución de DNS ajenos a nuestra infraestructura."}</li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-zinc-600">{isEn ? "The transmission of malicious software from external networks, despite having adopted all necessary technical security measures to prevent it." : "La transmisión de software malicioso desde redes externas, a pesar de haber adoptado todas las medidas tecnológicas de seguridad necesarias para evitarlo."}</li>
          </ul>
          <p className="mt-4">
            {isEn ? "In the event that espinlabs.com contains links to other Internet sites, espín will not exercise any type of control over said sites and contents, declining any responsibility for the infrastructure or policies of third-party platforms." : "En el caso de que espinlabs.com contenga enlaces hacia otros sitios de Internet, espín no ejercerá ningún tipo de control sobre dichos sitios y contenidos, declinando cualquier responsabilidad sobre la infraestructura o políticas de plataformas de terceros."}
          </p>
        </section>

        <section>
          <h2 className="font-clash font-semibold text-lg text-white mb-4 leading-[1.1] md:leading-[1.1] flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4"> 
            <span className="text-[#F5B700] text-sm">/05</span> {isEn ? "APPLICABLE LEGISLATION AND JURISDICTION" : "LEGISLACIÓN APLICABLE Y JURISDICCIÓN"}
          </h2>
          <p>
            {isEn ? "The relationship between espín and the user will be governed by current Spanish regulations. Any controversy that may arise from the access or use of this digital ecosystem will be submitted to the Courts and Tribunals of Las Palmas, with the parties expressly waiving any other jurisdiction that may correspond to them." : "La relación entre espín y el usuario se regirá por la normativa española vigente. Cualquier controversia que pudiera derivarse del acceso o la utilización de este ecosistema digital se someterá a los Juzgados y Tribunales de Las Palmas, renunciando expresamente las partes a cualquier otro fuero que pudiera corresponderles."}
          </p>
        </section>

      </div>
    </LegalModalLayout>
  );
}