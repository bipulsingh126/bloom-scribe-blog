import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Image } from '@nextui-org/react';
import { CalendarIcon, Clock, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  const featuredPosts = [
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
      title: "Indian Classical Dance",
      excerpt: "Journey through the diverse forms of Indian classical dance that tell stories of culture, mythology, and devotion through graceful movements.",
      image: "/images/dance.jpg",
      imageClass: "image-dance",
      imagePlaceholder: "Dance",
      date: "March 1, 2024",
      readTime: "7 min read",
      category: "Culture"
    },
    {
      id: 5,
      title: "Technology Innovation",
      excerpt: "How India is emerging as a global technology hub with breakthroughs in AI, space exploration, and renewable energy solutions.",
      image: "/images/tech.jpg",
      imageClass: "image-tech",
      imagePlaceholder: "Technology",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Technology"
    },
    {
      id: 6,
      title: "Festivals of India",
      excerpt: "Experience the vibrant celebrations that mark India's diverse cultural landscape throughout the year, from Holi to Diwali and beyond.",
      image: "/images/festivals.jpg",
      imageClass: "image-festivals",
      imagePlaceholder: "Festivals",
      date: "February 25, 2024",
      readTime: "5 min read",
      category: "Culture"
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div className="overflow-hidden" ref={containerRef}>
      {/* Hero Section with 3D elements */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-70" />
          <div className="absolute top-1/2 right-0 w-full h-full bg-gradient-radial from-secondary/20 via-transparent to-transparent opacity-70" />
          
          <motion.div 
            className="absolute top-20 left-[20%] w-64 h-64 rounded-full bg-primary/10"
            animate={{ 
              y: [0, 30, 0],
              x: [0, 10, 0],
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
          
          <motion.div 
            className="absolute bottom-20 right-[20%] w-96 h-96 rounded-full bg-secondary/10"
            animate={{ 
              y: [0, -20, 0],
              x: [0, -15, 0],
              scale: [1, 1.1, 1],
              rotate: [0, -3, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
          
          <motion.div 
            className="absolute top-[40%] left-[40%] w-48 h-48 rounded-full bg-success/10"
            animate={{ 
              y: [0, 15, 0],
              scale: [1, 0.95, 1],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
                Discover Amazing Stories & Ideas
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-foreground/70 mb-10 leading-relaxed">
                Explore a world of knowledge, inspiration, and creativity through our curated collection of articles.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  as={Link}
                  to="/blog"
                  color="primary"
                  size="lg"
                  endContent={<ChevronRight size={16} />}
                  className="font-medium text-lg shadow-lg"
                  style={{
                    transform: 'translateZ(20px)',
                    boxShadow: '0 10px 25px -5px rgba(var(--color-primary-500), 0.3), 0 8px 10px -6px rgba(var(--color-primary-500), 0.2)'
                  }}
                >
                  Explore Blog
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  as={Link}
                  to="/signup"
                  color="secondary"
                  variant="flat"
                  size="lg"
                  className="font-medium text-lg"
                >
                  Join Community
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronRight size={30} className="rotate-90 text-foreground/50" />
        </motion.div>
      </section>

      {/* Featured Posts Section with 3D cards */}
      <section className="py-24 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-16 text-center text-gradient">
            Featured Articles
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button
            as={Link}
            to="/blog"
            color="primary"
            variant="ghost"
            size="lg"
            endContent={<ChevronRight size={16} />}
            className="font-medium"
          >
            View All Articles
          </Button>
        </motion.div>
      </section>

      {/* Categories Section with 3D effects */}
      <section className="py-24 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-16 text-center text-gradient">
              Explore Topics
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Technology', icon: '🚀', color: 'from-blue-400 to-indigo-600' },
              { name: 'Culture', icon: '🎭', color: 'from-rose-400 to-red-600' },
              { name: 'Wellbeing', icon: '🧘', color: 'from-green-400 to-teal-600' },
              { name: 'Food', icon: '🍛', color: 'from-amber-400 to-orange-600' },
              { name: 'Travel', icon: '✈️', color: 'from-sky-400 to-cyan-600' },
              { name: 'Business', icon: '📈', color: 'from-violet-400 to-purple-600' },
              { name: 'Science', icon: '🔬', color: 'from-emerald-400 to-green-600' },
              { name: 'Arts', icon: '🎨', color: 'from-pink-400 to-rose-600' }
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5, 
                    rotateX: 5,
                    boxShadow: "0px 15px 30px rgba(0,0,0,0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{ 
                    perspective: '1000px',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <Link to={`/blog?category=${category.name.toLowerCase()}`}>
                    <div 
                      className={`h-32 rounded-xl bg-gradient-to-br ${category.color} text-white flex flex-col items-center justify-center shadow-lg cursor-pointer overflow-hidden relative`}
                      style={{
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <div className="absolute -right-6 -bottom-6 text-6xl opacity-20">{category.icon}</div>
                      <span className="text-2xl mb-2">{category.icon}</span>
                      <span className="font-bold" style={{ transform: 'translateZ(20px)' }}>{category.name}</span>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section with 3D */}
      <section className="py-24 container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto glass-morphism border-glow rounded-2xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          whileHover={{ 
            boxShadow: "0px 20px 50px rgba(0,0,0,0.1)"
          }}
          style={{ 
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
        >
          <motion.div
            className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-primary/20"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          />
          
          <motion.div
            className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-secondary/20"
            animate={{ 
              rotate: [360, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Stay Inspired</h2>
            <p className="text-foreground/70 mb-8">
              Subscribe to our newsletter and get weekly updates on the best stories, tips, and inspiration.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow rounded-lg p-3 bg-background/50 backdrop-blur-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  color="primary"
                  size="lg"
                  className="font-medium shadow-lg"
                  style={{
                    transform: 'translateZ(20px)',
                    boxShadow: '0 10px 25px -5px rgba(var(--color-primary-500), 0.3), 0 8px 10px -6px rgba(var(--color-primary-500), 0.2)'
                  }}
                >
                  Subscribe
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home; 