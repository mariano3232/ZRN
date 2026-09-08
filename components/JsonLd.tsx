import { getJsonLd } from "@/lib/seo";
import type { Locale } from "@/lib/i18n/messages";

export function JsonLd({ locale }: { locale: Locale }) {
  const jsonLd = getJsonLd(locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
