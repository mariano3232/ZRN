"use client";

import { useLocale } from "@/lib/i18n/locale-context";

export function Capabilities() {
  const { t } = useLocale();

  return (
    <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 md:px-22 md:py-20">
      <div className="mt-6 mb-12 items-center md:relative md:right-10 flex flex-col md:mt-10 md:mb-20 md:items-end text-right">
        <div className="text-center">
          <p className="font-nav text-xl text-center font-medium tracking-[0.03em] text-navy">
            ↓↓↓↓↓
          </p>
          <h2 className="font-display mt-2 text-base font-medium tracking-[0.03em] text-[#0C202B] uppercase sm:text-xl">
            {t.capabilities.title}
          </h2>
        </div>
      </div>

      <ul className="flex flex-col gap-x-3 gap-y-10 sm:grid sm:gap-x-8 sm:gap-y-16 lg:grid-cols-4 lg:justify-items-center lg:gap-y-24">
        {t.capabilities.items.map((item) => (
          <li key={item.number} className="flex min-w-0 w-[300px] sm:w-full flex-col items-center text-center">
            <img className="mb-3 size-12 sm:mb-5 sm:size-[82px]" src={item.img} alt="" />
            <p className="text-[12px] font-bold leading-tight tracking-[0.03em] text-navy/85 sm:text-sm sm:leading-normal">
              {item.number}
              <br />
              {item.title}
            </p>
            <p className="mt-2 max-w-full text-[12px] font-medium leading-snug tracking-[0.03em] text-navy sm:mt-3 sm:max-w-[230px] sm:text-xs sm:leading-normal">
              {item.copy}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
