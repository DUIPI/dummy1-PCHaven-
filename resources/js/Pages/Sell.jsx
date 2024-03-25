import TopNavMain from '@/Layouts/TopNavLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function Sell(auth) {
  return (
    <>
      <div>
        <TopNavMain
          header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Оруулах зарын төрөл сонгох</h2>}
          user={auth.user}
        />
          <Head title='Зар оруулах' />

        <div className='w-1/2 m-auto font-semibold'>
          <Link href={route('sell.cpu')}>Процессор</Link>
        </div>


      </div>
    </>
  )
}
