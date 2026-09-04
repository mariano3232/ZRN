"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/lib/i18n/locale-context";

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

function isActivePath(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false)
  const [scrolled2, setScrolled2] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/servicios", label: t.nav.services, hasMenu: false },
    { href: "/nosotros", label: t.nav.about },
  ];

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
            src={isActivePath("/servicios", pathname) ? "logos/logo-comex-2.png" : "logos/logo-comex-1.png"}
            alt="zrn logo"
            className={`transition-all duration-300 ${scrolled ? "h-9 w-auto sm:h-10" : "h-9 w-auto sm:h-[50px]"}`}
          />
        </Link>
        
        <nav
          aria-label={t.nav.mainNav}
          className="hidden items-center gap-8 lg:flex lg:flex-1 lg:gap-24 lg:ml-24"
        >
          {navItems.map((item) => {
            const active = isActivePath(item.href, pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`font-nav transition-colors hover:bg-[#A7CBF6]/25 flex items-center gap-1 rounded-[2px] px-3 py-1 text-base font-medium tracking-[0.03em] ${
                  pathname === "/servicios" && !navyControls ? "text-white" : "text-navy"
                } ${
                  active && scrolled2 ? "bg-gray-100 hover:bg-gray-100" : ""
                }`}
              >
                {item.label}
                {item.hasMenu ? <ChevronDown /> : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <LanguageSwitcher
            className={`hidden sm:block ${
              navyControls || !onDarkHero ? "text-navy" : "text-white"
            }`}
            menuClassName="right-0"
          />

          <button
            type="button"
            className={`lg:hidden ${navyControls || !onDarkHero ? "text-navy" : "text-white"}`}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
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
        aria-label={t.nav.mobileNav}
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
                  key={item.href}
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
            <LanguageSwitcher
              className="mt-1 px-3 py-3 text-navy sm:hidden"
              variant="inline"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
