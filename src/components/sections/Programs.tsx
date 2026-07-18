import { motion, useReducedMotion } from "motion/react";
import { BookOpen, BookBookmark, UsersThree } from "@phosphor-icons/react";
import { useLang } from "../../i18n/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * #program: asymmetric bento, exactly 3 cells. One tall image cell (Kuliah
 * Maghrib, with its caption inside the card below the image) and two
 * stacked text cells (Kelas Al-Quran, Aktiviti Kejiranan).
 */
export default function Programs() {
  const { t } = useLang();
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? 0 : 24;

  return (
    <section id="program" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: offset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-3xl tracking-tight md:text-5xl"
        >
          {t.prog.title}
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: offset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex flex-col overflow-hidden rounded-[18px] border border-arang/5 bg-surface md:col-span-5"
          >
            <img
              src="/images/hero-approach.jpg"
              alt={t.prog.item1.title}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="flex flex-1 flex-col gap-3 p-6 md:p-8">
              <BookOpen size={28} weight="light" className="text-firus" />
              <h3 className="text-xl font-medium">{t.prog.item1.title}</h3>
              <p className="text-arang-2">{t.prog.item1.body}</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6 md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: offset }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE, delay: reduceMotion ? 0 : 0.08 }}
              className="flex flex-1 flex-col gap-3 rounded-[18px] bg-firus-wash p-6 md:justify-center md:p-8"
            >
              <BookBookmark size={28} weight="light" className="text-firus" />
              <h3 className="text-xl font-medium">{t.prog.item2.title}</h3>
              <p className="text-arang-2">{t.prog.item2.body}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: offset }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE, delay: reduceMotion ? 0 : 0.16 }}
              className="flex flex-1 flex-col gap-3 rounded-[18px] border border-arang/5 bg-surface p-6 md:justify-center md:p-8"
            >
              <UsersThree size={28} weight="light" className="text-firus" />
              <h3 className="text-xl font-medium">{t.prog.item3.title}</h3>
              <p className="text-arang-2">{t.prog.item3.body}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
