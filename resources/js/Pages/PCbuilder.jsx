import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import TopNavMain from "@/Layouts/TopNavLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function PCbuilder({ auth, cartItems }) {
  const isEmpty = cartItems.length === 0;
  return (
    <>
      <TopNavMain
        header={
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Компьютер угсрах
          </h2>
        }
        user={auth.user}
      />
      <Head title="Угсрах" />

      <div>
        <strong className="m-12">Процессор</strong>
        {/* <pre>{JSON.stringify(cartItems, undefined, 3)}</pre> */}
        {isEmpty ? (
          <p className="my-5 mx-10">Та ямар нэгэн процессор сонгоогүй байна.</p>
        ) : (
          cartItems.map((cpu) => (
            <div
              key={cpu.id}
              className="flex items-center justify-between w-3/5 m-auto"
            >
              <span className="flex items-center">
                <img className="h-16 w-16 mx-5 my-2" src={cpu.image} />
                <b>{cpu.cpuname.cpu_name}</b>
              </span>
              <p> {cpu.quantity} ш</p>
              <strong> {cpu.price}₮</strong>
              <DangerButton>Хасах</DangerButton>
            </div>
          ))
        )}
        <Link className="mx-10" href={route("products.cpu")}>
          {isEmpty && <PrimaryButton>Add CPU</PrimaryButton>}
        </Link>

        <div></div>
      </div>
    </>
  );
}
