import { getAllPosts } from '@/lib/blog';

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}