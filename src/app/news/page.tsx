import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import articlesData from './articles.json';

export const metadata: Metadata = {
  title: 'Latest Share Market News',
  description: 'Stay updated with the latest news from the share market',
};

export default function NewsPage() {
  const { articles } = articlesData;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.id} href={`/news/${article.slug}`} className="block hover:underline">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <Image
                src={article.image}
                alt={article.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-2">
                  {article.date} | {article.author}
                </p>
                <p className="text-sm">{article.summary}</p>
                <div className="mt-2">
                  {article.categories.map((category) => (
                    <span
                      key={category}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
