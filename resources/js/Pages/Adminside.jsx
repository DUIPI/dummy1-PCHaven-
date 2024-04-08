import { Head } from "@inertiajs/react";
import ShowSocket from "@/Components/Admin/ShowSocket";
import SocketBurtgel from "@/Components/Admin/SocketBurtgel";
import CpuBurtgel from "@/Components/Admin/CpuBurtgel";
import ShowCpu from "@/Components/Admin/ShowCpu";
import RamBurtgel from "@/Components/Admin/RamBurtgel";

export default function Adminside({ sockets, cpus }) {
  return (
    <>
      <Head title="Эд анги бүртгэл" />
      <div className="flex flex-wrap m-5 mt-10">
        <SocketBurtgel />

        <h1>
          <b>Sockets</b>
        </h1>
        <div>
          {sockets.map((socket) => (
            <ShowSocket key={socket.id} socket={socket} />
          ))}
        </div>

        {/* CPU burtgel */}
        <CpuBurtgel />

        <h1>
          <b>Cpu</b>
        </h1>
        <div>
          {cpus.map((cpu) => (
            <ShowCpu key={cpu.id} cpu={cpu} />
          ))}
        </div>

        <RamBurtgel />
      </div>
    </>
  );
}
