import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CaretDown } from "@phosphor-icons/react";
import { useLang } from "../../i18n/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * #soalan: 4-item accordion, only one panel open at a time. A single
 * border-b divides items (via divide-y), so there's no border above the
 * first question or below the last answer.
 */
export default function Faq() {
  const { t } = useLang();
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? 0 : 24;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
  ];

  return (
    <section id="soalan" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: offset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-3xl tracking-tight md:text-5xl"
        >
          {t.faq.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: offset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE, delay: reduceMotion ? 0 : 0.1 }}
          className="mt-10 max-w-[65ch] divide-y divide-arang/10"
        >
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const triggerId = `faq-trigger-${index}`;
            const panelId = `faq-panel-${index}`;
            return (
              <div key={triggerId}>
                <button
                  type="button"
                  id={triggerId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="text-lg font-medium">{item.q}</span>
                  <CaretDown
                    size={20}
                    weight="light"
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen ? (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className="pb-6 text-arang-2"
                  >
                    {item.a}
                  </div>
                ) : null}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
