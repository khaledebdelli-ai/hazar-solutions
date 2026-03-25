import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Section, SectionTitle, SectionContent, Card } from "@/components/ui";
import { experience } from "@/data";

function Experience() {
  return (
    <Section id="experience">
      <SectionContent>
        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <Card key={index} className="group">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                <div>
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-lg font-semibold group-hover:text-blue-400 transition-colors"
                    >
                      {exp.company}
                      <ExternalLink size={14} className="text-slate-500" />
                    </a>
                  ) : (
                    <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors">
                      {exp.company}
                    </h3>
                  )}
                  <p className="text-blue-400">{exp.role}</p>
                </div>
                <span className="text-sm text-slate-500 flex items-center gap-1 shrink-0">
                  <Calendar size={14} />
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-slate-400 flex items-center gap-1">
                <MapPin size={14} />
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
