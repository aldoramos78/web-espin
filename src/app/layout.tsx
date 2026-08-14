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
        url: '/og-espin-brutalist.jpg',
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
    images: ['/og-espin-brutalist.jpg'],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth bg-black">
      <body className={`${michroma.variable} ${inter.variable} antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}
