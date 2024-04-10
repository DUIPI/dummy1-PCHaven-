import TopNavMain from '@/Layouts/TopNavLayout'
import React from 'react'
import { Head } from '@inertiajs/react'
import SellCaseComp from '@/Components/Sell/SellCaseComp'

export default function SellCoolerPage({auth}) {
  return (
    <>
      <TopNavMain 
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Кейс зарах</h2>}
      />
      <Head title='Кейс зарах' />

      <div className='w-3/5 m-auto'>
        <SellCaseComp />
      </div>
    </>
  )
}
