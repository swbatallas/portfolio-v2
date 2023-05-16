import avatar from '../assets/avatar.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Shapes from '../Components/Shapes'

export default function Home() {
  return (
    <section id='home' className='w-full h-screen lg:flex justify-center'>
      <div className='container mx-auto text-slate-100 flex flex-col gap-y-8 lg:flex-row lg:items-center lg:justify-center lg:gap-x-12'>
        <div
          id='text'
          className='flex-1 text-center lg:text-left items-center justify-center order-2 lg:order-1 lg:min-w-[50%]'
        >
          <motion.h2
            // @ts-ignore
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            
            className='uppercase font-bold mt-8 ml-2 leading-[0.8] text-[40px] md:text-[60px] text-slate-300'
          >
            Stewart Batallas
          </motion.h2>
          <motion.div
            // @ts-ignore
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            className='mb-6 ml-2 text-[35px] md:text-[35px] lg:text-[45px]  xl:text-[60px] font-semibold uppercase'
          >
            <TypeAnimation
              sequence={['fullStack dev', 2500, ' ', 10]}
              speed={50}
              className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-indigo-300 leading-[1]'
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
          <motion.p
            // @ts-ignore
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            className='mx-2 lg:mx-0 text-[16px] sm:-[18px] md:text-[20px] lg:text-[25px]'
          >
            Soy un desarrollador web apasionado por la creación de páginas web y
            apps innovadoras.
            <br />
            Me encanta aprender nuevas tecnologías, aunque mi stack preferido es
            React y NodeJS.
          </motion.p>
          <motion.div
            // @ts-ignore
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            id='buttons'
            className='flex max-w-max gap-x-6 items-center mt-5 md:mt-8 mx-auto lg:mx-0'
          >
            <button className='w-[120px] bg-indigo-800 font-bold py-2 px-4 md:my-1 rounded-full'>
              Contactar
            </button>
            <a href='#'>
              <button className='w-[120px] bg-indigo-800 font-bold py-2 px-4 md:my-1 rounded-full'>
                Portfolio
              </button>
            </a>
            <div
              id='social-networks'
              className='flex text-[25px] lg:text-[40px] flex-row items-center mx-auto lg:mx-0 gap-x-6 max-w-max'
            >
              <a href='#'>
                <FaGithub />
              </a>
              <a href='#'>
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </div>
        <div
          className='w-full relative avatar-container
         order-1 lg:order-2 flex grow'
        >
          <Shapes />
          <motion.img
            src={avatar}
            alt='avatar-image'
            className='hidden xs:block avatar relative mx-auto w-auto h-full'
            // @ts-ignore
            variants={fadeIn('left', 0.3)}
            initial={{opacity: 0}}
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
          />
        </div>
      </div>
    </section>
  )
}
