import { Head } from '@inertiajs/react';
import ShowSocket from '@/Components/ShowSocket';
import SocketBurtgel from '@/Components/SocketBurtgel';
import CpuBurtgel from '@/Components/CpuBurtgel';
import ShowCpu from '@/Components/ShowCpu'

export default function Adminside({ sockets, cpus }) {


  return (
    <>
      <Head title="Эд анги бүртгэл" />
      <div className='flex m-5 mt-10'>
        <SocketBurtgel />

        <h1><b>Sockets</b></h1>
      <div>
        {sockets.map(socket => 
            <ShowSocket key={socket.id} socket={socket} />
          )}
      </div>

        {/* CPU burtgel */}
        <CpuBurtgel />

      <h1><b>Cpu</b></h1>
        <div>
          {cpus.map(cpu =>
          <ShowCpu key={cpu.id} cpu={cpu} />
            )}
        </div>
      </div>
    </>
  )
}
