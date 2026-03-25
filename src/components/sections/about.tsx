import { Mail, Linkedin, ExternalLink, MapPin, Phone } from "lucide-react";
import { Section, SectionTitle, SectionContent, Card } from "@/components/ui";
import { profile } from "@/data";

const contactItems = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: ExternalLink, label: "Website", value: profile.website.replace("https://", ""), href: profile.website },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: profile.linkedin.replace("https://", ""), href: profile.linkedin },
];

function About() {
  return (
    <Section id="about">
      <SectionContent>
        <SectionTitle>About Me</SectionTitle>
        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 space-y-4 text-slate-400">
            <p className="text-lg leading-relaxed">
              Across missions in healthcare, finance, banking, and public administration, I
              have consolidated a Lead Developer role: technical leadership, team mentoring,
              scalable architecture definition, and code quality assurance.
            </p>
            <p className="leading-relaxed">
              I place performance, security, and delivery at the heart of every project.
              My focus is on building robust backends, modern frontends, and automated
              DevOps pipelines.
            </p>
          </div>
          <div className="md:col-span-2">
            <Card className="p-5">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Contact</h3>
              <div className="space-y-3">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors group"
                  >
                    <item.icon size={18} className="text-blue-400 shrink-0" />
                    <span className="text-sm truncate">{item.value}</span>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}

export { About };
