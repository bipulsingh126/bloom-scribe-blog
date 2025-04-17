
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import PostCard from '@/components/blog/PostCard';
import SearchBar from '@/components/blog/SearchBar';
import CategoryFilter from '@/components/blog/CategoryFilter';
import blogData from '@/data/blogData';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState(blogData.allPosts);

  useEffect(() => {
    // Filter posts based on search term and active category
    let results = blogData.allPosts;
    
    // Apply category filter
    if (activeCategory !== 'all') {
      results = results.filter(post => 
        post.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }
    
    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      results = results.filter(post => 
        post.title.toLowerCase().includes(searchLower) || 
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.category.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredPosts(results);
  }, [searchTerm, activeCategory]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category.toLowerCase());
  };

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="blog-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="mb-4">The Blog</h1>
            <p className="text-xl text-foreground/80">
              Explore our collection of articles on mindful living, sustainability, and personal growth.
            </p>
          </div>
          
          <div className="mb-12">
            <SearchBar onSearch={handleSearch} />
            <CategoryFilter 
              categories={blogData.categories.filter(cat => cat !== 'All')} 
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl mb-2">No posts found</h3>
              <p className="text-foreground/70">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
