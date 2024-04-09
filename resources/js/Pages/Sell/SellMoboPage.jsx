import SellMoboComp from '@/Components/Sell/SellMoboComp'
import Footer from '@/Layouts/Footer'
import TopNavMain from '@/Layouts/TopNavLayout'
import React from 'react'

export default function SellMoboPage({auth, mobos}) {
  return (
    <>
        <div>
        <TopNavMain
          user={auth.user}
          header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Эх хавтан зарах</h2>}
          />
        <div className='w-2/4 m-auto'>
        <SellMoboComp mobos={mobos} />
        </div>

      <Footer />
      </div>
    </>
  )
}
