import { MetadataRoute } from 'next'
import articlesData from './news/articles.json'

export default function sitemap(): MetadataRoute.Sitemap {
    // Get all article URLs
    const articles = articlesData.articles.map((article) => ({
        url: `https://tradingkr.com/news/${article.slug}`,
        lastModified: new Date(article.date),
    }))

    // Add all static pages
    const staticPages = [
        {
            url: 'https://tradingkr.com',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://tradingkr.com/news',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        // {
        //     url: 'https://tradingkr.com/about',
        //     lastModified: new Date(),
        //     changeFrequency: 'monthly',
        //     priority: 0.5,
        // },
        // Add other static pages here
    ]

    return [...staticPages, ...articles]
}