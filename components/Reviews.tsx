"use client";

import { useCallback, useLayoutEffect, useRef, useState, type PointerEvent } from "react";

const reviews = [
  {
    quote: "Excelente servicio, efectiva solución de problemas.",
    time: "+5 años juntos",
    author: "(San Agustín SA)",
    icon: "/marcas/SanAgustinIcon.png",
    list: [
      "Cordialidad y atención",
      "Disponibilidad en consultas",
      "Comunicación clara",
      "Acompañamiento",
      "Resolución de problemas",
      "Confianza y tranquilidad",
    ],
  },
  {
    quote:
      "Tenemos un historial de éxitos en las operaciones qué llevamos a cabo juntos, siempre con toda la predisposición para sumarse a nuestros proyectos con profesionalismo y calidad humana. Personalmente lo considero un soporte de confianza y gran aliado.",
    time: "+5 años juntos",
    author: "Nicolás Ricordi\n(Biogreen)",
    size:'text-[5px]',
    icon: "/marcas/BioGreenIcon.png",
    list: [
      "Cordialidad y atención",
      "Disponibilidad en consultas",
      "Comunicación clara",
      "Acompañamiento",
      "Resolución de problemas",
      "Confianza y tranquilidad",
    ],
  },
  {
    quote:
      "Dinamica y eficiente",
    time: "Entre 1 y 3 años juntos",
    author: "PHARMAEXPRESS S.A.",
    icon: "/marcas/PHARMA.png",
    list: [
      "Cordialidad y atención",
      "Comunicación clara",
      "Confianza y tranquilidad",
    ],
  },
  {
    quote:
      "Servicio eficiente y de confianza",
    time: "Entre 1 y 3 años juntos",
    author: "Matias Ayala - DIMPACK SRL",
    icon: "/marcas/dimpack.webp",
    list: [
      "Cordialidad y atención",
      "Disponibilidad en consultas",
      "Comunicación clara",
      "Acompañamiento",
      "Resolución de problemas",
      "Confianza y tranquilidad",
    ],
  },

]

const copies = [0, 1, 2] as const;

function wrapLoop(el: HTMLElement, drag?: { startScroll: number }) {
  const setWidth = el.scrollWidth / 3;
  if (setWidth <= 0) return;

  while (el.scrollLeft < setWidth) {
    el.scrollLeft += setWidth;
    if (drag) drag.startScroll += setWidth;
  }
  while (el.scrollLeft >= setWidth * 2) {
    el.scrollLeft -= setWidth;
    if (drag) drag.startScroll -= setWidth;
  }
}

export function Reviews() {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });
  const [isDragging, setIsDragging] = useState(false);

  useLayoutEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let ready = false;
    const sync = () => {
      const setWidth = el.scrollWidth / 3;
      if (setWidth <= 0) return;
      if (!ready) {
        el.scrollLeft = setWidth;
        ready = true;
        return;
      }
      wrapLoop(el);
    };

    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const onPointerDown = useCallback((e: PointerEvent<HTMLUListElement>) => {
    if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
    const el = scrollerRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
    setIsDragging(true);
  }, []);

  const onPointerMove = useCallback((e: PointerEvent<HTMLUListElement>) => {
    const el = scrollerRef.current;
    if (!el || !drag.current.active) return;
    el.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX);
    wrapLoop(el, drag.current);
  }, []);

  const onPointerUp = useCallback((e: PointerEvent<HTMLUListElement>) => {
    if (!drag.current.active) return;
    drag.current.active = false;
    setIsDragging(false);
    if (scrollerRef.current?.hasPointerCapture(e.pointerId)) {
      scrollerRef.current.releasePointerCapture(e.pointerId);
    }
  }, []);

  return (
    <section className="mx-auto max-w-[1440px] overflow-hidden px-6 py-16 md:px-[78px] md:py-20">
      <div className="md:relative right-1 mt-10 mb-20 flex flex-col items-center md:items-start text-right">
        <div className="text-center">
          <p className="font-nav text-center text-xl font-medium tracking-[0.03em] text-navy">
            ↓↓↓↓↓
          </p>
          <h2 className="font-display mt-2 text-2xl font-medium tracking-[0.03em] text-navy/85 uppercase">
            Testimonios de clientes
          </h2>
        </div>
      </div>
      <ul
        ref={scrollerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onScroll={() => {
          if (!drag.current.active && scrollerRef.current) {
            wrapLoop(scrollerRef.current);
          }
        }}
        className={`flex gap-3 overflow-x-auto overscroll-x-contain pr-3 scrollbar-none ${
          isDragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
      >
        {copies.flatMap((copy) =>
          reviews.map((review) => (
            <li
              key={`${copy}-${review.author}`}
              className="flex h-[564px] w-full shrink-0 flex-col overflow-hidden border-[0.5px] border-gray-200 bg-white sm:w-[calc((100%-12px)/2)] lg:w-[calc((100%-24px)/3)]"
            >
              <div className="flex min-h-[75px] items-start justify-between gap-4 bg-[#DCEAFB] px-5 py-3">
                <p className="whitespace-pre-line text-[13px] font-semibold tracking-[0.03em] text-navy/80 sm:text-[15px] sm:font-black sm:text-navy">
                  {review.author}
                </p>
                {"time" in review && review.time ? (
                  <p className="shrink-0 text-right text-[11px] font-bold tracking-[0.03em] text-navy/80">
                    {review.time}
                  </p>
                ) : null}
              </div>
              <div className="relative flex flex-1 flex-col items-center justify-center gap-4 px-8 py-8">
                <div className="">
                  <img
                    src={review.icon}
                    alt=""
                    className="max-h-[46px] max-w-[66px] object-contain"
                  />
                </div>
                <blockquote className={"text-center text-[15px] leading-snug font-medium tracking-[0.03em] text-navy sm:leading-normal"}>
                  “{review.quote}”
                </blockquote>
              </div>
              <div className="bg-[#DCEAFB] pl-5 pt-1 h-[203px]">
                <p className="text-[9px] text-center font-black tracking-[0.03em] text-navy uppercase">
                  aspectos destacados
                </p>
                <ul className="mt-8 grid grid-cols-2 gap-x-2 gap-y-4">
                  {review.list.map((item) => (
                    <li key={item} className="flex items-center gap-1.5 text-[11px] leading-tight font-medium tracking-[0.03em] text-navy sm:text-[12px]">
                      <img src="/check-review.svg" alt="" className="size-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )),
        )}
      </ul>
    </section>
  );
}
