import type { Metadata } from "next";
import { DM_Sans, Inter_Tight, Syne } from "next/font/google";
import { Header } from "../components/Header";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
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
        {children}
      </body>
    </html>
  );
}
