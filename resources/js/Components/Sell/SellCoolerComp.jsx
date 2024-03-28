import { useForm } from '@inertiajs/react';
import React from 'react'
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';


export default function SellCpuComp() {
  const {data, setData, post, processing, reset, errors} = useForm({
    cooler_name: '',
    fan_rpm: '',
    noice_lvl: '',
    cooler_color: '',
    cooler_size: '',
    cooler_price: ''
    });

    const submit = (e) => {
    e.preventDefault();

    post(route('store.cooler'), {onSuccess: () => reset()});
    }
    
  return (
  <div className="max-w-2xl p-8 m-5">
    <form onSubmit={submit}>

{/* Ner */}
        <InputLabel htmlFor="cooler_name" value="Нэр" />
      <TextInput
          value={data.cooler_name}
          placeholder="Хөргүүрийн нэр*"
          className="mt-1 block w-full"
          onChange={(e) => setData('cooler_name', e.target.value)}
      />
      <InputError message={errors.cooler_name} className=' mb-2' />
{/* Cores */}
      <InputLabel htmlFor="fan_rpm" value="Эргэлтийн хурд" />
      <TextInput
          type='number'
          value={data.fan_rpm}
          placeholder="Сэнсний 1 минутад хийх эргэлтийн тоо (RPM)"
          className="mt-1 block w-full"
          onChange={(e) => setData('fan_rpm', e.target.value)}
      />
      <InputError message={errors.fan_rpm} className=' mb-2' />
{/* Core speed */}
      <InputLabel htmlFor="noice_lvl" value="Дууны хэмжээ" />
      <TextInput
          type='number'
          value={data.noice_lvl}
          placeholder="Сэнсний гаргах дууны хэмжээ (дБ)"
          className="mt-1 block w-full"
          onChange={(e) => setData('noice_lvl', e.target.value)}
      />
      <InputError message={errors.noice_lvl} className=' mb-2' />
{/* Boost clock */}
      <InputLabel htmlFor="cooler_color" value="Өнгө" />
      <TextInput
          value={data.cooler_color}
          placeholder="Хөргүүрийн өнгө"
          className="mt-1 block w-full"
          onChange={(e) => setData('cooler_color', e.target.value)}
          
      />
      <InputError message={errors.cooler_color} className=' mb-2' />
{/* Tog */}
      <InputLabel htmlFor="cooler_size" value="Сэнсний диаметр" />
      <TextInput
          type='number'
          value={data.cooler_size}
          placeholder="Сэнсний диаметрийн хэмжээ (мм)"
          className="mt-1 block w-full"
          onChange={(e) => setData('cooler_size', e.target.value)}
      />
      <InputError message={errors.cooler_size} className=' mb-2' />
{/* Graphic */}
      <InputLabel htmlFor="cooler_price" value="Үнэ" />
      <TextInput
          value={data.cooler_price}
          placeholder="Хөргүүрийн үнийг зөвхөн тоогоор оруулна уу."
          className="mt-1 block w-full"
          onChange={(e) => setData('cooler_price', e.target.value)}
      />
      <InputError message={errors.cooler_price} className=' mb-2' />

      <PrimaryButton className="ms-4 my-4" disabled={processing}>
        Нийтлэх
      </PrimaryButton>
    </form>
    
    </div>  
  )
}
