import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-200",
        {
          "bg-slate-800/80 text-slate-300 border border-slate-700/50": variant === "default",
          "bg-blue-500/20 text-blue-400 border border-blue-500/30": variant === "primary",
          "bg-transparent border border-slate-700 text-slate-300": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}

function SkillBadge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "px-3 py-1.5 bg-slate-800/60 border border-slate-700/50 rounded-lg text-sm text-slate-300",
        "hover:bg-slate-700/60 hover:border-slate-600 transition-all duration-200 cursor-default",
        className
      )}
      {...props}
    />
  );
}

function TagBadge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "px-2.5 py-1 bg-slate-700/60 border border-slate-600/50 rounded text-xs text-slate-300",
        className
      )}
      {...props}
    />
  );
}

export { Badge, SkillBadge, TagBadge };
