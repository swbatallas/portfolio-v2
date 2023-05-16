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
    <section ref={aboutRef} id='about' className='text-slate-300'>
      <div className='container mx-auto'>
        <div>
          <div id='img'>
            <img src='' alt='' />
          </div>
          <div id='text'>
            <h2 className='uppercase'>Sobre mi</h2>
            <p>
              Especializado en el MERN Stack, apuesto por un diseño responsive
              además de incorporar la mejor solución para un desarrollo
              escalable.
            </p>
          </div>
          <div id='skills' className='flex flex-col'>
            <h3 className='uppercase font-bold text-center'>mern stack</h3>
            {skillsList.map(
              (skill: {
                name: string
                badge: string
                caracteristicas: string[]
              }) => (
                <div className='bg-slate-600/50 rounded-md my-2 flex flex-col'>
                  <img
                    src={skill.badge}
                    className='rounded-full hover:scale-125 mt-3 w-36'
                  />
                  <ul className='my-2'>
                    {skill.caracteristicas.map((caracteristica: string) => (
                      <li className='hover:border-slate-200'>
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
