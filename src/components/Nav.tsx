import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { useLang } from "../i18n/LanguageContext";
import { z } from "../lib/z";

interface NavLink {
  href: string;
  label: string;
}

/**
 * Fixed site nav. Transparent + white text over the hero; once the user has
 * scrolled past ~80% of the viewport height it gains a surface scrim, ink
 * text and a hairline border. Threshold is tracked via Motion's useScroll,
 * never a raw window scroll listener.
 */
export default function Nav() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const thresholdRef = useRef(0);
  const reduceMotion = useReducedMotion();
  const menuOffset = reduceMotion ? 0 : -8;

  thresholdRef.current = typeof window !== "undefined" ? window.innerHeight * 0.8 : 0;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > thresholdRef.current);
  });

  const links: NavLink[] = [
    { href: "#tentang", label: t.nav.about },
    { href: "#nikah", label: t.nav.nikah },
    { href: "#waktu-solat", label: t.nav.prayer },
    { href: "#program", label: t.nav.programs },
    { href: "#hubungi", label: t.nav.contact },
  ];

  const toggleLang = () => setLang(lang === "ms" ? "en" : "ms");
  const closeMenu = () => setMenuOpen(false);

  const chromeClasses = scrolled
    ? "bg-surface/85 backdrop-blur border-b border-arang/10 text-arang"
    : "bg-transparent border-b border-transparent text-white";
  const pillBorderClass = scrolled ? "border-arang/20" : "border-white/40";

  return (
    <header
      className={`fixed inset-x-0 top-0 transition-colors duration-300 ${chromeClasses}`}
      style={{ zIndex: z.nav }}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#main" className="font-medium">
          {t.hero.eyebrow}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Utama">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm opacity-90 transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Tukar bahasa / Switch language"
            className={`rounded-[10px] border px-3 py-1.5 text-sm active:scale-[0.98] ${pillBorderClass}`}
          >
            {t.nav.langLabel}
          </button>
          <a
            href="#infaq"
            className="whitespace-nowrap rounded-[10px] bg-firus px-5 py-2.5 text-sm text-white transition-colors hover:bg-firus-deep active:scale-[0.98] dark:text-[#17221F]"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleLang}
            aria-label="Tukar bahasa / Switch language"
            className={`rounded-[10px] border px-3 py-1.5 text-sm active:scale-[0.98] ${pillBorderClass}`}
          >
            {t.nav.langLabel}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Buka menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-[10px] active:scale-[0.98]"
          >
            {menuOpen ? <X size={24} weight="light" /> : <List size={24} weight="light" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: menuOffset }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-surface px-4 pb-8 text-arang md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Utama mudah alih">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-arang/10 py-4 text-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#infaq"
              onClick={closeMenu}
              className="mt-6 whitespace-nowrap rounded-[10px] bg-firus px-5 py-3 text-center text-sm text-white transition-colors hover:bg-firus-deep active:scale-[0.98] dark:text-[#17221F]"
            >
              {t.nav.cta}
            </a>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
}
