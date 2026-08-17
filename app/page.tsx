import { MotionProvider } from "@/components/MotionProvider";
import { Nav } from "@/components/Nav";
import { BackgroundFX } from "@/components/BackgroundFX";
import { ParticleField } from "@/components/ParticleField";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Ventures } from "@/components/sections/Ventures";
import { Projects } from "@/components/sections/Projects";
import { GithubStats } from "@/components/sections/GithubStats";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <MotionProvider>
      <BackgroundFX />
      <ParticleField />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Ventures />
        <Projects />
        <GithubStats />
        <Education />
        <Contact />
      </main>
      <BackToTop />
    </MotionProvider>
  );
}
