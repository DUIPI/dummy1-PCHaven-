import { useForm } from "@inertiajs/react";
import React from "react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

export default function SellCpuComp() {
  const { data, setData, post, processing, reset, errors } = useForm({
    name: "",
    type: "",
    color: "",
    s_panel: "",
    price: "",
    image: null,
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("store.case"), {
      onSuccess: () => reset(),
      forceFormData: true,
    });
  };

  return (
    <div className="max-w-2xl p-8 m-5">
      <form onSubmit={submit}>
        <InputLabel htmlFor="case_image" value="Зураг оруулах" />

        <TextInput
          id="case_image"
          type="file"
          name="image"
          className="mt-1 block w-full bg-slate-100 py-4 text-center rounded-lg"
          onChange={(e) => setData("image", e.target.files[0])}
        />
        <InputError message={errors.image} className=" mb-2" />

        <InputLabel htmlFor="case_name" value="Нэр" />
        <TextInput
          id="case_name"
          type="text"
          name="name"
          value={data.name}
          placeholder="График кардын нэр*"
          className="mt-1 block w-full"
          onChange={(e) => setData("name", e.target.value)}
          isFocused={true}
        />
        <InputError message={errors.name} className=" mb-2" />

        <InputLabel htmlFor="case_type" value="Төрөл" />
        <TextInput
          id="case_type"
          name="type"
          type="text"
          value={data.type}
          placeholder=""
          className="mt-1 block w-full"
          onChange={(e) => setData("type", e.target.value)}
        />
        <InputError message={errors.type} className=" mb-2" />

        <InputLabel htmlFor="case_color" value="Өнгө" />
        <TextInput
          id="case_color"
          name="color"
          value={data.color}
          placeholder="Тэжээлийн блокын өнгө"
          className="mt-1 block w-full"
          onChange={(e) => setData("color", e.target.value)}
        />
        <InputError message={errors.color} className=" mb-2" />

        <InputLabel htmlFor="s_panel" value="Панель" />
        <TextInput
          id="s_panel"
          name="s_panel"
          type="text"
          value={data.s_panel}
          placeholder=""
          className="mt-1 block w-full"
          onChange={(e) => setData("s_panel", e.target.value)}
        />
        <InputError message={errors.s_panel} className=" mb-2" />

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

        <PrimaryButton className="ms-4 my-4" disabled={processing}>
          Нийтлэх
        </PrimaryButton>
      </form>
    </div>
  );
}
