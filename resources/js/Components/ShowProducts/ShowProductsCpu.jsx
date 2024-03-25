import React from 'react'

export default function ShowProductsCpu({p_cpu}) {
  return (
    <>
      <div className='flex w-5/6 m-auto my-3 justify-between text-center items-center border-t-2'>
        <div className='w-1/6 p-5'>{p_cpu.p_cpu_name}</div>
        <div className='w-1/12 p-5'>{p_cpu.core_count}</div>
        <div className='w-1/12 p-5'>{p_cpu.core_clock} Ghz</div>
        <div className='w-1/12 p-5'>{p_cpu.boost_clock} Ghz</div>
        <div className=' w-1/12 p-5'>{p_cpu.tdp} Ватт</div>
        <div className='w-1/6 p-5'>{p_cpu.int_graphics} </div>
        <div className='w-1/6 p-5'>{p_cpu.p_cpu_price}₮</div>
      </div>
    </>
  )
}
