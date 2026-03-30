"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import type { Locale, Translation } from "./types";
import { fr } from "./fr";
import { en } from "./en";

const dictionaries: Record<Locale, Translation> = { fr, en };

interface I18nContextValue {
  locale: Locale;
  t: Translation;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "fr";
  const saved = localStorage.getItem("locale");
  if (saved === "fr" || saved === "en") return saved;
  return "fr";
}

function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  return (
    <I18nContext.Provider value={{ locale, t: dictionaries[locale], setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}

export { I18nProvider, useI18n };
