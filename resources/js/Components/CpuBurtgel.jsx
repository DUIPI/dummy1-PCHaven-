import React from 'react'
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';

export default function CpuBurtgel() {

    const {data, setData, post, processing, reset, errors} = useForm({
        cpu_name: '',
        cpu_socket: ''
        });

        const submit = (e) => {
        e.preventDefault();

        post(route('masterside.cpu'), {onSuccess: () => reset()});
        }
        
  return (
    <div className="max-w-2xl p-8 m-5">
      <form key={2} onSubmit={submit}>
          <InputLabel htmlFor="cpu_name" value="CPU нэр" />
        <TextInput
            value={data.cpu_name}
            placeholder="CPU нэрийг оруулах"
            className="mt-1 block w-full"
            onChange={(e) => setData('cpu_name', e.target.value)}
            required
        />
        <InputError message={errors.cpu_name} className='mt-2' />

        <InputLabel htmlFor="cpu_socket" value="CPU -ний сокетны нэр" />
        <TextInput
            value={data.cpu_socket}
            placeholder="CPU сокетны нэрийг оруулах"
            className="mt-1 block w-full"
            onChange={(e) => setData('cpu_socket', e.target.value)}
            required
        />
        <InputError message={errors.cpu_socket} className='mt-2' />

        <PrimaryButton className="ms-4 my-4" disabled={processing}>
          Бүртгэх
        </PrimaryButton>
      </form>
      
      </div>  
  )
}
