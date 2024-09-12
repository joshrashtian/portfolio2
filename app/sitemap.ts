import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jrtechscv.com',
      lastModified: new Date(),
    },
    {
        url: 'https://jrtechscv.com/journey',
        lastModified: new Date(),
    },
    {
        url: 'https://jrtechscv.com/projects',
        lastModified: new Date(),
    },
]
}