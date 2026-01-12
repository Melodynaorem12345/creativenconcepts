const baseSections = (items) =>
  items.map((item, index) => ({
    ...item,
    reverse: index % 2 === 1
  }));

export const servicesData = [
  {
    slug: 'modular-kitchen',
    hero: {
      title: 'Designed for Everyday Living',
      subtitle: 'Modular Kitchen',
      description:
        'Every modular kitchen is crafted as a balance of design, materials, ergonomics and lifestyle needs — tailored specifically for your home.'
    },
    sections: baseSections([
      {
        type: 'solid-wood',
        label: 'SOLID WOOD',
        title: 'Natura',
        description: 'Premium hardwood kitchens offering warmth, durability and timeless character.',
        details: [
          { label: 'Wood', value: 'Oak, Teak, Ash' },
          { label: 'Finish', value: 'Natural polish / matte' },
          { label: 'Best for', value: 'Luxury residences' }
        ],
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400'
      },
      {
        type: 'veneer',
        label: 'VENEER',
        title: 'Vento',
        description: 'Natural veneer surfaces bonded to engineered cores for stability and elegance.',
        details: [
          { label: 'Grain', value: 'Natural & book-matched' },
          { label: 'Finish', value: 'Matt / semi-gloss' },
          { label: 'Best for', value: 'Contemporary interiors' }
        ],
        image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1400'
      },
      {
        type: 'acrylic',
        label: 'ACRYLIC',
        title: 'Aura',
        description: 'High-gloss reflective surfaces for sleek, modern kitchen designs.',
        details: [
          { label: 'Surface', value: 'Scratch-resistant' },
          { label: 'Maintenance', value: 'Easy clean' },
          { label: 'Best for', value: 'Modern apartments' }
        ],
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400'
      },
      {
        type: 'laminate',
        label: 'LAMINATE',
        title: 'Linea',
        description: 'Highly durable laminates with endless textures and colour options.',
        details: [
          { label: 'Types', value: 'Matt, textured, high-gloss' },
          { label: 'Durability', value: 'High' },
          { label: 'Best for', value: 'Budget-friendly homes' }
        ],
        image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=1400'
      }
    ])
  },
  {
    slug: 'kitchen',
    hero: {
      title: 'Designed for Everyday Living',
      subtitle: 'Modular Kitchen',
      description:
        'Functional layouts, premium finishes, and smart storage that elevate the heart of your home.'
    },
    sections: baseSections([
      {
        type: 'layout',
        label: 'LAYOUTS',
        title: 'Ergo Flow',
        description: 'Optimized work triangles for effortless cooking and serving.',
        details: [
          { label: 'Types', value: 'L, U, Parallel, Island' },
          { label: 'Focus', value: 'Storage + workflow' },
          { label: 'Best for', value: 'All home sizes' }
        ],
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1400'
      },
      {
        type: 'finishes',
        label: 'FINISHES',
        title: 'Signature Surfaces',
        description: 'Curated textures and tones matched to your lifestyle.',
        details: [
          { label: 'Options', value: 'Laminate, veneer, acrylic' },
          { label: 'Feel', value: 'Matte to high-gloss' },
          { label: 'Best for', value: 'Custom themes' }
        ],
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1400'
      },
      {
        type: 'hardware',
        label: 'HARDWARE',
        title: 'Soft Motion',
        description: 'Silent, smooth hardware for daily convenience.',
        details: [
          { label: 'Brands', value: 'Premium fittings' },
          { label: 'Features', value: 'Soft-close, pull-outs' },
          { label: 'Best for', value: 'High-use kitchens' }
        ],
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1400'
      }
    ])
  },
  {
    slug: 'wardrobe',
    hero: {
      title: 'Storage with Style',
      subtitle: 'Custom Wardrobes',
      description:
        'Tailor-made wardrobes designed around your lifestyle, with elegant finishes and intelligent storage.'
    },
    sections: baseSections([
      {
        type: 'hinged',
        label: 'HINGED',
        title: 'Classic Craft',
        description: 'Timeless doors with premium hinges and clean detailing.',
        details: [
          { label: 'Style', value: 'Classic to modern' },
          { label: 'Hardware', value: 'Soft-close' },
          { label: 'Best for', value: 'Spacious rooms' }
        ],
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1400'
      },
      {
        type: 'sliding',
        label: 'SLIDING',
        title: 'Glide',
        description: 'Space-saving doors with refined profiles and smooth tracks.',
        details: [
          { label: 'System', value: 'Soft glide' },
          { label: 'Finish', value: 'Mirror / matte' },
          { label: 'Best for', value: 'Compact rooms' }
        ],
        image: 'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=1400'
      },
      {
        type: 'walk-in',
        label: 'WALK-IN',
        title: 'Gallery',
        description: 'Open plans with spotlighted shelves and curated storage.',
        details: [
          { label: 'Storage', value: 'Drawers, hangers, shelves' },
          { label: 'Lighting', value: 'Integrated LEDs' },
          { label: 'Best for', value: 'Luxury suites' }
        ],
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1400'
      }
    ])
  },
  {
    slug: 'living-room',
    hero: {
      title: 'Spaces that Welcome',
      subtitle: 'Living Room',
      description:
        'Living rooms that blend comfort, display, and functionality with architectural precision.'
    },
    sections: baseSections([
      {
        type: 'tv',
        label: 'TV WALL',
        title: 'Focus',
        description: 'Statement panels and concealed storage to anchor your lounge.',
        details: [
          { label: 'Finish', value: 'Wood, stone, matte' },
          { label: 'Storage', value: 'Hidden + open' },
          { label: 'Best for', value: 'Modern homes' }
        ],
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400'
      },
      {
        type: 'display',
        label: 'DISPLAY',
        title: 'Curation',
        description: 'Showcase shelves and lighting that elevate your collections.',
        details: [
          { label: 'Shelving', value: 'Glass + wood' },
          { label: 'Lighting', value: 'Warm ambient' },
          { label: 'Best for', value: 'Feature walls' }
        ],
        image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1400'
      },
      {
        type: 'seating',
        label: 'SEATING',
        title: 'Ease',
        description: 'Layouts that encourage conversation and flow.',
        details: [
          { label: 'Planning', value: 'Zones + circulation' },
          { label: 'Materials', value: 'Performance fabrics' },
          { label: 'Best for', value: 'Family spaces' }
        ],
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1400'
      }
    ])
  },
  {
    slug: 'tv-console',
    hero: {
      title: 'Clean Entertainment Walls',
      subtitle: 'TV Console',
      description:
        'Architectural consoles that hide clutter and frame your display with elegance.'
    },
    sections: baseSections([
      {
        type: 'panel',
        label: 'PANEL',
        title: 'Slate',
        description: 'Layered finishes to create a refined media backdrop.',
        details: [
          { label: 'Material', value: 'Wood, stone, laminate' },
          { label: 'Lighting', value: 'Backlit options' },
          { label: 'Best for', value: 'Contemporary homes' }
        ],
        image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=1400'
      },
      {
        type: 'storage',
        label: 'STORAGE',
        title: 'Conceal',
        description: 'Drawers and cabinets to keep devices out of sight.',
        details: [
          { label: 'Cable', value: 'Hidden routing' },
          { label: 'Access', value: 'Ventilated bays' },
          { label: 'Best for', value: 'Smart setups' }
        ],
        image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1400'
      }
    ])
  },
  {
    slug: 'crockery-unit',
    hero: {
      title: 'Display with Purpose',
      subtitle: 'Crockery Unit',
      description:
        'Elegant storage that blends display, dining, and bar functionality.'
    },
    sections: baseSections([
      {
        type: 'display',
        label: 'DISPLAY',
        title: 'Showcase',
        description: 'Glass fronts and internal lighting for premium presentation.',
        details: [
          { label: 'Doors', value: 'Clear or fluted glass' },
          { label: 'Lighting', value: 'Warm LEDs' },
          { label: 'Best for', value: 'Dining zones' }
        ],
        image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1400'
      },
      {
        type: 'storage',
        label: 'STORAGE',
        title: 'Order',
        description: 'Balanced closed and open storage for everyday ease.',
        details: [
          { label: 'Shelving', value: 'Adjustable' },
          { label: 'Hardware', value: 'Soft close' },
          { label: 'Best for', value: 'Compact homes' }
        ],
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1400'
      }
    ])
  },
  {
    slug: 'foyer',
    hero: {
      title: 'A Warm First Impression',
      subtitle: 'Foyer',
      description:
        'Entry zones designed with smart storage, seating, and layered lighting.'
    },
    sections: baseSections([
      {
        type: 'storage',
        label: 'STORAGE',
        title: 'Welcome',
        description: 'Hidden compartments for shoes, bags, and daily essentials.',
        details: [
          { label: 'Storage', value: 'Concealed cabinets' },
          { label: 'Seating', value: 'Integrated bench' },
          { label: 'Best for', value: 'Urban homes' }
        ],
        image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1400'
      },
      {
        type: 'decor',
        label: 'DECOR',
        title: 'Signature',
        description: 'Mirrors, accents, and lighting that set the tone.',
        details: [
          { label: 'Lighting', value: 'Warm ambient' },
          { label: 'Accents', value: 'Stone + wood' },
          { label: 'Best for', value: 'Feature entries' }
        ],
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1400'
      }
    ])
  },
  {
    slug: 'pooja-room',
    hero: {
      title: 'Sacred, Serene Spaces',
      subtitle: 'Pooja Room',
      description:
        'Peaceful designs that honor tradition while feeling light and modern.'
    },
    sections: baseSections([
      {
        type: 'material',
        label: 'MATERIALS',
        title: 'Calm',
        description: 'Natural finishes and warm lighting for meditative ambience.',
        details: [
          { label: 'Finish', value: 'Stone, wood, brass' },
          { label: 'Lighting', value: 'Soft glow' },
          { label: 'Best for', value: 'Quiet corners' }
        ],
        image: 'https://images.unsplash.com/photo-1603566233486-77864819d9b0?w=1400'
      }
    ])
  },
  {
    slug: 'vanity',
    hero: {
      title: 'Elevated Daily Rituals',
      subtitle: 'Vanity',
      description:
        'Vanity units crafted with moisture-resistant materials and refined profiles.'
    },
    sections: baseSections([
      {
        type: 'surface',
        label: 'SURFACE',
        title: 'Clean Lines',
        description: 'Water-safe finishes that stay pristine and polished.',
        details: [
          { label: 'Top', value: 'Stone or quartz' },
          { label: 'Finish', value: 'Matte or satin' },
          { label: 'Best for', value: 'Daily use' }
        ],
        image: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?w=1400'
      }
    ])
  },
  {
    slug: 'commercial-projects',
    hero: {
      title: 'Spaces for Performance',
      subtitle: 'Commercial',
      description:
        'Workspaces engineered for flow, productivity, and brand presence.'
    },
    sections: baseSections([
      {
        type: 'workstations',
        label: 'WORKSTATIONS',
        title: 'Focus Zones',
        description: 'Ergonomic layouts that encourage collaboration and focus.',
        details: [
          { label: 'Planning', value: 'Open + agile' },
          { label: 'Lighting', value: 'Task-focused' },
          { label: 'Best for', value: 'Teams' }
        ],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400'
      }
    ])
  },
  {
    slug: 'retail',
    hero: {
      title: 'Retail that Resonates',
      subtitle: 'Retail',
      description:
        'Immersive retail environments designed to guide, engage, and convert.'
    },
    sections: baseSections([
      {
        type: 'display',
        label: 'DISPLAY',
        title: 'Merchandise',
        description: 'Fixtures and lighting tailored to highlight products.',
        details: [
          { label: 'Flow', value: 'Guided pathways' },
          { label: 'Lighting', value: 'Accent focus' },
          { label: 'Best for', value: 'Brand identity' }
        ],
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400'
      }
    ])
  },
  {
    slug: 'museums',
    hero: {
      title: 'Cultural Storytelling',
      subtitle: 'Museums',
      description:
        'Exhibition spaces designed to protect artifacts and elevate narratives.'
    },
    sections: baseSections([
      {
        type: 'exhibit',
        label: 'EXHIBIT',
        title: 'Narrative Flow',
        description: 'Layouts that guide visitors through immersive stories.',
        details: [
          { label: 'Lighting', value: 'Controlled, museum-grade' },
          { label: 'Materials', value: 'Conservation safe' },
          { label: 'Best for', value: 'Cultural centers' }
        ],
        image: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=1400'
      }
    ])
  },
  {
    slug: 'hospitals',
    hero: {
      title: 'Healing Environments',
      subtitle: 'Healthcare',
      description:
        'Efficient, calming interiors that prioritize hygiene and patient comfort.'
    },
    sections: baseSections([
      {
        type: 'planning',
        label: 'PLANNING',
        title: 'Care Flow',
        description: 'Functional zoning for staff efficiency and patient ease.',
        details: [
          { label: 'Materials', value: 'Antimicrobial surfaces' },
          { label: 'Lighting', value: 'Balanced + soft' },
          { label: 'Best for', value: 'Clinics + hospitals' }
        ],
        image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1400'
      }
    ])
  },
  {
    slug: 'medical-college',
    hero: {
      title: 'Learning with Precision',
      subtitle: 'Medical College',
      description:
        'Academic environments designed for clarity, focus, and modern infrastructure.'
    },
    sections: baseSections([
      {
        type: 'labs',
        label: 'LABS',
        title: 'Practice',
        description: 'Technical spaces optimized for training and safety.',
        details: [
          { label: 'Fit-out', value: 'Specialized equipment' },
          { label: 'Safety', value: 'Compliant layouts' },
          { label: 'Best for', value: 'Institutes' }
        ],
        image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1400'
      }
    ])
  },
  {
    slug: 'institutional',
    hero: {
      title: 'Built for Purpose',
      subtitle: 'Institutional',
      description:
        'Durable, easy-to-maintain spaces designed for public use.'
    },
    sections: baseSections([
      {
        type: 'public',
        label: 'PUBLIC',
        title: 'Flow',
        description: 'Spaces that manage movement and scale with ease.',
        details: [
          { label: 'Materials', value: 'Heavy-duty finishes' },
          { label: 'Layout', value: 'Clear navigation' },
          { label: 'Best for', value: 'Institutions' }
        ],
        image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=1400'
      }
    ])
  }
];
