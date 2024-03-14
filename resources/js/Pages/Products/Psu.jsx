import React from 'react'
import TopNavMain from '@/Layouts/TopNavLayout';
import { Head } from '@inertiajs/react';


export default function Psu(auth) {
  return (
    <>
      <TopNavMain 
              header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Тэжээлийн блок</h2>}
              user = {auth.user} 
      > 
      <Head title='Тэжээлийн блок'/>
      <main>

      </main>
      </TopNavMain >
    </>
  )
}
