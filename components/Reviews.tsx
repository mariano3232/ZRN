"use client";

import { useCallback, useLayoutEffect, useRef, useState, type PointerEvent } from "react";

const reviews = [
  {
    quote:
      "“Trabajar con ZRN nos permitió simplificar todo el proceso de importación. Se encargaron de la gestión aduanera y la coordinación logística de principio a fin, manteniéndonos informados en cada etapa. Destacamos especialmente la atención personalizada y la rapidez para resolver cualquier imprevisto.”",
    author: "— Martín Rodríguez, Gerente de Operaciones · Grupo Andina",
    stars: 5,
  },
  {
    quote:
      "“Excelente experiencia. Nos acompañaron durante toda la operación de importación y estuvieron atentos a cada detalle. La comunicación fue clara y rápida, incluso cuando surgieron imprevistos. Sin dudas volveríamos a trabajar con ellos.”",
    author: "— Lucía Fernández, Gerente de Compras · Norte Industrial S.A.",
    stars: 5,
  },
  {
    quote:
      "“Muy buen servicio y excelente predisposición del equipo. Nos ayudaron especialmente con la gestión aduanera y la coordinación del transporte. Como punto a mejorar, nos hubiera gustado contar con un poco más de información sobre los tiempos de entrega.”",
    author: "— Diego Martínez, Responsable de Comercio Exterior · TecnoSur",
    stars: 4,
  },
  {
    quote:
      "“El servicio fue bueno y la operación llegó a destino correctamente. Tuvimos algunos inconvenientes con los tiempos y la comunicación durante el proceso, aunque el equipo finalmente pudo resolverlos. La experiencia general fue positiva.”",
    author: "— Carolina Méndez, Responsable de Logística · Industrias Delta",
    stars: 3,
  },
];

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
              className="flex min-h-[499px] w-full shrink-0 flex-col items-center border border-gray-500 bg-white px-10 pt-16 pb-12 sm:w-[calc((100%-12px)/2)] lg:w-[calc((100%-24px)/3)]"
            >
              <div className="mb-10 flex">
                {Array(review.stars)
                  .fill(1)
                  .map((_, i) => (
                    <img key={i + 100} src="/full_star.png" alt="" draggable={false} />
                  ))}
                {Array(5 - review.stars)
                  .fill(1)
                  .map((_, i) => (
                    <img key={i + 200} src="/star.png" alt="" draggable={false} />
                  ))}
              </div>
              <div className="flex h-full flex-col justify-between">
                <blockquote className="mx-auto max-w-[270px] text-center text-[15px] font-medium tracking-[0.03em] text-navy">
                  {review.quote}
                </blockquote>
                <p className="mt-8 text-center text-[15px] font-bold tracking-[0.03em] text-navy/85">
                  {review.author}
                </p>
              </div>
            </li>
          )),
        )}
      </ul>
    </section>
  );
}
