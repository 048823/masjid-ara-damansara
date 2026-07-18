import { motion, useReducedMotion } from "motion/react";
import { MapPin, WhatsappLogo } from "@phosphor-icons/react";
import { useLang } from "../../i18n/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

const MAPS_URL = "https://maps.google.com/?q=Masjid+Ara+Damansara";
// TODO verify: replace with the mosque office's real WhatsApp number.
const WHATSAPP_URL = "https://wa.me/60123456789";

/**
 * #hubungi: visit block (address, maps, WhatsApp) + closing credits row.
 */
export default function Footer() {
  const { t } = useLang();
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? 0 : 24;
  const year = new Date().getFullYear();

  return (
    <footer id="hubungi" className="border-t border-arang/10 bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: offset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="grid grid-cols-1 gap-10 md:grid-cols-12"
        >
          <div className="md:col-span-7">
            <h2 className="text-2xl tracking-tight md:text-3xl">{t.visit.title}</h2>
            <p className="mt-4 max-w-[65ch] text-arang-2">{t.visit.address}</p>
          </div>

          <div className="flex flex-col items-start gap-4 md:col-span-5">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-arang transition-colors hover:text-firus"
            >
              <MapPin size={20} weight="light" />
              {t.visit.maps}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-arang transition-colors hover:text-firus"
            >
              <WhatsappLogo size={20} weight="light" />
              {t.visit.whatsapp}
            </a>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col gap-2 border-t border-arang/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-arang-2">{t.footer.tagline}</p>
          <p className="text-sm text-arang-2">
            © {year} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
