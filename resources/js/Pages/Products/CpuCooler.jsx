import React from "react";
import TopNavMain from "@/Layouts/TopNavLayout";
import { Head, router } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function CpuCooler({ auth, coolers, queryParams = null }) {
  const addToList = (cooler) => {
    router.post(route("add.cooler"), {
      cooler,
    });
  };
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }

    router.get(route("products.cooler"), queryParams);
  };

  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;
    searchFieldChanged(name, e.target.value);
  };
  return (
    <>
      <TopNavMain
        header={
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Хөргүүр
          </h2>
        }
        user={auth.user}
      />
      <Head title="Хөргүүр" />

      <div className="flex justify-end mr-8">
        <TextInput
          placeholder="Хайх.."
          defaultValue={queryParams.name}
          onBlur={(e) => searchFieldChanged("name", e.target.value)}
          onKeyPress={(e) => onKeyPress("name", e)}
        />
      </div>
      <div className="py-12 flex flex-wrap">
        {coolers.data.map((cooler) => (
          <a
            key={cooler.id}
            className="flex flex-col w-64 m-8 bg-white border border-gray-200 rounded-lg shadow md:flex-initial md:w-1/3 md:flex-row md:max-w-xl hover:bg-gray-100 "
            href="#"
          >
            <img
              src={cooler.image}
              className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-64 md:rounded-none md:rounded-s-lg"
            />
            <span className="flex flex-col justify-between p-4 leading-normal">
              <div className="mb-3 text-2xl font-bold tracking-tight text-bronze">
                {cooler.name}
              </div>
              <div className="mb-1 font-normal text-gray-700">
                Эргэлтийн хурд: <b>{cooler.fan_rpm} bpm</b>
              </div>
              <div className="mb-1 font-normal text-gray-700">
                Дууны хэмжээ: <b>{cooler.noice_lvl} дБ</b>
              </div>
              <div className="mb-1 font-normal text-gray-700">
                Өнгө: <b>{cooler.color}</b>
              </div>
              <div className="mb-1 font-normal text-gray-700">
                Хэмжээ: <b>{cooler.size} мм</b>
              </div>
              <div className="mb-1 font-normal text-gray-700">
                Үнэ: <b>{cooler.price}₮</b>
              </div>
              <button className="mt-12 flex">
                <PrimaryButton onClick={() => addToList(cooler)}>
                  Сонгох
                </PrimaryButton>
              </button>
            </span>
          </a>
        ))}
      </div>
      <Pagination links={coolers.meta.links} />
    </>
  );
}
