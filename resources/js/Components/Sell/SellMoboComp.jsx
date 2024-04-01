import React from 'react'
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm } from '@inertiajs/react';
import InputLabel from '../InputLabel';
import TextInput from '../TextInput';

export default function SellMoboComp() {

    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        socket: '',
        hemjee: '',
        memory_max: '',
        memory_slot: '',
        color: '',
        price: ''
    });
 
    const submit = (e) => {
        e.preventDefault();
        post(route('store.mobo'), { onSuccess: () => reset() });
    };

  return (
    <>        
        <div className="max-w-2xl p-8 m-5">
    <form onSubmit={submit}>

{/* Ner */}
        <InputLabel htmlFor="name" value="Нэр" />
      <TextInput
          value={data.name}
          placeholder="Эх хавтангийн нэр*"
          className="mt-1 block w-full"
          onChange={(e) => setData('name', e.target.value)}
      />
      <InputError message={errors.name} className=' mb-2' />

        {/* socket */}
      <InputLabel htmlFor="socket" value="CPU сокет" />
      <TextInput
          value={data.socket}
          placeholder="Эх хавтангийн CPU сокетын нэр*"
          className="mt-1 block w-full"
          onChange={(e) => setData('socket', e.target.value)}
      />
      <InputError message={errors.socket} className=' mb-2' />
      
        {/* Hemjee */}
      <InputLabel htmlFor="hemjee" value="Ангилал" />
      <TextInput
          value={data.hemjee}
          placeholder="Эх хавтангийн хэмжээний ангилал*"
          className="mt-1 block w-full"
          onChange={(e) => setData('hemjee', e.target.value)}
      />
      <InputError message={errors.hemjee} className=' mb-2' />
      
      {/* memory max */}
      <InputLabel htmlFor="memory_max" value="Санах ойн хязгаар" />
      <TextInput
          value={data.memory_max}
          placeholder="Эх хавтангийн дэмжих санах ойн дээд хамжээ*"
          className="mt-1 block w-full"
          onChange={(e) => setData('memory_max', e.target.value)}
      />
      <InputError message={errors.memory_max} className=' mb-2' />
      
      {/* memory_slot */}
      <InputLabel htmlFor="memory_slot" value="Санах ойн оролт" />
      <TextInput
          value={data.memory_slot}
          placeholder="Эх хавтангийн санах ойн оролтын тоо*"
          className="mt-1 block w-full"
          onChange={(e) => setData('memory_slot', e.target.value)}
      />
      <InputError message={errors.memory_slot} className=' mb-2' />

      {/* color */}
      <InputLabel htmlFor="color" value="Өнгө" />
      <TextInput
          value={data.color}
          placeholder="Эх хавтангийн нэр*"
          className="mt-1 block w-full"
          onChange={(e) => setData('color', e.target.value)}
      />
      <InputError message={errors.color} className=' mb-2' />
      
      {/* price */}
      <InputLabel htmlFor="price" value="Үнэ" />
      <TextInput
          value={data.price}
          placeholder="Эх хавтангийн үнэ*"
          className="mt-1 block w-full"
          onChange={(e) => setData('price', e.target.value)}
      />
      <InputError message={errors.price} className=' mb-2' />
      
      <PrimaryButton className="ms-4 my-4" disabled={processing}>
        Нийтлэх
      </PrimaryButton>
    </form>
    
    </div>
    </>
  )
}
