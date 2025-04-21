
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, Clock, User } from 'lucide-react';
import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  Image, 
  Chip, 
  Button,
  Avatar
} from "@nextui-org/react";
import { useTheme } from 'next-themes';

interface PostCardProps {
  post: {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    coverImage: string;
    date: string;
    author: string;
    readTime: string;
    category: string;
    authorImage?: string;
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { theme } = useTheme();
  
  // Function to get category color
  const getCategoryColor = (category: string) => {
    const categories: Record<string, any> = {
      'Mindfulness': 'primary',
      'Sustainability': 'success',
      'Productivity': 'secondary',
      'Wellbeing': 'warning',
      'Home': 'default',
      'Food': 'danger', 
      'Travel': 'primary',
      'Creativity': 'secondary',
      'Ayurveda': 'success',
      'Indian Cuisine': 'danger',
      'Yoga & Meditation': 'warning',
    };
    
    return categories[category] || 'default';
  };

  // Function to handle image error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget as HTMLImageElement;
    target.src = '/images/fallback-image.jpg';
  };

  return (
    <Card 
      isHoverable 
      isPressable 
      as={Link} 
      to={`/blog/${post.slug}`}
      className="glass-morphism h-full card-hover-effect transform-gpu"
      shadow="sm"
    >
      <CardHeader className="p-0 overflow-hidden blog-image-hover">
        <div className="relative w-full pt-[56.25%]">
          <Image
            removeWrapper
            alt={post.title}
            className="absolute top-0 left-0 object-cover w-full h-full z-0 transition-transform duration-300"
            src={post.coverImage && post.coverImage.indexOf('http') === 0 ? post.coverImage : `/images/${post.coverImage}`}
            onError={handleImageError}
          />
          <div className="absolute top-3 left-3 z-10">
            <Chip 
              color={getCategoryColor(post.category)} 
              variant={theme === 'dark' ? 'flat' : 'shadow'}
              size="sm"
              className="backdrop-blur-sm transform-gpu transition-transform hover:scale-105"
            >
              {post.category}
            </Chip>
          </div>
        </div>
      </CardHeader>
      <CardBody className="p-5 pb-2 relative z-10">
        <h3 className="text-xl font-bold font-serif mb-2 line-clamp-2 hover:text-primary transition-all duration-300 transform-gpu hover:translate-z-4">
          {post.title}
        </h3>
        <p className="text-foreground/75 text-sm mb-2 line-clamp-3">
          {post.excerpt}
        </p>
      </CardBody>
      <CardFooter className="p-5 pt-0 flex flex-col gap-3 items-start relative z-10">
        <div className="flex items-center justify-between w-full text-xs text-foreground/60">
          <div className="flex items-center">
            <CalendarIcon size={14} className="mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            {post.authorImage ? (
              <Avatar 
                src={post.authorImage && post.authorImage.indexOf('http') === 0 ? post.authorImage : `/images/${post.authorImage}`}
                size="sm" 
                className="mr-2 border-1 border-primary/20 transform-gpu transition-transform hover:scale-110" 
                onError={handleImageError}
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                <User size={12} className="text-primary" />
              </div>
            )}
            <span className="text-xs">{post.author}</span>
          </div>
          <Button
            size="sm"
            variant="flat"
            color="primary"
            radius="full"
            className="text-xs transform-gpu transition-transform hover:scale-105 hover:shadow-lg"
          >
            Read More
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
