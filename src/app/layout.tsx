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
  title: "espín | alta costura tecnológica.",
  description: "Auditamos y reconstruimos infraestructuras obsoletas.",
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
