import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/ui/CookieBanner";

const clashDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
 variable: "--font-clash",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'espín | Alta Costura Tecnológica',
  description: 'Transformamos negocios que pierden dinero en ecosistemas digitales de alto rendimiento.',
  metadataBase: new URL('https://www.espinlabs.com'),
  openGraph: {
    title: 'espín | Alta Costura Tecnológica',
    description: 'Transformamos infraestructuras obsoletas...',
    url: 'https://www.espinlabs.com',
    siteName: 'espín',
    images: [
      {
        url: '/og-espin.jpg',
        width: 1200,
        height: 630,
        alt: 'espín - Alta Costura Tecnológica',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'espín | Alta Costura Tecnológica',
    description: 'Transformamos infraestructuras obsoletas...',
    images: ['/og-espin.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "espín",
  "url": "https://www.espinlabs.com",
  "description": "Consultoría tecnológica y de Inteligencia Artificial de alto rendimiento. Desarrollamos arquitecturas complejas, ecosistemas digitales, identidades de marca premium e integramos IA para escalar negocios.",
  "providesService": [
    {
      "@type": "Service",
      "name": "Desarrollo de Arquitecturas Headless (Web)"
    },
    {
      "@type": "Service",
      "name": "Integración de Agentes de IA y LLMs"
    },
    {
      "@type": "Service",
      "name": "Automatización de Procesos Complejos"
    },
    {
      "@type": "Service",
      "name": "Creación de Marca e Identidad Digital (Branding)"
    }
  ],
  "areaServed": "ES",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contacto@espinlabs.com",
    "contactType": "Consulting"
  },
  "sameAs": [
    "https://www.linkedin.com/company/espinlabs",
    "https://x.com/espinlabs"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-black">
      <body className={`${clashDisplay.variable} ${inter.variable} antialiased bg-black`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
