import React from 'react'

export default function ShowProductCooler(clr) {
  return (
    <>
      <div className='flex w-5/6 m-auto my-3 justify-between text-center items-center border-t-2'>
        <div className='w-1/6 p-5'>{clr.cooler_name}</div>
        <div className='w-1/12 p-5'>{clr.fan_rpm} rpm</div>
        <div className='w-1/12 p-5'>{clr.noice_lvl} дБ</div>
        <div className='w-1/12 p-5'>{clr.cooler_color}</div>
        <div className=' w-1/12 p-5'>{clr.cooler_size} мм</div>
        <div className='w-1/6 p-5'>{clr.cooler_price}₮</div>
      </div>
    </>
  )
}
