import { Link } from '@inertiajs/react'
import pic from '/public/logo/PCHaven1.png'

export default function Footer() {
  return (
    <footer className='bg-dark w-full'>
      <div className='flex p-10 items-center justify-between w-4/5 m-auto'>
        <img src={pic} className=' h-32 w-auto'></img>
        <div className=' text-slate-200 flex w-3/5 justify-between'>
          <ul className='m-5'>
            <li className=' border-b-2 border-gray-400/50 font-bold text-xl mb-2 p-1'>Цэсүүд</li>
            <li><Link href='/'>Зарууд</Link></li>
            <li><Link href=''>Зар нэмэх</Link></li>
            <li><Link href=''>Угсрах</Link></li>
          </ul>
          <ul className='m-5'>
            <li className=' border-b-2 border-gray-400/50 font-bold text-xl mb-2 p-1'>Компани</li>
            <li><Link href='/'>Бидний тухай</Link></li>
            <li><Link href=''>Үйлчилгээний журам</Link></li>
            <li><Link href=''>Хамтарч ажиллах</Link></li>
          </ul>
          <ul className='m-5'>
            <li className=' border-b-2 border-gray-400/50 font-bold text-xl mb-2 p-1'>Сошиал</li>
            <li><Link href='/'>Facebook</Link></li>
            <li><Link href=''>Instagram</Link></li>
            <li><Link href=''>Youtube</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
