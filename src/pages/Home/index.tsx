import { About } from "../../components/About";
import { Experience } from "../../components/Experience";
import { Footer } from "../../components/Footer";
import { Projects } from "../../components/Projects";

export function Home() {
  return (
    <div className="w-full">
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
