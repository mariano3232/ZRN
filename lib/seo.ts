import type { Metadata } from "next";
import { messages, type Locale } from "@/lib/i18n/messages";

export const SITE_PHONE = "+541135658579";
export const OG_IMAGE = "/hero.png";

export type SeoPage = "home" | "services" | "about";

const PAGE_PATH: Record<SeoPage, string> = {
  home: "/",
  services: "/servicios",
  about: "/nosotros",
};

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return "http://localhost:3000";
}

export function seoPageFromPath(pathname: string): SeoPage {
  if (pathname.startsWith("/servicios")) return "services";
  if (pathname.startsWith("/nosotros")) return "about";
  return "home";
}

export function documentTitleFor(locale: Locale, pathname: string): string {
  const meta = messages[locale].meta;
  const page = seoPageFromPath(pathname);
  if (page === "home") return meta.title;
  return `${meta[page].title} | ${meta.siteName}`;
}

function pageCopy(locale: Locale, page: SeoPage) {
  const meta = messages[locale].meta;
  if (page === "home") {
    return { title: meta.title, description: meta.description, fullTitle: meta.title };
  }
  return {
    title: meta[page].title,
    description: meta[page].description,
    fullTitle: `${meta[page].title} | ${meta.siteName}`,
  };
}

export function buildPageMetadata(locale: Locale, page: SeoPage): Metadata {
  const meta = messages[locale].meta;
  const copy = pageCopy(locale, page);
  const path = PAGE_PATH[page];

  return {
    title: page === "home" ? { default: copy.title, template: `%s | ${meta.siteName}` } : copy.title,
    description: copy.description,
    applicationName: meta.siteName,
    keywords: meta.keywords,
    authors: [{ name: meta.siteName }],
    creator: meta.siteName,
    publisher: meta.siteName,
    alternates: { canonical: path },
    openGraph: {
      title: copy.fullTitle,
      description: copy.description,
      url: path,
      siteName: meta.siteName,
      locale: meta.ogLocale,
      type: "website",
      images: [{ url: OG_IMAGE, alt: meta.siteName }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.fullTitle,
      description: copy.description,
      images: [OG_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}

export function getJsonLd(locale: Locale) {
  const siteUrl = getSiteUrl();
  const meta = messages[locale].meta;
  const serviceNames =
    locale === "en"
      ? [
          "Import",
          "Export",
          "International moves",
          "Consulting",
          "Documentation",
          "Tariff classification",
          "Logistics coordination",
        ]
      : [
          "Importación",
          "Exportación",
          "Mudanzas internacionales",
          "Asesoramiento",
          "Documentación",
          "Clasificación arancelaria",
          "Coordinación logística",
        ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: meta.siteName,
        url: siteUrl,
        logo: `${siteUrl}/logos/logo-1.png`,
        image: `${siteUrl}${OG_IMAGE}`,
        telephone: SITE_PHONE,
        areaServed: { "@type": "Country", "name": "Argentina" },
        knowsLanguage: ["es", "en"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: meta.siteName,
        inLanguage: ["es", "en"],
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: meta.siteName,
        description: meta.description,
        url: siteUrl,
        image: `${siteUrl}${OG_IMAGE}`,
        telephone: SITE_PHONE,
        areaServed: { "@type": "Country", "name": "Argentina" },
        availableLanguage: locale === "en" ? ["Spanish", "English"] : ["Español", "Inglés"],
        parentOrganization: { "@id": `${siteUrl}/#organization` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: locale === "en" ? "Services" : "Servicios",
          itemListElement: serviceNames.map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
    ],
  };
}
