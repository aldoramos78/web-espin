import type { Metadata } from "next";
import { Michroma, Inter } from "next/font/google";
import "./globals.css";

const michroma = Michroma({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma" 
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://espinlabs.com"),
  title: "espín | alta costura tecnológica.",
  description: "Auditamos y reconstruimos infraestructuras obsoletas. Transformamos negocios que pierden dinero en ecosistemas digitales de alto rendimiento.",
  keywords: ["auditoría técnica", "arquitectura de software", "automatización IA", "deuda técnica", "desarrollo a medida", "espin labs"],
  authors: [{ name: "Espín Labs" }],
  creator: "Espín Labs",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://espinlabs.com",
    title: "espín | alta costura tecnológica.",
    description: "Transformamos infraestructuras obsoletas en ecosistemas de alto rendimiento.",
    siteName: "Espín Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "espín | alta costura tecnológica.",
    description: "Transformamos infraestructuras obsoletas en ecosistemas de alto rendimiento.",
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

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth bg-black">
      <body className={`${michroma.variable} ${inter.variable} antialiased bg-black`}>
        {children}
        {modal}
      </body>
    </html>
  );
}
