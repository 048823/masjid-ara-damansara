import { LanguageProvider } from "./i18n/LanguageContext";
import Nav from "./components/Nav";
import FlyoverHero from "./components/hero/FlyoverHero";
import Architecture from "./components/sections/Architecture";
import Nikah from "./components/sections/Nikah";
import PrayerTimes from "./components/sections/PrayerTimes";
import Programs from "./components/sections/Programs";
import Infaq from "./components/sections/Infaq";
import Faq from "./components/sections/Faq";
import Footer from "./components/sections/Footer";

/**
 * App.tsx — frozen after scaffold (BLUEPRINT.md §10). Composition order and
 * ownership boundaries (hero/** = WP-B, Nav + sections/** = WP-C) are locked.
 */
export default function App() {
  return (
    <LanguageProvider>
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-[10px] focus-visible:bg-surface focus-visible:px-4 focus-visible:py-2 focus-visible:text-arang"
      >
        Skip to main content
      </a>
      <Nav />
      <FlyoverHero />
      <main id="main">
        <Architecture />
        <Nikah />
        <PrayerTimes />
        <Programs />
        <Infaq />
        <Faq />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
