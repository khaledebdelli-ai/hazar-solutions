import {
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Education,
  Languages,
  Footer,
} from "@/components/sections";
import { FloatingShapes } from "@/components/illustrations";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <FloatingShapes />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Languages />
      <Footer />
    </main>
  );
}
