import { MetadataRoute } from 'next';
import { POSTS } from '@/lib/posts-data';
import { BLUEPRINTS } from '@/lib/blueprints-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.caiocoach.com';

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/coaching`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/certification`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/community`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/retreat`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/blueprints`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
  ];

  const blogPages = POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blueprintPages = BLUEPRINTS.map((bp) => ({
    url: `${baseUrl}/blueprints/${bp.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages, ...blueprintPages];
}
