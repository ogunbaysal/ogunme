import { getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import BlogPostClient from './blog-post-client';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}

