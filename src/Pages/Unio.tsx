function Unio() {
  return (
    <section className='text-slate-300'>
      <div id='unio-presentation' className='pt-20 mx-1'>
        <h1 className='uppercase font-extrabold text-[40px] lg:text-[50px] text-red-600'>
          unio app
        </h1>
        <h2 className='font-bold text-[34px] text-slate-300/70'>
          La enciclopedia interactiva sobre los personajes de Marvel.
        </h2>
        <p className='text-[20px] pt-10'>
          Conoce a los personajes de la compañia de comics mas famosa.
        </p>
      </div>
      <img
        src='/unio-home.png'
        alt='pantalla de home de unio'
        className='rounded-[1rem] w-80 mx-auto border-4 mt-10 border-red-300/20'
      />
      <div id='unio-sign' className='mt-10 bg-black text-slate-100 flex flex-col justify-center'>
        <div id='unio-sign'>
          <h1 className='font-extrabold text-[40px] ml-3 mr-12 pt-10'>
            Inicia sesion o sé un visitante anónimo
          </h1>
          <p className='mx-2'>
            Si inicias sesión, podrás interactuar más con la app permitiendo
            explotar al máximo las funcionalidades
          </p>
          <img
            src='/unio-sign.png'
            alt='pantalla de inicio de sesion de unio'
            className='rounded-[1rem] w-80 mx-auto h-auto border-4 mt-10 border-red-300/20'
          />
        </div>
        <div id='unio-characters'>
          <h1 className='font-extrabold text-[40px] ml-3 mr-12 pt-20'>
            Vista avanzada del personaje
          </h1>
          <p className='mx-2'>
            Con acceso a más información en la web de marvel y a comentarios.
          </p>
          <img
            src='/unio-personaje.png'
            alt='pantalla de personaje de unio'
            className='rounded-[1rem] w-80 mx-auto h-auto border-4 mt-10 border-red-300/20'
          />
        </div>
        <div>
          <h1 className='font-extrabold text-[40px] ml-3 mr-12 pt-20'>
            Ranking global y favoritos
          </h1>
          <p className='mx-2'>
            Puedes ver tu personaje más valorado por ti y el personaje mejor
            valorado en general
          </p>
          <img
            src='/unio-ranking.png'
            alt='pantalla de personaje de unio'
            className='rounded-[1rem] w-80 mx-auto h-auto border-4 mt-10 border-red-300/20'
          />
        </div>
        <div>
          <h1 className='font-extrabold text-[40px] ml-3 mr-12 pt-20'>
            Ajustes
          </h1>
          <p className='mx-2'>
            Aquí puedes cambiar tus preferencias sobre la app y de tu cuenta
          </p>
          <img
            src='/unio-settings.png'
            alt='pantalla de personaje de unio'
            className='rounded-[1rem] w-80 mx-auto h-auto border-4 mt-10 border-red-300/20'
          />
        </div>
        <button className='bg-red-500 rounded-lg py-2 px-5 text-center font-bold mx-auto my-5' disabled={true}>
          Acceso deshabilitado temporalmente
        </button>
      </div>
    </section>
  )
}

export default Unio
