import { motion, useReducedMotion } from "motion/react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { useLang } from "../../i18n/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

// TODO verify: replace with the mosque office's real WhatsApp number.
const WHATSAPP_URL = "https://wa.me/60123456789";

/**
 * #nikah: the emotional peak of the page. Copy + WhatsApp CTA above an
 * editorial 2-row photo mosaic (portrait trio + one landscape hero frame).
 */
export default function Nikah() {
  const { t } = useLang();
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? 0 : 24;

  return (
    <section id="nikah" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: offset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-[65ch]"
        >
          {/* QA FIX: text-firus-deep, not text-firus. firus (#0F857E) on kapur
              measures 4.12:1, below the 4.5:1 AA text threshold; firus-deep
              (#0A625D) measures 6.60:1. Same accent hue, darker step, no new
              color introduced. */}
          <p className="text-sm font-medium uppercase tracking-wide text-firus-deep">
            {t.nikah.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl tracking-tight md:text-5xl">{t.nikah.title}</h2>
          <p className="mt-6 text-arang-2">{t.nikah.body}</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-[10px] bg-firus px-6 py-3 text-sm text-white transition-colors hover:bg-firus-deep active:scale-[0.98] dark:text-[#17221F]"
          >
            <WhatsappLogo size={20} weight="light" />
            {t.nikah.cta}
          </a>
        </motion.div>

        {/* Desktop: 2-row editorial mosaic, asymmetric column spans */}
        <motion.div
          initial={{ opacity: 0, y: offset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE, delay: reduceMotion ? 0 : 0.1 }}
          className="mt-16 hidden grid-cols-12 gap-4 md:grid"
        >
          <img
            src="/images/nikah-arch.jpg"
            alt={t.nikah.imgAlt1}
            loading="lazy"
            className="col-span-3 aspect-[3/4] w-full rounded-[18px] object-cover"
          />
          <img
            src="/images/nikah-garden.jpg"
            alt={t.nikah.imgAlt2}
            loading="lazy"
            className="col-span-3 aspect-[3/4] w-full rounded-[18px] object-cover"
          />
          <img
            src="/images/nikah-akad.jpg"
            alt={t.nikah.imgAlt3}
            loading="lazy"
            className="col-span-6 aspect-[4/3] w-full rounded-[18px] object-cover"
          />
          <img
            src="/images/hero-wedding.jpg"
            alt={t.hero.scene4}
            loading="lazy"
            className="col-span-7 col-start-6 aspect-[16/9] w-full rounded-[18px] object-cover"
          />
        </motion.div>

        {/* Mobile: 2-col grid, varied aspect ratios keep it from feeling like equal cards */}
        <div className="mt-12 grid grid-cols-2 gap-3 md:hidden">
          <img
            src="/images/nikah-arch.jpg"
            alt={t.nikah.imgAlt1}
            loading="lazy"
            className="aspect-[3/4] w-full rounded-[18px] object-cover"
          />
          <img
            src="/images/nikah-garden.jpg"
            alt={t.nikah.imgAlt2}
            loading="lazy"
            className="aspect-[3/4] w-full rounded-[18px] object-cover"
          />
          <img
            src="/images/nikah-akad.jpg"
            alt={t.nikah.imgAlt3}
            loading="lazy"
            className="col-span-2 aspect-[16/9] w-full rounded-[18px] object-cover"
          />
          <img
            src="/images/hero-wedding.jpg"
            alt={t.hero.scene4}
            loading="lazy"
            className="col-span-2 aspect-[16/9] w-full rounded-[18px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
