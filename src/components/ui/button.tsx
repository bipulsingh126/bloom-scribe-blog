import React from 'react';
import { Button as NextUIButton, ButtonProps as NextUIButtonProps } from '@nextui-org/react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 btn-3d',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-muted hover:text-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
        ghost: 'hover:bg-muted hover:text-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        gradient: 'bg-gradient-to-r from-primary via-secondary to-accent text-white border-none',
      },
      size: {
        default: 'h-10 px-4 py-2 rounded-md',
        sm: 'h-8 px-3 py-1 rounded-md',
        lg: 'h-12 px-6 py-3 rounded-md text-base',
        icon: 'h-9 w-9 rounded-md',
      },
      elevation: {
        default: '',
        low: 'shadow-sm hover:shadow-md',
        medium: 'shadow-md hover:shadow-lg',
        high: 'shadow-lg hover:shadow-xl',
      },
      animation: {
        none: '',
        default: 'transition-transform duration-200 hover:-translate-y-1',
        bounce: 'hover:animate-bounce',
        pulse: 'hover:animate-pulse',
      },
      shape: {
        default: 'rounded-md',
        rounded: 'rounded-full',
        square: 'rounded-none',
        pill: 'rounded-full px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      elevation: 'medium',
      animation: 'default',
      shape: 'default',
    },
  }
);

export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  fullWidth?: boolean;
  disableAnimation?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    elevation,
    animation,
    shape,
    isLoading,
    startContent,
    endContent,
    children,
    fullWidth,
    disableAnimation = false,
    ...props 
  }, ref) => {
    return (
      <NextUIButton
        ref={ref}
        className={cn(
          buttonVariants({ 
            variant, 
            size, 
            elevation,
            animation: disableAnimation ? 'none' : animation,
            shape,
          }),
          fullWidth ? 'w-full' : '',
          className
        )}
        startContent={startContent}
        endContent={endContent}
        isLoading={isLoading}
        {...props}
      >
        {children}
      </NextUIButton>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
