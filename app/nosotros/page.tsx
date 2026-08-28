"use client";

import { Placeholder } from "@/components/Placeholder";
import { useEffect, useRef, useState } from "react";

const team = [
  {
    caption: "— Z. Sokac Ignacio,\nResponsable de Logística\ny CEO",
  },
  {
    caption: "— Z. Sokac Ivan,\nDespachante de Aduana",
  },
  {
    caption: "— Z. Sokac Santiago,\nResponsable de la operativa\ndel puerto",
  },
];

const values = [
  {
    title: "(1) MISIÓN",
    copy: "Impulsar proyectos nacionales hacia nuevos mercados mediante estrategia, claridad y acompañamiento.",
    img: "/nosotros/mision.png",
  },
  {
    title: "(2) VISIÓN",
    copy: "Ser la conexión entre la producción nacional y el mundo, impulsando su competitividad internacional.",
    img: "/nosotros/vision.png",
  },
  {
    title: "(3) VALORES",
    copy: "Claridad para avanzar. Estrategia para proyectar. Comunicación para conectar. Cercanía para acompañar.",
    img: "/nosotros/valor.png",
  },
];

function IntroCopy() {
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
        { threshold: 0.5, rootMargin: "-25% 0px -25% 0px" },
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

  return (
    <p
      ref={ref}
      className={`select-none pb-45 text-justify text-[28px] font-bold leading-[1.35] tracking-[-0.03em] indent-[50px] transition duration-500 hover:text-navy/50 md:indent-[300px] md:text-[48px] ${
        inView ? "text-navy/50" : ""
      }`}
    >
      <span>En ZRN creemos que <b className="text-navy">lo nacional</b> también puede </span>
      <span>llegar lejos. Impulsamos el desarrollo de proyectos con </span>
      <span>estrategia y <b className="text-navy">comunicación</b>, creando nuevas </span>
      <span><b className="text-navy">oportunidades</b> con claridad y acompañamiento para </span>
      <span>potenciar su <b className="text-navy">crecimiento.</b></span>
    </p>
  );
}

export default function page() {
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
            Nuestro equipo
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {team.map((member) => (
            <li
              key={member.caption}
              className="relative h-[530px] overflow-hidden border border-navy bg-white"
            >
              <Placeholder className="absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 z-10 flex h-[154px] items-center justify-center bg-[#B0C3DA]/40 px-8">
                <p className="whitespace-pre-line text-center text-xl font-bold tracking-[0.03em] text-navy/85">
                  {member.caption}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-24 max-w-[1440px] px-6 md:mt-28 md:px-[78px]">
        {/* <div className="mb-16">
          <p className="font-nav text-xl font-medium tracking-[0.03em] text-navy">
            ↓↓↓↓↓
          </p>
          <h2 className="font-display mt-2 text-xl font-semibold tracking-[0.03em] text-navy/85 uppercase">
            Nuestros ideales
          </h2>
        </div> */}

        <ul className="grid grid-cols-1 justify-items-center gap-y-16 md:grid-cols-3 md:justify-items-center mt-35 mb-60 md:gap-x-8">
          {values.map((value) => (
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
