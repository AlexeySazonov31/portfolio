import About from "../../components/About"
import Experience from "../../components/Experience"


export function Home() {
  return (
    <div className="w-full">
      <About />
      <Experience />
      <div className="h-[500px] relative -top-24 pt-24" id="projects">
        projects
      </div>
    </div>
  );
}
