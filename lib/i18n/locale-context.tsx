"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { documentTitleFor } from "@/lib/seo";
import {
  LOCALE_COOKIE,
  messages,
  type Locale,
  type Messages,
} from "./messages";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Messages;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function persistLocale(locale: Locale, pathname: string) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
  document.documentElement.lang = locale;
  document.title = documentTitleFor(locale, pathname);
}

export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = documentTitleFor(locale, pathname);
  }, [locale, pathname]);

  const setLocale = useCallback(
    (next: Locale) => {
      setLocaleState(next);
      persistLocale(next, pathname);
    },
    [pathname],
  );

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t: messages[locale] }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
