import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Image, Skeleton, Divider, Chip } from '@nextui-org/react';
import { CalendarIcon, Clock, User, ArrowLeft, Heart, Bookmark, Share2, MessageCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Post = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Jane Cooper",
      authorImage: "/images/avatar1.jpg",
      content: "This article is incredibly insightful! I never thought about the connection between spices and Ayurvedic medicine before.",
      date: "2 days ago",
      likes: 5
    },
    {
      id: 2,
      author: "Alex Johnson",
      authorImage: "/images/avatar2.jpg",
      content: "I've been trying to learn more about Indian cuisine. This was exactly what I needed to understand the basics. Thanks for sharing!",
      date: "1 week ago",
      likes: 12
    }
  ]);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Always define these hooks, regardless of isLoading state
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Simulate loading state
  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [slug]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    
    const newComment = {
      id: comments.length + 1,
      author: "You",
      authorImage: "/images/avatar-user.jpg",
      content: commentText,
      date: "Just now",
      likes: 0
    };
    
    setComments([newComment, ...comments]);
    setCommentText('');
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  // Mock post data - in a real app, this would come from an API
  const post = {
    id: slug,
    title: "The Art of Indian Cuisine",
    content: `
      <p class="lead">Indian cuisine is a rich tapestry of flavors, colors, and aromas that has evolved over thousands of years. Each region of India has its own unique culinary traditions, influenced by local ingredients, climate, and cultural practices.</p>
      
      <h2>The Spice Route</h2>
      <p>Spices are the heart of Indian cooking. From the fiery heat of chili peppers to the warm aroma of cardamom, each spice plays a crucial role in creating the complex flavors that Indian cuisine is known for.</p>
      
      <p>The use of spices in Indian cooking is not just about adding flavor, but also about balancing tastes and creating harmony in dishes. Many Indian spices also have medicinal properties and have been used in Ayurvedic medicine for centuries.</p>
      
      <figure class="image-full">
        <img src="/images/spices.jpg" alt="Indian Spices" />
        <figcaption>Various Indian spices used in traditional cooking</figcaption>
      </figure>
      
      <h2>Regional Variations</h2>
      <p>North Indian cuisine is known for its rich, creamy curries and tandoori dishes, while South Indian food features lighter, spicier dishes with rice as the staple. The coastal regions offer an abundance of seafood dishes, while the western states are famous for their vegetarian fare.</p>
      
      <p>Each region's cuisine is a reflection of its history, climate, and cultural influences. For example, the Portuguese influence is evident in Goan cuisine, while Kashmiri cuisine shows Central Asian influences.</p>
      
      <div class="info-box">
        <h3>Did You Know?</h3>
        <p>The concept of "curry" as a single dish is largely a Western invention. In India, the word refers to a variety of dishes with different spice blends and preparation methods, each unique to its region of origin.</p>
      </div>
      
      <h2>Cooking Techniques</h2>
      <p>Traditional Indian cooking methods include slow cooking in clay pots, grilling in tandoors, and tempering spices in hot oil to release their flavors. These techniques have been passed down through generations and continue to be an integral part of Indian culinary traditions.</p>
      
      <p>Modern Indian chefs are now reinventing traditional dishes, creating fusion cuisines that blend Indian flavors with international cooking styles, while still respecting the core principles of balance and harmony in flavor.</p>
      
      <blockquote>
        "Food is not just eating energy. It's an experience." — Indian proverb
      </blockquote>
      
      <h2>Essential Ingredients</h2>
      <p>Beyond spices, Indian cuisine relies on a variety of staple ingredients that form the base of many dishes:</p>
      
      <ul>
        <li><strong>Rice and wheat</strong> - The primary grains used throughout India</li>
        <li><strong>Lentils and legumes</strong> - Used in dals, curries, and snacks</li>
        <li><strong>Yogurt</strong> - Used in marinades, beverages, and as a cooling accompaniment</li>
        <li><strong>Ghee (clarified butter)</strong> - Adds richness to many dishes</li>
        <li><strong>Fresh herbs</strong> - Particularly coriander, mint, and curry leaves</li>
      </ul>
      
      <p>These ingredients, combined with regional specialties and cooking methods, create the diverse tapestry that is Indian cuisine — a culinary tradition that continues to captivate food lovers around the world.</p>
    `,
    image: "/images/indian-cuisine.jpg",
    imageClass: "image-cuisine",
    imagePlaceholder: "Indian Cuisine",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Chef Rajesh",
    authorImage: "/images/chef-rajesh.jpg",
    authorImageClass: "image-team",
    authorImagePlaceholder: "Chef Rajesh",
    authorBio: "Award-winning chef specializing in Indian cuisine with over 15 years of experience in restaurants across India and abroad. Passionate about sharing the rich culinary heritage of India with the world.",
    category: "Food",
    tags: ["Cooking", "Culture", "Tradition", "Spices", "Regional Cuisine"],
    relatedPosts: [
      {
        id: 9,
        title: "Mindful Eating Practices",
        image: "/images/mindful-eating.jpg",
        category: "Food"
      },
      {
        id: 20,
        title: "Culinary Fusion Experiments",
        image: "/images/fusion.jpg",
        category: "Food"
      }
    ]
  };

  return (
    <div className="bg-gradient-to-b from-background to-background/80" ref={containerRef}>
      {isLoading ? (
        <div className="container mx-auto px-4 py-8">
          <Button
            as={Link}
            to="/blog"
            color="primary"
            variant="flat"
            startContent={<ArrowLeft size={16} />}
            className="mb-8 hover:scale-105 transition-transform"
          >
            Back to Blog
          </Button>

          <article className="max-w-4xl mx-auto">
            <header className="mb-8">
              <Skeleton className="rounded-lg">
                <div className="h-12 w-3/4 rounded-lg bg-default-300"></div>
              </Skeleton>
              <div className="flex items-center gap-4 text-foreground/70 mb-6 mt-4">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="rounded-lg">
                    <div className="h-4 w-24 rounded-lg bg-default-200"></div>
                  </Skeleton>
                ))}
              </div>
              <Skeleton className="rounded-lg">
                <div className="h-[400px] rounded-lg bg-default-300"></div>
              </Skeleton>
            </header>

            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="rounded-lg">
                  <div className="h-4 w-full rounded-lg bg-default-200"></div>
                </Skeleton>
              ))}
            </div>
          </article>
        </div>
      ) : (
        <>
          {/* Hero Header with Parallax */}
          <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${post.image})`,
                backgroundPosition: 'center',
                y: parallaxY
              }}
            />
            
            <div className="container mx-auto relative z-20 h-full flex flex-col justify-end px-4 pb-16">
              <motion.div
                style={{ opacity: headerOpacity, y: headerY, scale: headerScale }}
                className="max-w-4xl"
              >
                <div className="mb-4 flex flex-wrap gap-2">
                  <Chip color="primary" variant="flat" className="text-xs">{post.category}</Chip>
                  {post.tags.map(tag => (
                    <Chip key={tag} color="default" variant="flat" className="text-xs">{tag}</Chip>
                  ))}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-white/80">
                  <div className="flex items-center">
                    <CalendarIcon size={16} className="mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between mb-8">
                <Button
                  as={Link}
                  to="/blog"
                  color="primary"
                  variant="flat"
                  startContent={<ArrowLeft size={16} />}
                  className="hover:scale-105 transition-transform"
                >
                  Back to Blog
                </Button>
                
                <div className="flex gap-2">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      isIconOnly
                      color={isLiked ? "danger" : "default"}
                      variant="flat"
                      aria-label="Like"
                      onClick={toggleLike}
                    >
                      <Heart fill={isLiked ? "currentColor" : "none"} />
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      isIconOnly
                      color={isSaved ? "primary" : "default"}
                      variant="flat"
                      aria-label="Save"
                      onClick={toggleSave}
                    >
                      <Bookmark fill={isSaved ? "currentColor" : "none"} />
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      isIconOnly
                      color="default"
                      variant="flat"
                      aria-label="Share"
                    >
                      <Share2 />
                    </Button>
                  </motion.div>
                </div>
              </div>
              
              <article>
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-foreground prose-headings:font-bold prose-p:text-foreground/80 prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:p-4 prose-blockquote:rounded-r-md prose-blockquote:italic prose-img:rounded-xl prose-hr:border-primary/20 prose-lead:text-xl prose-lead:font-normal prose-lead:text-foreground/90"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>
              
              <div className="my-12 p-8 glass-morphism border-glow rounded-xl">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <motion.div 
                    className="w-24 h-24 rounded-full overflow-hidden shrink-0"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <div className={`w-full h-full ${post.authorImageClass} placeholder-image relative`} data-placeholder={post.author[0]}>
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">About {post.author}</h3>
                    <p className="text-foreground/70 mb-4">{post.authorBio}</p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        color="primary"
                        variant="flat"
                        className="text-sm"
                      >
                        View All Posts
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              <Divider className="my-12" />
              
              {/* Comments Section */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <MessageCircle size={20} />
                  Comments ({comments.length})
                </h2>
                
                <form onSubmit={handleCommentSubmit} className="mb-8">
                  <div className="flex flex-col gap-4">
                    <textarea
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Write a comment..."
                      className="w-full p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none min-h-[100px]"
                    />
                    <div className="flex justify-end">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          type="submit"
                          color="primary"
                          disabled={!commentText.trim()}
                        >
                          Post Comment
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </form>
                
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <motion.div
                      key={comment.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 glass-morphism rounded-lg"
                    >
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                          <Image
                            src={comment.authorImage || '/images/avatar-default.jpg'}
                            alt={comment.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold">{comment.author}</h4>
                            <span className="text-xs text-foreground/60">{comment.date}</span>
                          </div>
                          <p className="text-foreground/80 mb-2">{comment.content}</p>
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="light"
                              className="text-xs px-2 flex items-center gap-1"
                            >
                              <Heart size={14} />
                              {comment.likes}
                            </Button>
                            <Button
                              size="sm"
                              variant="light"
                              className="text-xs px-2"
                            >
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
              
              {/* Related Posts */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {post.relatedPosts.map((relatedPost) => (
                    <motion.div
                      key={relatedPost.id}
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
                      <Link to={`/blog/${relatedPost.id}`} className="block">
                        <div className="glass-morphism border-glow rounded-lg overflow-hidden">
                          <div className="relative h-48">
                            <Image
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                              <span className="text-xs bg-primary rounded-full px-2 py-1 inline-block mb-2 text-white w-fit">
                                {relatedPost.category}
                              </span>
                              <h3 className="text-white font-bold" style={{ transform: 'translateZ(20px)' }}>
                                {relatedPost.title}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </section>
              
              <div className="flex justify-between">
                <Button
                  as={Link}
                  to="/blog"
                  color="primary"
                  variant="flat"
                  startContent={<ArrowLeft size={16} />}
                  className="hover:scale-105 transition-transform"
                >
                  Back to Blog
                </Button>
                
                <div className="flex gap-2">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      color={isLiked ? "danger" : "default"}
                      variant="flat"
                      startContent={<Heart fill={isLiked ? "currentColor" : "none"} />}
                      onClick={toggleLike}
                    >
                      {isLiked ? "Liked" : "Like"}
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      color={isSaved ? "primary" : "default"}
                      variant="flat"
                      startContent={<Bookmark fill={isSaved ? "currentColor" : "none"} />}
                      onClick={toggleSave}
                    >
                      {isSaved ? "Saved" : "Save"}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Post; 