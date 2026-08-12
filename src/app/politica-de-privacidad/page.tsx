import React from "react";
import { Metadata } from "next";
import { LegalModalLayout } from "@/components/ui/LegalModalLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | espín",
  description: "Política de Privacidad y Tratamiento de Datos de Espín Labs.",
  robots: { index: false, follow: true },
};

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-black">
      <LegalModalLayout title="Política de Privacidad">
        <h1 className="font-michroma text-2xl md:text-4xl text-[#F5B700] uppercase tracking-tighter mb-8 relative z-10">
          POLÍTICA DE PRIVACIDAD
        </h1>
        
        <p className="mb-12 font-light text-zinc-300 leading-relaxed text-sm md:text-base border-l-2 border-[#F5B700] pl-4 relative z-10">
          En espín gestionamos los datos con el mismo rigor y precisión con el que construimos infraestructuras tecnológicas. La transparencia no es una opción, es un estándar operativo. A continuación, detallamos cómo recopilamos, procesamos y protegemos la información en nuestro ecosistema digital.
        </p>

        <div className="space-y-12 font-light text-zinc-300 leading-relaxed text-sm md:text-base relative z-10">
          
          <section>
            <h2 className="font-michroma text-lg text-white mb-4 flex items-center gap-4">
              <span className="text-[#F5B700] text-sm">/01</span> RESPONSABLE DEL TRATAMIENTO
            </h2>
            <ul className="list-none space-y-2 pl-4 border-l border-zinc-800">
              <li><strong className="text-white font-normal">Identidad:</strong> espín labs S.L.U. (en adelante, espín)</li>
              <li><strong className="text-white font-normal">CIF:</strong> B12345678</li>
              <li><strong className="text-white font-normal">Dirección:</strong> Calle La Avutarda, 11, Tuineje, Las Palmas, España.</li>
              <li><strong className="text-white font-normal">Contacto de Privacidad:</strong> <a href="mailto:contacto@espinlabs.com" className="hover:text-[#F5B700] transition-colors">contacto@espinlabs.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="font-michroma text-lg text-white mb-4 flex items-center gap-4">
              <span className="text-[#F5B700] text-sm">/02</span> FINALIDAD DEL TRATAMIENTO DE DATOS
            </h2>
            <p className="mb-4">
              Los datos que inyectes en nuestra infraestructura (ya sea a través de formularios de cualificación, correos electrónicos o llamadas de auditoría) serán procesados exclusivamente para los siguientes fines:
            </p>
            <ul className="space-y-2 pl-4 border-l border-zinc-800 mb-4">
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-zinc-600">Evaluar y cualificar tu solicitud de consultoría tecnológica o desarrollo de Inteligencia Artificial.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-zinc-600">Gestionar la relación comercial, administrativa y operativa en caso de iniciar una auditoría o despliegue de infraestructura.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-zinc-600">Garantizar el correcto funcionamiento de nuestro "Seguro a Todo Riesgo Tecnológico" (retainer mensual) y la evolución de los sistemas implementados.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-zinc-600">Cumplir con las obligaciones legales vigentes.</li>
            </ul>
            <p>
              No hacemos envíos de publicidad masiva (spam) ni utilizamos tus datos operativos para entrenar modelos de IA públicos.
            </p>
          </section>

          <section>
            <h2 className="font-michroma text-lg text-white mb-4 flex items-center gap-4">
              <span className="text-[#F5B700] text-sm">/03</span> LEGITIMACIÓN
            </h2>
            <p className="mb-4">
              La base legal para el tratamiento de tus datos es:
            </p>
            <ul className="space-y-2 pl-4 border-l border-zinc-800">
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-zinc-600"><strong className="text-white font-normal">El consentimiento expreso:</strong> Al marcar la casilla de aceptación en nuestros formularios de cualificación y enviar tu solicitud.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-zinc-600"><strong className="text-white font-normal">La ejecución de un contrato:</strong> Para el desarrollo de nuestras auditorías, despliegues técnicos y mantenimientos mensuales.</li>
              <li className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-zinc-600"><strong className="text-white font-normal">El interés legítimo:</strong> Para garantizar la seguridad de nuestra infraestructura web (prevención de fraudes y ataques).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-michroma text-lg text-white mb-4 flex items-center gap-4">
              <span className="text-[#F5B700] text-sm">/04</span> CONSERVACIÓN DE LOS DATOS
            </h2>
            <p>
              Los datos proporcionados se conservarán mientras se mantenga la relación comercial o operativa con espín. Una vez finalizada, los datos se mantendrán debidamente bloqueados durante los plazos de prescripción legal exigibles. Los datos de leads o prospectos no cualificados serán purgados de nuestros sistemas (Notion/CRM) en un plazo máximo de 12 meses.
            </p>
          </section>

          <section>
            <h2 className="font-michroma text-lg text-white mb-4 flex items-center gap-4">
              <span className="text-[#F5B700] text-sm">/05</span> COMUNICACIÓN Y TRANSFERENCIA DE DATOS
            </h2>
            <p className="mb-4">
              espín no vende, alquila ni cede datos a terceros ajenos a nuestra operativa.
            </p>
            <p>
              Para poder prestar nuestros servicios con un alto estándar de calidad, compartimos información de forma cifrada y segura con proveedores tecnológicos de élite que actúan como Encargados de Tratamiento (como Vercel para alojamiento, Notion para gestión operativa o plataformas de automatización integradas). Todos ellos cumplen con normativas de seguridad de grado empresarial.
            </p>
          </section>

          <section>
            <h2 className="font-michroma text-lg text-white mb-4 flex items-center gap-4">
              <span className="text-[#F5B700] text-sm">/06</span> DERECHOS DEL USUARIO
            </h2>
            <p className="mb-4">
              Tienes control absoluto sobre tu información. Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición.
            </p>
            <p>
              Para ejecutar cualquiera de estos derechos, envía una solicitud directa desde la cuenta de correo asociada a tus datos a <a href="mailto:contacto@espinlabs.com" className="hover:text-[#F5B700] transition-colors">contacto@espinlabs.com</a>, indicando en el asunto "Protección de Datos". Si consideras que el tratamiento no se ajusta a la normativa vigente, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).
            </p>
          </section>

        </div>
      </LegalModalLayout>
    </div>
  );
}
