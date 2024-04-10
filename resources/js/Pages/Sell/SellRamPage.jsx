import SellRamComp from '@/Components/Sell/SellRamComp'
import Footer from '@/Layouts/Footer'
import TopNavMain from '@/Layouts/TopNavLayout'
import React from 'react'

export default function SellRamPage({auth, rams_api}) {
  return (
    <>
      <div>
        <TopNavMain
          user={auth.user}
          header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Санах ой зарах</h2>}
          />
        <div className='w-2/4 m-auto'>
          
        <SellRamComp rams_api={rams_api} />
        </div>

      <Footer />
      </div>
    </>
  )
}
