import React from 'react'
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';


export default function SellCpuComp() {
  const {data, setData, post, processing, reset, errors} = useForm({
    cpu_image: '',
    p_cpu_name: '',
    core_count: '',
    core_clock: '',
    boost_clock:'',
    tdp: '',
    int_graphics: '',
    p_cpu_price: '',
    cpu_tailbar: ''
    });

    const submit = (e) => {
    e.preventDefault();

    post(route('store.cpu'), {onSuccess: () => reset()});
    }
    
  return (
  <div className="max-w-2xl p-8 m-5">
    <form onSubmit={submit} encType='multipart/form-data'>

{/* Zurag */}
  <InputLabel htmlFor="cpu_image" value="Зураг" />
      <TextInput
          name="cpu_image"
          type="file"
          value={data.cpu_image}
          placeholder="CPU нэрийг оруулах"
          className="mt-1 block w-full"
          onChange={(e) => setData('cpu_image', e.target.value)}
      />
      <InputError message={errors.cpu_image} className=' mb-2' />

{/* Ner */}
        <InputLabel htmlFor="p_cpu_name" value="Нэр" />
      <TextInput
          value={data.p_cpu_name}
          placeholder="CPU нэр*"
          className="mt-1 block w-full"
          onChange={(e) => setData('p_cpu_name', e.target.value)}
      />
      <InputError message={errors.p_cpu_name} className=' mb-2' />
{/* Cores */}
      <InputLabel htmlFor="core_count" value="Цөмийн тоо" />
      <TextInput
          type='number'
          value={data.core_count}
          placeholder="CPU-ний цөмийн тоо*"
          className="mt-1 block w-full"
          onChange={(e) => setData('core_count', e.target.value)}
      />
      <InputError message={errors.core_count} className=' mb-2' />
{/* Core speed */}
      <InputLabel htmlFor="core_clock" value="Цөмийн хурд" />
      <TextInput
          type='number'
          value={data.core_clock}
          placeholder="CPU-ний цөмийн энгийн хурд*"
          className="mt-1 block w-full"
          onChange={(e) => setData('core_clock', e.target.value)}
      />
      <InputError message={errors.core_clock} className=' mb-2' />
{/* Boost clock */}
      <InputLabel htmlFor="boost_clock" value="Цөмийн дээд хурд" />
      <TextInput
          type='number'
          value={data.boost_clock}
          placeholder="CPU-ний цөмийн дээд хурд"
          className="mt-1 block w-full"
          onChange={(e) => setData('boost_clock', e.target.value)}
          
      />
      <InputError message={errors.boost_clock} className=' mb-2' />
{/* Tog */}
      <InputLabel htmlFor="tdp" value="Тог зарцуулалт" />
      <TextInput
          type='number'
          value={data.tdp}
          placeholder="CPU-ний тог зарцуулалтын хэмжээ"
          className="mt-1 block w-full"
          onChange={(e) => setData('tdp', e.target.value)}
      />
      <InputError message={errors.tdp} className=' mb-2' />
{/* Graphic */}
      <InputLabel htmlFor="int_graphics" value="Кард" />
      <TextInput
          value={data.int_graphics}
          placeholder="CPU тань өөр дээрээ кардтай бол нэрийг нь бичнэ үү."
          className="mt-1 block w-full"
          onChange={(e) => setData('int_graphics', e.target.value)}
      />
      <InputError message={errors.int_graphics} className=' mb-2' />
{/* Tailbar */}
      <InputLabel htmlFor="cpu_tailbar" value="Тайлбар" />
      <textarea
          value={data.cpu_tailbar}
          placeholder="CPU-ний талаарх нэмэлт тайлбар"
          className="mt-1 mb-5 block w-full"
          onChange={(e) => setData('cpu_tailbar', e.target.value)}
      />
      <InputError message={errors.cpu_tailbar} className=' mb-2' />
{/* Price */}
      <InputLabel htmlFor="p_cpu_price" value="Үнэ" />
      <TextInput
          type='number'
          placeholder="Үнийн мэдээллийг зөвхөн тоогоор оруулна уу*"
          value={data.p_cpu_price}
          className="mt-1 block w-full"
          onChange={(e) => setData('p_cpu_price', e.target.value)}
      />
      <InputError message={errors.p_cpu_price} className=' mb-2' />

      <PrimaryButton className="ms-4 my-4" disabled={processing}>
        Нийтлэх
      </PrimaryButton>
    </form>
    
    </div>  
  )
}