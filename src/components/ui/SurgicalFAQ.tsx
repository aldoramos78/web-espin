import React from 'react';
import { ScrollReveal } from "./ScrollReveal";

export function SurgicalFAQ({ isEn }: { isEn: boolean }) {
  const faqs = isEn 
    ? [
        {
          q: 'What does "Technological Haute Couture" mean?',
          a: "We don't start from a template. Every system we build is designed for one specific business — its numbers, its exact bottlenecks — and works for no one else. We audit first. Then we build only what's needed, so you won't have to touch it again for years."
        },
        {
          q: "What kind of companies and sectors do you work with?",
          a: "We don't build €500 Wordpress websites. We work with businesses that already generate real revenue and can't afford another system failure: established companies running on outdated infrastructure, and funded startups that want to launch it right from day one. We've already rebuilt the systems behind a commercial maritime fleet and a B2B services network. If your problem is infrastructure, not budget, you're in the right place."
        },
        {
          q: "Where does espín operate?",
          a: "We're based in Spain. We work remotely: we audit, build, and maintain your infrastructure without needing to be in the same country."
        },
        {
          q: "What technologies and platforms do you use?",
          a: "We're tool-agnostic — we don't sell a framework, we sell the result. That said: we prioritize Next.js with custom CSS (no template frameworks), headless architecture, automation via n8n and Make, and agents built on frontier LLMs. If your technical team wants to go deeper, we'll talk to them directly."
        },
        {
          q: "How does a project start?",
          a: "With a Forensic Audit. Before we write a single line of code, we go into your current system and pinpoint exactly where you're losing money. From there, we decide whether you need Development, Agents, or the full Ecosystem — never the other way around."
        },
        {
          q: "How much does a project with espín cost?",
          a: "We don't work off a price list. Every project is quoted after the Forensic Audit, based on the real complexity of the system we need to rebuild — not on how many pages your website has. If you're looking for a fixed number before any audit happens, we're not the right fit."
        }
      ]
    : [
  {
    q: '¿Qué significa "Alta Costura Tecnológica"?',
    a: 'No partimos de una plantilla. Cada sistema que construimos se diseña para un negocio concreto, con sus números y sus cuellos de botella exactos — y no sirve para nim�ún otro. Auditamos primero. Construimos después, solo lo necesario para que no tengas que volver a tocarlo en años.'
  },
  {
    q: '¿Para qué tipo de empresas y sectores trabajáis?',
    a: 'No hacemos páginas Wordpress de 500€. Trabajamos con negocios que ya facturan y no pueden permitirse otro fallo de sistema: empresas consolidadas con infraestructura desfasada, y startups financiadas que quieren nacer bien desde el día uno. Ya hemos intervenido una flota marítima comercial y una red de servicios B2B. Si tu problema es de infraestructura, no de presupuesto, es tu sitio.'
  },
  {
    q: '¿Dónde opera espín?',
    a: 'Operamos desde España. Trabajamos en remoto: auditamos, construimos y mantenemos tu infraestructura sin necesidad de estar en el mismo país.'
  },
  {
    q: '¿Qué tecnologías y plataformas utilizáis?',
    a: 'Somos agnósticos de herramienta: no vendemos un framework, vendemos el resultado. Dicho esto — priorizamos Next.js con CSS a medida (nada de frameworks de plantilla), arquitecturas headless (el motor de datos separado de la interfaz visual, para que nada se caiga al escalar), automatización con n8n y Make, y agentes construidos sobre LLMs (modelos de lenguaje) de última generación. Si tu equipo técnico quiere ir más al detalle, hablamos directamente con ellos.'
  },
  {
    q: '¿Cómo comienza un proyecto?',
    a: 'Con una Auditoría Forense. Antes de escribir una sola línea de código, entramos en tu sistema actual y señalamos exactamente dónde estás perdiendo dinero. A partir de ahí decidimos si necesitas Desarrollo, Agentes o el Ecosistema completo — nunca al revés.'
  },
  {
    q: '¿Cuánto cuesta un proyecto con espín?',
    a: 'No trabajamos con tarifas de catálogo. Cada proyecto se cotiza después de la Auditoría Forense, según la complejidad real del sistema que hay que reconstruir — no según cuántas páginas tiene tu web. Si buscas un número cerrado antes de auditar nada, no es con nosotros.'
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className="w-full px-6 md:px-12 py-16 md:py-24 bg-black border-b border-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="w-full">
        <ScrollReveal variant="slideRight" className="mb-12">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-8 md:w-16 h-[2px] bg-[#F5B700] shrink-0"></div>
            <h2 className="font-clash font-light text-[4vw] sm:text-lg md:text-2xl lg:text-3xl text-[#F5B700] uppercase whitespace-nowrap">
              {isEn ? "DIRECT INQUIRIES" : "CONSULTAS DIRECTAS"}
            </h2>
          </div>
        </ScrollReveal>
        
        {/* CSS Grid for Desktop (3 cols x 2 rows), 1 col on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-zinc-900">
          {faqs.map((faq, i) => (
            <details 
              key={i} 
              className="group border-r border-b border-zinc-900 bg-black cursor-pointer [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex justify-between items-center p-6 list-none font-inter text-[13px] md:text-[15px] text-zinc-300 hover:text-white transition-colors uppercase tracking-wider font-normal">
                <span className="pr-4">{faq.q}</span>
                <span className="text-[#F5B700] text-2xl font-light leading-none transition-transform duration-300 group-open:rotate-45 shrink-0">
                  +
                </span>
              </summary>
              <div className="p-6 pt-0 font-inter text-[14px] md:text-[15px] text-zinc-500 font-light leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
