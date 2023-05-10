export default function Shapes() {
  return (
    <div id='bg-blur-color-container' className='absolute w-full max-w-lg'>
      <div className='absolute w-72 h-72 -left-4 top-20 bg-purple-300 rounded-full mix-blend-overlay opacity-70 filter blur-2xl animate-blob'></div>
      <div className='absolute w-72 h-72 -right-1 top-20 bg-yellow-300 rounded-full mix-blend-overlay opacity-70 filter blur-2xl animate-blob'></div>
      <div className='absolute w-72 h-72 left-20 top-20  bg-pink-300 rounded-full mix-blend-overlay opacity-70 filter blur-2xl animate-blob'></div>
    </div>
  )
}
