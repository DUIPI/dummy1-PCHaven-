import React from "react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import InputLabel from "../InputLabel";
import TextInput from "../TextInput";
import SelectInput from "../SelectInput";

export default function SellMoboComp({ mobos }) {
  const { data, setData, post, processing, reset, errors } = useForm({
    name: "",
    hemjee: "",
    memory_max: "",
    memory_slot: "",
    color: "",
    price: "",
    image: null,
    phone: ""
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("store.mobo"), {
      onSuccess: () => reset(),
      forceFormData: true,
    });
  };

  return (
    <>
      <div className="max-w-2xl p-8 m-5">
        <form onSubmit={submit}>
          {/* Zurag */}
          <InputLabel htmlFor="image" value="Зураг" />

          <TextInput
            id="image"
            type="file"
            name="image"
            className="mt-1 block w-full bg-slate-100 py-4 text-center rounded-lg"
            onChange={(e) => setData("image", e.target.files[0])}
          />
          <InputError message={errors.image} className=" mb-2" />

          {/* Ner */}
          <InputLabel htmlFor="name" value="Нэр" />
          <TextInput
            value={data.name}
            placeholder="Эх хавтангийн нэр*"
            className="mt-1 block w-full"
            onChange={(e) => setData("name", e.target.value)}
          />
          <InputError message={errors.name} className=" mb-2" />

          {/* Socket */}
          <InputLabel htmlFor="socket" value="CPU сокет" />
          <SelectInput
            id="socket"
            name="socket"
            value={data.socket}
            className="mt-1 block w-full mb-4"
            onChange={(e) => setData("socket", e.target.value)}
          >
            <option>CPU сокетын нэр сонгох*</option>
            {mobos.data.map((mobo) => (
              <option value={mobo.id} key={mobo.id}>
                {mobo.socket_name}
              </option>
            ))}
          </SelectInput>
          <InputError message={errors.socket} className=" mb-2" />

          {/* Hemjee */}
          <InputLabel htmlFor="hemjee" value="Ангилал" />
          <SelectInput
            value={data.hemjee}
            className="mt-1 block w-full mb-4"
            onChange={(e) => setData("hemjee", e.target.value)}
          >
            <option>Хэмжээний ангилал сонгох*</option>
            <option>Mini-ITX</option>
            <option>Micro-ATX</option>
            <option>ATX</option>
            <option>E-ATX</option>
          </SelectInput>
          <InputError message={errors.hemjee} className=" mb-2" />

          {/* memory max */}
          <InputLabel htmlFor="memory_max" value="Санах ойн хязгаар" />
          <TextInput
            value={data.memory_max}
            type="number"
            placeholder="Эх хавтангийн дэмжих санах ойн дээд хэмжээ*"
            className="mt-1 block w-full"
            onChange={(e) => setData("memory_max", e.target.value)}
          />
          <InputError message={errors.memory_max} className=" mb-2" />

          {/* memory_slot */}
          <InputLabel htmlFor="memory_slot" value="Санах ойн оролт" />
          <TextInput
            value={data.memory_slot}
            type="number"
            placeholder="Эх хавтангийн санах ойн оролтын тоо*"
            className="mt-1 block w-full"
            onChange={(e) => setData("memory_slot", e.target.value)}
          />
          <InputError message={errors.memory_slot} className=" mb-2" />

          {/* color */}
          <InputLabel htmlFor="color" value="Өнгө" />
          <TextInput
            value={data.color}
            placeholder="Эх хавтангийн нэр*"
            className="mt-1 block w-full"
            onChange={(e) => setData("color", e.target.value)}
          />
          <InputError message={errors.color} className=" mb-2" />

          {/* price */}
          <InputLabel htmlFor="price" value="Үнэ" />
          <TextInput
            value={data.price}
            placeholder="Эх хавтангийн үнэ*"
            className="mt-1 block w-full"
            onChange={(e) => setData("price", e.target.value)}
          />
          <InputError message={errors.price} className=" mb-2" />

          <InputLabel htmlFor="psu_phone" value="Утасны дугаар" />
        <TextInput
          id="mobo_phone"
          name="phone"
          value={data.phone}
          className="mt-1 block w-full"
          onChange={(e) => setData("phone", e.target.value)}
        />
        <InputError message={errors.phone} className=" mb-2" />

          <PrimaryButton className="ms-4 my-4" disabled={processing}>
            Нийтлэх
          </PrimaryButton>
        </form>
      </div>
    </>
  );
}
