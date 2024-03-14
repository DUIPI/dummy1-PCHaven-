import React from 'react'
import TopNavMain from '@/Layouts/TopNavLayout';
import { Head } from '@inertiajs/react';


export default function Gpu(auth) {
  return (
    <>
      <TopNavMain 
              header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">График кард</h2>}
              user = {auth.user} 
      > 
      <Head title='График кард'/>
      <main>

      </main>
      </TopNavMain >
    </>
  )
}
