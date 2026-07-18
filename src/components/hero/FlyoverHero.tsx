import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { useLang } from "../../i18n/LanguageContext";
import { z } from "../../lib/z";
import "./flyover.css";

// Register the plugin once, at module load. Idempotent, so a re-import or a
// re-mount never double registers.
gsap.registerPlugin(ScrollTrigger);

/**
 * "Terbang Masuk" flyover hero (BLUEPRINT.md section 8).
 *
 * One pinned full viewport section. A single GSAP ScrollTrigger master
 * timeline scrubs four stacked full bleed scenes so the page reads as one
 * continuous drone flight: aerial, approach, through the lattice courtyard,
 * arriving at a wedding corridor. Before any scroll, scene 1 runs a slow CSS
 * Ken Burns loop (see flyover.css). Reduced motion collapses everything to a
 * still scene 1 with the text visible and no pin.
 *
 * Accessibility note on the photos: every scene img is decorative
 * (alt="" plus aria-hidden). This hero is a text over photo composition where
 * all meaning lives in real, accessible text: the h1 headline, the sub
 * paragraph, and the four scene captions. The photographs are atmosphere for
 * the flight, so marking them decorative avoids duplicate screen reader
 * announcements while scene 1 stays eager with fetchPriority high for LCP.
 */
export default function FlyoverHero() {
  const { t } = useLang();
  const prefersReduced = useReducedMotion();
  const reduced = !!prefersReduced;
  const rootRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Data Saver: skip the heavier idle video on metered / save-data
  // connections and fall back to the still frame. The Network Information API
  // is not in the TS DOM lib, so read `connection.saveData` through a narrow
  // cast (via unknown) instead of widening navigator globally. Computed once
  // in a lazy initializer; it does not change over the component's life.
  const [saveData] = useState(() => {
    if (typeof navigator === "undefined") return false;
    const conn = (navigator as unknown as { connection?: { saveData?: boolean } })
      .connection;
    return !!conn?.saveData;
  });

  // The video is only rendered when motion is welcome and the connection is
  // not save-data. Reduced motion keeps the current static image behavior.
  const renderVideo = !reduced && !saveData;

  // The video takes over as the live idle loop only once it can actually play
  // (onCanPlay). Any load / decode error (onError) unmounts it, leaving the
  // still img with its CSS Ken Burns exactly as before.
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoActive = renderVideo && videoReady && !videoFailed;

  useLayoutEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      // Master timeline. Linear scrub (ease "none" on the timeline itself); the
      // only eased tweens are the per scene settle scales, so incoming scenes
      // decelerate like a drone easing to a hover. Total duration is 4 units,
      // so 1 unit equals 25% of the scroll and scene changes land near
      // 25 / 50 / 75%.
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
          // Battery / perf: pause the idle loop once the whole flight has been
          // scrolled past (hero no longer on screen) and resume on the way
          // back. Reuses the existing pin trigger, so no window scroll
          // listeners. No-ops when the video is not rendered (ref is null).
          onLeave: () => videoRef.current?.pause(),
          onEnterBack: () => {
            videoRef.current?.play().catch(() => {});
          },
        },
      });

      // Hero copy leaves as scene 1 gives way to scene 2.
      tl.to(".fh-copy", { autoAlpha: 0, y: -32, ease: "power1.in", duration: 0.9 }, 0.2);

      // Caption 1 owns the first quarter, then clears.
      tl.to(".fh-cap1", { autoAlpha: 0, duration: 0.4 }, 0.8);

      // Scene 2: crossfade in over scene 1, inner img settles 1.08 to 1.0.
      tl.fromTo(".fh-s2", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, 0.6);
      tl.fromTo(".fh-img2", { scale: 1.08 }, { scale: 1, ease: "power2.out", duration: 1.5 }, 0.6);
      tl.fromTo(".fh-cap2", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, 1.0);
      tl.to(".fh-cap2", { autoAlpha: 0, duration: 0.4 }, 1.8);

      // Scene 3: through the lattice courtyard.
      tl.fromTo(".fh-s3", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, 1.6);
      tl.fromTo(".fh-img3", { scale: 1.08 }, { scale: 1, ease: "power2.out", duration: 1.5 }, 1.6);
      tl.fromTo(".fh-cap3", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, 2.0);
      tl.to(".fh-cap3", { autoAlpha: 0, duration: 0.4 }, 2.8);

      // Scene 4: arrival at the wedding corridor. Its settle finishes at the
      // very end of the scrub (duration 1.4 from 2.6 reaches the 4.0 total).
      tl.fromTo(".fh-s4", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, 2.6);
      tl.fromTo(".fh-img4", { scale: 1.08 }, { scale: 1, ease: "power2.out", duration: 1.4 }, 2.6);
      tl.fromTo(".fh-cap4", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, 3.0);
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={rootRef}
      className="relative isolate min-h-[100dvh] w-full overflow-hidden bg-arang"
    >
      {/* Scene 1: aerial. The eager still is the LCP frame and the base layer.
          When the drone video can play it fades in on top and takes over the
          motion; while the video is loading, failed, or not rendered (reduced
          motion / save-data) the still keeps its CSS Ken Burns idle drift. */}
      <div className="fh-s1 absolute inset-0">
        <img
          src="/images/hero-aerial.jpg"
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          // Ken Burns only while the video is NOT the active layer; the video
          // supplies its own motion once it fades in.
          className={`h-full w-full object-cover ${videoActive ? "" : "fh-kb"}`}
          // QA FIX: React 18's DOM property allowlist doesn't include the
          // camelCase `fetchPriority` prop (that mapping ships in React 19),
          // so JSX `fetchPriority="high"` both logs a dev console warning
          // and gets silently dropped, never reaching the DOM. Spreading the
          // lowercase attribute bypasses React's known-prop check and sets
          // it directly, so the LCP hint actually takes effect.
          {...{ fetchpriority: "high" }}
        />
        {/* Living idle loop: silent, muted, looping drone flyover whose first
            frame matches hero-aerial.jpg. Sits over the still and fades in on
            onCanPlay; on error it unmounts and the still (with Ken Burns)
            remains. Decorative and not focusable. */}
        {renderVideo && !videoFailed && (
          <video
            ref={videoRef}
            src="/videos/hero-loop.mp4"
            poster="/images/hero-aerial.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
            onCanPlay={() => setVideoReady(true)}
            onError={() => setVideoFailed(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[600ms] ${
              videoActive ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>

      {/* Reduced motion renders scene 1 only; scenes 2 to 4 and their captions
          are simply not mounted (no pin, no scrub, no idle drift). */}
      {!reduced && (
        <>
          <div className="fh-s2 absolute inset-0 opacity-0">
            <img
              src="/images/hero-approach.jpg"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="fh-img2 h-full w-full object-cover"
            />
          </div>
          <div className="fh-s3 absolute inset-0 opacity-0">
            <img
              src="/images/hero-courtyard.webp"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="fh-img3 h-full w-full object-cover"
            />
          </div>
          <div className="fh-s4 absolute inset-0 opacity-0">
            <img
              src="/images/hero-wedding.jpg"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="fh-img4 h-full w-full object-cover"
            />
          </div>
        </>
      )}

      {/* Scrim: bottom gradient to transparent so white text and the ghost CTA
          hold WCAG AA over every scene. Always under the overlay.
          QA FIX: uses a literal ink hex (not the `arang` token) because
          `arang` flips to a near-white value under prefers-color-scheme:
          dark (BLUEPRINT §6). This scrim darkens photographs, independent
          of the page theme, so it must never lighten in dark mode. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17221F]/55 via-[#17221F]/10 to-transparent"
      />

      {/* Text overlay */}
      <div className="absolute inset-0" style={{ zIndex: z.heroOverlay }}>
        {/* Hero copy block: bottom left, sits above the caption lane. Exactly
            four stack items: eyebrow, headline, sub, CTA row. */}
        <div className="fh-copy absolute inset-x-0 bottom-0 flex flex-col gap-4 px-6 pb-16 md:px-12 md:pb-24">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
            {t.hero.eyebrow}
          </p>
          <h1 className="max-w-2xl text-4xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl">
            <span className="block">{t.hero.title1}</span>
            <span className="block">{t.hero.title2}</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            {t.hero.sub}
          </p>
          <div className="mt-2 flex w-full flex-col gap-3 min-[400px]:flex-row">
            <a
              href="#infaq"
              className="inline-flex w-full items-center justify-center rounded-[10px] bg-firus px-6 py-3 text-sm font-medium text-white transition hover:bg-firus-deep active:scale-[0.98] min-[400px]:w-auto dark:text-[#17221F]"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#nikah"
              className="inline-flex w-full items-center justify-center rounded-[10px] border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10 active:scale-[0.98] min-[400px]:w-auto"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Caption lane: bottom left corner, one short line per scene, stacked
            and crossfaded in place. In reduced motion only caption 1 shows. */}
        <div className="absolute inset-x-6 bottom-5 md:inset-x-12 md:bottom-8">
          <div className="relative h-5">
            <p className="fh-cap1 absolute inset-x-0 bottom-0 truncate text-sm text-white/90">
              {t.hero.scene1}
            </p>
            {!reduced && (
              <>
                <p className="fh-cap2 absolute inset-x-0 bottom-0 truncate text-sm text-white/90 opacity-0">
                  {t.hero.scene2}
                </p>
                <p className="fh-cap3 absolute inset-x-0 bottom-0 truncate text-sm text-white/90 opacity-0">
                  {t.hero.scene3}
                </p>
                <p className="fh-cap4 absolute inset-x-0 bottom-0 truncate text-sm text-white/90 opacity-0">
                  {t.hero.scene4}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
