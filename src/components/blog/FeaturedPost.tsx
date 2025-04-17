
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface FeaturedPostProps {
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
  };
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <div className="featured-post h-full">
      <Link to={`/blog/${post.slug}`} className="block h-full">
        <div className="md:flex h-full">
          <div className="md:w-1/2">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-56 md:h-full object-cover" 
            />
          </div>
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <Badge variant="outline" className="mb-2 text-xs inline-block w-fit">
              {post.category}
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-3">{post.title}</h2>
            <p className="text-foreground/75 mb-4">{post.excerpt}</p>
            <div className="flex items-center text-sm text-foreground/60 mt-auto">
              <div className="flex items-center">
                <User size={14} className="mr-1" />
                <span>{post.author}</span>
              </div>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <CalendarIcon size={14} className="mr-1" />
                <span>{post.date}</span>
              </div>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedPost;
