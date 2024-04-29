import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://the-folio.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://the-folio.vercel.app/portfolio',
      lastModified: new Date(),
    },
    {
      url: 'https://the-folio.vercel.app/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://the-folio.vercel.app/services',
      lastModified: new Date(),
    },
    {
      url: 'https://the-folio.vercel.app/faq',
      lastModified: new Date(),
    },
  ];
}
