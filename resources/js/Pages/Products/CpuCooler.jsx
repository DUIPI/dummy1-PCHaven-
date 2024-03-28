import React from 'react'
import TopNavMain from '@/Layouts/TopNavLayout';
import { Head } from '@inertiajs/react';
import Cooler from '@/Components/ShowProducts/ShowProductCooler';


export default function CpuCooler({auth, coolers}) {
  return (
    <>
      <TopNavMain 
              header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Хөргүүр</h2>}
              user = {auth.user} 
      /> 
      <Head title='Хөргүүр'/>

      <div>
        <div className=' mt-28'>
          <div className=' rounded-t-2xl flex w-5/6 m-auto justify-between text-center items-center sticky font-semibold bg-slate-100'>
            <div className='w-1/6 p-2 m-2'>Нэр</div>
            <div className='w-1/12 p-2 m-2'>Эргэлтийн хурд</div>
            <div className='w-1/12 p-2 m-2'>Дууны хэмжээ </div>
            <div className='w-1/12 p-2 m-2'>Өнгө </div>
            <div className=' w-1/12 p-2 m-2'>Сэнсний диаметр </div>
            <div className='w-1/6 p-2 m-2'>Үнэ</div>
          </div>
          {coolers.map(cooler=>
            <Cooler key={cooler.id} cooler={cooler}/>
          )}
        </div>
      </div>
        

    </>
  )
}
