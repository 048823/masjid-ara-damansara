/**
 * Copy Deck — Masjid Ara Damansara.
 * Implemented verbatim from docs/COPY.md. `ms` is the default language.
 * Both `ms` and `en` must satisfy the same `CopyDict` interface, so a
 * missing translation key is a TypeScript error, not a runtime gap.
 *
 * Strings originally marked [PLACEHOLDER] in COPY.md keep their visible
 * text (marker stripped) and carry a `// TODO verify` comment above them.
 */

export interface CopyDict {
  nav: {
    about: string;
    nikah: string;
    prayer: string;
    programs: string;
    contact: string;
    cta: string;
    langLabel: string;
  };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scene1: string;
    scene2: string;
    scene3: string;
    scene4: string;
  };
  arch: {
    title: string;
    body1: string;
    body2: string;
    imgAlt1: string;
    imgAlt2: string;
    imgAlt3: string;
  };
  nikah: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    imgAlt1: string;
    imgAlt2: string;
    imgAlt3: string;
  };
  prayer: {
    title: string;
    note: string;
    subuh: string;
    syuruk: string;
    zohor: string;
    asar: string;
    maghrib: string;
    isyak: string;
    times: {
      subuh: string;
      syuruk: string;
      zohor: string;
      asar: string;
      maghrib: string;
      isyak: string;
    };
  };
  prog: {
    title: string;
    item1: { title: string; body: string };
    item2: { title: string; body: string };
    item3: { title: string; body: string };
  };
  infaq: {
    eyebrow: string;
    title: string;
    body: string;
    bank: string;
    cta: string;
  };
  faq: {
    title: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
  };
  visit: {
    title: string;
    address: string;
    maps: string;
    whatsapp: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

export const copy = {
  ms: {
    nav: {
      about: "Seni Bina",
      nikah: "Majlis Nikah",
      prayer: "Waktu Solat",
      programs: "Program",
      contact: "Hubungi",
      cta: "Salurkan Infaq",
      langLabel: "EN",
    },
    hero: {
      eyebrow: "Masjid Ara Damansara",
      title1: "Rumah ibadah.",
      title2: "Rumah komuniti.",
      sub: "Masjid moden di tengah kejiranan Ara Damansara, terbuka untuk solat, ilmu dan majlis yang bermakna.",
      ctaPrimary: "Salurkan Infaq",
      ctaSecondary: "Tempah Majlis Nikah",
      scene1: "Ara Damansara, Selangor",
      scene2: "Bumbung terapung, tanpa dinding",
      scene3: "Kerawang putih, cahaya semula jadi",
      scene4: "Tempat kisah bermula",
    },
    arch: {
      title: "Seni bina yang bernafas",
      body1: "Bumbung piramid yang terapung, dinding kerawang putih dan ruang terbuka membiarkan cahaya serta angin menjadi sebahagian daripada ibadah.",
      body2: "Direka sebagai masjid moden untuk kejiranan Ara Damansara, ia menjadi mercu tanda yang tenang: putih, terang dan mesra untuk semua.",
      imgAlt1: "Sudut bumbung Masjid Ara Damansara",
      imgAlt2: "Papan tanda masuk Masjid Ara Damansara",
      imgAlt3: "Laman dalam berdinding kerawang putih",
    },
    nikah: {
      eyebrow: "Majlis Nikah",
      title: "Akad yang tenang, majlis yang indah",
      body: "Koridor kerawang putih dan cahaya semula jadi menjadikan masjid ini antara lokasi akad nikah yang paling dicari di Lembah Klang. Hubungi pejabat masjid untuk tarikh dan tempahan.",
      cta: "Tempah Majlis Nikah",
      imgAlt1: "Gerbang bunga di koridor masjid",
      imgAlt2: "Persiapan majlis di laman masjid",
      imgAlt3: "Majlis akad nikah di dalam dewan",
    },
    prayer: {
      title: "Waktu Solat",
      // TODO verify
      note: "Contoh paparan. Waktu rasmi mengikut takwim JAKIM bagi kawasan Petaling.",
      subuh: "Subuh",
      syuruk: "Syuruk",
      zohor: "Zohor",
      asar: "Asar",
      maghrib: "Maghrib",
      isyak: "Isyak",
      times: {
        subuh: "5:58",
        syuruk: "7:09",
        zohor: "1:19",
        asar: "4:38",
        maghrib: "7:26",
        isyak: "8:38",
      },
    },
    prog: {
      title: "Ilmu dan komuniti",
      item1: {
        title: "Kuliah Maghrib",
        body: "Pengajian mingguan selepas solat Maghrib, terbuka kepada semua.",
      },
      item2: {
        title: "Kelas Al-Quran",
        body: "Kelas mengaji untuk kanak-kanak dan dewasa pada hujung minggu.",
      },
      item3: {
        title: "Aktiviti Kejiranan",
        body: "Gotong-royong, iftar bersama dan program belia sepanjang tahun.",
      },
    },
    infaq: {
      eyebrow: "Infaq",
      title: "Tumbuhkan rumah Allah ini",
      body: "Setiap sumbangan menyokong penyelenggaraan masjid, program ilmu dan khidmat komuniti untuk kejiranan Ara Damansara.",
      // TODO verify
      bank: "Maklumat akaun dan kod QR akan dipaparkan di sini.",
      cta: "Salurkan Infaq",
    },
    faq: {
      title: "Soalan Lazim",
      q1: "Bagaimana untuk menempah majlis nikah di sini?",
      a1: "Hubungi pejabat masjid melalui WhatsApp atau e-mel dengan tarikh pilihan anda. Pihak pengurusan akan mengesahkan kekosongan dan syarat tempahan.",
      q2: "Bolehkah pelawat bukan Islam melawat masjid?",
      a2: "Boleh, di luar waktu solat dan dengan pakaian sopan. Jubah dan selendang disediakan di pintu masuk.",
      q3: "Adakah tempat letak kereta disediakan?",
      a3: "Ya, kawasan letak kereta percuma disediakan di dalam perkarangan masjid.",
      q4: "Bagaimana infaq saya digunakan?",
      a4: "Sumbangan disalurkan kepada penyelenggaraan, aktiviti keagamaan dan bantuan komuniti setempat.",
    },
    visit: {
      title: "Kunjungi kami",
      // TODO verify
      address: "Ara Damansara, 47301 Petaling Jaya, Selangor",
      maps: "Buka di Google Maps",
      whatsapp: "WhatsApp Pejabat Masjid",
    },
    footer: {
      tagline: "Rumah ibadah. Rumah komuniti.",
      rights: "Masjid Ara Damansara. Hak cipta terpelihara.",
    },
  },
  en: {
    nav: {
      about: "Architecture",
      nikah: "Weddings",
      prayer: "Prayer Times",
      programs: "Programmes",
      contact: "Contact",
      cta: "Give Infaq",
      langLabel: "BM",
    },
    hero: {
      eyebrow: "Masjid Ara Damansara",
      title1: "A house of worship.",
      title2: "A home for its community.",
      sub: "A modern mosque in the heart of Ara Damansara, open for prayer, learning and life's meaningful moments.",
      ctaPrimary: "Give Infaq",
      ctaSecondary: "Book a Nikah",
      scene1: "Ara Damansara, Selangor",
      scene2: "A floating roof, no walls",
      scene3: "White lattice, natural light",
      scene4: "Where stories begin",
    },
    arch: {
      title: "Architecture that breathes",
      body1: "A floating pyramid roof, white lattice walls and open spaces let light and air become part of worship.",
      body2: "Designed as a modern mosque for the Ara Damansara neighbourhood, it stands as a quiet landmark: white, bright and welcoming to all.",
      imgAlt1: "Roof corner of Masjid Ara Damansara",
      imgAlt2: "Entrance signage of Masjid Ara Damansara",
      imgAlt3: "Courtyard framed by white lattice walls",
    },
    nikah: {
      eyebrow: "Weddings",
      title: "A serene akad, a beautiful celebration",
      body: "White lattice corridors and natural light make this mosque one of the most sought-after akad nikah venues in the Klang Valley. Contact the mosque office for dates and bookings.",
      cta: "Book a Nikah",
      imgAlt1: "Floral arch along the mosque corridor",
      imgAlt2: "Garden ceremony setup at the mosque",
      imgAlt3: "An akad nikah ceremony indoors",
    },
    prayer: {
      title: "Prayer Times",
      // TODO verify
      note: "Sample display. Official times follow the JAKIM calendar for the Petaling area.",
      subuh: "Fajr",
      syuruk: "Sunrise",
      zohor: "Dhuhr",
      asar: "Asr",
      maghrib: "Maghrib",
      isyak: "Isha",
      times: {
        subuh: "5:58",
        syuruk: "7:09",
        zohor: "1:19",
        asar: "4:38",
        maghrib: "7:26",
        isyak: "8:38",
      },
    },
    prog: {
      title: "Learning and community",
      item1: {
        title: "Maghrib Lectures",
        body: "Weekly lessons after Maghrib prayers, open to everyone.",
      },
      item2: {
        title: "Quran Classes",
        body: "Recitation classes for children and adults on weekends.",
      },
      item3: {
        title: "Neighbourhood Activities",
        body: "Community clean-ups, shared iftars and youth programmes all year round.",
      },
    },
    infaq: {
      eyebrow: "Give",
      title: "Help this house of Allah grow",
      body: "Every contribution supports the mosque's upkeep, its classes and community services for the Ara Damansara neighbourhood.",
      // TODO verify
      bank: "Account details and QR code will be shown here.",
      cta: "Give Infaq",
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: "How do I book a nikah ceremony here?",
      a1: "Contact the mosque office via WhatsApp or email with your preferred date. The management will confirm availability and booking terms.",
      q2: "Can non-Muslim visitors tour the mosque?",
      a2: "Yes, outside prayer times and in modest attire. Robes and scarves are available at the entrance.",
      q3: "Is parking available?",
      a3: "Yes, free parking is available within the mosque grounds.",
      q4: "How is my infaq used?",
      a4: "Contributions go toward maintenance, religious activities and local community aid.",
    },
    visit: {
      title: "Visit us",
      // TODO verify
      address: "Ara Damansara, 47301 Petaling Jaya, Selangor",
      maps: "Open in Google Maps",
      whatsapp: "WhatsApp the Mosque Office",
    },
    footer: {
      tagline: "A house of worship. A home for its community.",
      rights: "Masjid Ara Damansara. All rights reserved.",
    },
  },
} as const satisfies { ms: CopyDict; en: CopyDict };

export type Lang = keyof typeof copy;
