"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n/locale-context";
import type { Locale } from "@/lib/i18n/messages";

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

const options: { value: Locale; labelKey: "spanish" | "english" }[] = [
  { value: "es", labelKey: "spanish" },
  { value: "en", labelKey: "english" },
];

type LanguageSwitcherProps = {
  className?: string;
  menuClassName?: string;
  variant?: "overlay" | "inline";
};

export function LanguageSwitcher({
  className = "",
  menuClassName = "",
  variant = "overlay",
}: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        className="font-nav flex items-center gap-1 text-sm font-medium tracking-[0.03em] sm:text-base"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {t.nav.language}
        <ChevronDown />
      </button>
      {open ? (
        <ul
          role="listbox"
          aria-label={t.nav.language}
          className={
            variant === "inline"
              ? `mt-2 min-w-[9rem] py-1 text-navy ${menuClassName}`
              : `absolute z-50 mt-2 min-w-[9rem] rounded-[2px] bg-white py-1 text-navy shadow-lg ${menuClassName}`
          }
        >
          {options.map((option) => {
            const selected = option.value === locale;
            return (
              <li key={option.value} role="option" aria-selected={selected}>
                <button
                  type="button"
                  className={`font-nav w-full px-3 py-2 text-left text-sm font-medium tracking-[0.03em] hover:bg-[#A7CBF6]/25 ${
                    selected ? "bg-gray-100" : ""
                  }`}
                  onClick={() => {
                    setLocale(option.value);
                    setOpen(false);
                  }}
                >
                  {t.nav[option.labelKey]}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
