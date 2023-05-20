import { useState } from 'react'
import { HiMenuAlt1, HiX } from 'react-icons/hi'
import { Link } from 'react-scroll'

type headerObject = {
  id: number
  title: string
  link: string
}

export default function Nav() {
  const menuList: Array<headerObject> = [
    {
      id: 1,
      title: 'home',
      link: 'home',
    },
    {
      id: 2,
      title: 'sobre mi',
      link: 'about',
    },
    {
      id: 3,
      title: 'portfolio',
      link: 'portfolio',
    },
    {
      id: 4,
      title: 'contacto',
      link: 'contact',
    },
  ]

  const [isOpen, setisOpen] = useState(false)

  function toggleNav() {
    setisOpen(!isOpen)
  }

  return (
    <>
      <nav className='flex w-1/3 justify-end'>
        <div className='hidden w-full md:flex justify-between'>
          {menuList.map((navElement: headerObject) => (
            <Link
              to={navElement.link}
              smooth={true}
              duration={500}
              key={navElement.title}
              className='capitalize cursor-pointer'
            >
              {navElement.title}
            </Link>
          ))}
        </div>
        <div className='md:hidden'>
          <button onClick={toggleNav}>
            {isOpen ? <HiX /> : <HiMenuAlt1 />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className='flex basis-full flex-col items-center mt-6'>
          {menuList.map((navElement: headerObject) => (
            <Link
              to={navElement.link}
              smooth={true}
              duration={500}
              key={navElement.title}
              className='capitalize cursor-pointer'
            >
              {navElement.title}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
