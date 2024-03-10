import { Head, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Adminside() {

  const {data, setData, post} = useForm({
    socket_name: ''
  })

  const submit = (e) => {
    e.preventDefault();

    post('/create-socket');
  }

  return (
    <>
      <Head title="Эд анги бүртгэл" />
      <form onSubmit={submit}>
        <div>
          <InputLabel htmlFor="socket_name" value="Сокет нэр" />

        <TextInput
            id="socket_name"
            name="socket_name"
            value={data.socket_name}
            className="mt-1 block w-2/4"
            onChange={(e) => setData('socket_name', e.target.value)}
            required
        />
        </div>
        <div>
        <PrimaryButton className="ms-4">
          Бүртгэх
        </PrimaryButton>
        </div>
        
      </form>
    </>
  )
}
