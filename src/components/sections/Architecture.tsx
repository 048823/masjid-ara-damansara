import { motion, useReducedMotion } from "motion/react";
import { useLang } from "../../i18n/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * #tentang: split manifesto (cols 1-5) + asymmetric 3-photo strip (cols 6-12).
 * Mobile collapses to text, then a horizontal-scroll snap strip.
 */
export default function Architecture() {
  const { t } = useLang();
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? 0 : 24;

  return (
    <section id="tentang" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-12 md:gap-8 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: offset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="md:col-span-5"
        >
          <h2 className="text-3xl tracking-tight md:text-5xl">{t.arch.title}</h2>
          <div className="mt-6 flex max-w-[65ch] flex-col gap-4 text-arang-2">
            <p>{t.arch.body1}</p>
            <p>{t.arch.body2}</p>
          </div>
        </motion.div>

        {/* Desktop: asymmetric grid, one tall image spanning two rows + two stacked */}
        <motion.div
          initial={{ opacity: 0, y: offset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE, delay: reduceMotion ? 0 : 0.1 }}
          className="hidden grid-cols-2 grid-rows-2 gap-4 md:col-span-7 md:grid"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/arch-roof.jpg`}
            alt={t.arch.imgAlt1}
            loading="lazy"
            className="row-span-2 h-full w-full rounded-[18px] object-cover object-[70%_50%]"
          />
          <img
            src={`${import.meta.env.BASE_URL}images/arch-sign.jpg`}
            alt={t.arch.imgAlt2}
            loading="lazy"
            className="aspect-square w-full rounded-[18px] object-cover"
          />
          <img
            src={`${import.meta.env.BASE_URL}images/hero-courtyard.webp`}
            alt={t.arch.imgAlt3}
            loading="lazy"
            className="aspect-square w-full rounded-[18px] object-cover"
          />
        </motion.div>

        {/* Mobile: horizontal-scroll snap strip */}
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:hidden">
          <img
            src={`${import.meta.env.BASE_URL}images/arch-roof.jpg`}
            alt={t.arch.imgAlt1}
            loading="lazy"
            className="aspect-[3/4] w-[78%] flex-shrink-0 snap-center rounded-[18px] object-cover object-[70%_50%]"
          />
          <img
            src={`${import.meta.env.BASE_URL}images/arch-sign.jpg`}
            alt={t.arch.imgAlt2}
            loading="lazy"
            className="aspect-[3/4] w-[78%] flex-shrink-0 snap-center rounded-[18px] object-cover"
          />
          <img
            src={`${import.meta.env.BASE_URL}images/hero-courtyard.webp`}
            alt={t.arch.imgAlt3}
            loading="lazy"
            className="aspect-[3/4] w-[78%] flex-shrink-0 snap-center rounded-[18px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
