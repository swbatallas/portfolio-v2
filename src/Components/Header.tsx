import { useLocation } from 'react-router-dom'
import Nav from './Nav'
import { useNavigateToTop } from '../customHooks/useNavigateToTop'

export default function Header() {
  const location = useLocation()
  const navigateAndReset = useNavigateToTop()

  return (
    <header className='bg-dark-background bg-slate-50 sticky top-0 flex-wrap z-[20] mx-auto w-full flex items-center justify-between p-8 shadow-md'>
      <h1 className='font-bold text-lg'>Stewart Batallas</h1>
      {location.pathname === '/' ? (
        <Nav />
      ) : (
        <button onClick={() => navigateAndReset('/')}>Home</button>
      )}
    </header>
  )
}
