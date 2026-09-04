"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n/locale-context";
import type { Messages } from "@/lib/i18n/messages";

type Service = Messages["servicesHome"]["items"][number];

function ServiceCard({service,}: {service: Service}) {
  const ref = useRef<HTMLLIElement>(null);
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
    <li
      ref={ref}
      className={`min-w-0 h-[180px] sm:h-[200px] md:h-[241px] p-0 m-0 ${service.span ? "sm:col-span-2" : ""}`}
    >
      <Link
        href={`/servicios#${service.id}`}
        className="group relative block h-full overflow-hidden bg-[#494444]/50"
      >
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-out group-hover:opacity-100 ${
            inView ? "opacity-100" : "opacity-50"
          }`}
          style={{ backgroundImage: `url('${service.bg_img}')` }}
        />
        <div className="relative z-10 flex h-full w-full items-end justify-start text-base font-extrabold tracking-[0.03em]">
          <p
            className={`text-[10px] sm:text-[15px] rounded-tr-1 px-5 py-2 transition-colors duration-500 ease-out group-hover:bg-navy group-hover:text-white ${
              inView ? "bg-navy text-white" : "bg-[#A7CBF6] text-navy"
            }`}
          >
            {service.title}
          </p>
        </div>
      </Link>
    </li>
  );
}

export function Services() {
  const { t } = useLocale();

  return (
    <section id="servicios" className="mx-auto max-w-[1440px] px-4 py-12 md:px-[74px] md:py-16">
      <div className="mb-25 flex flex-col items-center justify-center gap-5">
        <h2 className="font-display text-center my-4 text-xl font-semibold tracking-[0.03em] text-navy uppercase">
          {t.servicesHome.title}
        </h2>
        <span className="font-nav text-xl font-medium text-navy">↓ ↓</span>
      </div>
      
      <ul className="grid grid-cols-1 gap-[5px] md:grid-cols-2">
        {t.servicesHome.items.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </ul>
    </section>
  );
}
