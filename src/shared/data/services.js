
const imageModules = import.meta.glob(
  '/src/assets/images/services/**/*.{jpg,jpeg,png,webp,avif,svg}',
  { eager: true, import: 'default' }
);

const getLocalImages = (category, slug) => {
  const prefix = `/src/assets/images/services/${category}/${slug}/`;
  return Object.entries(imageModules)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, src]) => src);
};

const getLocalImagesBySlug = (slug) => {
  const needle = `/src/assets/images/services/`;
  const slugToken = `/${slug}/`;
  return Object.entries(imageModules)
    .filter(([path]) => path.includes(needle) && path.includes(slugToken))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, src]) => src);
};

const serviceImageAliases = {
  kitchen: { category: 'kitchen', slug: 'acrylic-kitchen' },
  'living-room': { category: 'living-room', slug: 'tv-unit' },
  'tv-console': { category: 'living-room', slug: 'tv-unit' },
  foyer: { category: 'living-room', slug: 'foyer-unit' },
  'pooja-room': { category: 'living-room', slug: 'pooja-unit' },
  wardrobe: { category: 'wardrobe', slug: 'sliding-wardrobe' }
};

const getImagesForServiceId = (id) => {
  const alias = serviceImageAliases[id];
  if (alias) {
    return getLocalImages(alias.category, alias.slug);
  }
  return getLocalImagesBySlug(id);
};

const withLocalImages = (id, fallback) => {
  const images = getImagesForServiceId(id);
  return {
    ...fallback,
    bannerImage: images[0] || null,
    gallery: images
  };
};

const rawServices = [
  {
    id: 'kitchen',
    title: 'Modular Kitchen',
    category: 'Residential',
    shortDescription: 'Functional, elegant and intelligent cooking spaces.',
    description: 'Our kitchens are designed with precision, blending ergonomics with aesthetic appeal. From island layouts to straight-line designs, we use high-end materials that withstand the test of time and heat. We utilize German-engineered hardware to ensure smooth operation of every drawer and cabinet.',
    bannerImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556909212-d5b604ad9290?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'living-room',
    title: 'Living Room Interiors',
    category: 'Residential',
    shortDescription: 'The heart of your home, curated for comfort.',
    description: 'Transform your living space into a haven of luxury. We focus on bespoke furniture, sophisticated lighting, and a palette that reflects your personal style while maintaining a high-end architectural feel. Our designs prioritize spatial flow and social interaction.',
    bannerImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'tv-console',
    title: 'TV Unit & Media Wall',
    category: 'Residential',
    shortDescription: 'Elegant entertainment hubs with hidden intelligence.',
    description: 'Our TV consoles are more than just furniture; they are integrated media hubs designed to hide cables while providing a sleek, architectural focal point in your living area. Each unit is customized to fit your technology requirements and storage needs.',
    bannerImage: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
  id: 'crockery-unit',
  title: 'Crockery & Bar Units',
  category: 'Residential',
  shortDescription:'Sophisticated storage and welcoming entry solutions designed as architectural statements.',
  description: 'Our Crockery, Bar, and Foyer units are designed as seamless architectural elements that elevate everyday living. From elegant glass-fronted crockery displays and integrated bar units to thoughtfully planned foyer storage and seating, we balance aesthetics with functionality. Ambient lighting, premium finishes, and high-performance hardware ensure durability, safety, and refined visual appeal throughout your home.',
  bannerImage: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=2000',
  gallery: [
    'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
  ]
  },
  {
    id: 'foyer',
    title: 'Foyer Units',
    category: 'Residential',
    shortDescription: 'Warm, organized entry zones that set the tone for your home.',
    description: 'We design foyers with smart storage, thoughtful seating, and layered lighting that creates an inviting first impression. Materials, finishes, and accents are curated to reflect your home’s personality while staying practical for daily use.',
    bannerImage: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'pooja-room',
    title: 'Pooja Room',
    category: 'Residential',
    shortDescription: 'Sacred spaces crafted for tranquility.',
    description: 'Blending tradition with modern aesthetics, our Pooja room designs incorporate natural stones, CNC-cut motifs, and warm lighting to foster a serene environment for reflection. We respect traditional Vastu principles while maintaining a contemporary architectural language.',
    bannerImage: 'https://images.unsplash.com/photo-1603566233486-77864819d9b0?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1603566233486-77864819d9b0?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'vanity',
    title: 'Vanity Units',
    category: 'Residential',
    shortDescription: 'Spa-like experiences in your private quarters.',
    description: 'Customized bathroom vanities using water-resistant materials, marble tops, and premium finishes that turn everyday routines into moments of luxury. We focus on maximizing storage while maintaining a clean, minimalist silhouette.',
    bannerImage: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'wardrobe',
    title: 'Wardrobe Systems',
    category: 'Residential',
    shortDescription: 'Intelligent storage for a curated lifestyle.',
    description: 'From floor-to-ceiling closets to sophisticated walk-in wardrobes, we maximize every inch of space with modular flexibility and high-end finishes. Integrated lighting and specialized accessories ensure your collection is always organized.',
    bannerImage: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595514535215-961f75355a29?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'commercial-projects',
    title: 'Corporate Office Interiors',
    category: 'Commercial',
    shortDescription: 'Scaling architectural excellence for high-performance businesses.',
    description: 'We design commercial infrastructures that balance employee wellbeing with brand identity, incorporating agile workstations and sophisticated common areas. Our approach increases productivity through better lighting and ergonomic flow.',
    bannerImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
    gallery: ['https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'retail',
    title: 'Retail Interiors',
    category: 'Commercial',
    shortDescription: 'Dynamic shopping experiences crafted to engage.',
    description: 'Strategic spatial design that guides the consumer journey, highlighting products through expert lighting and structural narratives. We create immersive environments that strengthen brand presence.',
    bannerImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000',
    gallery: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800']
  },
  {
    id: 'museums',
    title: 'Museum & Cultural Spaces',
    category: 'Specialized',
    shortDescription: 'Narrative-driven spaces for history and culture.',
    description: 'Exhibition design that respects artifacts while providing an immersive, educational experience for visitors of all ages. We handle specialized lighting and climate control requirements for sensitive displays.',
    bannerImage: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'hospitals',
    title: 'Healthcare Interiors',
    category: 'Specialized',
    shortDescription: 'Healing environments with ergonomic efficiency.',
    description: 'High-performance interiors for hospitals and clinics that prioritize patient recovery, hygiene, and medical staff workflow. We use medical-grade materials that meet stringent safety standards without compromising on visual comfort.',
    bannerImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
    ]
  }
];

export const services = rawServices.map((service) =>
  withLocalImages(service.id, service)
);
