import React from "react";
import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import SelectInput from "../SelectInput";

export default function SellCpuComp({ rams_api }) {
  const { data, setData, post, processing, reset, errors } = useForm({
    name: "",
    speed: "",
    modules: "",
    color: "",
    price: "",
    image: null,
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("store.ram"), {
      onSuccess: () => reset(),
      forceFormData: true,
    });
  };

  return (
    <>
      <div className="max-w-2xl p-8 m-5">
        <form onSubmit={submit}>
          <InputLabel htmlFor="image" value="Зураг" />

          <TextInput
            id="image"
            type="file"
            name="image"
            className="mt-1 block w-full bg-slate-100 py-4 text-center rounded-lg"
            onChange={(e) => setData("image", e.target.files[0])}
          />
          <InputError message={errors.image} className=" mb-2" />

          <InputLabel htmlFor="name" value="Нэр" />
          <TextInput
            id="name"
            name="name"
            className="mt-1 block w-full mb-4"
            onChange={(e) => setData("name", e.target.value)}
          />
          <InputError message={errors.name} className=" mb-2" />

          <InputLabel htmlFor="gen" value="Generation" />
          <SelectInput
            id="gen"
            name="gen"
            className="mt-1 block w-full mb-4"
            onChange={(e) => setData("gen", e.target.value)}
          >
            <option>Санах ойн үеийг сонгох*</option>
            {rams_api.data.map((ram_api) => (
              <option value={ram_api.id} key={ram_api.id}>
                {ram_api.memory_gen}
              </option>
            ))}
          </SelectInput>
          <InputError message={errors.gen} className=" mb-2" />

          <InputLabel htmlFor="speed" value="Хурд" />
          <TextInput
            type="number"
            value={data.speed}
            placeholder="Санах ойн хурд*"
            className="mt-1 block w-full"
            onChange={(e) => setData("speed", e.target.value)}
          />
          <InputError message={errors.speed} className=" mb-2" />

          <InputLabel htmlFor="modules" value="Модуль" />
          <TextInput
            value={data.modules}
            placeholder="Санах ойн модуль сонгох*"
            className="mt-1 block w-full"
            onChange={(e) => setData("modules", e.target.value)}
          />
          <InputError message={errors.modules} className=" mb-2" />

          <InputLabel htmlFor="color" value="Өнгө" />
          <TextInput
            value={data.color}
            placeholder="Санах ойн өнгө"
            className="mt-1 block w-full"
            onChange={(e) => setData("color", e.target.value)}
          />
          <InputError message={errors.color} className=" mb-2" />

          <InputLabel htmlFor="price" value="Үнэ" />
          <TextInput
            type="number"
            placeholder="Үнийн мэдээллийг зөвхөн тоогоор оруулна уу*"
            value={data.price}
            className="mt-1 block w-full"
            onChange={(e) => setData("price", e.target.value)}
          />
          <InputError message={errors.price} className=" mb-2" />

          <PrimaryButton className="ms-4 my-4" disabled={processing}>
            Нийтлэх
          </PrimaryButton>
        </form>
      </div>
    </>
  );
}
