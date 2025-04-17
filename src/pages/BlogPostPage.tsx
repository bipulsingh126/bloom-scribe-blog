
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
        <header className="blog-container mb-8">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="mb-6">{post.title}</h1>
          
          <div className="flex items-center text-foreground/70 mb-8">
            <div className="flex items-center">
              <User size={16} className="mr-1" />
              <span>{post.author}</span>
            </div>
            <span className="mx-3">•</span>
            <div className="flex items-center">
              <CalendarIcon size={16} className="mr-1" />
              <span>{post.date}</span>
            </div>
            <span className="mx-3">•</span>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover" 
            />
          </div>
        </header>

        {/* Post Content */}
        <div className="blog-container">
          <div className="max-w-4xl mx-auto">
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 py-12 bg-muted/30">
            <div className="blog-container">
              <h3 className="section-title">Related Articles</h3>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map(relatedPost => (
                  <PostCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
};

export default BlogPostPage;
