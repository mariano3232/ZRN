import type { Metadata } from "next";
import { DM_Sans, Inter_Tight, Syne } from "next/font/google";
import { Header } from "../components/Header";
import "./globals.css";
import { Contact } from "@/components/Contact";
import { ViewTransition } from "react";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ZRN | Comex",
  description: "Comercio exterior, logística y asesoramiento aduanero.",
  icons:"/logos/logo-1.png"
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${syne.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-background text-foreground">
        <Header />
        <ViewTransition>
          {children}
        </ViewTransition>
        
        <Contact/>
        <a
          href={`https://wa.me/541135658579?text=${encodeURIComponent("Hola, quería más información sobre sus servicios.")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <img src="/wsp1.png" alt="" className="fixed right-15 bottom-15 h-15 w-15 cursor-pointer hover:scale-105 transition"/>
        </a>
        
      </body>
    </html>
  );
}
