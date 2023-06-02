import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='h-screen text-slate-300 flex justify-center items-center flex-col'>
      <Link to={'/'}>Volver al Home</Link>
    </div>
  )
}

export default Error
