import { MetadataRoute } from 'next'
import articlesData from './articles.json'

export default function sitemap(): MetadataRoute.Sitemap {
    const articles = articlesData.articles.map((article) => ({
        url: `https://tradingkr.com/news/${article.slug}`,
        lastModified: new Date(article.date),
    }))

    return [
        {
            url: 'https://tradingkr.com',
            lastModified: new Date(),
        },
        {
            url: 'https://tradingkr.com/news',
            lastModified: new Date(),
        },
        ...articles,
    ]
}

