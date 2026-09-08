import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { getLocaleFromCookies } from "@/lib/i18n/server-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookies();
  return buildPageMetadata(locale, "about");
}

export default function NosotrosLayout({ children }: LayoutProps<"/nosotros">) {
  return children;
}
