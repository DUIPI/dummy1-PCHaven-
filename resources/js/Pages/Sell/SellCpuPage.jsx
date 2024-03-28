import SellCpuComp from '@/Components/Sell/SellCpuComp'
import TopNavMain from '@/Layouts/TopNavLayout'
import React from 'react'

export default function Sell(auth) {
  return (
    <>
      <div>
        <TopNavMain
          user={auth.user}
          header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Процессор зарах</h2>}
          />
        <div className='w-2/4 m-auto'>
        <SellCpuComp />
        </div>


      </div>
    </>
  )
}
