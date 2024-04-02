import React from "react";
import TopNavMain from "@/Layouts/TopNavLayout";
import { Head } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Case({ auth, cases }) {
  return (
    <>
      <TopNavMain
        header={
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Кейс
          </h2>
        }
        user={auth.user}
      >
        <Head title="Кейс" />
        <div className="py-12 flex flex-wrap">
          {cases.data.map((kase) => (
            <a
              key={kase.id}
              className="flex flex-col w-64 m-8 bg-white border border-gray-200 rounded-lg shadow md:flex-initial md:w-1/3 md:flex-row md:max-w-xl hover:bg-gray-100 "
              href="#"
            >
              <img
                src={kase.image}
                className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-64 md:rounded-none md:rounded-s-lg"
              />
              <span className="flex flex-col justify-between p-4 leading-normal">
                <div className="mb-3 text-2xl font-bold tracking-tight text-bronze">
                  {kase.name}
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Төрөл: <b>{kase.type} </b>
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Өнгө: <b>{kase.color} </b>
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Хаалтын төрөл: <b>{kase.s_panel}</b>
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Үнэ: <b>{kase.price}₮</b>
                </div>
                <button className="mt-12 flex">
                  <PrimaryButton>Сонгох</PrimaryButton>
                </button>
              </span>
            </a>
          ))}
        </div>
        <Pagination links={cases.meta.links} />
      </TopNavMain>
    </>
  );
}
