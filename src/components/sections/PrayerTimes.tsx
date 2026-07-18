import { motion, useReducedMotion } from "motion/react";
import { useLang } from "../../i18n/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * #waktu-solat: six sample-data time tiles. No table, no row dividers.
 */
export default function PrayerTimes() {
  const { t } = useLang();
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? 0 : 24;

  const tiles = [
    { name: t.prayer.subuh, time: t.prayer.times.subuh },
    { name: t.prayer.syuruk, time: t.prayer.times.syuruk },
    { name: t.prayer.zohor, time: t.prayer.times.zohor },
    { name: t.prayer.asar, time: t.prayer.times.asar },
    { name: t.prayer.maghrib, time: t.prayer.times.maghrib },
    { name: t.prayer.isyak, time: t.prayer.times.isyak },
  ];

  return (
    <section id="waktu-solat" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: offset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <h2 className="text-3xl tracking-tight md:text-5xl">{t.prayer.title}</h2>
          <p className="mt-3 max-w-[65ch] text-sm text-arang-2">{t.prayer.note}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {tiles.map((tile, index) => (
            <motion.div
              key={tile.name}
              initial={{ opacity: 0, y: offset }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: EASE,
                delay: reduceMotion ? 0 : index * 0.06,
              }}
              className="rounded-[18px] border border-arang/5 bg-surface p-5"
            >
              <p className="text-sm text-arang-2">{tile.name}</p>
              <p className="mt-2 text-2xl font-medium tabular-nums md:text-3xl">
                {tile.time}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
