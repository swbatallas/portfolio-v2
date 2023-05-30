export default function Shapes() {
  return (
    <div id='bg-blur-color-container' className='absolute w-full max-w-lg'>
      <div className='absolute w-60 h-60 lg:w-64 lg:h-64 xl:w-72 xl:h-72 -left-4 top-20 bg-emerald-400 rounded-full mix-blend-overlay opacity-70 filter blur-2xl animate-blob'></div>
      <div className='absolute w-60 h-60 lg:w-64 lg:h-64 xl:w-72 xl:h-72 -right-1 top-20 bg-orange-400 rounded-full mix-blend-overlay opacity-70 filter blur-2xl animate-blob'></div>
      <div className='absolute w-60 h-60 lg:w-64 lg:h-64 xl:w-72 xl:h-72 left-20 top-20  bg-slate-300 rounded-full mix-blend-overlay opacity-70 filter blur-2xl animate-blob'></div>
    </div>
  )
}
