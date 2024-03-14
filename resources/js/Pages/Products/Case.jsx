import React from 'react'
import TopNavMain from '@/Layouts/TopNavLayout';
import { Head } from '@inertiajs/react';


export default function Case(auth) {
  return (
    <>
      <TopNavMain 
              header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Кейс</h2>}
              user = {auth.user} 
      > 
      <Head title='Кейс'/>
      <main>

      </main>
      </TopNavMain >
    </>
  )
}
