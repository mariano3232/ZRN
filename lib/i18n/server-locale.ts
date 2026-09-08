import { cookies } from "next/headers";
import { parseLocale, type Locale } from "@/lib/i18n/messages";

export async function getLocaleFromCookies(): Promise<Locale> {
  const cookieStore = await cookies();
  return parseLocale(cookieStore.get("locale")?.value);
}
