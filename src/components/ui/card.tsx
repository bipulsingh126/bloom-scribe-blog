import React from 'react';
import { Card as NextUICard, CardProps as NextUICardProps, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  'overflow-hidden transition-all duration-300 card-3d',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground',
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        outline: 'bg-transparent border border-border',
        ghost: 'bg-transparent hover:bg-muted/50',
        gradient: 'bg-gradient-to-r from-primary/80 via-secondary/80 to-accent/80 text-white'
      },
      shadow: {
        none: '',
        sm: 'shadow-sm hover:shadow',
        md: 'shadow-md hover:shadow-lg',
        lg: 'shadow-lg hover:shadow-xl',
        xl: 'shadow-xl hover:shadow-2xl',
      },
      hover: {
        none: '',
        lift: 'hover:-translate-y-2',
        scale: 'hover:scale-105',
        rotate: 'hover:rotate-1',
        glow: 'hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]',
      },
      radius: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      },
      animation: {
        none: '',
        pulse: 'hover:animate-pulse',
        bounce: 'hover:animate-bounce',
      },
    },
    defaultVariants: {
      variant: 'default',
      shadow: 'md',
      hover: 'lift',
      radius: 'lg',
      animation: 'none',
    },
  }
);

export interface CardProps extends Omit<NextUICardProps, 'radius' | 'shadow'>, 
  VariantProps<typeof cardVariants> {
  disableAnimation?: boolean;
}

const Card: React.FC<CardProps> & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
} = ({
  className,
  variant,
  shadow,
  hover,
  radius,
  animation,
  disableAnimation = false,
  children,
  ...props
}) => {
  return (
    <NextUICard
      className={cn(
        cardVariants({
          variant,
          shadow,
          hover: disableAnimation ? 'none' : hover,
          radius,
          animation: disableAnimation ? 'none' : animation,
        }),
        className
      )}
      {...props}
    >
      {children}
    </NextUICard>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export { Card, cardVariants, CardHeader, CardBody, CardFooter };
