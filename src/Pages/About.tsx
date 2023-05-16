import CountUp from 'react-countup'
import { useInView, motion, inView } from 'framer-motion'
import { FaCircle, FaCheckCircle } from 'react-icons/fa'
import { fadeIn } from '../variants'
import { useRef } from 'react'
import { skillsList } from '../skillList'

export default function About() {
  const aboutRef = useRef(null)
  const isInView = useInView(aboutRef)

  return (
    <section
      ref={aboutRef}
      id='about'
      className='text-slate-300 '
    >
      <div className='container mx-auto lg:h-screen flex justify-center items-center'>
        <div>
          <motion.div
            id='text'
            //@ts-ignore
            variants={fadeIn('up', 0.3)}
            initial={{ opacity: 0 }}
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            className='text-center lg:text-left'
          >
            <h2 className='uppercase font-bold text-[30px] lg:text-[50px]'>
              Sobre mi
            </h2>
            <p className='lg:text-[20px] md:text-[18px] text-slate-100'>
              Especializado en el MERN Stack, apuesto por un diseño responsive
              además de incorporar la mejor solución para un desarrollo
              escalable.
            </p>
          </motion.div>
          <div id='skills' className='flex flex-col'>
            <motion.h3
              //@ts-ignore
              variants={fadeIn('up', 0.3)}
              initial={{ opacity: 0 }}
              whileInView='show'
              viewport={{ once: false, amount: 0.7 }}
              className='uppercase font-semibold text-center mt-8 mb-4 text-indigo-500 md:text-[18px] lg:text-[25px]'
            >
              mern stack
            </motion.h3>
            <div
              id='skills-container'
              className='lg:grid lg:grid-cols-2 md:mb-8'
            >
              {skillsList.map(
                (skill: {
                  name: string
                  badge: string
                  caracteristicas: string[]
                }) => (
                  <motion.div
                    // @ts-ignore
                    variants={fadeIn('right', 0.3, 0.5)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: false, amount: 0.7 }}
                    className='bg-slate-600/50 rounded-md my-2 mx-2 flex flex-col justify-center items-center h-40 lg:w-11/12 content-center'
                    key={skill.name}
                  >
                    <img
                      src={skill.badge}
                      className='rounded-full transition-all hover:scale-150 hover:-translate-y-6 my-3 w-36 shadow-md hover:shadow-lg'
                    />
                    <ul className='my-2'>
                      {skill.caracteristicas.map((caracteristica: string) => (
                        <li
                          className='capitalize font-semibold md:text-[16px] lg:text-[18px]'
                          key={caracteristica}
                        >
                          {caracteristica}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}