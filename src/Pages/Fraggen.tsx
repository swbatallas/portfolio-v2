import Header from '../Components/Header'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

function Fraggen() {
  return (
    <section>
      <Header />
      <motion.div
        variants={fadeIn('down', 0.3, 0.5)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.3 }}
        id='fraggen-presentation'
        className='pt-20 lg:pt-10 mx-3'
      >
        <h1 className='uppercase font-extrabold text-[40px] lg:text-[50px] text-cyan-600'>
          Fraggen APP
        </h1>
        <h2 className='font-bold text-[34px] text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-pink-300'>
          Un juego de preguntas y respuestas donde triunfan los inteligentes
        </h2>
      </motion.div>
      <motion.div
        variants={fadeIn('up', 0.3, 0.5)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.3 }}
        className='text-slate-300 flex flex-col lg:flex-row lg:justify-center lg:items-center'
      >
        <h2 className='text-[20px] pt-10 lg:text-[28px] lg:text-center lg:pt-0 lg:mt-[-15rem] lg:mx-28 lg:w-[30%] ml-1'>
          ¿Serás capaz de estar el primero en el ranking?
        </h2>
        <img
          src='/fraggen-home.jpg'
          alt='pantalla de home de fraggen'
          className='rounded-[1rem] w-80 mx-auto border-4 mt-10 border-red-300/20 lg:max-h-[75vh] lg:w-auto'
        />
      </motion.div>
      <div className='mt-10 bg-black text-slate-100 flex flex-col'>
        <motion.div
          variants={fadeIn('up', 0.4, 0.8)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.5 }}
          id='fraggen-sign'
          className='min-h-screen flex flex-col lg:flex-row lg:justify-center lg:items-center'
        >
          <div className='mx-3 lg:text-center lg:w-[30%] lg:mx-28'>
            <h1 className='font-extrabold text-[40px] pt-10 lg:pt-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-pink-300'>
              Inicia sesion para guardar tu progreso
            </h1>
            <p className='lg:text-[20px]'>
              Accede a todas tus partidas anteriores y visualiza tus
              puntuaciones
            </p>
          </div>
          <img
            src='/fraggen-sign.png'
            alt='pantalla de inicio de sesion de fraggen'
            className='rounded-[1rem] w-80 mx-auto border-4 mt-10 border-red-300/20 lg:max-h-[75vh] lg:w-auto'
          />
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.4, 0.8)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.5 }}
          id='fraggen-categories'
          className='min-h-screen flex flex-col lg:flex-row lg:justify-center lg:items-center'
        >
          <div className='mx-3 lg:text-center lg:w-[30%] lg:mx-28 lg:order-2'>
            <h1 className='font-extrabold text-[40px] pt-10 lg:pt-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-pink-300'>
              Elige la categoría que más te guste
            </h1>
            <p className='lg:text-[20px]'>
              Tienes una infinidad de géneros disponibles. Elige una categoría y
              responde 5 preguntas aleatorias
            </p>
          </div>
          <img
            src='/fraggen-categories.png'
            alt='pantalla de categorias de fraggen'
            className='rounded-[1rem] w-80 mx-auto border-4 mt-10 border-red-300/20 lg:max-h-[75vh] lg:w-auto'
          />
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.4, 0.8)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.5 }}
          id='fraggen-question'
          className='min-h-screen flex flex-col lg:flex-row lg:justify-center lg:items-center'
        >
          <div className='mx-3 lg:text-center lg:w-[30%] lg:mx-28'>
            <h1 className='font-extrabold text-[40px] ml-3 mr-12 pt-20 text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-pink-300'>
              El tiempo juega en tu contra
            </h1>
            <p className='mx-2'>
              Elige la respuesta correcta antes de que se te acabe el tiempo. Si
              no respondes, cuenta como respuesta erronea
            </p>
          </div>
          <img
            src='/fraggen-question.png'
            alt='pantalla de pregunta de fraggen'
            className='rounded-[1rem] w-80 mx-auto border-4 mt-10 border-red-300/20 lg:max-h-[75vh] lg:w-auto'
          />
        </motion.div>
        <button
          className='bg-indigo-500 rounded-lg py-2 px-5 text-center font-bold mx-auto my-5'
          disabled={true}
        >
          Acceso deshabilitado temporalmente
        </button>
      </div>
    </section>
  )
}

export default Fraggen
