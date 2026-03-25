import { Globe } from "lucide-react";
import { Section, SectionTitle, SectionContent, Card } from "@/components/ui";
import { languages } from "@/data";

function Languages() {
  return (
    <Section id="languages">
      <SectionContent>
        <SectionTitle>Languages</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {languages.map((lang, index) => (
            <Card key={index} className="p-4 text-center">
              <Globe size={24} className="text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold text-slate-200">{lang.name}</h3>
              <p className="text-slate-400 text-sm mt-1">{lang.proficiency}</p>
            </Card>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
}

export { Languages };
