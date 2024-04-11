import React from 'react'
import TopNavMain from '@/Layouts/TopNavLayout';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import Pagination from '@/Components/Pagination';


export default function Memory({auth, show_mems}) {
  return (
    <>
      <TopNavMain 
              header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Санах ой</h2>}
              user = {auth.user} 
      > 
      <Head title='Санах ой'/>

      <div className="py-12 flex flex-wrap">
          {show_mems.data.map((memory) => (
            <a
              key={memory.id}
              className="flex flex-col w-64 m-8 bg-white border border-gray-200 rounded-lg shadow md:flex-initial md:w-1/3 md:flex-row md:max-w-xl hover:bg-gray-100 "
              href="#"
            >
              <img
                src={memory.image}
                className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-64 md:rounded-none md:rounded-s-lg"
              />
              <span className="flex flex-col justify-between p-4 leading-normal">
                <div className="mb-3 text-2xl font-bold tracking-tight text-bronze">
                  {memory.name}
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Gen: <b>{memory.genInfo.memory_gen}</b>
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Хурд: <b>{memory.speed} MHz</b>
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Модуль: <b>{memory.modules} Gb</b>
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Өнгө: <b>{memory.color} </b>
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Үнэ: <b>{memory.price}₮</b>
                </div>
                <button className="mt-12 flex">
                  <PrimaryButton>Сонгох</PrimaryButton>
                </button>
              </span>
            </a>
          ))}
        </div>
        <Pagination links={show_mems.meta.links} />
      </TopNavMain >
    </>
  )
}
