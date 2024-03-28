import React from 'react'

export default function showProductsMobo({mobo}) {
  return (
    <>
        <div className='flex w-5/6 m-auto my-3 justify-between text-center items-center border-t-2'>
            <div className='w-1/6 p-5'>{mobo.name}</div>
            <div className='w-1/12 p-5'>{mobo.socket}</div>
            <div className='w-1/12 p-5'>{mobo.hemjee}</div>
            <div className='w-1/12 p-5'>{mobo.memory_max} Gb</div>
            <div className=' w-1/12 p-5'>{mobo.memory_slot} ш</div>
            <div className='w-1/6 p-5'>{mobo.color} </div>
            <div className='w-1/8 p-5'>{mobo.price}₮</div>
      </div>
    </>
  )
}
