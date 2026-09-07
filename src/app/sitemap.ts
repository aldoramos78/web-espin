import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.espinlabs.com';
  const lastModified = new Date();
  
  const routes: Array<{ path: string, enPath?: string, priority: number, freq: "weekly" | "monthly" | "always" | "hourly" | "daily" | "yearly" | "never" }> = [
    { path: '', priority: 1.0, freq: 'weekly' },
    { path: '/desarrollo', enPath: '/development', priority: 0.9, freq: 'monthly' },
    { path: '/agentes', enPath: '/agents', priority: 0.9, freq: 'monthly' },
    { path: '/ecosistema', enPath: '/ecosystem', priority: 0.9, freq: 'monthly' },
    { path: '/identidad', enPath: '/branding', priority: 0.9, freq: 'monthly' },
    { path: '/manifiesto', enPath: '/manifesto', priority: 0.8, freq: 'monthly' }
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach(route => {
    // ES Entry
    sitemapEntries.push({
      url: `${baseUrl}${route.path ? '/es' + route.path : '/es'}`,
      lastModified,
      changeFrequency: route.freq,
      priority: route.priority,
    });
    // EN Entry
    sitemapEntries.push({
      url: `${baseUrl}${route.enPath ? '/en' + route.enPath : '/en'}`,
      lastModified,
      changeFrequency: route.freq,
      priority: route.priority,
    });
  });
  
  return sitemapEntries;
}
