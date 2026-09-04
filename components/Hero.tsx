"use client";

import Link from "next/link";
import { CoverImage } from "@/components/CoverImage";
import { useLocale } from "@/lib/i18n/locale-context";

export function Hero() {
  const { t } = useLocale();

  return (
    <section
      aria-label={t.hero.aria}
      className="relative h-[660px] bg-navy"
    >
      <CoverImage src="/hero-mobile.png" srcMd="/hero.png" fixedOnMd />
      <div className="relative z-10 mx-auto h-full w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[78px]">
        <div className="relative h-full">
          <div className="mx-auto pt-45 mx-auto left-0 max-w-[280px] text-white sm:top-28 sm:max-w-[400px] md:absolute md:p-0 md:top-[143px] md:max-w-[560px]">
            <div className="flex items-start gap-1.5 sm:gap-2">
              <h1 className="font-display text-[22px] leading-[1.2] font-semibold tracking-[0.03em] uppercase sm:text-[28px] md:text-[34.5px]">
                {t.hero.title}
              </h1>
            </div>
            <p className="mt-6 text-[13px] leading-snug tracking-[0.03em] sm:mt-8 sm:text-[16px] sm:leading-normal md:mt-10 md:text-base md:max-w-[500px]">
            {t.hero.body}
            </p>
            <div className="mt-32 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <Link
                href="/servicios"
                className="font-display font-semibold rounded-[3px] inline-flex items-center justify-center bg-[#A7CBF6]/90 px-5 py-3 text-center text-sm text-navy transition-colors duration-500 ease-out hover:bg-[#8eb8ef] sm:text-base"
              >
                {t.hero.ctaServices}
              </Link>
              <Link
                href="#contacto"
                className="font-display font-semibold rounded-[3px] inline-flex items-center justify-center bg-navy/90 px-5 py-3 text-center text-sm text-white transition-colors duration-500 ease-out hover:bg-[#163656] sm:text-base"
              >
                {t.hero.ctaAdvice}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
