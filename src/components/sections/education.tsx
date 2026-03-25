import { GraduationCap, MapPin } from "lucide-react";
import { Section, SectionTitle, SectionContent, Card } from "@/components/ui";
import { education } from "@/data";

function Education() {
  return (
    <Section id="education">
      <SectionContent>
        <SectionTitle>Education</SectionTitle>
        <Card className="p-5">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <GraduationCap size={24} className="text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-200">{education.degree}</h3>
              <p className="text-blue-400 font-medium mt-1">{education.institution}</p>
              <p className="text-slate-400 text-sm flex items-center gap-1.5 mt-2">
                <MapPin size={14} className="text-slate-500" />
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
