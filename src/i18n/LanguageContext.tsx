import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { copy, type Lang } from "./copy";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof copy)[Lang];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Client-side language provider. Default language is `ms`. No persistence
 * (session-only), per BLUEPRINT.md — switching updates `document.documentElement.lang`.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ms");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: copy[lang] }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return ctx;
}
