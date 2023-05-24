import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { FaArrowAltCircleDown, FaArrowAltCircleRight } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id='contact'>
      <motion.div
        id='text'
        variants={fadeIn('down', 0.1)}
        initial={{ opacity: 0 }}
        whileInView='show'
        viewport={{ once: false, amount: 0.3 }}
        className='container min-h-screen py-20 flex flex-col lg:flex-row mx-auto justify-around'
      >
        <div className='text-slate-100 capitalize text-center lg:text-left'>
          <h2 className='uppercase font-bold text-[30px] lg:text-[50px] text-slate-300 text-center lg:text-left'>
            Contacto
          </h2>
          <h3>tienes una idea?</h3>
          <h3>me quieres en tu equipo?</h3>
          <FaArrowAltCircleDown className=' lg:hidden animate-bounce mx-auto my-5 text-[35px]' />
          <FaArrowAltCircleRight className='hidden lg:block animate-bounce mx-auto my-5 text-[35px]' />
        </div>
        <form action='' className='flex flex-col'>
          <input
            className='bg-transparent border-b border-slate-500 outline-none focus:border-slate-200 text-slate-300 py-2 my-2 transition-all duration-300'
            type='text'
            placeholder='Nombre'
          />
          <input
            className='bg-transparent border-b border-slate-500 outline-none focus:border-slate-200 text-slate-300 py-2 my-2 transition-all duration-300'
            type='email'
            placeholder='Correo'
          />
          <textarea
            className='bg-transparent border-b border-slate-500 outline-none focus:border-slate-200 text-slate-300 py-2 my-2 transition-all duration-300 resize-none'
            placeholder='Hola! tengo una propuesta muy interesante'
            rows={5}
          />
          <button className='transition-colors bg-indigo-800 font-bold py-2 w-48 md:my-1 sm:w-36 mx-auto rounded-full hover:bg-indigo-600 duration-500'>
            Enviar mensaje
          </button>
        </form>
      </motion.div>
    </section>
  )
}
