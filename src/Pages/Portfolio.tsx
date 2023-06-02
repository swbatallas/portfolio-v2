import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import ProjectComponent from '../Components/ProjectComponent'
import { projectList } from '../projectsList'
import type { ProjectObj } from '../vite-env'

export default function Portfolio() {
  return (
    <section id='portfolio' className='text-slate-300 py-20 md:py-0'>
      <div className='container mx-auto h-screen flex flex-col justify-center'>
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial={{ opacity: 0 }}
          whileInView='show'
          viewport={{ once: false, amount: 0.3 }}
          id='portfolio-text'
          className='text-center lg:text-left'
        >
          <h2 className='uppercase font-bold text-[30px] lg:text-[50px]'>
            Portfolio
          </h2>
          <p className='lg:text-[20px] md:text-[18px] text-slate-100'>
            Aquí puedes encontrar el acceso a todos mis trabajos, las
            tecnologías utilizadas en cada uno y más información.
          </p>
        </motion.div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          {projectList.map((proyecto: ProjectObj) => {
            return (
              <ProjectComponent
              key={proyecto.name}
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
