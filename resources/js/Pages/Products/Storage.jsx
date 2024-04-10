import React from "react";
import TopNavMain from "@/Layouts/TopNavLayout";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Pagination from "@/Components/Pagination";

export default function Storage({ auth, disks }) {
  return (
    <>
      <TopNavMain
        header={
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Диск
          </h2>
        }
        user={auth.user}
      >
        <Head title="Диск" />

        <div className="py-12 flex flex-wrap">
          {disks.data.map((disk) => (
            <a
              key={disk.id}
              className="flex flex-col w-64 m-8 bg-white border border-gray-200 rounded-lg shadow md:flex-initial md:w-1/3 md:flex-row md:max-w-xl hover:bg-gray-100 "
              href="#"
            >
              <img
                src={disk.image}
                className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-64 md:rounded-none md:rounded-s-lg"
              />
              <span className="flex flex-col justify-between p-4 leading-normal">
                <div className="mb-3 text-2xl font-bold tracking-tight text-bronze">
                  {disk.name}
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Нийт багтаамж: <b>{disk.capacity} TB</b>
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Төрөл: <b>{disk.type} </b>
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Cache багтаамж: <b>{disk.cache} MB</b>
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Оролтын төрөл: <b>{disk.interface}</b>
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Үнэ: <b>{disk.price}₮</b>
                </div>
                <button className="mt-12 flex">
                  <PrimaryButton>Сонгох</PrimaryButton>
                </button>
              </span>
            </a>
          ))}
        </div>
        <Pagination links={disks.meta.links} />
      </TopNavMain>
    </>
  );
}
