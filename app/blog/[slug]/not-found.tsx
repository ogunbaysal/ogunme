import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-4">Blog Post Not Found</h2>
        <p className="text-zinc-400 mb-8">
          The blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link 
          href="/blog"
          className="bg-white text-black px-6 py-3 rounded-lg hover:bg-zinc-200 transition-colors font-medium"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  );
}