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

export default function Home() {
  return (
    <main className="min-h-screen">
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
