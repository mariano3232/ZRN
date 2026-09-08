import type { Metadata } from "next";
import { DM_Sans, Inter_Tight, Syne } from "next/font/google";
import { Header } from "../components/Header";
import "./globals.css";
import { Contact } from "@/components/Contact";
import { ViewTransition } from "react";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next";
import { JsonLd } from "@/components/JsonLd";
import { getSiteUrl, buildPageMetadata } from "@/lib/seo";
import { getLocaleFromCookies } from "@/lib/i18n/server-locale";

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

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookies();

  return {
    metadataBase: new URL(getSiteUrl()),
    icons: "/logos/logo-1.png",
    ...buildPageMetadata(locale, "home"),
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocaleFromCookies();

  return (
    <html
      lang={locale}
      className={`${dmSans.variable} ${syne.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-background text-foreground">
        <JsonLd locale={locale} />
        <Analytics />
        <LocaleProvider initialLocale={locale}>
          <Header />
          <ViewTransition>
            {children}
          </ViewTransition>
          <Contact />
          <WhatsAppButton />
        </LocaleProvider>
      </body>
    </html>
  );
}
