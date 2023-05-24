import { fadeIn } from '../variants'
import { ProjectObj } from '../vite-env'
import { motion } from 'framer-motion'

export default function ProjectComponent({
  name,
  description,
  link,
  image,
  colorAccent,
}: ProjectObj) {
  return (
    <motion.div
      variants={fadeIn('up', 0.3, 0.5)}
      initial={{ opacity: 0 }}
      whileInView='show'
      viewport={{ once: false }}
      key={name}
      className='group relative m-4 border-2 border-indigo-300/70 max-w-xl max-h-72 rounded-md overflow-hidden'
    >
      <div className='group-hover:bg-black/70 w-full h-full z-40 absolute transition-all duration-300 flex flex-col items-center justify-center'>
        <div className='text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
          <h3 className='uppercase font-extrabold'>{name}</h3>
          <p className='mx-5 md:mx-20'>{description}</p>
          <a
            href={link}
            target='blank'
            className='uppercase font-extrabold hover:text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-300/10 transition-all duration-500'
          >
            ver detalles
          </a>
        </div>
      </div>
      <img
        src={image}
        alt={`imagen del proyecto ${name}`}
        className='object-cover group-hover:scale-125 transition-all duration-300'
      />
    </motion.div>
  )
}
