"use client";

import { Placeholder } from "@/components/Placeholder";
import { useEffect, useRef, useState } from "react";

const team = [
  {
    caption: "— Z. Sokac Ignacio,\nCo-founder & Comercial",
  },
  {
    caption: "— Z. Sokac Ivan,\nCo-founder & Despachante de Aduana",
  },
  {
    caption: "— Z. Sokac Santiago,\nCo-founder & operativa",
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
    <>
      <p
        ref={ref}
        className={`select-none pb-45 text-left text-[25px] sm:text-[28px] font-bold leading-[1.35] tracking-[-0.03em] transition duration-500 md:hidden ${
          inView ? "text-navy/50" : ""
        }`}
      >
        En ZRN creemos que <b className="text-navy">lo nacional puede llegar lejos</b>, hacemos que{" "}
        <b className="text-navy">tu mercadería cruce fronteras.</b> Gestionamos y coordinamos lo
        necesario para llevar adelante <b className="text-navy">tu operación</b> de{" "}
        <b className="text-navy">importación o exportación</b>, acompañándote a vos y a tu negocio
        de principio a fin.
      </p>
      <p
        className="hidden select-none pb-45 text-justify text-[48px] font-bold leading-[1.35] tracking-[-0.03em] indent-[300px] transition duration-500 hover:text-navy/50 md:block"
      >
        <span>En ZRN creemos que <b className="text-navy">lo nacional puede</b></span>
        <span><b className="text-navy"> llegar lejos</b>, hacemos que <b className="text-navy">tu mercadería cruce fronteras.</b></span>
        <span> Gestionamos y coordinamos lo necesario para llevar</span>
        <span> adelante <b className="text-navy">tu operación</b> de <b className="text-navy">importación o exportación</b>, </span>
        <span>acompañándote a vos y a tu negocio de principio a fin.</span>
      </p>
    </>
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
      <section className="mx-auto max-w-[1440px] px-6 md:px-[78px] mt-30 text-navy/85">
        {/* <h1 className="font-display mt-2 text-xl text-center font-semibold tracking-[0.03em] text-navy/85 uppercase">Nuestra historia</h1> */}
        <h3 className="font-[20px] py-5 font-bold text-center"></h3>
        <p className="px-4 text-center md:hidden">
          <b>Nuestra historia</b>. Somos una empresa familiar con 35 años de experiencia en el rubro. A lo largo de este recorrido, desarrollamos conocimientos y experiencia en distintos ámbitos del comercio exterior. Hoy, con la creación de ZRN, buscamos consolidar todo lo aprendido y proyectarlo hacia el futuro, manteniendo el espíritu y los valores de una empresa familiar.
        </p>
        <div className="hidden justify-between md:flex">
          <p className="w-[33%] px-10"><b>Una trayectoria que continúa</b>. <br/> Somos una empresa familiar con 35 años <br/> de experiencia en el rubro.</p>
          <div className="h-[70px] w-[2px] rounded bg-gray-200"/>
          <p className="w-[33%] px-10">A lo largo de este recorrido, desarrollamos conocimientos y experiencia en distintos ámbitos del comercio exterior.</p>
          <div className="h-[70px] w-[2px] rounded bg-gray-200"/>
          <p className="w-[33%] px-10">Hoy, con la creación de ZRN, buscamos consolidar todo lo aprendido y proyectarlo hacia el futuro.</p>
        </div>

      </section>
      <section className="mx-auto mt-24 max-w-[1440px] px-6 md:mt-28 md:px-[78px]">
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
