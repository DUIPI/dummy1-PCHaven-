import TopNavMain from '@/Layouts/TopNavLayout'
import React from 'react'
import { Head } from '@inertiajs/react'
import SellGpuComp from '@/Components/Sell/SellGpuComp'

export default function SellCoolerPage({auth}) {
  return (
    <>
      <TopNavMain 
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">График кард зарах</h2>}
      />
      <Head title='График кард зарах' />

      <div className='w-3/5 m-auto'>
        <SellGpuComp />
      </div>
    </>
  )
}
