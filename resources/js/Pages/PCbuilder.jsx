import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import TopNavMain from "@/Layouts/TopNavLayout";
import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";

export default function PCbuilder({
  auth,
  cartItems,
  cartItems1,
  cartItems2,
}) {
  const isEmpty = cartItems.length === 0;
  const isMoboEmpty = cartItems1.length === 0;
  const isRamEmpty = cartItems2.length === 0;

  // Compare sockets
  const cpuSocket = !isEmpty ? cartItems[0].cpuname.cpu_socket : null;
  const moboSocket = !isMoboEmpty ? cartItems1[0].socket : null;
  const ramSocket = !isRamEmpty
    ? cartItems2.reduce((acc, ram) => {
        acc.push(
          ram.mem_socket,
          ram.mem_socket1,
          ram.mem_socket2,
          ram.mem_socket3
        );
        return acc;
      }, [])
    : [];
  const cpuAndMobo = cpuSocket !== null && moboSocket !== null && cpuSocket !== moboSocket;
  const moboAndRam =
    moboSocket !== null && ramSocket.length > 0 && !ramSocket.some((ramsocket) => ramsocket === moboSocket);

    const [items, setItem] = useState([cartItems])
  const handleRemove = (removingItem) => {
    const newItems = items.filter((item)=> item !== removingItem);
    setItem(newItems);
  }

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
        <span>
          {cpuAndMobo && (
            <p className="m-10 text-red-500">
              Сонгосон эх хавтан ба CPU -үүд хоорондоо тохирохгүй байна.
            </p>
          )}
        </span>
        <span>
          {moboAndRam && (
            <p className="m-10 text-red-500">
              Сонгосон Санах ой ба Эх хавтан хоорондоо тохирохгүй байна.
            </p>
          )}
        </span>

        <div>
          <p className="m-12">Процессор</p>
          {isEmpty ? (
            <p className="my-5 mx-10">
              Та ямар нэгэн процессор сонгоогүй байна.
            </p>
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
                <p> {cpu.price}₮</p>
                <DangerButton onClick={() => handleRemove(cpu.id)}>X</DangerButton>
              </div>
            ))
          )}
          <Link className="mx-10" href={route("products.cpu")}>
            {isEmpty && <PrimaryButton>Сонгох</PrimaryButton>}
          </Link>
        </div>
        <div>
          <div className="mx-12 mt-8">
            <p>Эх хавтан</p>
          </div>

          {isMoboEmpty ? (
            <p className="my-5 mx-10">
              Та ямар нэгэн эх хавтан сонгоогүй байна.
            </p>
          ) : (
            cartItems1.map((mobo) => (
              <div
                key={mobo.id}
                className="flex items-center justify-between w-3/5 m-auto"
              >
                <span className="flex items-center">
                  <img className="h-16 w-16 mx-5 my-2" src={mobo.image} />
                  <b>{mobo.name}</b>
                </span>
                <p> {mobo.quantity} ш</p>
                <p> {mobo.price}₮</p>
                <DangerButton>X</DangerButton>
              </div>
            ))
          )}
          <Link className="mx-10" href={route("products.mobo")}>
            {isMoboEmpty && <PrimaryButton>Сонгох</PrimaryButton>}
          </Link>
        </div>
        <div>
          <div className="mx-12 mt-8">
            <p>Санах ой</p>
          </div>

          {isRamEmpty ? (
            <p className="my-5 mx-10">
              Та ямар нэгэн санах ой сонгоогүй байна.
            </p>
          ) : (
            cartItems2.map((ram) => (
              <div
                key={ram.id}
                className="flex items-center justify-between w-3/5 m-auto"
              >
                <span className="flex items-center">
                  <img className="h-16 w-16 mx-5 my-2" src={ram.image} />
                  <b>{ram.name}</b>
                </span>
                <p> {ram.quantity} ш</p>
                <p> {ram.price}₮</p>
                <DangerButton>X</DangerButton>
              </div>
            ))
          )}
          <Link className="mx-10" href={route("products.memory")}>
            {isRamEmpty && <PrimaryButton>Сонгох</PrimaryButton>}
          </Link>
        </div>
      </div>
    </>
  );
}
