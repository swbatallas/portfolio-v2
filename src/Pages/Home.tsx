import avatar from '../assets/avatar.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Shapes from '../Components/Shapes'
import { Link } from 'react-scroll'

export default function Home() {
  return (
    <section id='home' className='w-full lg:h-screen lg:flex justify-center'>
      <div className='container mx-auto text-slate-100 flex flex-col gap-y-8 lg:flex-row lg:items-center lg:justify-center lg:gap-x-12'>
        <div
          id='text'
          className='flex-1 text-center lg:text-left items-center justify-center order-2 lg:order-1 lg:min-w-[50%]'
        >
          <motion.h2
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            className='uppercase font-bold mt-8 ml-2 leading-[0.8] text-[40px] md:text-[60px] text-slate-300'
          >
            Stewart Batallas
          </motion.h2>
          <motion.div
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
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            className='mx-2 text-[16px] sm:-[18px] md:text-[20px] lg:text-[25px]'
          >
            Soy un desarrollador web apasionado por la creación de páginas web y
            apps innovadoras.
            <br />
            Me encanta aprender nuevas tecnologías, aunque mi stack preferido es
            React y NodeJS.
          </motion.p>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            id='buttons'
            className='flex max-w-max gap-x-6 items-center mt-5 md:mt-8 mx-auto'
          >
            <Link
              to='contact'
              smooth={true}
              duration={500}
              className='capitalize cursor-pointer'
            >
              <button className='w-[120px] transition-colors bg-indigo-800 font-bold py-2 px-4 md:my-1 rounded-full hover:bg-indigo-600 duration-500'>
                Contactar
              </button>
            </Link>
            <Link
              to='portfolio'
              smooth={true}
              duration={500}
              offset={-160}
              className='capitalize cursor-pointer'
            >
              <button className='w-[120px] transition-colors bg-indigo-800 font-bold py-2 px-4 md:my-1 rounded-full hover:bg-indigo-600 duration-500'>
                Portfolio
              </button>
            </Link>
            <div
              id='social-networks'
              className='flex text-[25px] lg:text-[40px] flex-row items-center mx-auto lg:mx-0 gap-x-6 max-w-max'
            >
              <a
                href='https://github.com/swbatallas'
                target='blank'
                className='transition-all hover:-translate-y-2 hover:scale-125 duration-500'
              >
                <FaGithub />
              </a>
              <a
                href='https://www.linkedin.com/in/stewartbatallas/'
                target='blank'
                className='transition-all hover:-translate-y-2 hover:scale-125 duration-500'
              >
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
            variants={fadeIn('up', 0.3)}
            initial={{ opacity: 0 }}
            whileInView='show'
            viewport={{ once: false }}
          />
        </div>
      </div>
    </section>
  )
}
