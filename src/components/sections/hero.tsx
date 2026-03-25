import { Mail, Linkedin, ExternalLink } from "lucide-react";
import { Button, HazarSolutionsLogo } from "@/components/ui";
import { profile } from "@/data";

function Hero() {
  return (
    <header className="container mx-auto px-6 py-20 md:py-32">
      <div className="max-w-4xl">
        <p className="text-blue-400 font-medium mb-4 animate-fade-in">
          {profile.tagline}
        </p>
        <div className="flex mb-5 animate-fade-in animation-delay-100">
          <HazarSolutionsLogo size={48} />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in animation-delay-200">
          Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mb-8 animate-fade-in animation-delay-300">
          {profile.description}
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
          <a href={`mailto:${profile.email}`}>
            <Button>
              <Mail size={18} />
              Contact Me
            </Button>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">
              <Linkedin size={18} />
              LinkedIn
            </Button>
          </a>
          <a href={profile.website} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">
              <ExternalLink size={18} />
              Hazar Solutions
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

export { Hero };
