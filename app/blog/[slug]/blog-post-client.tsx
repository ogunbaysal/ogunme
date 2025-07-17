'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';
import ThemeToggle from '@/app/components/ThemeToggle';

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const renderContent = (content: string) => {
    // Split content into paragraphs and code blocks
    const lines = content.split('\n');
    const elements: React.ReactElement[] = [];
    let currentElement = '';
    let inCodeBlock = false;
    let elementIndex = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          // End of code block
          elements.push(
            <pre key={elementIndex++} className="bg-accent p-3 sm:p-4 rounded-lg overflow-x-auto my-3 sm:my-4">
              <code className="text-xs sm:text-sm text-muted">{currentElement.trim()}</code>
            </pre>
          );
          currentElement = '';
          inCodeBlock = false;
        } else {
          // Start of code block
          if (currentElement.trim()) {
            elements.push(
              <div key={elementIndex++} className="prose prose-invert max-w-none">
                {currentElement.split('\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('# ')) {
                    return <h1 key={idx} className="text-2xl sm:text-3xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">{paragraph.substring(2)}</h1>;
                  } else if (paragraph.startsWith('## ')) {
                    return <h2 key={idx} className="text-xl sm:text-2xl font-bold mt-4 sm:mt-6 mb-2 sm:mb-3">{paragraph.substring(3)}</h2>;
                  } else if (paragraph.startsWith('### ')) {
                    return <h3 key={idx} className="text-lg sm:text-xl font-bold mt-3 sm:mt-4 mb-2">{paragraph.substring(4)}</h3>;
                  } else if (paragraph.trim() && !paragraph.startsWith('```')) {
                    return <p key={idx} className="mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{paragraph}</p>;
                  }
                  return null;
                })}
              </div>
            );
          }
          currentElement = '';
          inCodeBlock = true;
        }
      } else {
        currentElement += line + '\n';
      }
    }

    // Handle remaining content
    if (currentElement.trim()) {
      if (inCodeBlock) {
        elements.push(
          <pre key={elementIndex++} className="bg-accent p-3 sm:p-4 rounded-lg overflow-x-auto my-3 sm:my-4">
            <code className="text-xs sm:text-sm text-muted">{currentElement.trim()}</code>
          </pre>
        );
      } else {
        elements.push(
          <div key={elementIndex++} className="prose prose-invert max-w-none">
            {currentElement.split('\n').map((paragraph, idx) => {
              if (paragraph.startsWith('# ')) {
                return <h1 key={idx} className="text-2xl sm:text-3xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">{paragraph.substring(2)}</h1>;
              } else if (paragraph.startsWith('## ')) {
                return <h2 key={idx} className="text-xl sm:text-2xl font-bold mt-4 sm:mt-6 mb-2 sm:mb-3">{paragraph.substring(3)}</h2>;
              } else if (paragraph.startsWith('### ')) {
                return <h3 key={idx} className="text-lg sm:text-xl font-bold mt-3 sm:mt-4 mb-2">{paragraph.substring(4)}</h3>;
              } else if (paragraph.trim() && !paragraph.startsWith('```')) {
                return <p key={idx} className="mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{paragraph}</p>;
              }
              return null;
            })}
          </div>
        );
      }
    }

    return elements;
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
          <Link href="/blog" className="hover:text-muted transition-colors px-2 sm:px-3 py-2 text-sm sm:text-base">
            Blog
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      {/* Blog Post Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Post Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                5 min read
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-lg sm:text-xl text-muted mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 bg-accent text-foreground rounded-full text-xs sm:text-sm"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Post Content */}
          <article className="prose prose-invert prose-base sm:prose-lg max-w-none">
            <div className="text-muted leading-relaxed">
              {renderContent(post.content)}
            </div>
          </article>

          {/* Back to Blog */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-foreground text-background px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-muted transition-colors font-medium text-sm sm:text-base"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}