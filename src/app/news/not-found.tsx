import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
      <p className="mb-4">Sorry, the article youre looking for doesnt exist.</p>
      <Link href="/news" className="text-blue-500 hover:underline">
        Back to News
      </Link>
    </div>
  )
}

