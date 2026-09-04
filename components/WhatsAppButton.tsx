"use client";

import { useLocale } from "@/lib/i18n/locale-context";

export function WhatsAppButton() {
  const { t } = useLocale();

  return (
    <a
      href={`https://wa.me/541135658579?text=${encodeURIComponent(t.whatsapp.message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.aria}
    >
      <img
        src="/wsp1.png"
        alt=""
        className="fixed right-5 bottom-5 h-11 w-11 cursor-pointer transition hover:scale-105 sm:right-15 sm:bottom-15 sm:h-15 sm:w-15"
      />
    </a>
  );
}
