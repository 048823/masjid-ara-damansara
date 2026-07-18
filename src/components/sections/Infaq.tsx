import { motion, useReducedMotion } from "motion/react";
import { QrCode } from "@phosphor-icons/react";
import { useLang } from "../../i18n/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

// TODO verify: replace with the mosque office's real WhatsApp number.
const WHATSAPP_URL = "https://wa.me/60123456789";

/**
 * #infaq: full-width firus-wash band, the primary conversion moment.
 * Desktop: copy left, QR + CTA cluster right. Mobile stacks.
 */
export default function Infaq() {
  const { t } = useLang();
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? 0 : 24;

  return (
    <section id="infaq" className="bg-firus-wash py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-12 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: offset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="md:col-span-7"
        >
          {/* QA FIX: text-firus-deep, not text-firus. firus (#0F857E) on
              firus-wash measures 3.93:1, below the 4.5:1 AA text threshold;
              firus-deep (#0A625D) measures 6.29:1. Same accent hue, darker
              step, no new color introduced. */}
          <p className="text-sm font-medium uppercase tracking-wide text-firus-deep">
            {t.infaq.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl tracking-tight md:text-5xl">{t.infaq.title}</h2>
          <p className="mt-6 max-w-[65ch] text-arang-2">{t.infaq.body}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: offset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE, delay: reduceMotion ? 0 : 0.1 }}
          className="flex flex-col gap-6 md:col-span-5"
        >
          <div className="flex items-center gap-4">
            <div className="flex aspect-square w-40 flex-shrink-0 items-center justify-center rounded-[18px] border border-arang/10 bg-surface md:w-48">
              <QrCode size={48} weight="light" className="text-firus" />
            </div>
            <p className="max-w-[22ch] text-sm text-arang-2">{t.infaq.bank}</p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center whitespace-nowrap rounded-[10px] bg-firus px-6 py-3 text-sm text-white transition-colors hover:bg-firus-deep active:scale-[0.98] dark:text-[#17221F]"
          >
            {t.infaq.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
