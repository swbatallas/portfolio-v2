import Header from '../Components/Header'
function Unio() {
  return (
    <section>
      <Header />
      <div id='unio-presentation' className='pt-20 lg:pt-10 mx-3'>
        <h1 className='uppercase font-extrabold text-[40px] lg:text-[50px] text-red-600'>
          unio app
        </h1>
        <h2 className='font-bold text-[34px] text-slate-300/70'>
          La enciclopedia interactiva sobre los personajes de Marvel.
        </h2>
      </div>
      <div className='text-slate-300 flex flex-col lg:flex-row lg:justify-center lg:items-center'>
        <h2 className='text-[20px] pt-10 lg:text-[28px] lg:text-center lg:pt-0 lg:mt-[-15rem] lg:mx-28 lg:w-[30%]'>
          Conoce a los personajes de la compañia de comics mas famosa.
        </h2>
        <img
          src='/unio-home.png'
          alt='pantalla de home de unio'
          className='rounded-[1rem] w-80 mx-auto border-4 mt-10 border-red-300/20 lg:max-h-[75vh] lg:w-auto'
        />
      </div>
      <div className='mt-10 bg-black text-slate-100 flex flex-col'>
        <div
          id='unio-sign'
          className='min-h-screen flex flex-col lg:flex-row lg:justify-center lg:items-center'
        >
          <div className='mx-3 lg:text-center lg:w-[30%] lg:mx-28'>
            <h1 className='font-extrabold text-[40px] pt-10 lg:pt-0'>
              Inicia sesion o sé un visitante anónimo
            </h1>
            <p className='lg:text-[20px]'>
              Si inicias sesión, podrás interactuar más con la app permitiendo
              explotar al máximo las funcionalidades
            </p>
          </div>
          <img
            src='/unio-sign.png'
            alt='pantalla de inicio de sesion de unio'
            className='rounded-[1rem] w-80 mx-auto border-4 mt-10 border-red-300/20 lg:max-h-[75vh] lg:w-auto'
          />
        </div>
        <div
          id='unio-characters'
          className='min-h-screen flex flex-col lg:flex-row lg:justify-center lg:items-center'
        >
          <div className='mx-3 lg:text-center lg:w-[30%] lg:mx-28 lg:order-2'>
            <h1 className='font-extrabold text-[40px] pt-10 lg:pt-0'>
              Vista avanzada del personaje
            </h1>
            <p className='lg:text-[20px]'>
              Con acceso a más información en la web de marvel y a comentarios.
            </p>
          </div>
          <img
            src='/unio-personaje.png'
            alt='pantalla de personaje de unio'
            className='rounded-[1rem] w-80 mx-auto border-4 mt-10 border-red-300/20 lg:max-h-[75vh] lg:w-auto'
          />
        </div>
        <div
          id='unio-ranking'
          className='min-h-screen flex flex-col lg:flex-row lg:justify-center lg:items-center'
        >
          <div className='mx-3 lg:text-center lg:w-[30%] lg:mx-28'>
            <h1 className='font-extrabold text-[40px] ml-3 mr-12 pt-20'>
              Ranking global y favoritos
            </h1>
            <p className='mx-2'>
              Puedes ver tu personaje más valorado por ti y el personaje mejor
              valorado en general
            </p>
          </div>
          <img
            src='/unio-ranking.png'
            alt='pantalla de personaje de unio'
            className='rounded-[1rem] w-80 mx-auto border-4 mt-10 border-red-300/20 lg:max-h-[75vh] lg:w-auto'
          />
        </div>
        <div
          id='unio-settings'
          className='min-h-screen flex flex-col lg:flex-row lg:justify-center lg:items-center'
        >
          <div className='mx-3 lg:text-center lg:w-[30%] lg:mx-28 lg:order-2'>
            <h1 className='font-extrabold text-[40px] ml-3 mr-12 pt-20'>
              Ajustes
            </h1>
            <p className='mx-2'>
              Aquí puedes cambiar tus preferencias sobre la app y de tu cuenta
            </p>
          </div>
          <img
            src='/unio-settings.png'
            alt='pantalla de personaje de unio'
            className='rounded-[1rem] w-80 mx-auto border-4 mt-10 border-red-300/20 lg:max-h-[75vh] lg:w-auto'
          />
        </div>
        <button
          className='bg-red-500 rounded-lg py-2 px-5 text-center font-bold mx-auto my-5'
          disabled={true}
        >
          Acceso deshabilitado temporalmente
        </button>
      </div>
    </section>
  )
}

export default Unio
