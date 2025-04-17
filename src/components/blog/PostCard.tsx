
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="post-card h-full flex flex-col">
      <Link to={`/blog/${post.slug}`} className="block flex-grow">
        <div className="relative">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-48 object-cover" 
          />
          <Badge className="absolute top-3 left-3 bg-background/90 text-foreground text-xs">
            {post.category}
          </Badge>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold font-serif mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-foreground/75 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex items-center text-xs text-foreground/60 mt-auto">
            <div className="flex items-center">
              <CalendarIcon size={12} className="mr-1" />
              <span>{post.date}</span>
            </div>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <Clock size={12} className="mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
