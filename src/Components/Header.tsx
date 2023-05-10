import Nav from './Nav'

export default function Header() {
  return (
    <header className='bg-dark-background bg-slate-50 sticky top-0 flex-wrap z-[20] mx-auto w-full flex items-center justify-between p-8 shadow-md'>
      <h1 className='font-bold text-lg'>Stewart Batallas</h1>
      <Nav />
    </header>
  )
}
