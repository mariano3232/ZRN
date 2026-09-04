import type { Metadata } from "next";
import { cookies } from "next/headers";
import { DM_Sans, Inter_Tight, Syne } from "next/font/google";
import { Header } from "../components/Header";
import "./globals.css";
import { Contact } from "@/components/Contact";
import { ViewTransition } from "react";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { messages, parseLocale } from "@/lib/i18n/messages";
import { WhatsAppButton } from "@/components/WhatsAppButton";

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
  const cookieStore = await cookies();
  const locale = parseLocale(cookieStore.get("locale")?.value);
  const meta = messages[locale].meta;

  return {
    title: meta.title,
    description: meta.description,
    icons: "/logos/logo-1.png",
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const cookieStore = await cookies();
  const locale = parseLocale(cookieStore.get("locale")?.value);

  return (
    <html
      lang={locale}
      className={`${dmSans.variable} ${syne.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-background text-foreground">
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
