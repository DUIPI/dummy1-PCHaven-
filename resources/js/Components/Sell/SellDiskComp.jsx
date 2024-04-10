import { useForm } from "@inertiajs/react";
import React from "react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

export default function SellCpuComp() {
  const { data, setData, post, processing, reset, errors } = useForm({
    name: "",
    capacity: "",
    type: "",
    cache: "",
    interface: "",
    price: "",
    image: null,
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("store.disk"), {
      onSuccess: () => reset(),
      forceFormData: true,
    });
  };

  return (
    <div className="max-w-2xl p-8 m-5">
      <form onSubmit={submit}>
        <InputLabel htmlFor="disk_image" value="Зураг оруулах" />

        <TextInput
          id="disk_image"
          type="file"
          name="image"
          className="mt-1 block w-full bg-slate-100 py-4 text-center rounded-lg"
          onChange={(e) => setData("image", e.target.files[0])}
        />
        <InputError message={errors.image} className=" mb-2" />

        <InputLabel htmlFor="cooler_name" value="Нэр" />
        <TextInput
          id="cooler_name"
          type="text"
          name="name"
          value={data.name}
          placeholder="Дискийн нэр*"
          className="mt-1 block w-full"
          onChange={(e) => setData("name", e.target.value)}
          isFocused={true}
        />
        <InputError message={errors.name} className=" mb-2" />

        <InputLabel htmlFor="capacity" value="Багтаамж" />
        <TextInput
          id="capacity"
          name="capacity"
          type="number"
          value={data.capacity}
          placeholder="Дискийн багтаамжийн хэмжээ (GB,TB)"
          className="mt-1 block w-full"
          onChange={(e) => setData("capacity", e.target.value)}
        />
        <InputError message={errors.capacity} className=" mb-2" />

        <InputLabel htmlFor="disk_type" value="Төрөл" />
        <TextInput
          id="disk_type"
          name="type"
          value={data.type}
          placeholder="Дискийн төрөл"
          className="mt-1 block w-full"
          onChange={(e) => setData("type", e.target.value)}
        />
        <InputError message={errors.type} className=" mb-2" />

        <InputLabel htmlFor="disk_cache" value="Cache" />
        <TextInput
          id="disk_cache"
          type="number"
          name="cache"
          value={data.cache}
          placeholder="Cache багтаамж"
          className="mt-1 block w-full"
          onChange={(e) => setData("cache", e.target.value)}
        />
        <InputError message={errors.cache} className=" mb-2" />

        <InputLabel htmlFor="interface" value="Оролт" />
        <TextInput
          id="interface"
          name="interface"
          value={data.interface}
          placeholder="Дискийн оролтийн төрөл"
          className="mt-1 block w-full"
          onChange={(e) => setData("interface", e.target.value)}
        />
        <InputError message={errors.interface} className=" mb-2" />

        <InputLabel htmlFor="disk_price" value="Үнэ" />
        <TextInput
          id="disk_price"
          name="price"
          value={data.price}
          placeholder="Үнийг зөвхөн тоогоор оруулна уу."
          className="mt-1 block w-full"
          onChange={(e) => setData("price", e.target.value)}
        />
        <InputError message={errors.price} className=" mb-2" />

        <PrimaryButton className="ms-4 my-4" disabled={processing}>
          Нийтлэх
        </PrimaryButton>
      </form>
    </div>
  );
}
