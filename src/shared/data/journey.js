
const journeyImageModules = import.meta.glob(
  '/src/assets/images/modular-journey/**/*.{jpg,jpeg,png,webp,avif,svg}',
  { eager: true, import: 'default' }
);


const journeyImages = Object.entries(journeyImageModules)
  .sort(([a], [b]) => {
    const getNumber = (path) =>
      Number(path.match(/(\d+)\.(jpg|jpeg|png|webp|avif|svg)$/i)?.[1] || 0);

    return getNumber(a) - getNumber(b);
  })
  .map(([, url]) => url);


export const journeySteps = [
  {
    id: 1,
    title: 'Visit Our Experience Studio',
    description: 'Discover curated kitchen and wardrobe setups, explore materials in person, and get inspired by real-life spaces before we begin.',
    image: journeyImages[0]
  },
  {
    id: 2,
    title: 'On-Site Consultation',
    description: 'We visit your space to take accurate measurements, understand your needs, and map functional requirements for a perfect fit.',
    image: journeyImages[1]
  },
  {
    id: 3,
    title: 'Material Selection',
    description: 'Choose from premium finishes, colors, and hardware. We help you compare options and pick what matches your style and usage.',
    image: journeyImages[2]
  },
  {
    id: 4,
    title: 'Design & Planning',
    description: 'We craft detailed layouts and 3D visuals, then refine them together so every storage, workflow, and finish is aligned.',
    image: journeyImages[3]
  },
  {
    id: 5,
    title: 'Quotation & Final Approval',
    description: 'You receive a transparent quotation and finalized drawings. Once approved, we lock specs and schedule production.',
    image: journeyImages[4]
  },
  {
    id: 6,
    title: 'Precision Manufacturing',
    highlight: true,
    badge: 'IMOS Powered',
    description: 'After final approval, production begins using IMOS software to convert designs into machine-ready data. Our German-engineered machinery ensures millimetric precision.',
    image: journeyImages[5]
  },
  {
    id: 7,
    title: 'Site Preparation & Delivery',
    description: 'We coordinate readiness at site and deliver modules safely so installation can begin without delays.',
    image: journeyImages[6]
  },
  {
    id: 8,
    title: 'Professional Installation',
    description: 'Our trained team installs every component with care, ensuring precise alignment and a clean finish.',
    image: journeyImages[7]
  },
  {
    id: 9,
    title: 'Final Quality Check & Handover',
    description: 'We inspect fit, finish, and functionality before a detailed walkthrough and handover of your new space.',
    image: journeyImages[8]
  },
  {
    id: 10,
    title: 'Service & Usage Guidelines',
    description: 'We share care tips, warranty details, and maintenance guidance so your interiors stay pristine.',
    image: journeyImages[9]
  },
  {
    id: 11,
    title: 'Receipt & Documentation',
    description: 'You receive final documents, drawings, and warranty paperwork. We also provide a walkthrough and after-sales support to keep your experience exceptional.',
    image: journeyImages[10]
  }
];
