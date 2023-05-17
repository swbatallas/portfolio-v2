import { useState } from 'react'
import { HiMenuAlt1, HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'

type headerObject = {
  id: number
  title: string
  href: string
}

export default function Nav() {
  const menuList: Array<headerObject> = [
    {
      id: 1,
      title: 'Home',
      href: '/',
    },
    {
      id: 2,
      title: 'Sobre mi',
      href: 'about',
    },
    {
      id: 3,
      title: 'Portfolio',
      href: 'portfolio',
    },
    {
      id: 4,
      title: 'Contacto',
      href: 'contacto',
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
          {menuList.map((link: headerObject) => (
            <Link to={link.href} key={link.title}>
              {link.title}
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
          {menuList.map((link: headerObject) => (
            <Link to={link.href} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
