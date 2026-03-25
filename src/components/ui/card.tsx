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
          "p-5 bg-slate-800/40 rounded-xl border border-slate-700/50 backdrop-blur-sm",
          "hover:border-blue-500/30 hover:bg-slate-800/60 hover:shadow-lg hover:shadow-blue-500/5",
          "transition-all duration-300",
          hover && "hover:border-slate-600 hover:bg-slate-800/70 transition-all duration-200",
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export { Card };
