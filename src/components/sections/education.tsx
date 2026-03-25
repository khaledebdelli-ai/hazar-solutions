import { GraduationCap, MapPin } from "lucide-react";
import { Section, SectionTitle, SectionContent, Card } from "@/components/ui";
import { education } from "@/data";

function Education() {
  return (
    <Section id="education">
      <SectionContent>
        <SectionTitle>Education</SectionTitle>
        <Card>
          <div className="flex items-start gap-3 mb-2">
            <GraduationCap size={20} className="text-blue-400 mt-1 shrink-0" />
            <div>
              <h3 className="text-lg font-semibold">{education.degree}</h3>
              <p className="text-blue-400 mb-1">{education.institution}</p>
              <p className="text-slate-400 text-sm flex items-center gap-1">
                <MapPin size={14} />
                {education.location} · {education.period}
              </p>
            </div>
          </div>
        </Card>
      </SectionContent>
    </Section>
  );
}

export { Education };
