import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
type headerObject = {
  id: number
  title: string
}

export default function Header() {
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

  const [nav, setNav] = useState(false)
  function handleNav() {
    setNav(!nav)
  }

  return (
    <>
      <header className='w-full bg-slate-100 h-[90px] mx-auto px-4 shadow-md flex justify-between items-center'>
        <div>
          <h1 className='text-2xl font-bold uppercase'>Stewart Batallas</h1>
        </div>
        <div className='hidden md:flex'>
          <nav>
            <ul className='flex gap-[10px] items-center'>
              {menuList.map(link => (
                <li className='font-medium text-lg'>{link.title}</li>
              ))}
            </ul>
          </nav>
        </div>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div
          className={
            nav
              ? 'w-full absolute bg-slate-100 top-[90px] left-0 flex justify-center text-center'
              : 'absolute left-[-100%]'
          }
        >
          <nav>
            <ul>
              {menuList.map(link => (
                <li className='font-medium text-lg'>{link.title}</li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
