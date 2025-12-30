import { MetadataRoute } from 'next'
import { products } from '@/data/products'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://rheingold-medica.com'
    const currentDate = new Date()

    // Static pages
    const staticPages = [
        { url: baseUrl, changeFrequency: 'daily' as const, priority: 1 },
        { url: `${baseUrl}/products`, changeFrequency: 'daily' as const, priority: 0.9 },
        { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/partners`, changeFrequency: 'weekly' as const, priority: 0.8 },
        { url: `${baseUrl}/docs`, changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${baseUrl}/faq`, changeFrequency: 'weekly' as const, priority: 0.7 },
        { url: `${baseUrl}/blog`, changeFrequency: 'weekly' as const, priority: 0.7 },
        { url: `${baseUrl}/privacy`, changeFrequency: 'yearly' as const, priority: 0.3 },
        { url: `${baseUrl}/terms`, changeFrequency: 'yearly' as const, priority: 0.3 },
        { url: `${baseUrl}/cookies`, changeFrequency: 'yearly' as const, priority: 0.3 },
        { url: `${baseUrl}/imprint`, changeFrequency: 'yearly' as const, priority: 0.3 },
    ].map((page) => ({
        ...page,
        lastModified: currentDate,
    }))

    // Product pages
    const productPages = products.map((product) => ({
        url: `${baseUrl}/products/${product.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    // Blog posts (placeholder slugs)
    const blogPosts = [
        'gmp-compliance-egypt',
        'german-pharmaceuticals-egypt-guide',
        'safe-sourcing-guide-pharmacies',
        'eda-updates-2025',
        'nutraceuticals-mena-market-growth',
        'quality-assurance-supply-chain',
    ].map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...staticPages, ...productPages, ...blogPosts]
}
