
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import FeaturedPost from '@/components/blog/FeaturedPost';
import PostCard from '@/components/blog/PostCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import blogData from '@/data/blogData';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-blog-beige py-16 md:py-24">
        <div className="blog-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Welcome to BloomScribe</h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              Exploring mindful living, sustainability, and personal growth through thoughtful stories and practical advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blog-green hover:bg-blog-green/90">
                <Link to="/blog">
                  Explore the Blog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">About BloomScribe</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16">
        <div className="blog-container">
          <h2 className="section-title">Featured Stories</h2>
          <div className="mt-8 space-y-8">
            {blogData.featuredPosts.map((post) => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16 bg-muted/40">
        <div className="blog-container">
          <h2 className="section-title">Recent Articles</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.recentPosts.slice(0, 3).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24">
        <div className="blog-container">
          <div className="bg-blog-cream rounded-xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Stay Inspired</h2>
              <p className="text-lg text-foreground/80 mb-6">
                Subscribe to receive thoughtfully curated content, new articles, and seasonal inspiration.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow rounded-md border border-input px-4 py-2"
                  required
                />
                <Button type="submit" className="bg-blog-green hover:bg-blog-green/90">
                  Subscribe
                </Button>
              </form>
              <p className="text-sm text-foreground/60 mt-4">
                We respect your privacy and will never share your information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
