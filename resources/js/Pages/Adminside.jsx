import { Head, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import ShowSocket from '@/Components/ShowSocket';

export default function Adminside({ sockets }) {

  const {data, setData, post, processing, reset, errors} = useForm({
    socket_name: ''
  })

  const submit = (e) => {
    e.preventDefault();

    post(route('masterside.store'), {onSuccess: () => reset()});
  }

  return (
    <>
      <Head title="Эд анги бүртгэл" />

      <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <form onSubmit={submit}>
            <InputLabel htmlFor="socket_name" value="Сокет нэр" />

          <TextInput
              value={data.socket_name}
              placeholder="Сокетны нэрийг оруулах"
              className="mt-1 block w-2/4"
              onChange={(e) => setData('socket_name', e.target.value)}
              required
          />
          <InputError message={errors.socket_name} className='mt-2' />
          <PrimaryButton className="ms-4 mt-4" disabled={processing}>
            Бүртгэх
          </PrimaryButton>
        </form>

        <h1>Sockets</h1>
        <div>
          {sockets.map(socket => 
              <ShowSocket key={socket.id} socket={socket} />
            )}
        </div>
      </div>
    </>
  )
}
