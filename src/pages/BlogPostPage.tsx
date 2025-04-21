import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import PostCard from '@/components/blog/PostCard';
import { CalendarIcon, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import blogData from '@/data/blogData';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  
  useEffect(() => {
    // Find the current post by slug
    const currentPost = blogData.allPosts.find(p => p.slug === slug);
    
    if (currentPost) {
      setPost(currentPost);
      
      // Find related posts (same category, excluding current post)
      const related = blogData.allPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
      
      setRelatedPosts(related);
    }
  }, [slug]);

  if (!post) {
    return (
      <Layout>
        <div className="blog-container py-16 text-center">
          <h1>Post not found</h1>
          <p className="mt-4">The article you're looking for doesn't exist or has been moved.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-12">
        {/* Post Header */}
        <header className="blog-container mb-12">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blog-cream/20 text-blog-brown dark:bg-primary/10 dark:text-primary">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-blog-brown dark:text-primary">
              {post.title}
            </h1>
            
            <div className="flex items-center text-foreground/70 mb-8">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <CalendarIcon size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-12">
              <img 
                src={post.coverImage || `https://source.unsplash.com/random/1200x800/?${post.category.toLowerCase()}`}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Post Content */}
        <div className="blog-container">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="blog-container mt-16">
            <h2 className="text-2xl font-bold mb-8 text-blog-brown dark:text-primary">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <PostCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
};

export default BlogPostPage;
