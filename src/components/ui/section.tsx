import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
}

function Section({ className, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("container mx-auto px-6 py-12 border-t border-slate-800/50", className)}
      {...props}
    />
  );
}

function SectionTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
      <h2
        className={cn("text-2xl md:text-3xl font-bold", className)}
        {...props}
      />
    </div>
  );
}

function SectionContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("max-w-4xl", className)} {...props} />
  );
}

export { Section, SectionTitle, SectionContent };
