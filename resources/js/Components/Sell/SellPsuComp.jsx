import { useForm } from "@inertiajs/react";
import React from "react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

export default function SellCpuComp() {
  const { data, setData, post, processing, reset, errors } = useForm({
    name: "",
    buteemj: "",
    watt: "",
    modular: "",
    color: "",
    price: "",
    image: null,
    phone: "",
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("store.psu"), {
      onSuccess: () => reset(),
      forceFormData: true,
    });
  };

  return (
    <div className="max-w-2xl p-8 m-5">
      <form onSubmit={submit}>
        <InputLabel htmlFor="psu_image" value="Зураг оруулах" />

        <TextInput
          id="psu_image"
          type="file"
          name="image"
          className="mt-1 block w-full bg-slate-100 py-4 text-center rounded-lg"
          onChange={(e) => setData("image", e.target.files[0])}
        />
        <InputError message={errors.image} className=" mb-2" />

        <InputLabel htmlFor="psu_name" value="Нэр" />
        <TextInput
          id="psu_name"
          type="text"
          name="name"
          value={data.name}
          placeholder="График кардын нэр*"
          className="mt-1 block w-full"
          onChange={(e) => setData("name", e.target.value)}
          isFocused={true}
        />
        <InputError message={errors.name} className=" mb-2" />

        <InputLabel htmlFor="buteemj" value="Бүтээмж" />
        <TextInput
          id="buteemj"
          name="buteemj"
          type="text"
          value={data.buteemj}
          placeholder="Жишээ нь, 80+ Gold"
          className="mt-1 block w-full"
          onChange={(e) => setData("buteemj", e.target.value)}
        />
        <InputError message={errors.buteemj} className=" mb-2" />

        <InputLabel htmlFor="watt" value="Ватт" />
        <TextInput
          id="watt"
          name="watt"
          type="number"
          value={data.watt}
          placeholder="Нийт гаргах цахилгааны хэмжээ (W)"
          className="mt-1 block w-full"
          onChange={(e) => setData("watt", e.target.value)}
        />
        <InputError message={errors.watt} className=" mb-2" />

        <InputLabel htmlFor="modular" value="Модуль" />
        <TextInput
          id="modular"
          name="modular"
          value={data.modular}
          placeholder="Модулиудтай эсэх"
          className="mt-1 block w-full"
          onChange={(e) => setData("modular", e.target.value)}
        />
        <InputError message={errors.modular} className=" mb-2" />

        <InputLabel htmlFor="psu_color" value="Өнгө" />
        <TextInput
          id="psu_color"
          name="color"
          value={data.color}
          placeholder="Тэжээлийн блокын өнгө"
          className="mt-1 block w-full"
          onChange={(e) => setData("color", e.target.value)}
        />
        <InputError message={errors.color} className=" mb-2" />

        <InputLabel htmlFor="psu_price" value="Үнэ" />
        <TextInput
          id="psu_price"
          name="price"
          value={data.price}
          placeholder="Үнийг зөвхөн тоогоор оруулна уу."
          className="mt-1 block w-full"
          onChange={(e) => setData("price", e.target.value)}
        />
        <InputError message={errors.price} className=" mb-2" />

        <InputLabel htmlFor="gpu_phone" value="Утасны дугаар" />
        <TextInput
          id="gpu_phone"
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
  );
}
