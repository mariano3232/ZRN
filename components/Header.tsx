"use client"

import { useEffect, useState } from "react";

function ChevronDown() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="size-6 shrink-0"
      fill="currentColor"
    >
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
    </svg>
  );
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/servicios", label: "Servicios", hasMenu: true },
  { href: "#", label: "Asesoramiento" },
  { href: "#", label: "Nosotros" },
];

export function Header() {

  const [scrolled, setScrolled] = useState(false)
  const [scrolled2, setScrolled2] = useState(false)
  console.log("scrolled2 :",scrolled2)
  useEffect(() => {
    const onScroll = () => {setScrolled(window.scrollY > 80); setScrolled2(window.scrollY > 300)};
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-99 transition-[300] duration-300
    ${scrolled2 ? "bg-[#B0C3DA]/80" : "bg-transparent"}
    ${scrolled ? "opacity-0 hover:opacity-100" : ""}
    `}>
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-end justify-between gap-x-6 gap-y-4 px-6 py-8 md:px-[78px]">
        <img src="/logo_header.png" alt="zrn logo" className="w-[57px] h-[68px]" />
        <nav
          aria-label="Principal"
          className="order-3 flex w-full flex-wrap items-center  gap-6 lg:order-0 lg:w-auto lg:flex-1 lg:gap-24 lg:ml-24"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-nav flex items-center gap-1 text-base font-medium tracking-[0.03em] text-navy"
            >
              {item.label}
              {item.hasMenu ? <ChevronDown /> : null}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`font-nav flex items-center gap-1 text-base font-medium tracking-[0.03em] ${scrolled? "text-navy": "text-white"}`}
        >
          idioma
          <ChevronDown />
        </button>
      </div>
    </header>
  );
}
