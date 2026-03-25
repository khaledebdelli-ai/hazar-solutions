import { ExternalLink } from "lucide-react";
import { Section, SectionTitle, SectionContent, TagBadge } from "@/components/ui";
import { projects } from "@/data";

function Projects() {
  return (
    <Section id="projects">
      <SectionContent>
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 bg-slate-800/40 rounded-xl border border-slate-700/50 backdrop-blur-sm
                hover:border-blue-500/30 hover:bg-slate-800/60 hover:shadow-xl hover:shadow-blue-500/5
                transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center justify-between mb-3">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-slate-200 hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    {project.title}
                    <ExternalLink
                      size={14}
                      className="text-slate-500 group-hover:text-blue-400 transition-colors"
                    />
                  </a>
                ) : (
                  <span className="text-lg font-semibold text-slate-200">
                    {project.title}
                  </span>
                )}
              </div>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <TagBadge key={tag}>{tag}</TagBadge>
                ))}
              </div>
              <p className="text-xs text-slate-500 font-medium">{project.period}</p>
            </div>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
}

export { Projects };
