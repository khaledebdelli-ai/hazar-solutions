import { LinkHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";

interface LinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  external?: boolean;
  icon?: boolean;
}

function Link({ className, external, icon, children, href, ...props }: LinkProps) {
  const isExternal = external || (href?.toString().startsWith("http") || href?.toString().startsWith("mailto"));
  
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "hover:text-blue-400 transition-colors inline-flex items-center gap-1",
        className
      )}
      {...props}
    >
      {children}
      {icon && isExternal && <ExternalLinkIcon size={14} className="inline" />}
    </a>
  );
}

export { Link };
