import TopNavMain from '@/Layouts/TopNavLayout'
import SellCoolerComp from '@/Components/Sell/SellCoolerComp'
import React from 'react'
import { Head } from '@inertiajs/react'

export default function SellCoolerPage({auth}) {
  return (
    <>
      <TopNavMain 
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Хөргүүр зарах</h2>}
      />
      <Head title='Хөргүүр зарах' />

      <div className='w-3/5 m-auto'>
        <SellCoolerComp />
      </div>
    </>
  )
}
