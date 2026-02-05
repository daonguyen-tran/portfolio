"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { NextIntlClientProvider } from "next-intl";
import { defaultLocale, type Locale } from "@/i18n/config";

const LOCALE_STORAGE_KEY = "portfolio-locale";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function useLocale(): LocaleContextType {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}

interface LocaleProviderProps {
  children: React.ReactNode;
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [messages, setMessages] = useState<Record<string, unknown> | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);

  const loadMessages = useCallback(async (loc: Locale) => {
    const msgs = (await import(`../messages/${loc}.json`)).default;
    setMessages(msgs);
  }, []);

  // Load initial locale from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    const initialLocale = stored || defaultLocale;
    setLocaleState(initialLocale);
    loadMessages(initialLocale).then(() => setIsLoading(false));
  }, [loadMessages]);

  const setLocale = useCallback(
    (newLocale: Locale) => {
      setLocaleState(newLocale);
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale;
      loadMessages(newLocale);
    },
    [loadMessages],
  );

  if (isLoading || !messages) {
    return null;
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}
