import { Head, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import ShowSocket from '@/Components/ShowSocket';
import SocketBurtgel from '@/Components/SocketBurtgel';

export default function Adminside({ sockets }) {

  

  // const {data: dataC, 
  //   setData: setDataC, 
  //   post: postC, 
  //   processing: processingC, 
  //   reset: resetC, 
  //   errors: errorsC} = useForm({
  //     cpu_name: '',
  //     cpu_socket: ''
  // })

  

  // const submitCPU = (e) => {
  //   e.preventDefault();

  //   postC(route('masterside.store'), {onSuccess: () => resetC()});
  // }

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
        
      </div>
    </>
  )
}
