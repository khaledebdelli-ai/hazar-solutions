import { Globe } from "lucide-react";
import { Section, SectionTitle, SectionContent, Card } from "@/components/ui";
import { languages } from "@/data";

function Languages() {
  return (
    <Section id="languages">
      <SectionContent>
        <SectionTitle>Languages</SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
          {languages.map((lang, index) => (
            <Card key={index}>
              <div className="flex items-center gap-3">
                <Globe size={20} className="text-blue-400 shrink-0" />
                <div>
                  <h3 className="font-semibold">{lang.name}</h3>
                  <p className="text-slate-400 text-sm">{lang.proficiency}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
}

export { Languages };
