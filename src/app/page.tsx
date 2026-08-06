import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import SidebarLinks from "../components/SidebarLinks/SidebarLinks";

export default function Home() {
  return (
    <main className="pt-24">
      <SidebarLinks />
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
