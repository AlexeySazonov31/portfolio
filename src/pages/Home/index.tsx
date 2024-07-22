import { About } from "../../components/main/About";
import { Experience } from "../../components/main/Experience/Experience";
import { Footer } from "../../components/main/Footer";
import { Projects } from "../../components/main/Projects";

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
