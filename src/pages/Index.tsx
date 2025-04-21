import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import FeaturedPost from '@/components/blog/FeaturedPost';
import PostCard from '@/components/blog/PostCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import blogData from '@/data/blogData';
import { Button as NextUIButton } from '@nextui-org/react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blog-beige to-blog-cream dark:from-background dark:to-background py-16 md:py-24">
        <div className="blog-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-4 inline-block bg-blog-brown/10 dark:bg-primary/10 px-4 py-2 rounded-full text-blog-brown dark:text-primary font-medium text-sm">
              Mindful Living from India
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 dark:text-foreground">Welcome to IndiaBloom</h1>
            <p className="text-xl md:text-2xl text-foreground/80 dark:text-foreground/80 mb-8">
              Exploring the rich heritage of Indian wisdom, sustainable practices, and mindful living through thoughtful stories and practical advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NextUIButton 
                as={Link}
                to="/blog"
                color="primary"
                size="lg"
                className="bg-blog-brown hover:bg-blog-brown/90 text-white"
              >
                Get Started
              </NextUIButton>
              <Button asChild size="lg" className="bg-blog-brown hover:bg-blog-brown/90">
                <Link to="/blog">
                  Explore the Blog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blog-brown/60 text-blog-brown hover:bg-blog-brown/10">
                <Link to="/about">About IndiaBloom</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white dark:bg-background">
        <div className="blog-container">
          <h2 className="section-title text-blog-brown dark:text-primary">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            {['Ayurveda', 'Indian Cuisine', 'Yoga & Meditation', 'Sustainable Living', 'Travel'].map((category) => (
              <Link 
                key={category} 
                to="/blog" 
                className="bg-blog-cream hover:bg-blog-beige transition-colors rounded-lg p-4 text-center shadow-sm hover:shadow"
              >
                <span className="font-medium text-blog-brown">{category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="blog-container">
          <h2 className="section-title text-blog-brown dark:text-primary">Featured Stories</h2>
          <div className="mt-8 grid grid-cols-1 gap-8">
            {blogData.featuredPosts.map((post) => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16 bg-muted/40 dark:bg-muted/80">
        <div className="blog-container">
          <h2 className="section-title text-blog-brown dark:text-primary">Recent Articles</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.recentPosts.slice(0, 3).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="border-blog-brown/60 text-blog-brown hover:bg-blog-brown/10">
              <Link to="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 dark:bg-background">
        <div className="blog-container">
          <div className="bg-gradient-to-br from-blog-cream to-blog-beige dark:from-background dark:to-muted/40 rounded-xl p-8 md:p-12 shadow-md">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-blog-brown dark:text-primary">Stay Inspired</h2>
              <p className="text-lg text-foreground/80 dark:text-foreground/80 mb-6">
                Subscribe to receive thoughtfully curated content, new articles, and seasonal inspiration from India.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow rounded-md border border-input px-4 py-2"
                  required
                />
                <Button type="submit" className="bg-blog-brown hover:bg-blog-brown/90">
                  Subscribe
                </Button>
              </form>
              <p className="text-sm text-foreground/60 dark:text-foreground/60 mt-4">
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
