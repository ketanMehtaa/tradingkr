import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import articlesData from '../articles.json';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articlesData.articles.find((a) => a.slug === params.slug);
  if (!article) {
    return {};
  }
  return {
    title: article.title,
    description: article.summary,
  };
}

// export default function ArticlePage({ params }: { params: { slug: string } }) {
//   const article = articlesData.articles.find(a => a.slug === params.slug)

//   if (!article) {
//     notFound()
//   }

//   return (
//     <article className="prose lg:prose-xl mx-auto">
//       <h1>{article.title}</h1>
//       <div className="flex items-center text-sm text-gray-500 mb-4">
//         <span>{article.date}</span>
//         <span className="mx-2">|</span>
//         <span>{article.author}</span>
//       </div>
//       <Image
//         src={article.image}
//         alt={article.title}
//         width={800}
//         height={600}
//         className="w-full h-64 object-cover mb-4"
//       />
//       <div dangerouslySetInnerHTML={{ __html: article.content }} />
//       <div className="mt-4">
//         {article.categories.map((category) => (
//           <span key={category} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//             {category}
//           </span>
//         ))}
//       </div>
//     </article>
//   )
// }


export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articlesData.articles.find(a => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <article className="prose lg:prose-xl mx-auto bg-white p-5">
      <h1>{article.title}</h1>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <span>{article.date}</span>
        <span className="mx-2">|</span>
        <span>{article.author}</span>
      </div>
      
      <Image
        src={article.image}
        alt={article.title}
        width={800}
        height={800}
        className="w-full h-64 object-center mb-4"
      />
      
      <div dangerouslySetInnerHTML={{ __html: article.content }} />

      {/* Steps to check IPO allotment status */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Steps to Check IPO Allotment Status</h2>
        
        {/* KFin Tech Steps */}
        <div className="mb-6">
          <h3 className="text-xl font-medium">1. Check Allotment Status on KFin Technologies</h3>
          <ol className="list-decimal pl-6">
            {article?.steps_to_check_allotment?.kfin_tech.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <p><a href={article?.links?.kfin_tech} target="_blank" className="text-blue-600 underline">Visit KFin Tech</a></p>
        </div>
        
        {/* NSE Steps */}
        <div className="mb-6">
          <h3 className="text-xl font-medium">2. Check Allotment Status on NSE</h3>
          <ol className="list-decimal pl-6">
            {article?.steps_to_check_allotment?.nse.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <p><a href={article?.links?.nse} target="_blank" className="text-blue-600 underline">Visit NSE</a></p>
        </div>
        
        {/* BSE Steps */}
        <div className="mb-6">
          <h3 className="text-xl font-medium">3. Check Allotment Status on BSE</h3>
          <ol className="list-decimal pl-6">
            {article?.steps_to_check_allotment?.bse.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <p><a href={article?.links?.bse} target="_blank" className="text-blue-600 underline">Visit BSE</a></p>
        </div>
      </div>

      {/* Latest GMP Section */}
      <div className="mt-8 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Latest GMP Information</h2>
        <p><strong>GMP Value:</strong> ₹{article?.latest_gmp?.gmp_value}</p>
        <p><strong>Expected Listing Gain:</strong> {article?.latest_gmp?.gmp_percent}</p>
        <p><strong>Listing Date:</strong> {article?.latest_gmp?.listing_date}</p>
      </div>

      <div className="mt-4">
        {article?.categories.map((category) => (
          <span key={category} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {category}
          </span>
        ))}
      </div>
    </article>
  )
}
