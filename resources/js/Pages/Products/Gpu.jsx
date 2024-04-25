import React from "react";
import TopNavMain from "@/Layouts/TopNavLayout";
import { Head, router } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";

export default function Gpu({ auth, gpus, queryParams = null }) {
  const addToList = (gpu) => {
    router.post(route("add.gpu"), {
      gpu,
    });
  };
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }

    router.get(route("products.gpu"), queryParams);
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
            График кард
          </h2>
        }
        user={auth.user}
      >
        <Head title="График кард" />
        <div className="flex justify-end">
          <TextInput
            placeholder="Хайх.."
            defaultValue={queryParams.name}
            onBlur={(e) => searchFieldChanged("name", e.target.value)}
            onKeyPress={(e) => onKeyPress("name", e)}
          />
        </div>
        <div className="py-12 flex flex-wrap">
          {gpus.data.map((gpu) => (
            <a
              key={gpu.id}
              className="flex flex-col w-64 m-8 bg-white border border-gray-200 rounded-lg shadow md:flex-initial md:w-1/3 md:flex-row md:max-w-xl hover:bg-gray-100 "
              href="#"
            >
              <img
                src={gpu.image}
                className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-64 md:rounded-none md:rounded-s-lg"
              />
              <span className="flex flex-col justify-between p-4 leading-normal">
                <div className="mb-3 text-2xl font-bold tracking-tight text-bronze">
                  {gpu.name}
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Чипсет: <b>{gpu.chipset}</b>
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Санах ой: <b>{gpu.memory} GB</b>
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Цөмийн хурд: <b>{gpu.c_clock} Mhz</b>
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Цөмийн дээд хурд: <b>{gpu.b_clock} Mhz</b>
                </div>
                <div className="mb-1 font-normal text-gray-700">
                  Үнэ: <b>{gpu.price}₮</b>
                </div>
                <button className="mt-12 flex">
                  <PrimaryButton onClick={() => addToList(gpu)}>
                    Сонгох
                  </PrimaryButton>
                </button>
              </span>
            </a>
          ))}
        </div>
        <Pagination links={gpus.meta.links} />
      </TopNavMain>
    </>
  );
}
