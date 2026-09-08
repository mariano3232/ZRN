import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { getLocaleFromCookies } from "@/lib/i18n/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookies();
  return buildPageMetadata(locale, "services");
}

export default function ServiciosLayout({ children }: LayoutProps<"/servicios">) {
  return children;
}
