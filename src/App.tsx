import Header from './Components/Header'
import Home from './Pages/Home'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <div id='about'>
        <Outlet />
      </div>
    </>
  )
}
