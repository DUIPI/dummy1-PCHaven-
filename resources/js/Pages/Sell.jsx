import TopNavMain from "@/Layouts/TopNavLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Sell(auth) {
  return (
    <>
      <div>
        <TopNavMain
          header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
              Оруулах зарын төрөл сонгох
            </h2>
          }
          user={auth.user}
        />
        <Head title="Зар оруулах" />

        <div className="w-1/2 m-auto font-semibold">
          <div className="my-3">
            <Link href={route("sell.cpu")}>Процессор</Link>
          </div>
          <div className="my-3">
            <Link href={route("sell.cooler")}>Хөргүүр</Link>
          </div>
          <div className="my-3">
            <Link href={route("sell.mobo")}>Эх хавтан</Link>
          </div>
          <div className="my-3">
            <Link href={route("sell.ram")}>Санах ой</Link>
          </div>
          <div className="my-3">
            <Link href={route("sell.disk")}>Диск</Link>
          </div>
          <div className="my-3">
            <Link href={route("sell.gpu")}>График кард</Link>
          </div>
          <div className="my-3">
            <Link href={route("sell.psu")}>Тэжээлийн блок</Link>
          </div>
          <div className="my-3">
            <Link href={route("sell.case")}>Кейс</Link>
          </div>
        </div>
      </div>
    </>
  );
}
