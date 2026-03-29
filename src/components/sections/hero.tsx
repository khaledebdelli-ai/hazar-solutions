import { Mail, Linkedin, ExternalLink, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui";
import { profile } from "@/data";

function Hero() {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-slate-950" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-400">
              Available for projects
            </span>
            <span className="flex items-center gap-1.5 text-sm text-slate-400">
              <MapPin size={14} className="text-blue-400" />
              {profile.location}
            </span>
          </div>
          
          <p className="text-blue-400 font-medium mb-3 animate-fade-in animation-delay-100">
            {profile.tagline}
          </p>
          
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
            <a href="/khaled_ebdelli_cv_2026.pdf" download>
              <Button variant="secondary">
                <Download size={18} />
                Download CV
              </Button>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost">
                <Linkedin size={18} />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-slate-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </header>
  );
}

export { Hero };
