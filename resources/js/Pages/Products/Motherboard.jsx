import React from 'react'
import TopNavMain from '@/Layouts/TopNavLayout';
import { Head } from '@inertiajs/react';
import Mobo from '@/Components/ShowProducts/showProductsMobo'


export default function Motherboard({auth, mobos}) {
  return (
    <>
      <TopNavMain 
              header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Эх хавтан</h2>}
              user = {auth.user} 
      > 
      <Head title='Эх хавтан'/>
      <main>
        <div className=' rounded-t-2xl flex w-5/6 mt-5 m-auto justify-between text-center items-center sticky font-semibold bg-slate-100'>
          <div className='w-1/6 p-2 m-2'>Нэр</div>
          <div className='w-1/12 p-2 m-2'>CPU сокет</div>
          <div className='w-1/12 p-2 m-2'>Хэмжээний ангилал </div>
          <div className='w-1/12 p-2 m-2'>Нийт санах ой </div>
          <div className='w-1/12 p-2 m-2'>Санах ойн оролтын тоо </div>
          <div className='w-1/12 p-2 m-2'>Өнгө </div>
          <div className='w-1/6 p-2 m-2'>Үнэ</div>
        </div>
        {mobos.map(mobo=>
          <Mobo key={mobo.id} mobo={mobo} />
        )}
      </main>
      </TopNavMain >
    </>
  )
}
