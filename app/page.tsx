import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { AskMe } from "@/components/ask-me";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <AskMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
