import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id='error-page' className='h-screen text-slate-50 text-center flex flex-col justify-center content-center'>
      <h1>Oops!</h1>
      <p>Aquí no hay nada!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
