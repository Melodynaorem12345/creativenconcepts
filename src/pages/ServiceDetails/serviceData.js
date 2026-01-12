const imageModules = import.meta.glob(
  '../../assets/services/**/*.{jpg,jpeg,png,webp,avif,svg}',
  { eager: true, import: 'default' }
);

const getGalleryImages = (category, serviceSlug) => {
  const prefix = `/src/assets/services/${category}/${serviceSlug}/`;
  return Object.entries(imageModules)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, src]) => src);
};

export const categoryLabels = {
  kitchen: 'Kitchen Finishes',
  'living-room': 'Living Room Units',
  wardrobe: 'Wardrobe Systems'
};

export const legacyRouteMap = {
  'modular-kitchen': { category: 'kitchen', serviceSlug: 'acrylic-kitchen' },
  kitchen: { category: 'kitchen', serviceSlug: 'acrylic-kitchen' },
  wardrobe: { category: 'wardrobe', serviceSlug: 'sliding-wardrobe' },
  'living-room': { category: 'living-room', serviceSlug: 'tv-unit' },
  'tv-console': { category: 'living-room', serviceSlug: 'tv-unit' },
  'crockery-unit': { category: 'living-room', serviceSlug: 'crockery-unit' },
  foyer: { category: 'living-room', serviceSlug: 'foyer-unit' },
  'pooja-room': { category: 'living-room', serviceSlug: 'pooja-unit' },
  vanity: { category: 'living-room', serviceSlug: 'tv-unit' }
};

export const servicesData = {
  kitchen: {
    'acrylic-kitchen': {
      title: 'Acrylic Kitchen',
      shortLabel: 'ACRYLIC KITCHEN',
      description:
        'Acrylic kitchens are defined by seamless high gloss surfaces that bounce light and visually expand the room. The finish feels smooth and clean, with crisp edges that suit modern planning and handleless profiles. It is chosen for homes that want a bold contemporary look without heavy ornamentation. The surface wipes clean easily and resists day to day wear when paired with quality core boards.',
      highlights: [
        'Seamless high gloss look',
        'Reflective and space enhancing',
        'Easy to wipe and maintain'
      ],
      materials: [
        'Acrylic sheets',
        'Engineered boards',
        'Moisture resistant cores'
      ],
      bestFor: ['Modern apartments', 'Contemporary homes'],
      designTone: 'Sleek, reflective, modern',
      gallery: getGalleryImages('kitchen', 'acrylic-kitchen')
    },
    'duco-kitchen': {
      title: 'Duco Kitchen',
      shortLabel: 'DUCO KITCHEN',
      description:
        'Duco kitchens use a multi coat painted finish similar to automotive lacquer, delivering an even color field and a gentle sheen. The surface looks refined and uniform, making it ideal for minimal cabinetry, soft curves, and statement islands. It is selected when custom color matching matters and when a studio grade, crafted appearance is desired. With proper care, it stays smooth and elegant for years.',
      highlights: [
        'Uniform painted surface',
        'Custom color matching',
        'Soft crafted sheen'
      ],
      materials: [
        'Duco paint finish',
        'MDF or engineered cores',
        'Protective seal coats'
      ],
      bestFor: ['Minimal kitchens', 'Statement islands'],
      designTone: 'Refined, tailored, studio crafted',
      gallery: getGalleryImages('kitchen', 'duco-kitchen')
    },
    'glass-laminate-kitchen': {
      title: 'Glass Laminate Kitchen',
      shortLabel: 'GLASS LAMINATE KITCHEN',
      description:
        'Glass laminate kitchens pair the practicality of laminates with a glass like top layer, adding depth and a subtle reflective quality without the fragility of solid glass. The finish feels sleek and cool, with consistent color across large panels. It is a smart choice for contemporary homes that want polish with low maintenance. The surface handles moisture and everyday cleaning with ease while keeping a refined look.',
      highlights: [
        'Glass like depth and sheen',
        'Consistent color across panels',
        'Low maintenance surface'
      ],
      materials: [
        'Glass laminate sheets',
        'Engineered boards',
        'Edge banding system'
      ],
      bestFor: ['Contemporary homes', 'Low maintenance kitchens'],
      designTone: 'Polished, clean, contemporary',
      gallery: getGalleryImages('kitchen', 'glass-laminate-kitchen')
    },
    'lacquered-kitchen': {
      title: 'Lacquered Kitchen',
      shortLabel: 'LACQUERED KITCHEN',
      description:
        'Lacquered kitchens are built through layered coatings that create rich color depth and a soft, tailored glow. The finish feels silky to the touch and reads as crafted rather than manufactured, making cabinetry appear premium and precise. It suits clients who want a sophisticated palette, smooth edges, and a finish that photographs beautifully. With careful detailing, it offers durable performance and a distinctly upscale presence.',
      highlights: [
        'Layered color depth',
        'Smooth, crafted feel',
        'Sophisticated palette options'
      ],
      materials: [
        'Lacquer coatings',
        'MDF or engineered panels',
        'Sealing and polish layers'
      ],
      bestFor: ['Premium interiors', 'Refined color schemes'],
      designTone: 'Elegant, smooth, quietly luxurious',
      gallery: getGalleryImages('kitchen', 'lacquered-kitchen')
    },
    'laminate-kitchen': {
      title: 'Laminate Kitchen',
      shortLabel: 'LAMINATE KITCHEN',
      description:
        'Laminate kitchens deliver dependable performance with a wide range of textures, grains, and matte or gloss options. The finish is practical and consistent, making it suitable for busy households that want style without frequent upkeep. It is chosen for its durability, easy cleaning, and budget clarity, while still allowing the studio to compose warm, modern, or classic themes. A strong choice for everyday living with design flexibility.',
      highlights: [
        'Durable everyday finish',
        'Wide texture and color range',
        'Cost effective and consistent'
      ],
      materials: [
        'High pressure laminates',
        'Engineered boards',
        'Moisture resistant adhesives'
      ],
      bestFor: ['Family homes', 'High use kitchens'],
      designTone: 'Practical, versatile, balanced',
      gallery: getGalleryImages('kitchen', 'laminate-kitchen')
    },
    'stone-lam-kitchen': {
      title: 'Stone Lam Kitchen',
      shortLabel: 'STONE LAM KITCHEN',
      description:
        'Stone laminate kitchens bring the look of natural stone into cabinetry with a lighter, more practical build. The finish feels grounded and tactile, adding architectural weight and a quiet luxury tone. It works beautifully with matte metals and warm woods, and is often chosen for islands or feature walls. Clients select it for its earthy character, subtle movement, and the balance between bold surface presence and maintainability.',
      highlights: [
        'Stone inspired texture',
        'Architectural visual weight',
        'Balanced luxury and practicality'
      ],
      materials: [
        'Stone laminate panels',
        'Engineered boards',
        'Protective surface coats'
      ],
      bestFor: ['Feature islands', 'Earth toned interiors'],
      designTone: 'Grounded, tactile, architectural',
      gallery: getGalleryImages('kitchen', 'stone-lam-kitchen')
    },
    'super-matt-kitchen': {
      title: 'Super Matt Kitchen',
      shortLabel: 'SUPER MATT KITCHEN',
      description:
        'Super matt kitchens are designed for calm, low glare interiors where color reads soft and velvety. The finish absorbs light rather than reflecting it, creating a quiet, premium mood that pairs well with subtle lighting. It is favored for fingerprint resistance, smooth touch, and a modern, understated palette. This choice suits clients who want elegance without shine and a kitchen that feels composed and contemporary.',
      highlights: [
        'Low glare, velvety finish',
        'Fingerprint resistant surface',
        'Modern understated palette'
      ],
      materials: [
        'Super matt laminates',
        'Engineered boards',
        'Soft touch surface coating'
      ],
      bestFor: ['Calm interiors', 'Minimal kitchens'],
      designTone: 'Soft, muted, contemporary',
      gallery: getGalleryImages('kitchen', 'super-matt-kitchen')
    },
    'veneer-kitchen': {
      title: 'Veneer Kitchen',
      shortLabel: 'VENEER KITCHEN',
      description:
        'Veneer kitchens showcase real wood grain, bringing warmth and natural variation to the space. The finish feels authentic and tactile, with each panel carrying its own pattern and tone. It is selected for timeless interiors, especially when clients want a refined, architectural look with organic character. Veneer suits both classic and modern designs, and with proper sealing, it ages gracefully while maintaining depth and richness.',
      highlights: [
        'Natural wood grain',
        'Warm and authentic texture',
        'Timeless architectural appeal'
      ],
      materials: [
        'Natural wood veneer',
        'Engineered core boards',
        'Protective seal coats'
      ],
      bestFor: ['Timeless homes', 'Warm palettes'],
      designTone: 'Organic, warm, enduring',
      gallery: getGalleryImages('kitchen', 'veneer-kitchen')
    }
  },
  'living-room': {
    'tv-unit': {
      title: 'TV Unit',
      shortLabel: 'TV UNIT',
      description:
        'TV units are crafted as architectural centerpieces that balance display, storage, and proportion. The composition frames the screen, hides cables, and integrates niches for decor or sound systems. The finish and paneling can shift the mood from minimal to layered luxury, while keeping the wall clean and intentional. Clients choose this unit to create a focal point that feels built in, refined, and calm for daily living.',
      highlights: [
        'Balanced media wall composition',
        'Concealed cable planning',
        'Integrated display niches'
      ],
      materials: [
        'Engineered panels',
        'Laminate or veneer cladding',
        'Metal or wood accents'
      ],
      bestFor: ['Living lounges', 'Media rooms'],
      designTone: 'Composed, architectural, refined',
      gallery: getGalleryImages('living-room', 'tv-unit')
    },
    'crockery-unit': {
      title: 'Crockery Unit',
      shortLabel: 'CROCKERY UNIT',
      description:
        'Crockery units combine display and storage to elevate dining areas with a curated, gallery like feel. Glass fronts, internal lighting, and refined shelving allow tableware and bar collections to be shown with restraint. The finish can be warm and classic or sleek and contemporary, depending on the space. It is chosen by clients who want elegant organization and a soft sense of hospitality in open living zones.',
      highlights: [
        'Display and storage balance',
        'Glass and lighting integration',
        'Curated dining presence'
      ],
      materials: [
        'Glass shutters',
        'Engineered shelving',
        'LED accent lighting'
      ],
      bestFor: ['Dining zones', 'Open living spaces'],
      designTone: 'Elegant, curated, welcoming',
      gallery: getGalleryImages('living-room', 'crockery-unit')
    },
    'foyer-unit': {
      title: 'Foyer Unit',
      shortLabel: 'FOYER UNIT',
      description:
        'Foyer units set the first impression with a considered blend of storage, seating, and visual balance. The design typically pairs concealed cabinetry for shoes and essentials with an open niche or mirror that adds depth. Finishes are selected to feel welcoming yet resilient to daily use. This unit is ideal for homes that want an entry moment that feels composed, functional, and quietly premium.',
      highlights: [
        'Concealed entry storage',
        'Seating or bench integration',
        'Mirror or niche depth'
      ],
      materials: [
        'Engineered cabinetry',
        'Durable laminate finishes',
        'Accent mirrors or panels'
      ],
      bestFor: ['Urban homes', 'Compact entries'],
      designTone: 'Welcoming, composed, practical',
      gallery: getGalleryImages('living-room', 'foyer-unit')
    },
    'pooja-unit': {
      title: 'Pooja Unit',
      shortLabel: 'POOJA UNIT',
      description:
        'Pooja units are designed as serene focal points that respect ritual while feeling light and contemporary. Natural materials, carved accents, and warm backlighting create a calm glow without visual clutter. The finish often leans toward soft woods or stone tones, allowing devotional elements to stand out. Clients choose this unit to create a dedicated corner that feels peaceful, dignified, and integrated with the surrounding architecture.',
      highlights: [
        'Serene devotional focal point',
        'Warm backlit ambience',
        'Light, uncluttered detailing'
      ],
      materials: [
        'Natural wood or stone tones',
        'Carved accent panels',
        'Warm LED lighting'
      ],
      bestFor: ['Quiet corners', 'Family homes'],
      designTone: 'Calm, reverent, integrated',
      gallery: getGalleryImages('living-room', 'pooja-unit')
    }
  },
  wardrobe: {
    'openable-wardrobe': {
      title: 'Openable Wardrobe',
      shortLabel: 'OPENABLE WARDROBE',
      description:
        'Openable wardrobes rely on classic hinged shutters that offer full access to the interior and a familiar, grounded feel. The finish can be tailored from matte to veneer, while internal layouts are designed around daily routines. This style suits rooms with adequate clearance and clients who value ease of organization and a traditional opening experience. It delivers a timeless silhouette with plenty of flexibility for storage planning.',
      highlights: [
        'Full access hinged shutters',
        'Flexible internal layouts',
        'Timeless wardrobe profile'
      ],
      materials: [
        'Engineered boards',
        'Hinged hardware systems',
        'Laminate or veneer finish'
      ],
      bestFor: ['Spacious bedrooms', 'Classic interiors'],
      designTone: 'Grounded, familiar, versatile',
      gallery: getGalleryImages('wardrobe', 'openable-wardrobe')
    },
    'sliding-wardrobe': {
      title: 'Sliding Wardrobe',
      shortLabel: 'SLIDING WARDROBE',
      description:
        'Sliding wardrobes are defined by wide, clean panels that glide smoothly and save floor space. The finish reads modern and streamlined, ideal for compact bedrooms or minimalist interiors. With fewer visible breaks, the wardrobe becomes a calm wall plane that can be customized with mirrors, glass, or muted tones. Clients choose it for space efficiency, refined lines, and a quiet, contemporary presence.',
      highlights: [
        'Space saving sliding panels',
        'Clean wall like appearance',
        'Customizable panel finishes'
      ],
      materials: [
        'Aluminum track systems',
        'Glass or laminate panels',
        'Engineered core boards'
      ],
      bestFor: ['Compact rooms', 'Minimal interiors'],
      designTone: 'Clean, linear, modern',
      gallery: getGalleryImages('wardrobe', 'sliding-wardrobe')
    },
    'walk-in-closet': {
      title: 'Walk-in Closet',
      shortLabel: 'WALK-IN CLOSET',
      description:
        'Walk in closets create a boutique experience at home, with open shelving, drawers, and hanging zones arranged by category. The finish is typically warm and understated, allowing garments and accessories to feel curated rather than hidden. Lighting, mirrors, and a small vanity can be integrated for daily routines. This option suits clients who want luxury organization, generous storage, and a space that feels personal and composed.',
      highlights: [
        'Boutique style organization',
        'Open display and storage zones',
        'Integrated lighting and mirrors'
      ],
      materials: [
        'Open shelving systems',
        'Drawer modules',
        'Soft close hardware'
      ],
      bestFor: ['Large master suites', 'Luxury homes'],
      designTone: 'Curated, open, personal',
      gallery: getGalleryImages('wardrobe', 'walk-in-closet')
    },
    'pu-wardrobe': {
      title: 'PU Wardrobe',
      shortLabel: 'PU WARDROBE',
      description:
        'PU wardrobes feature a painted polyurethane finish that looks seamless and precise, with color depth and a smooth surface. The feel is polished and modern, making it ideal for clean, architectural lines and custom color palettes. It is chosen by clients who want a refined, bespoke look without visible grain. With the right substrate and edge detailing, it stays durable and elegant for everyday use.',
      highlights: [
        'Seamless painted surface',
        'Custom color flexibility',
        'Refined, modern appearance'
      ],
      materials: [
        'Polyurethane paint finish',
        'MDF or engineered cores',
        'Protective seal coats'
      ],
      bestFor: ['Custom color schemes', 'Modern bedrooms'],
      designTone: 'Polished, precise, bespoke',
      gallery: getGalleryImages('wardrobe', 'pu-wardrobe')
    },
    'profile-wardrobe': {
      title: 'Profile Wardrobe',
      shortLabel: 'PROFILE WARDROBE',
      description:
        'Profile wardrobes use slim aluminum profiles to frame glass, laminate, or textured inserts, creating crisp geometry and a lightweight appearance. The finish feels contemporary and technical, with fine lines that suit modern bedrooms. It is favored for its visual lightness, especially in rooms that need a refined, airy feel. Clients choose it to combine structure with transparency and a sophisticated, linear rhythm.',
      highlights: [
        'Slim profile framing',
        'Lightweight visual geometry',
        'Modern linear detailing'
      ],
      materials: [
        'Aluminum profiles',
        'Glass or laminate inserts',
        'Precision hardware'
      ],
      bestFor: ['Modern bedrooms', 'Minimal spaces'],
      designTone: 'Light, precise, contemporary',
      gallery: getGalleryImages('wardrobe', 'profile-wardrobe')
    },
    'rattan-wardrobe': {
      title: 'Rattan Wardrobe',
      shortLabel: 'RATTAN WARDROBE',
      description:
        'Rattan wardrobes bring a natural woven texture that softens large surfaces and adds handcrafted warmth. The finish breathes visually, pairing well with wood tones, linen textiles, and relaxed interiors. It is selected for homes that want a tactile, artisanal feel without heavy ornamentation. The woven panels introduce subtle pattern and depth, making the wardrobe feel calm, organic, and distinctly personal.',
      highlights: [
        'Natural woven texture',
        'Soft, breathable appearance',
        'Artisanal surface detail'
      ],
      materials: [
        'Rattan or cane panels',
        'Solid wood frames',
        'Protective clear coats'
      ],
      bestFor: ['Warm interiors', 'Relaxed bedrooms'],
      designTone: 'Organic, tactile, relaxed',
      gallery: getGalleryImages('wardrobe', 'rattan-wardrobe')
    }
  }
};

export const getService = (category, serviceSlug) =>
  servicesData[category]?.[serviceSlug];
