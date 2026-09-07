import React from "react";
import { Metadata } from "next";
import { LegalModalLayout } from "@/components/ui/LegalModalLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | espín",
  description: "Privacy Policy and Data Processing for Espín Labs.",
  robots: { index: false, follow: true },
};

export default async function PoliticaPrivacidad({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === 'en';

  return (
    <div className="min-h-screen bg-black">
      <LegalModalLayout>
        <h1 className="font-clash font-bold text-xl md:text-4xl text-[#F5B700] uppercase mb-8 relative z-10"> 
          {isEn ? "PRIVACY POLICY" : "POLÍTICA DE PRIVACIDAD"}
        </h1>
        
        <p className="mb-12 font-light text-zinc-300 leading-relaxed text-sm md:text-base border-l-2 border-[#F5B700] pl-4 relative z-10">
          {isEn 
            ? "At espín, we manage data with the same rigor and precision with which we build technological infrastructures. Transparency is not an option; it is an operational standard. Below, we detail how we collect, process, and protect information within our digital ecosystem." 
            : "En espín gestionamos los datos con el mismo rigor y precisión con el que construimos infraestructuras tecnológicas. La transparencia no es una opción, es un estándar operativo. A continuación, detallamos cómo recopilamos, procesamos y protegemos la información en nuestro ecosistema digital."}
        </p>

        <div className="space-y-12 font-light text-zinc-300 leading-relaxed text-sm md:text-base relative z-10">
          
          <section>
            <h2 className="font-clash font-semibold text-lg text-white mb-4 leading-[1.1] md:leading-[1.1] flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4"> 
              <span className="text-[#F5B700] text-sm">/01</span> {isEn ? "DATA CONTROLLER" : "RESPONSABLE DEL TRATAMIENTO"}
            </h2>
            <ul className="list-none space-y-2 pl-4 border-l border-zinc-800">
              <li><strong className="text-white font-normal">{isEn ? "Identity:" : "Identidad:"}</strong> ALDO RAMOS ESPÍN ({isEn ? "hereinafter, espín labs" : "en adelante, espín labs"})</li>
              <li><strong className="text-white font-normal">NIF:</strong> 39737023S</li>
              <li><strong className="text-white font-normal">{isEn ? "Address:" : "Dirección:"}</strong> Calle La Avutarda, 11, Tuineje, Las Palmas, {isEn ? "Spain" : "España"}.</li>
              <li><strong className="text-white font-normal">{isEn ? "Privacy Contact:" : "Contacto de Privacidad:"}</strong> <a href="mailto:contacto@espinlabs.com" className="hover:text-[#F5B700] transition-colors">contacto@espinlabs.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="font-clash font-semibold text-lg text-white mb-4 leading-[1.1] md:leading-[1.1] flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4"> 
              <span className="text-[#F5B700] text-sm">/02</span> {isEn ? "PURPOSE OF DATA PROCESSING" : "FINALIDAD DEL TRATAMIENTO DE DATOS"}
            </h2>
            <p className="mb-4">
              {isEn ? "The data you inject into our infrastructure (whether through qualification forms, emails, or audit calls) will be processed exclusively for the following purposes:" : "Los datos que inyectes en nuestra infraestructura (ya sea a través de formularios de cualificación, correos electrónicos o llamadas de auditoría) serán procesados exclusivamente para los siguientes fines:"}
            </p>
            <ul className="space-y-2 pl-4 border-l border-zinc-800 mb-4">
              <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-zinc-600">{isEn ? "To evaluate and qualify your technology consulting or AI development request." : "Evaluar y cualificar tu solicitud de consultoría tecnológica o desarrollo de Inteligencia Artificial."}</li>
              <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-zinc-600">{isEn ? "To manage the commercial, administrative, and operational relationship in case of initiating an audit or infrastructure deployment." : "Gestionar la relación comercial, administrativa y operativa en caso de iniciar una auditoría o despliegue de infraestructura."}</li>
              <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-zinc-600">{isEn ? "To ensure the correct functioning of our 'Comprehensive Tech Insurance' (monthly retainer) and the evolution of the implemented systems." : "Garantizar el correcto funcionamiento de nuestro 'Seguro a Todo Riesgo Tecnológico' (retainer mensual) y la evolución de los sistemas implementados."}</li>
              <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-zinc-600">{isEn ? "To comply with current legal obligations." : "Cumplir con las obligaciones legales vigentes."}</li>
            </ul>
            <p>
              {isEn ? "We do not send mass advertising (spam) nor do we use your operational data to train public AI models." : "No hacemos envíos de publicidad masiva (spam) ni utilizamos tus datos operativos para entrenar modelos de IA públicos."}
            </p>
          </section>

          <section>
            <h2 className="font-clash font-semibold text-lg text-white mb-4 leading-[1.1] md:leading-[1.1] flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4"> 
              <span className="text-[#F5B700] text-sm">/03</span> {isEn ? "LEGITIMATION" : "LEGITIMACIÓN"}
            </h2>
            <p className="mb-4">
              {isEn ? "The legal basis for the processing of your data is:" : "La base legal para el tratamiento de tus datos es:"}
            </p>
            <ul className="space-y-2 pl-4 border-l border-zinc-800">
              <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-zinc-600"><strong className="text-white font-normal">{isEn ? "Express consent:" : "El consentimiento expreso:"}</strong> {isEn ? "By checking the acceptance box on our qualification forms and submitting your request." : "Al marcar la casilla de aceptación en nuestros formularios de cualificación y enviar tu solicitud."}</li>
              <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-zinc-600"><strong className="text-white font-normal">{isEn ? "Execution of a contract:" : "La ejecución de un contrato:"}</strong> {isEn ? "For the development of our audits, technical deployments, and monthly maintenance." : "Para el desarrollo de nuestras auditorías, despliegues técnicos y mantenimientos mensuales."}</li>
              <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:text-zinc-600"><strong className="text-white font-normal">{isEn ? "Legitimate interest:" : "El interés legítimo:"}</strong> {isEn ? "To ensure the security of our web infrastructure (fraud and attack prevention)." : "Para garantizar la seguridad de nuestra infraestructura web (prevención de fraudes y ataques)."}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-clash font-semibold text-lg text-white mb-4 leading-[1.1] md:leading-[1.1] flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4"> 
              <span className="text-[#F5B700] text-sm">/04</span> {isEn ? "DATA RETENTION" : "CONSERVACIÓN DE LOS DATOS"}
            </h2>
            <p>
              {isEn ? "The data provided will be kept as long as the commercial or operational relationship with espín is maintained. Once finalized, the data will be properly blocked during the applicable legal prescription periods. Unqualified leads or prospects data will be purged from our systems (Notion/CRM) within a maximum period of 12 months." : "Los datos proporcionados se conservarán mientras se mantenga la relación comercial o operativa con espín. Una vez finalizada, los datos se mantendrán debidamente bloqueados durante los plazos de prescripción legal exigibles. Los datos de leads o prospectos no cualificados serán purgados de nuestros sistemas (Notion/CRM) en un plazo máximo de 12 meses."}
            </p>
          </section>

          <section>
            <h2 className="font-clash font-semibold text-lg text-white mb-4 leading-[1.1] md:leading-[1.1] flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4"> 
              <span className="text-[#F5B700] text-sm">/05</span> {isEn ? "DATA COMMUNICATION AND TRANSFER" : "COMUNICACIÓN Y TRANSFERENCIA DE DATOS"}
            </h2>
            <p className="mb-4">
              {isEn ? "espín does not sell, rent, or transfer data to third parties outside of our operations." : "espín no vende, alquila ni cede datos a terceros ajenos a nuestra operativa."}
            </p>
            <p>
              {isEn ? "To provide our services with a high quality standard, we share information in an encrypted and secure manner with elite technology providers who act as Data Processors (such as Vercel for hosting, Notion for operational management, or integrated automation platforms). All of them comply with enterprise-grade security regulations." : "Para poder prestar nuestros servicios con un alto estándar de calidad, compartimos información de forma cifrada y segura con proveedores tecnológicos de élite que actúan como Encargados de Tratamiento (como Vercel para alojamiento, Notion para gestión operativa o plataformas de automatización integradas). Todos ellos cumplen con normativas de seguridad de grado empresarial."}
            </p>
          </section>

          <section>
            <h2 className="font-clash font-semibold text-lg text-white mb-4 leading-[1.1] md:leading-[1.1] flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4"> 
              <span className="text-[#F5B700] text-sm">/06</span> {isEn ? "USER RIGHTS" : "DERECHOS DEL USUARIO"}
            </h2>
            <p className="mb-4">
              {isEn ? "You have absolute control over your information. You can exercise your rights of access, rectification, deletion, limitation, portability, and opposition at any time." : "Tienes control absoluto sobre tu información. Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición."}
            </p>
            <p>
              {isEn ? 'To exercise any of these rights, send a direct request from the email account associated with your data to <a href="mailto:contacto@espinlabs.com" className="hover:text-[#F5B700] transition-colors">contacto@espinlabs.com</a>, indicating "Data Protection" in the subject line. If you consider that the processing does not comply with current regulations, you have the right to file a claim with the Spanish Data Protection Agency (AEPD).' : 'Para ejecutar cualquiera de estos derechos, envía una solicitud directa desde la cuenta de correo asociada a tus datos a <a href="mailto:contacto@espinlabs.com" className="hover:text-[#F5B700] transition-colors">contacto@espinlabs.com</a>, indicando en el asunto "Protección de Datos". Si consideras que el tratamiento no se ajusta a la normativa vigente, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).'}
            </p>
          </section>

        </div>
      </LegalModalLayout>
    </div>
  );
}