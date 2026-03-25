import { Mail, Linkedin, ExternalLink, MapPin, Phone } from "lucide-react";
import { Section, SectionTitle, SectionContent } from "@/components/ui";
import { profile } from "@/data";

function About() {
  return (
    <Section id="about">
      <SectionContent>
        <SectionTitle>About Me</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4 text-slate-400">
            <p>
              Across missions in healthcare, finance, banking, and public administration, I
              have consolidated a Lead Developer role: technical leadership, team mentoring,
              scalable architecture definition, and code quality assurance.
            </p>
            <p>
              I place performance, security, and delivery at the heart of every project.
              My focus is on building robust backends, modern frontends, and automated
              DevOps pipelines.
            </p>
          </div>
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Mail size={18} className="text-blue-400" />
              {profile.email}
            </a>
            <div className="flex items-center gap-3 text-slate-300">
              <ExternalLink size={18} className="text-blue-400" />
              <a
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                {profile.website.replace("https://", "")}
              </a>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Phone size={18} className="text-blue-400" />
              <span>{profile.phone}</span>
            </div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={18} className="text-blue-400" />
              {profile.linkedin.replace("https://", "")}
            </a>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}

export { About };
