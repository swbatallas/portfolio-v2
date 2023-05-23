import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import ProjectComponent from '../Components/ProjectComponent'
import { projectList } from '../projectsList'
import { ProjectObj } from '../vite-env'

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <div className='text-slate-300 text-center flex flex-col justify-center items-center'>
        <div id='portfolio-text' className='text-slate-300 mx-auto'>
          <h2 className='uppercase font-bold text-[30px] lg:text-[50px]'>
            Portfolio
          </h2>
          <p className='lg:text-[20px] md:text-[18px] text-slate-100'>
            Aquí puedes encontrar el acceso a todos mis trabajos, las
            tecnologías utilizadas en cada uno y más información.
          </p>
        </div>
        <div>
          {projectList.map((proyecto: ProjectObj) => {
            return (
              <ProjectComponent
                name={proyecto.name}
                description={proyecto.description}
                link={proyecto.link}
                image={proyecto.image}
                colorAccent={proyecto.colorAccent}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
