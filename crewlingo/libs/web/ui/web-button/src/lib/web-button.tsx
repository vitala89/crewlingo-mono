import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@crewlingo/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-cyan-500 hover:bg-blue-700 text-white px-4 py-2 rounded',
        outline: 'border border-gray-300 text-red-500 bg-black',
        ghost: 'bg-transparent text-black',
        crewLingo: 'bg-red-200 hover:bg-blue-700 text-white px-4 py-2 rounded',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const WebButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
WebButton.displayName = 'Button';
