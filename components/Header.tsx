"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
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

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-7" fill="currentColor">
      {open ? (
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      ) : (
        <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
      )}
    </svg>
  );
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/servicios", label: "Servicios", hasMenu: false },
  { href: "/nosotros", label: "Nosotros" },
];

function isActivePath(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false)
  const [scrolled2, setScrolled2] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const onDarkHero = pathname === "/" || pathname === "/servicios"
  const navyControls = scrolled || pathname === "/nosotros" || menuOpen

  useEffect(() => {
    const onScroll = () => {setScrolled(window.scrollY > 80); setScrolled2(window.scrollY > 300)};
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-99 transition-all duration-300
    ${scrolled2 || menuOpen ? "bg-[#B0C3DA]" : "bg-transparent"}
    ${scrolled && !menuOpen ? "max-lg:opacity-100 lg:opacity-0 lg:hover:opacity-100" : ""}
    `}>
      <div className={`mx-auto flex max-w-[1440px] items-center justify-between gap-x-4 px-4 transition-all duration-300 sm:px-6 md:px-10 lg:px-[78px] ${
        scrolled ? "py-3" : "py-5 sm:py-8"
      }`}>
        <Link href={"/"} className="shrink-0">
          <img
            src="/logo_header.png"
            alt="zrn logo"
            className={`transition-all duration-300 ${scrolled ? "h-9 w-auto sm:h-10" : "h-12 w-auto sm:h-[68px] sm:w-[57px]"}`}
          />
        </Link>
        
        <nav
          aria-label="Principal"
          className="hidden items-center gap-8 lg:flex lg:flex-1 lg:gap-24 lg:ml-24"
        >
          {navItems.map((item) => {
            const active = isActivePath(item.href, pathname);
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`font-nav flex items-center gap-1 rounded-[2px] px-3 py-1 text-base font-medium tracking-[0.03em] text-navy ${
                  active ? !scrolled2? "bg-[#A7CBF6]/70" : "bg-gray-100" : ""
                }`}
              >
                {item.label}
                {item.hasMenu ? <ChevronDown /> : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <button
            type="button"
            className={`font-nav hidden items-center gap-1 text-sm font-medium tracking-[0.03em] sm:flex sm:text-base ${
              navyControls || !onDarkHero ? "text-navy" : "text-white"
            }`}
          >
            idioma
            <ChevronDown />
          </button>

          <button
            type="button"
            className={`lg:hidden ${navyControls || !onDarkHero ? "text-navy" : "text-white"}`}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      <nav
        id="menu-movil"
        aria-label="Principal móvil"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 lg:hidden ${
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-1 px-4 pb-5 sm:px-6 md:px-10">
            {navItems.map((item) => {
              const active = isActivePath(item.href, pathname);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`font-nav rounded-[2px] px-3 py-3 text-base font-medium tracking-[0.03em] text-navy ${
                    active ? "bg-gray-100" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <button
              type="button"
              className="font-nav mt-1 flex items-center gap-1 px-3 py-3 text-base font-medium tracking-[0.03em] text-navy sm:hidden"
            >
              idioma
              <ChevronDown />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
