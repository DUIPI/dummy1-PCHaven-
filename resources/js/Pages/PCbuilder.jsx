import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import Footer from "@/Layouts/Footer";
import TopNavMain from "@/Layouts/TopNavLayout";
import { Head, Link, router } from "@inertiajs/react";
import React from "react";

export default function PCbuilder({
  auth,
  cartItems,
  cartItems1,
  cartItems2,
  cartCooler,
  cartDisk,
  cartGpu,
  cartPsu,
  cartCase,
}) {
  const isEmpty = cartItems.length === 0;
  const isMoboEmpty = cartItems1.length === 0;
  const isRamEmpty = cartItems2.length === 0;
  const isCoolerEmpty = cartCooler.length === 0;
  const isDiskEmpty = cartDisk.length === 0;
  const isGpuEmpty = cartGpu.length === 0;
  const isPsuEmpty = cartPsu.length === 0;
  const isCaseEmpty = cartCase.length === 0;

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

  const removeCpu = (cpu) => {
    router.post(route("remove.cpu"), { cpu });
  };

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
            <p className="m-10 p-5 font-regular text-red-600 bg-red-200 rounded-xl">
              Сонгосон{" "}
              {cartItems.map((cpu) => (
                <b key={cpu.id} className=" font-semibold">
                  {cpu.cpuname.cpu_name}
                </b>
              ))}{" "}
              ба{" "}
              {cartItems1.map((mobo) => (
                <b key={mobo.id} className="font-semibold">
                  {mobo.name}
                </b>
              ))}{" "}
              хоорондоо тохирохгүй байна.
            </p>
          )}
        </span>
        <span>
          {moboAndRam && (
            <p className="m-10 p-5 font-semibold text-red-600 bg-red-200 rounded-xl">
              Сонгосон{" "}
              {cartItems2.map((ram) => (
                <b key={ram.id} className=" text-gray-800">
                  {ram.name}
                </b>
              ))}{" "}
              ба{" "}
              {cartItems1.map((mobo) => (
                <b key={mobo.id} className=" text-gray-800">
                  {mobo.name}
                </b>
              ))}{" "}
              хоорондоо тохирохгүй байна.
            </p>
          )}
        </span>
        <span>
          {!cpuAndMobo && !moboAndRam && (
            <p className="m-10 p-5 font-semibold text-green-600 bg-green-200 rounded-xl">
              Ямар нэгэн асуудал байхгүй! 😎
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
        <div className="mx-6">
          <p className="mx-5 my-3">Процессор</p>
          {isEmpty ? (
            <p className="my-5 mx-10">
              Та ямар нэгэн процессор сонгоогүй байна.
            </p>
          ) : (
            cartItems.map((cpu) => (
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
                <DangerButton onClick={() => removeCpu(cpu)}>X</DangerButton>
              </div>
            ))
          )}
          <Link className="mx-10" href={route("products.cpu")}>
            {isEmpty && <PrimaryButton>Сонгох</PrimaryButton>}
          </Link>
        </div>
        <div className="mx-6">
          <div className="mx-5 my-3 mt-10">
            <p>Эх хавтан</p>
          </div>

          {isMoboEmpty ? (
            <p className="my-5 mx-10">
              Та ямар нэгэн эх хавтан сонгоогүй байна.
            </p>
          ) : (
            cartItems1.map((mobo, index) => (
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
        <div className="mx-6">
          <div className="mx-5 my-3 mt-10">
            <p>Санах ой</p>
          </div>

          {isRamEmpty ? (
            <p className="my-5 mx-10">
              Та ямар нэгэн санах ой сонгоогүй байна.
            </p>
          ) : (
            cartItems2.map((ram, index) => (
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
        <div className="mx-6">
          <div className="mx-5 my-3 mt-10">
            <p>Хөргүүр</p>
          </div>
          {isCoolerEmpty ? (
            <p className="my-5 mx-10">Та ямар нэгэн хөргүүр сонгоогүй байна.</p>
          ) : (
            cartCooler.map((cooler, index) => (
              <div
                key={cooler.id}
                className="flex items-center justify-between w-5/6 px-10 m-auto border-solid border-2 border-slate-300 rounded-xl"
              >
                <span className="flex items-center">
                  <img className="h-16 w-16 mx-5 my-2" src={cooler.image} />
                  <b>{cooler.name}</b>
                </span>
                <p> {cooler.quantity} ш</p>
                <p> {cooler.price}₮</p>
                <p>{cooler.phone}</p>
                <DangerButton>X</DangerButton>
              </div>
            ))
          )}
          <Link className="mx-10" href={route("products.cooler")}>
            {isCoolerEmpty && <PrimaryButton>Сонгох</PrimaryButton>}
          </Link>
        </div>
        <div className="mx-6">
          <div className="mx-5 my-3 mt-10">
            <p>Диск</p>
          </div>
          {isDiskEmpty ? (
            <p className="my-5 mx-10">Та ямар нэгэн диск сонгоогүй байна.</p>
          ) : (
            cartDisk.map((disk, index) => (
              <div
                key={disk.id}
                className="flex items-center justify-between w-5/6 px-10 m-auto border-solid border-2 border-slate-300 rounded-xl"
              >
                <span className="flex items-center">
                  <img className="h-16 w-16 mx-5 my-2" src={disk.image} />
                  <b>{disk.name}</b>
                </span>
                <p> {disk.quantity} ш</p>
                <p> {disk.price}₮</p>
                <p>{disk.phone}</p>
                <DangerButton>X</DangerButton>
              </div>
            ))
          )}
          <Link className="mx-10" href={route("products.storage")}>
            {isDiskEmpty && <PrimaryButton>Сонгох</PrimaryButton>}
          </Link>
        </div>
        <div className="mx-6">
          <div className="mx-5 my-3 mt-10">
            <p>График кард</p>
          </div>
          {isGpuEmpty ? (
            <p className="my-5 mx-10">
              Та ямар нэгэн график кард сонгоогүй байна.
            </p>
          ) : (
            cartGpu.map((gpu, index) => (
              <div
                key={gpu.id}
                className="flex items-center justify-between w-5/6 px-10 m-auto border-solid border-2 border-slate-300 rounded-xl"
              >
                <span className="flex items-center">
                  <img className="h-16 w-16 mx-5 my-2" src={gpu.image} />
                  <b>{gpu.name}</b>
                </span>
                <p> {gpu.quantity} ш</p>
                <p> {gpu.price}₮</p>
                <p>{gpu.phone}</p>
                <DangerButton>X</DangerButton>
              </div>
            ))
          )}
          <Link className="mx-10" href={route("products.gpu")}>
            {isGpuEmpty && <PrimaryButton>Сонгох</PrimaryButton>}
          </Link>
        </div>
        <div className="mx-6">
          <div className="mx-5 my-3 mt-10">
            <p>Тэжээлийн блок</p>
          </div>
          {isPsuEmpty ? (
            <p className="my-5 mx-10">
              Та ямар нэгэн тэжээлийн блок сонгоогүй байна.
            </p>
          ) : (
            cartGpu.map((gpu, index) => (
              <div
                key={gpu.id}
                className="flex items-center justify-between w-5/6 px-10 m-auto border-solid border-2 border-slate-300 rounded-xl"
              >
                <span className="flex items-center">
                  <img className="h-16 w-16 mx-5 my-2" src={gpu.image} />
                  <b>{gpu.name}</b>
                </span>
                <p> {gpu.quantity} ш</p>
                <p> {gpu.price}₮</p>
                <p>{gpu.phone}</p>
                <DangerButton>X</DangerButton>
              </div>
            ))
          )}
          <Link className="mx-10" href={route("products.psu")}>
            {isPsuEmpty && <PrimaryButton>Сонгох</PrimaryButton>}
          </Link>
        </div>
        <div className="mx-6">
          <div className="mx-5 my-3 mt-10">
            <p>Кейс</p>
          </div>
          {isCaseEmpty ? (
            <p className="my-5 mx-10">Та ямар нэгэн кейс сонгоогүй байна.</p>
          ) : (
            cartCase.map((casee, index) => (
              <div
                key={casee.id}
                className="flex items-center justify-between w-5/6 px-10 m-auto border-solid border-2 border-slate-300 rounded-xl"
              >
                <span className="flex items-center">
                  <img className="h-16 w-16 mx-5 my-2" src={casee.image} />
                  <b>{casee.name}</b>
                </span>
                <p> {casee.quantity} ш</p>
                <p> {casee.price}₮</p>
                <p>{casee.phone}</p>
                <DangerButton>X</DangerButton>
              </div>
            ))
          )}
          <Link className="mx-10" href={route("products.case")}>
            {isCaseEmpty && <PrimaryButton>Сонгох</PrimaryButton>}
          </Link>
        </div>
      </div>
      {/* <pre>{JSON.stringify(cartItems1, undefined, 3)}</pre> */}
      <Footer />
    </>
  );
}
