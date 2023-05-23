import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import unio from "../assets/unio.png";
import ProjectComponent from "../Components/ProjectComponent";
import { projectList } from "../projectsList";
import { ProjectObj } from "../vite-env";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="text-slate-300">
        <div id="portfolio-text" className="text-slate-300 mx-auto">
          <h2 className="uppercase font-bold text-[30px] lg:text-[50px]">
            Portfolio
          </h2>
          <p className="lg:text-[20px] md:text-[18px] text-slate-100">
            Aquí puedes encontrar el acceso a todos mis trabajos, las
            tecnologías utilizadas en cada uno, acceso al repo(si tiene) y más
            información.
          </p>
        </div>
        <div>
          {projectList.map((proyecto: ProjectObj) => {
            return <ProjectComponent proyecto={proyecto} />;
          })}
        </div>
      </div>
    </section>
  );
}
