import { useState } from 'react'
import { HiMenuAlt1, HiX } from 'react-icons/hi'

type headerObject = {
  id: number
  title: string
}

export default function Nav() {
  const menuList: Array<headerObject> = [
    {
      id: 1,
      title: 'Home',
    },
    {
      id: 2,
      title: 'Sobre mi',
    },
    {
      id: 3,
      title: 'Portfolio',
    },
    {
      id: 4,
      title: 'Contacto',
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
            <a href='#'>{link.title}</a>
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
                  <a href='#'>{link.title}</a>
                ))}
              </div>
      )}
    </>
  )
}
