"use client";

import { Placeholder } from "@/components/Placeholder";
import { useLocale } from "@/lib/i18n/locale-context";
import { useEffect, useRef, useState } from "react";

function IntroCopy() {
  const { t } = useLocale();
  const ref = useRef<HTMLParagraphElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    let observer: IntersectionObserver | null = null;
    const setup = () => {
      observer?.disconnect();
      observer = null;
      if (mq.matches) {
        setInView(false);
        return;
      }
      observer = new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        { threshold: 0.5, rootMargin: "-25% 100px -25% 0px" },
      );
      observer.observe(el);
    };
    setup();
    mq.addEventListener("change", setup);
    return () => {
      mq.removeEventListener("change", setup);
      observer?.disconnect();
    };
  }, []);

  const about = t.about;

  return (
    <>
      <p
        ref={ref}
        className={`select-none pb-45 text-justify text-[24px] sm:text-[28px] font-bold leading-[1.35] tracking-[-0.03em] transition duration-500 md:hidden ${
          inView ? "text-navy/50" : ""
        }`}
      >
        {about.introBefore}<b className="text-navy">{about.introBold1}</b>{about.introMid}
        <b className="text-navy">{about.introBold2}</b>{about.introAfter2}
        <b className="text-navy">{about.introBold3}</b>{about.introAfter3}
        <b className="text-navy">{about.introBold4}</b>
        {about.introEnd}
      </p>
      <p
        className="hidden select-none pb-45 text-justify text-[48px] font-bold leading-[1.35] tracking-[-0.03em] indent-[300px] transition duration-500 hover:text-navy/50 md:block"
      >
        <span>{about.introDesktop.line1Before}<b className="text-navy">{about.introDesktop.line1Bold}</b></span>
        <span><b className="text-navy">{about.introDesktop.line2Bold1}</b>{about.introDesktop.line2Mid}<b className="text-navy">{about.introDesktop.line2Bold2}</b></span>
        <span>{about.introDesktop.line3}</span>
        <span>{about.introDesktop.line4Before}<b className="text-navy">{about.introDesktop.line4Bold1}</b>{about.introDesktop.line4Mid}<b className="text-navy">{about.introDesktop.line4Bold2}</b>{about.introDesktop.line4After}</span>
        <span>{about.introDesktop.line5}</span>
      </p>
    </>
  );
}

export default function page() {
  const { t } = useLocale();

  return (
    <div className="mb-24">
      <section className="mx-auto max-w-[1440px] px-6 pt-52 md:px-[78px] md:pt-56">
        <IntroCopy />
      </section>

      <section className="mx-auto max-w-[1440px] px-6 md:px-[78px]">
        <div className="mb-26 flex flex-col items-center">
          <p className="font-nav text-xl font-medium tracking-[0.03em] text-navy">
            ↓↓↓↓↓
          </p>
          <h2 className="font-display mt-2 text-xl font-semibold tracking-[0.03em] text-navy/85 uppercase">
            {t.about.teamTitle}
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {t.about.team.map((member) => (
            <li
              key={member.caption}
              className="relative h-[530px] overflow-hidden border border-navy bg-white"
            >
              <Placeholder className="absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 z-10 flex h-[154px] items-center justify-center bg-[#F9F5AE] px-8">
                <p className="whitespace-pre-line text-center text-xl font-bold tracking-[0.03em] text-navy/85">
                  {member.caption}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="mx-auto max-w-[1440px] px-6 md:px-[78px] mt-30 text-navy/85">
        <h3 className="font-[20px] py-5 font-bold text-center"></h3>
        <p className="px-4 text-center md:hidden">
           {t.about.historyMobile}
        </p>
        <div className="hidden justify-between md:flex">
          <p className="w-[33%] px-10"><b>{t.about.historyTitle}</b>. <br/> {t.about.historyCol1}</p>
          <div className="h-[70px] w-[2px] rounded bg-gray-200"/>
          <p className="w-[33%] px-10">{t.about.historyCol2}</p>
          <div className="h-[70px] w-[2px] rounded bg-gray-200"/>
          <p className="w-[33%] px-10">{t.about.historyCol3}</p>
        </div>

      </section>
      <section className="mx-auto mt-24 max-w-[1440px] px-6 md:mt-28 md:px-[78px]">
        <ul className="grid grid-cols-1 justify-items-center gap-y-16 md:grid-cols-3 md:justify-items-center mt-35 mb-60 md:gap-x-8">
          {t.about.values.map((value) => (
            <li key={value.title} className="flex w-full max-w-[315px] flex-col items-center text-center">
              <div
                aria-hidden
                className="size-[104px] bg-navy"
                style={{
                  WebkitMaskImage: `url('${value.img}')`,
                  maskImage: `url('${value.img}')`,
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />
              <p className="mt-6 text-[18px] font-bold tracking-[0.03em] text-navy/85">
                {value.title}
              </p>
              <p className="mt-3 text-base font-medium tracking-[0.03em] text-navy">
                {value.copy}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
