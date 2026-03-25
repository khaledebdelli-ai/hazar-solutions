import { Mail, Linkedin, Github } from "lucide-react";
import { profile } from "@/data";

function Footer() {
  return (
    <footer className="container mx-auto px-6 py-12 border-t border-slate-800">
      <div className="max-w-4xl flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Email"
          >
            <Mail size={20} className="text-slate-400 hover:text-blue-400 transition-colors" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="text-slate-400 hover:text-blue-400 transition-colors" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} className="text-slate-400 hover:text-blue-400 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
