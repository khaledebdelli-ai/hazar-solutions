import { ExternalLink } from "lucide-react";
import { Section, SectionTitle, SectionContent, TagBadge } from "@/components/ui";
import { projects } from "@/data";

function Projects() {
  return (
    <Section id="projects">
      <SectionContent>
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-slate-800/50 rounded-lg border border-slate-800 hover:border-slate-700 hover:bg-slate-800/70 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    {project.title}
                    <ExternalLink
                      size={14}
                      className="text-slate-500 hover:text-blue-400 transition-colors"
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
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <TagBadge key={tag}>{tag}</TagBadge>
                ))}
              </div>
              <p className="text-xs text-slate-500">{project.period}</p>
            </div>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
}

export { Projects };
