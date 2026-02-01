import { fashionEras } from '@/lib/fashionEras';

export default function sitemap() {
  const baseUrl = 'https://stylechronicle.holoduke.nl';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/eras`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Dynamic era pages
  const eraPages = fashionEras.map((era) => ({
    url: `${baseUrl}/era/${era.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...eraPages];
}
