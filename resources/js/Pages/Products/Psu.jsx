import React from 'react'
import TopNavMain from '@/Layouts/TopNavLayout';
import { Head, router } from "@inertiajs/react";
import Pagination from '@/Components/Pagination';
import PrimaryButton from '@/Components/PrimaryButton';


export default function Psu({auth, psus}) {
  const addToList = (psu) => {
    router.post(route("add.psu"), {
      psu,
    });
  };
  return (
    <>
      <TopNavMain 
              header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Тэжээлийн блок</h2>}
              user = {auth.user} 
      > 
      <Head title='Тэжээлийн блок'/>
      
      <div className="py-12 flex flex-wrap">
        {psus.data.map((psu) => (
          <a
            key={psu.id}
            className="flex flex-col w-64 m-8 bg-white border border-gray-200 rounded-lg shadow md:flex-initial md:w-1/3 md:flex-row md:max-w-xl hover:bg-gray-100 "
            href="#"
          >
            <img
              src={psu.image}
              className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-64 md:rounded-none md:rounded-s-lg"
            />
            <span className="flex flex-col justify-between p-4 leading-normal">
              <div className="mb-3 text-2xl font-bold tracking-tight text-bronze">
                {psu.name}
              </div>
              <div className="mb-1 font-normal text-gray-700">
                Бүтээмжийн үнэлгээ: <b>{psu.buteemj}</b>
              </div>
              <div className="mb-1 font-normal text-gray-700">
                Хүчин чадал: <b>{psu.watt} W</b>
              </div>
              <div className="mb-1 font-normal text-gray-700">
                Модуль: <b>{psu.modular}</b>
              </div>
              <div className="mb-1 font-normal text-gray-700">
                Өнгө: <b>{psu.color} мм</b>
              </div>
              <div className="mb-1 font-normal text-gray-700">
                Үнэ: <b>{psu.price}₮</b>
              </div>
              <button className="mt-12 flex">
              <PrimaryButton onClick={() => addToList(psu)}>Сонгох</PrimaryButton>
              </button>
                
            </span>
          </a>
        ))}
      </div>

      <Pagination links={psus.meta.links} />

      </TopNavMain >
    </>
  )
}
