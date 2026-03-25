import { Mail, Linkedin, Github } from "lucide-react";
import { profile } from "@/data";

function Footer() {
  return (
    <footer id="contact" className="container mx-auto px-6 py-12 border-t border-slate-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">
          Let&apos;s work <span className="text-gradient">together</span>
        </h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors mb-8"
        >
          <Mail size={18} />
          Get in touch
        </a>
        
        <div className="flex justify-center gap-4 mb-8">
          <a
            href={`mailto:${profile.email}`}
            className="p-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-lg transition-all hover:border-blue-500/30"
            aria-label="Email"
          >
            <Mail size={20} className="text-slate-400 hover:text-blue-400 transition-colors" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-lg transition-all hover:border-blue-500/30"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="text-slate-400 hover:text-blue-400 transition-colors" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-lg transition-all hover:border-blue-500/30"
            aria-label="GitHub"
          >
            <Github size={20} className="text-slate-400 hover:text-blue-400 transition-colors" />
          </a>
        </div>
        
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export { Footer };
