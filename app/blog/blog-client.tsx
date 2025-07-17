'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';
import ThemeToggle from '@/app/components/ThemeToggle';

interface BlogClientProps {
  posts: BlogPost[];
}

export default function BlogClient({ posts }: BlogClientProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="px-4 sm:px-6 h-14 flex justify-between items-center bg-accent border border-border rounded-2xl max-w-3xl mx-auto mt-4">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center text-background font-bold text-sm">
            OB
          </div>
          <span className="text-lg sm:text-xl font-medium hidden sm:block">Ogün Baysal</span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-3">
          <Link href="/" className="hover:text-muted transition-colors px-2 sm:px-3 py-2 text-sm sm:text-base">
            Home
          </Link>
          <Link href="/blog" className="text-foreground px-2 sm:px-3 py-2 text-sm sm:text-base">
            Blog
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      {/* Blog Header */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Blog</h1>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto px-4">
            Thoughts on programming, technology, and software development
          </p>
        </motion.div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-accent/50 border border-border rounded-xl p-4 sm:p-6 md:p-8 hover:bg-accent/70 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-6">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      5 min read
                    </div>
                  </div>
                  
                  <h2 className="text-xl sm:text-2xl font-bold mb-3 hover:text-muted transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-muted mb-4 leading-relaxed text-sm sm:text-base">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-3 py-1 bg-accent text-foreground rounded-full text-xs sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 bg-foreground text-background px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-muted transition-colors font-medium text-sm sm:text-base w-full md:w-auto justify-center"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted text-xl">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}