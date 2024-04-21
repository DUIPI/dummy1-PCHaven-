import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import Footer from "@/Layouts/Footer";
import TopNavMain from "@/Layouts/TopNavLayout";
import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";

export default function PCbuilder({ auth, cartItems, cartItems1, cartItems2 }) {
  const [cpuCartItems, setCpuCartItems] = useState(cartItems);
  const [moboCartItems, setMoboCartItems] = useState(cartItems1);
  const [ramCartItems, setRamCartItems] = useState(cartItems2);

  const removeCpuItem = (index) => {
    const newCpuCartItems = [...cpuCartItems];
    newCpuCartItems.splice(index, 1);
    setCpuCartItems(newCpuCartItems);
  };

  const removeMoboItem = (index) => {
    const newMoboCartItems = [...moboCartItems];
    newMoboCartItems.splice(index, 1);
    setMoboCartItems(newMoboCartItems);
  };

  const removeRamItem = (index) => {
    const newRamCartItems = [...ramCartItems];
    newRamCartItems.splice(index, 1);
    setRamCartItems(newRamCartItems);
  };

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
  const cpuAndMobo =
    cpuSocket !== null && moboSocket !== null && cpuSocket !== moboSocket;
  const moboAndRam =
    moboSocket !== null &&
    ramSocket.length > 0 &&
    !ramSocket.some((ramsocket) => ramsocket === moboSocket);

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

      <div className=" mb-11">
        <span>
          {cpuAndMobo && (
            <p className="m-10 p-5 font-semibold text-red-600 bg-red-200 rounded-xl">
              Сонгосон эх хавтан ба CPU -үүд хоорондоо тохирохгүй байна.
            </p>
          )}
        </span>
        <span>
          {moboAndRam && (
            <p className="m-10 p-5 font-semibold text-red-600 bg-red-200 rounded-xl">
              Сонгосон Санах ой ба Эх хавтан хоорондоо тохирохгүй байна.
            </p>
          )}
        </span>
        <div className="w-4/5 m-auto bg-slate-200 flex justify-between p-2 px-4 rounded-xl font-semibold">
          <p>Нэр</p>
          <p>Ширхэг</p>
          <p>Үнэ</p>
          <p>Утас</p>
          <p></p>
        </div>
        <div>
          <p className="mx-5 my-3">Процессор</p>
          {isEmpty ? (
            <p className="my-5 mx-10">
              Та ямар нэгэн процессор сонгоогүй байна.
            </p>
          ) : (
            cpuCartItems.map((cpu, index) => (
              <div
                key={cpu.id}
                className="flex items-center justify-between w-5/6 px-10 m-auto border-solid border-2 border-slate-300 rounded-xl"
              >
                <span className="flex items-center">
                  <img className="h-16 w-16 mx-5 my-2" src={cpu.image} />
                  <b>{cpu.cpuname.cpu_name}</b>
                </span>
                <p> {cpu.quantity} ш</p>
                <p> {cpu.price}₮</p>
                <p>{cpu.phone}</p>
                <DangerButton onClick={() => removeCpuItem(index)}>
                  X
                </DangerButton>
              </div>
            ))
          )}
          <Link className="mx-10" href={route("products.cpu")}>
            {isEmpty && <PrimaryButton>Сонгох</PrimaryButton>}
          </Link>
        </div>
        <div>
          <div className="mx-5 my-3 mt-10">
            <p>Эх хавтан</p>
          </div>

          {isMoboEmpty ? (
            <p className="my-5 mx-10">
              Та ямар нэгэн эх хавтан сонгоогүй байна.
            </p>
          ) : (
            moboCartItems.map((mobo, index) => (
              <div
                key={mobo.id}
                className="flex items-center justify-between w-5/6 px-10 m-auto border-solid border-2 border-slate-300 rounded-xl"
              >
                <span className="flex items-center">
                  <img className="h-16 w-16 mx-5 my-2" src={mobo.image} />
                  <b>{mobo.name}</b>
                </span>
                <p> {mobo.quantity} ш</p>
                <p> {mobo.price}₮</p>
                <p>{mobo.phone}</p>
                <DangerButton onClick={() => removeMoboItem(index)}>
                  X
                </DangerButton>
              </div>
            ))
          )}
          <Link className="mx-10" href={route("products.mobo")}>
            {isMoboEmpty && <PrimaryButton>Сонгох</PrimaryButton>}
          </Link>
        </div>
        <div>
          <div className="mx-5 my-3 mt-10">
            <p>Санах ой</p>
          </div>

          {isRamEmpty ? (
            <p className="my-5 mx-10">
              Та ямар нэгэн санах ой сонгоогүй байна.
            </p>
          ) : (
            ramCartItems.map((ram, index) => (
              <div
                key={ram.id}
                className="flex items-center justify-between w-5/6 px-10 m-auto border-solid border-2 border-slate-300 rounded-xl"
              >
                <span className="flex items-center">
                  <img className="h-16 w-16 mx-5 my-2" src={ram.image} />
                  <b>{ram.name}</b>
                </span>
                <p> {ram.quantity} ш</p>
                <p> {ram.price}₮</p>
                <p>{ram.phone}</p>
                <DangerButton onClick={() => removeRamItem(index)}>
                  X
                </DangerButton>
              </div>
            ))
          )}
          <Link className="mx-10" href={route("products.memory")}>
            {isRamEmpty && <PrimaryButton>Сонгох</PrimaryButton>}
          </Link>
        </div>
      </div>
      {/* <pre>{JSON.stringify(cartItems1, undefined, 3)}</pre> */}
      <Footer />
    </>
  );
}
