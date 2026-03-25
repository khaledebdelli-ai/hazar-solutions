import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "p-6 bg-slate-800/50 rounded-lg border border-slate-800",
          hover && "hover:border-slate-700 hover:bg-slate-800/70 transition-all duration-200",
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export { Card };
