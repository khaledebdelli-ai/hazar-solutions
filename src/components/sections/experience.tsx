import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Section, SectionTitle, SectionContent, Card } from "@/components/ui";
import { experience } from "@/data";

function Experience() {
  return (
    <Section id="experience">
      <SectionContent>
        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <Card key={index} className="group p-5">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2">
                <div className="flex-1">
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-lg font-semibold text-slate-200 group-hover:text-blue-400 transition-colors"
                    >
                      {exp.company}
                      <ExternalLink size={14} className="text-slate-500 group-hover:text-blue-400" />
                    </a>
                  ) : (
                    <h3 className="text-lg font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                      {exp.company}
                    </h3>
                  )}
                  <p className="text-blue-400 font-medium mt-0.5">{exp.role}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm text-slate-400 bg-slate-800/50 px-3 py-1 rounded-lg shrink-0">
                  <Calendar size={14} className="text-slate-500" />
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-slate-400 flex items-center gap-1.5">
                <MapPin size={14} className="text-slate-500" />
                {exp.location}
              </p>
            </Card>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
}

export { Experience };
