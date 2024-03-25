import React from 'react'
import TopNavMain from '@/Layouts/TopNavLayout';
import { Head } from '@inertiajs/react';
import ShowProductsCpu from '@/Components/ShowProducts/ShowProductsCpu';


export default function Cpu({auth, p_cpus}) {
  return (
    <>
      <TopNavMain 
              header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Процессор</h2>}
              user = {auth.user} 
      /> 
      <Head title='Процессор'/>
      <div>
        <div className=' mt-28'>
        <div className=' rounded-t-2xl flex w-5/6 m-auto justify-between text-center items-center sticky font-semibold bg-slate-100'>
          <div className='w-1/6 p-2 m-2'>Нэр</div>
          <div className='w-1/12 p-2 m-2'>Цөмийн тоо</div>
          <div className='w-1/12 p-2 m-2'>Цөмийн хурд </div>
          <div className='w-1/12 p-2 m-2'>Дээд хурд </div>
          <div className=' w-1/12 p-2 m-2'>Тог зарцуулалт </div>
          <div className='w-1/6 p-2 m-2'>Кард </div>
          <div className='w-1/6 p-2 m-2'>Үнэ</div>
        </div>
          {p_cpus.map(p_cpu => 
            <ShowProductsCpu key={p_cpu.id} p_cpu={p_cpu} img={p_cpu.cpu_image}/>
            )}
        </div>
      </div>
    </>
  )
}
