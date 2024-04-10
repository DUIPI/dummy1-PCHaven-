import TopNavMain from '@/Layouts/TopNavLayout'
import SellDiskComp from '@/Components/Sell/SellDiskComp'
import React from 'react'
import { Head } from '@inertiajs/react'

export default function SellCoolerPage({auth}) {
  return (
    <>
      <TopNavMain 
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Диск зарах</h2>}
      />
      <Head title='Диск зарах' />

      <div className='w-3/5 m-auto'>
        <SellDiskComp />
      </div>
    </>
  )
}
