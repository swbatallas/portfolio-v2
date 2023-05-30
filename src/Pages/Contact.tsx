import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { FaArrowAltCircleDown, FaArrowAltCircleRight } from 'react-icons/fa'
import { MutableRefObject, useRef } from 'react'
import { sendForm } from '@emailjs/browser'

export default function Contact() {
  const contactForm = useRef<HTMLFormElement>(
    null
  ) as MutableRefObject<HTMLFormElement>

  function sendEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(event.currentTarget + 'form')
    sendForm(
      import.meta.env.VITE_EMAILJS_SERVICEID,
      import.meta.env.VITE_EMAILJS_TEMPLATEID,
      contactForm.current,
      import.meta.env.VITE_EMAILJS_PUBLICKEY
    ).then(
      result => {
        console.log(result.text)
        if (contactForm.current != null) {
          contactForm.current.reset()
          window.alert('Su mensaje ha sido enviado correctamente')
        }
      },
      error => {
        console.log(error.text)
        window.alert('el mensaje no se ha enviado, error ' + error.text)
      }
    )
  }

  return (
    <section id='contact' className='text-slate-300'>
      <div className='container mx-auto h-screen flex flex-col lg:flex-row lg:justify-between'>
        <motion.div
          id='about-text'
          variants={fadeIn('up', 0.3, 0.5)}
          initial={{ opacity: 0 }}
          whileInView='show'
          viewport={{ once: false }}
          className='text-slate-100 capitalize text-center lg:text-left md:ml-5'
        >
          <h2 className='uppercase font-bold text-[30px] lg:text-[50px] text-slate-300 text-center lg:text-left'>
            Contacto
          </h2>
          <h3>tienes una idea?</h3>
          <h3>me quieres en tu equipo?</h3>
          <FaArrowAltCircleDown className=' lg:hidden animate-bounce mx-auto my-5 text-[35px]' />
          <FaArrowAltCircleRight className='hidden lg:block animate-bounce mx-auto my-5 text-[35px]' />
        </motion.div>
        <motion.div
          id='form-container'
          variants={fadeIn('up', 0.5)}
          initial={{ opacity: 0 }}
          whileInView='show'
          viewport={{ once: false }}
          className='min-w-[50%]'
        >
          <form
            onSubmit={event => sendEmail(event)}
            ref={contactForm}
            className='flex flex-col'
          >
            <input
              className='bg-transparent border-b border-slate-500 outline-none focus:border-slate-200 text-slate-300 py-2 my-2 transition-all duration-300'
              type='text'
              name='user_name'
              placeholder='Nombre'
              required
            />
            <input
              className='bg-transparent border-b border-slate-500 outline-none focus:border-slate-200 text-slate-300 py-2 my-2 transition-all duration-300'
              type='email'
              name='user_email'
              placeholder='Correo'
              required
            />
            <textarea
              className='bg-transparent border-b border-slate-500 outline-none focus:border-slate-200 text-slate-300 py-2 my-2 transition-all duration-300 resize-none'
              name='message'
              placeholder='Hola! tengo una propuesta muy interesante'
              rows={5}
              required
            />
            <button className='transition-colors bg-indigo-800 font-bold py-2 w-48 md:my-1 sm:w-36 mx-auto rounded-full hover:bg-indigo-600 duration-500'>
              Enviar mensaje
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
