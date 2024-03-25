import SellCpuComp from '@/Components/Sell/SellCpuComp'
import TopNavMain from '@/Layouts/TopNavLayout'
import React from 'react'

export default function Sell(auth) {
  return (
    <>
      <div>
        <TopNavMain
          user={auth.user}
        />
        <div className='w-2/4 m-auto'>
        <SellCpuComp />
        </div>


      </div>
    </>
  )
}
