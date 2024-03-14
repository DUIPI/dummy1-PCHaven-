import { Head, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import ShowSocket from '@/Components/ShowSocket';
import SocketBurtgel from '@/Components/SocketBurtgel';
import CpuBurtgel from '@/Components/CpuBurtgel';

export default function Adminside({ sockets }) {


  return (
    <>
      <Head title="Эд анги бүртгэл" />
      <div className='flex'>
        <SocketBurtgel />

        <h1><b>Sockets</b></h1>
      <div>
        {sockets.map(socket => 
            <ShowSocket key={socket.id} socket={socket} />
          )}
      </div>

        {/* CPU burtgel */}
        <CpuBurtgel />
      </div>
    </>
  )
}
