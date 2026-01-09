
const imageModules = import.meta.glob('../../assets/images/projects/**/*.{jpeg,jpg,png}', {
  eager: true,
  import: 'default'
});

const categoryMap = {
  residential: 'Residential',
  commercial: 'Commercial',
  retail: 'Retail',
  institutional: 'Institutional',
  museum: "Museum",
  medical: 'Medical College'
};

const toTitle = (slug) =>
  slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

export const projects = Object.entries(imageModules).map(([path, url], idx) => {
  const parts = path.split('/projects/')[1].split('/');
  const [catSlug, maybeSub] = parts;
  const category = categoryMap[catSlug] || toTitle(catSlug);
  const subCategory = parts.length === 3 ? toTitle(maybeSub) : undefined;
  const title = subCategory ? `${category} • ${subCategory}` : `${category} Project`;
  return {
    id: `local-${idx}`,
    title,
    category,
    subCategory,
    location: category,
    image: url,
    year: '2024',
    description: `${title} completed with attention to detail.`
  };
});
