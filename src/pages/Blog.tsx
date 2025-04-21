import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button, Card, CardBody, Image, Input, Chip } from '@nextui-org/react';
import { CalendarIcon, Clock, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [openFilters, setOpenFilters] = useState(false);
  const selectedCategory = searchParams.get('category');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const posts = [
    {
      id: 1,
      title: "The Art of Indian Cuisine",
      excerpt: "Discover the rich flavors and traditions of Indian cooking, from the spicy curries of the north to the coconut-infused dishes of the south.",
      image: "/images/indian-cuisine.jpg",
      imageClass: "image-cuisine",
      imagePlaceholder: "Indian Cuisine",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Food"
    },
    {
      id: 2,
      title: "Yoga and Meditation",
      excerpt: "Explore ancient practices for modern wellness that have helped millions find balance, peace and good health in their busy lives.",
      image: "/images/yoga.jpg",
      imageClass: "image-yoga",
      imagePlaceholder: "Yoga",
      date: "March 10, 2024",
      readTime: "4 min read",
      category: "Wellbeing"
    },
    {
      id: 3,
      title: "Sustainable Living",
      excerpt: "Learn about eco-friendly practices in Indian households that have been passed down through generations and are now gaining global recognition.",
      image: "/images/sustainability.jpg",
      imageClass: "image-sustainability",
      imagePlaceholder: "Sustainability",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Sustainability"
    },
    {
      id: 4,
      title: "Indian Festivals",
      excerpt: "Celebrate the vibrant traditions of Indian festivals that bring communities together through color, food, music, and spiritual practices.",
      image: "/images/festivals.jpg",
      imageClass: "image-festivals",
      imagePlaceholder: "Festivals",
      date: "March 1, 2024",
      readTime: "7 min read",
      category: "Culture"
    },
    {
      id: 5,
      title: "The Rise of AI in Healthcare",
      excerpt: "How artificial intelligence is revolutionizing disease diagnosis, treatment planning, and patient care in modern healthcare systems.",
      image: "/images/ai-healthcare.jpg",
      imageClass: "image-tech",
      imagePlaceholder: "AI Healthcare",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Technology"
    },
    {
      id: 6,
      title: "Blockchain Revolution",
      excerpt: "Understanding how blockchain technology is transforming industries from finance to supply chain management and beyond.",
      image: "/images/blockchain.jpg",
      imageClass: "image-tech",
      imagePlaceholder: "Blockchain",
      date: "February 25, 2024",
      readTime: "9 min read",
      category: "Technology"
    },
    {
      id: 7,
      title: "Virtual Reality Experiences",
      excerpt: "Exploring the immersive world of VR and how it's being used in entertainment, education, healthcare, and business applications.",
      image: "/images/vr.jpg",
      imageClass: "image-tech",
      imagePlaceholder: "Virtual Reality",
      date: "February 20, 2024",
      readTime: "6 min read",
      category: "Technology"
    },
    {
      id: 8,
      title: "The Science of Happiness",
      excerpt: "Research-backed methods to increase your happiness levels and improve your overall mental well-being in today's hectic world.",
      image: "/images/happiness.jpg",
      imageClass: "image-wellbeing",
      imagePlaceholder: "Happiness",
      date: "February 18, 2024",
      readTime: "5 min read",
      category: "Wellbeing"
    },
    {
      id: 9,
      title: "Mindful Eating Practices",
      excerpt: "Discover how being present and mindful during meals can transform your relationship with food and improve digestion.",
      image: "/images/mindful-eating.jpg",
      imageClass: "image-food",
      imagePlaceholder: "Mindful Eating",
      date: "February 15, 2024",
      readTime: "4 min read",
      category: "Food"
    },
    {
      id: 10,
      title: "Modern Architecture Trends",
      excerpt: "Exploring innovative building designs that combine sustainability, functionality, and aesthetics in contemporary architecture.",
      image: "/images/architecture.jpg",
      imageClass: "image-arts",
      imagePlaceholder: "Architecture",
      date: "February 12, 2024",
      readTime: "7 min read",
      category: "Arts"
    },
    {
      id: 11,
      title: "Space Exploration Milestones",
      excerpt: "A journey through humanity's greatest achievements in space exploration and what the future holds for our cosmic adventures.",
      image: "/images/space.jpg",
      imageClass: "image-science",
      imagePlaceholder: "Space",
      date: "February 10, 2024",
      readTime: "8 min read",
      category: "Science"
    },
    {
      id: 12,
      title: "Renewable Energy Innovations",
      excerpt: "Breakthrough technologies that are making renewable energy more efficient, affordable, and accessible around the world.",
      image: "/images/renewable.jpg",
      imageClass: "image-sustainability",
      imagePlaceholder: "Renewable Energy",
      date: "February 8, 2024",
      readTime: "6 min read",
      category: "Sustainability"
    },
    {
      id: 13,
      title: "Global Travel Destinations",
      excerpt: "Discover hidden gems and must-visit locations that offer authentic cultural experiences and breathtaking natural beauty.",
      image: "/images/travel.jpg",
      imageClass: "image-travel",
      imagePlaceholder: "Travel",
      date: "February 5, 2024",
      readTime: "7 min read",
      category: "Travel"
    },
    {
      id: 14,
      title: "Digital Entrepreneurship",
      excerpt: "Strategies and insights for building successful online businesses in today's competitive digital landscape.",
      image: "/images/entrepreneurship.jpg",
      imageClass: "image-business",
      imagePlaceholder: "Entrepreneurship",
      date: "February 3, 2024",
      readTime: "9 min read",
      category: "Business"
    },
    {
      id: 15,
      title: "Photography Fundamentals",
      excerpt: "Master the essential principles of photography to capture stunning images regardless of your equipment or experience level.",
      image: "/images/photography.jpg",
      imageClass: "image-arts",
      imagePlaceholder: "Photography",
      date: "February 1, 2024",
      readTime: "6 min read",
      category: "Arts"
    },
    {
      id: 16,
      title: "Music Production Techniques",
      excerpt: "Behind-the-scenes look at modern music production methods that professionals use to create hit songs.",
      image: "/images/music.jpg",
      imageClass: "image-arts",
      imagePlaceholder: "Music",
      date: "January 28, 2024",
      readTime: "7 min read",
      category: "Arts"
    },
    {
      id: 17,
      title: "Genetic Engineering Breakthroughs",
      excerpt: "Recent advances in gene editing technology that could revolutionize medicine, agriculture, and our understanding of life itself.",
      image: "/images/genetics.jpg",
      imageClass: "image-science",
      imagePlaceholder: "Genetics",
      date: "January 25, 2024",
      readTime: "8 min read",
      category: "Science"
    },
    {
      id: 18,
      title: "Quantum Computing Explained",
      excerpt: "Demystifying quantum computing and exploring its potential to solve problems that are impossible for classical computers.",
      image: "/images/quantum.jpg",
      imageClass: "image-science",
      imagePlaceholder: "Quantum Computing",
      date: "January 22, 2024",
      readTime: "9 min read",
      category: "Science"
    },
    {
      id: 19,
      title: "Financial Freedom Strategies",
      excerpt: "Practical approaches to managing your finances, investing wisely, and building wealth for long-term financial independence.",
      image: "/images/finance.jpg",
      imageClass: "image-business",
      imagePlaceholder: "Finance",
      date: "January 20, 2024",
      readTime: "7 min read",
      category: "Business"
    },
    {
      id: 20,
      title: "Culinary Fusion Experiments",
      excerpt: "Creative combinations of different culinary traditions that result in exciting new flavors and dining experiences.",
      image: "/images/fusion.jpg",
      imageClass: "image-food",
      imagePlaceholder: "Fusion Cuisine",
      date: "January 18, 2024",
      readTime: "5 min read",
      category: "Food"
    }
  ];

  const categories = ['All', 'Technology', 'Food', 'Wellbeing', 'Sustainability', 'Culture', 'Science', 'Business', 'Arts', 'Travel'];

  // Simulate loading state
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      filterPosts();
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);

  const filterPosts = () => {
    const filtered = posts.filter(post => {
      const matchesCategory = !selectedCategory || selectedCategory === 'all' || post.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch = !searchQuery || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    
    setFilteredPosts(filtered);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  const handleCategoryClick = (category) => {
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: category.toLowerCase() });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <section className="text-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Blog Posts
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Explore our collection of articles on technology, culture, and more.
          </p>
        </motion.div>
        
        {/* 3D Background elements */}
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-primary/10 -z-10 top-0 left-[10%]"
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-secondary/10 -z-10 bottom-0 right-[10%]"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
      </section>

      {/* Search and Filter Section */}
      <motion.section 
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-1/2">
            <Input
              placeholder="Search posts..."
              value={searchQuery}
              onChange={handleSearch}
              startContent={<Search size={20} className="text-foreground/50" />}
              className="max-w-full glass-morphism"
              variant="bordered"
              aria-label="Search posts"
            />
          </div>
          <div className="relative">
            <Button
              variant="flat"
              className="md:hidden mb-2"
              startContent={<Filter size={18} />}
              onClick={() => setOpenFilters(!openFilters)}
            >
              Categories
            </Button>
            <div className={`flex flex-wrap gap-2 md:flex ${openFilters ? 'absolute z-10 p-4 rounded-lg bg-background/80 backdrop-blur-md shadow-lg' : 'hidden'}`}>
              {categories.map((category) => (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Chip
                    onClick={() => handleCategoryClick(category)}
                    color={selectedCategory === category.toLowerCase() ? 'primary' : 'default'}
                    variant={selectedCategory === category.toLowerCase() ? 'solid' : 'flat'}
                    className="cursor-pointer hover:opacity-80 transition-opacity text-sm md:text-base"
                    aria-selected={selectedCategory === category.toLowerCase()}
                    aria-label={`Filter by ${category}`}
                  >
                    {category}
                  </Chip>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Loading State */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Card className="h-[300px] glass-morphism animate-pulse">
                <CardBody className="p-0">
                  <div className="h-48 bg-foreground/10"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-6 w-3/4 bg-foreground/10 rounded"></div>
                    <div className="h-4 w-full bg-foreground/10 rounded"></div>
                    <div className="h-4 w-full bg-foreground/10 rounded"></div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        /* Posts Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.03, 
                  rotateY: 5, 
                  rotateX: 5,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.1)"
                }}
                style={{ 
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Card 
                  isPressable
                  as={Link}
                  to={`/blog/${post.id}`}
                  className="glass-morphism border-glow overflow-hidden"
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <CardBody className="p-0 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <div className={`w-full h-full ${post.imageClass} placeholder-image`} data-placeholder={post.imagePlaceholder}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transform-gpu transition-transform duration-300 hover:scale-110"
                          style={{ position: 'absolute', top: 0, left: 0 }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                        <span className="text-xs bg-primary rounded-full px-2 py-1 inline-block mb-2 text-white w-fit">
                          {post.category}
                        </span>
                        <h3 className="text-white font-bold text-lg" style={{ transform: 'translateZ(20px)' }}>
                          {post.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-foreground/70 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-foreground/60">
                        <div className="flex items-center">
                          <CalendarIcon size={14} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      )}

      {/* No Results Message */}
      {!isLoading && filteredPosts.length === 0 && (
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-foreground/70 mb-6">No posts found matching your criteria.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              as={Link}
              to="/blog"
              color="primary"
              variant="flat"
              className="mt-4 font-medium"
            >
              Clear Filters
            </Button>
          </motion.div>
        </motion.div>
      )}
      
      {/* Pagination - Show only if we have posts and are not loading */}
      {!isLoading && filteredPosts.length > 0 && (
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <motion.div
                key={page}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  color={page === 1 ? "primary" : "default"}
                  variant={page === 1 ? "solid" : "flat"}
                  className="min-w-[40px] h-[40px]"
                >
                  {page}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Blog; 