import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import unio from "../assets/unio.png";

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
        <div id="projects-container">
          <div
            id="unio"
            className="group relative m-4 border-2 border-slate/50 max-w-2xl rounded-md overflow-hidden"
          >
            <div className="group-hover:bg-black/70 w-full h-full z-40 absolute transition-all duration-300"></div>
            <img src={unio} alt="imagen del proyecto unio" className="group-hover:scale-125 transition-all duration-300" />
            <h3 className="uppercase">unio</h3>
            <p>
              enciclopedia interactiva con base de datos propia basada en la API
              de Marvel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
