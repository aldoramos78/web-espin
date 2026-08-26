import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.espinlabs.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // --- MONEY PAGES (SERVICIOS CORE) ---
    {
      url: `${baseUrl}/desarrollo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/agentes`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ecosistema`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/identidad`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // --- FILOSOFÍA Y CONTEXTO ---
    {
      url: `${baseUrl}/manifiesto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
    // Páginas legales excluidas intencionadamente para optimizar el crawl budget.
  ]
}
