import TopNavMain from '@/Layouts/TopNavLayout'
import React from 'react'
import { Head } from '@inertiajs/react'
import SellPsuComp from '@/Components/Sell/SellPsuComp'

export default function SellCoolerPage({auth}) {
  return (
    <>
      <TopNavMain 
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Тэжээлийн блок зарах</h2>}
      />
      <Head title='Тэжээлийн блок зарах' />

      <div className='w-3/5 m-auto'>
        <SellPsuComp />
      </div>
    </>
  )
}
