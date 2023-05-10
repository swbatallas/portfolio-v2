import avatar from '../assets/avatar.png'
import { FaGithub } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import Shapes from '../Components/shapes'

export default function Home() {
  return (
    <section id='home w-full'>
      <div className='container mx-auto text-slate-100'>
        <h2 className='uppercase font-bold mt-8 ml-1'>Stewart Batallas</h2>
        <div className='mb-6 ml-1 text-[25px] md:text-[35px] lg:text-[60px] font-semibold uppercase'>
          <span className='text-slate-400'>I am a </span>
          <TypeAnimation
            sequence={['fullStack dev', 2000, ' ', 10]}
            speed={50}
            className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-indigo-300 leading-[1]'
            wrapper='span'
            repeat={Infinity}
          />
        </div>
        <p className='w-5/6 ml-1'>
          Soy un desarrollador web apasionado por la creación de páginas web y
          apps innovadoras.
          <br />
          Me encanta aprender nuevas tecnologías, aunque mi stack preferido es
          React y NodeJS.
        </p>
        <div className='w-fit relative avatar-container'>
          <Shapes />
          <img src={avatar} alt='avatar-image' className='avatar relative' />
        </div>
        <></>
      </div>
    </section>
  )
}
