import React from "react";
import TopNavMain from "@/Layouts/TopNavLayout";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Pagination from "@/Components/Pagination";

export default function Motherboard({ auth, pmobos }) {
  return (
    <>
      <TopNavMain
        header={
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Эх хавтан
          </h2>
        }
        user={auth.user}
      >
        <Head title="Эх хавтан" />
      <pre>{JSON.stringify(pmobos, undefined, 5)}</pre>


        <div className="py-12 flex flex-wrap">
          {pmobos.data.map((pmobo) => (
            <a
              key={pmobo.id}
              className="flex flex-col w-64 m-8 bg-white border border-gray-200 rounded-lg shadow md:flex-initial md:w-1/3 md:flex-row md:max-w-xl hover:bg-gray-100 "
              href="#"
            >
              <img
                src={pmobo.image}
                className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-64 md:rounded-none md:rounded-s-lg"
              />
              <span className="flex flex-col justify-between p-4 leading-normal">
                <div className="mb-3 text-2xl font-bold tracking-tight text-bronze">
                  {pmobo.name}
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Сокет: <b>{pmobo.socketInfo.socket_name} </b>
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Хэмжээний төрөл: <b>{pmobo.hemjee} </b>
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Дэмжих санах ой: <b>{pmobo.memory_max} Gb</b>
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Ram оролтын тоо: <b>{pmobo.memory_slot} ш</b>
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Өнгө: <b>{pmobo.color} </b>
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Үнэ: <b>{pmobo.price}₮</b>
                </div>
                <button className="mt-12 flex">
                  <PrimaryButton>Сонгох</PrimaryButton>
                </button>
              </span>
            </a>
          ))}
        </div>
        <Pagination links={pmobos.meta.links} />
      </TopNavMain>
    </>
  );
}
