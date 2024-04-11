import React from "react";
import TopNavMain from "@/Layouts/TopNavLayout";
import { Head, router } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Cpu({ auth, pcpus }) {
  const addToList = (cpu) => {
    router.post(route("add.cpu"), {
      cpu,
    });
  };
  return (
    <>
      <TopNavMain
        header={
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Процессор
          </h2>
        }
        user={auth.user}
      />
      <Head title="Процессор" />

      {/* <pre>{JSON.stringify(pcpus, undefined, 5)}</pre> */}

      <div className="py-12 flex flex-wrap">
        {pcpus.data.map((pcpu) => (
          <a
            key={pcpu.id}
            className="flex flex-col w-64 m-8 bg-white border border-gray-200 rounded-lg shadow md:flex-initial md:w-1/3 md:flex-row md:max-w-xl hover:bg-gray-100 "
            href="#"
          >
            <img
              src={pcpu.image}
              className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-64 md:rounded-none md:rounded-s-lg"
            />
            <span className="flex flex-col justify-between p-4 leading-normal">
              <div className="mb-3 text-2xl font-bold tracking-tight text-bronze">
                {pcpu.cpuname.cpu_name}
              </div>
              <div className="mb-1 font-normal text-gray-700">
                Цөмийн тоо: <b>{pcpu.core_count} </b>
              </div>
              <div className="mb-1 font-normal text-gray-700">
                Цөмийн хурд: <b>{pcpu.core_clock} Ghz</b>
              </div>
              <div className="mb-1 font-normal text-gray-700">
                Дээд хурд: <b>{pcpu.boost_clock} Ghz</b>
              </div>
              <div className="mb-1 font-normal text-gray-700">
                Тог зарцуулалт: <b>{pcpu.tdp} w</b>
              </div>
              <div className="mb-1 font-normal text-gray-700">
                Үнэ: <b>{pcpu.price}₮</b>
              </div>
              <button className="mt-12 flex">
                <PrimaryButton onClick={() => addToList(pcpu)}>
                  Сонгох
                </PrimaryButton>
              </button>
            </span>
          </a>
        ))}
      </div>
      <Pagination links={pcpus.meta.links} />
    </>
  );
}
