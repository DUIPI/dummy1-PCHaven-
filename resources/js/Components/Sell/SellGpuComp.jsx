import { useForm } from "@inertiajs/react";
import React from "react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

export default function SellCpuComp() {
  const { data, setData, post, processing, reset, errors } = useForm({
    name: "",
    chipset: "",
    memory: "",
    c_clock: "",
    b_clock: "",
    color: "",
    length: "",
    price: "",
    image: null,
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("store.gpu"), {
      onSuccess: () => reset(),
      forceFormData: true,
    });
  };

  return (
    <div className="max-w-2xl p-8 m-5">
      <form onSubmit={submit}>
        <InputLabel htmlFor="gpu_image" value="Зураг оруулах" />

        <TextInput
          id="gpu_image"
          type="file"
          name="image"
          className="mt-1 block w-full bg-slate-100 py-4 text-center rounded-lg"
          onChange={(e) => setData("image", e.target.files[0])}
        />
        <InputError message={errors.image} className=" mb-2" />

        <InputLabel htmlFor="gpu_name" value="Нэр" />
        <TextInput
          id="gpu_name"
          type="text"
          name="name"
          value={data.name}
          placeholder="График кардын нэр*"
          className="mt-1 block w-full"
          onChange={(e) => setData("name", e.target.value)}
          isFocused={true}
        />
        <InputError message={errors.name} className=" mb-2" />

        <InputLabel htmlFor="chipset" value="Чипсет" />
        <TextInput
          id="chipset"
          name="chipset"
          type="text"
          value={data.chipset}
          placeholder=" Жишээ нь: RTX 4090 гэх мэт"
          className="mt-1 block w-full"
          onChange={(e) => setData("chipset", e.target.value)}
        />
        <InputError message={errors.chipset} className=" mb-2" />

        <InputLabel htmlFor="gpu_memory" value="Санах ой" />
        <TextInput
          id="gpu_memory"
          name="memory"
          type="number"
          value={data.memory}
          placeholder="Санах ойн хэмжээ (GB)"
          className="mt-1 block w-full"
          onChange={(e) => setData("memory", e.target.value)}
        />
        <InputError message={errors.memory} className=" mb-2" />

        <InputLabel htmlFor="c_clock" value="Цөмийн хурд" />
        <TextInput
          id="c_clock"
          type="number"
          name="c_clock"
          value={data.c_clock}
          placeholder=""
          className="mt-1 block w-full"
          onChange={(e) => setData("c_clock", e.target.value)}
        />
        <InputError message={errors.c_clock} className=" mb-2" />

        <InputLabel htmlFor="b_clock" value="Цөмийн дээд хурд" />
        <TextInput
          id="b_clock"
          name="b_clock"
          type="number"
          value={data.b_clock}
          placeholder=""
          className="mt-1 block w-full"
          onChange={(e) => setData("b_clock", e.target.value)}
        />
        <InputError message={errors.b_clock} className=" mb-2" />

        <InputLabel htmlFor="gpu_color" value="Өнгө" />
        <TextInput
          id="gpu_color"
          name="color"
          value={data.color}
          placeholder="График кардын өнгө"
          className="mt-1 block w-full"
          onChange={(e) => setData("color", e.target.value)}
        />
        <InputError message={errors.color} className=" mb-2" />

        <InputLabel htmlFor="length" value="Урт" />
        <TextInput
          id="length"
          name="length"
          type="number"
          value={data.length}
          placeholder="График кардын уртын хэмжээ (мм)"
          className="mt-1 block w-full"
          onChange={(e) => setData("length", e.target.value)}
        />
        <InputError message={errors.length} className=" mb-2" />

        <InputLabel htmlFor="gpu_price" value="Үнэ" />
        <TextInput
          id="gpu_price"
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
