import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
}

function Section({ className, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("container mx-auto px-6 py-16 border-t border-slate-800", className)}
      {...props}
    />
  );
}

function SectionTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-2xl md:text-3xl font-bold mb-8", className)}
      {...props}
    />
  );
}

function SectionContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("max-w-4xl", className)} {...props} />
  );
}

export { Section, SectionTitle, SectionContent };
