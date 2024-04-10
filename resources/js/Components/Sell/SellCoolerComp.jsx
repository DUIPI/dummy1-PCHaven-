import { useForm } from "@inertiajs/react";
import React from "react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

export default function SellCpuComp() {
  const { data, setData, post, processing, reset, errors } = useForm({
    name: "",
    fan_rpm: "",
    noice_lvl: "",
    color: "",
    size: "",
    price: "",
    image: null,
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("store.cooler"), {
      onSuccess: () => reset(),
      forceFormData: true,
    });
  };

  return (
    <div className="max-w-2xl p-8 m-5">
      <form onSubmit={submit}>
        <InputLabel htmlFor="cooler_image" value="Зураг оруулах" />

        <TextInput
          id="cooler_image"
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
          placeholder="Хөргүүрийн нэр*"
          className="mt-1 block w-full"
          onChange={(e) => setData("name", e.target.value)}
          isFocused={true}
        />
        <InputError message={errors.name} className=" mb-2" />

        <InputLabel htmlFor="fan_rpm" value="Эргэлтийн хурд" />
        <TextInput
          id="dan_rpm"
          name="fan_rpm"
          type="number"
          value={data.fan_rpm}
          placeholder="Сэнсний 1 минутад хийх эргэлтийн тоо (RPM)"
          className="mt-1 block w-full"
          onChange={(e) => setData("fan_rpm", e.target.value)}
        />
        <InputError message={errors.fan_rpm} className=" mb-2" />

        <InputLabel htmlFor="noice_lvl" value="Дууны хэмжээ" />
        <TextInput
          id="noice_lvl"
          name="noice_lvl"
          type="number"
          value={data.noice_lvl}
          placeholder="Сэнсний гаргах дууны хэмжээ (дБ)"
          className="mt-1 block w-full"
          onChange={(e) => setData("noice_lvl", e.target.value)}
        />
        <InputError message={errors.noice_lvl} className=" mb-2" />

        <InputLabel htmlFor="cooler_color" value="Өнгө" />
        <TextInput
          id="cooler_color"
          type="text"
          name="color"
          value={data.color}
          placeholder="Хөргүүрийн өнгө"
          className="mt-1 block w-full"
          onChange={(e) => setData("color", e.target.value)}
        />
        <InputError message={errors.color} className=" mb-2" />

        <InputLabel htmlFor="cooler_size" value="Сэнсний диаметр" />
        <TextInput
          id="cooler_size"
          name="size"
          type="number"
          value={data.size}
          placeholder="Сэнсний диаметрийн хэмжээ (мм)"
          className="mt-1 block w-full"
          onChange={(e) => setData("size", e.target.value)}
        />
        <InputError message={errors.size} className=" mb-2" />

        <InputLabel htmlFor="cooler_price" value="Үнэ" />
        <TextInput
          id="cooler_price"
          name="price"
          value={data.price}
          placeholder="Хөргүүрийн үнийг зөвхөн тоогоор оруулна уу."
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
