import { Link, useRouteError } from 'react-router-dom'

function Error() {
  const error = useRouteError()
  return (
    <div className='h-screen text-slate-300 flex justify-center items-center flex-col'>
      <h1>{error.message || error.statusText}</h1>
      <Link to={'/'}>Volver al Home</Link>
    </div>
  )
}

export default Error
