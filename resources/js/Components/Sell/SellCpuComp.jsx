import React from "react";
import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import SelectInput from "../SelectInput";
import TextAreaInput from "../TextAreaInput";

export default function SellCpuComp({ cpus }) {
  const { data, setData, post, processing, reset, errors } = useForm({
    core_count: "",
    core_clock: "",
    boost_clock: "",
    tdp: "",
    graphics: "",
    price: "",
    tailbar: "",
    image: null,
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("store.cpu"), {
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
          <SelectInput
            id="name"
            name="name"
            className="mt-1 block w-full mb-4"
            onChange={(e) => setData("name", e.target.value)}
          >
            <option>CPU нэр сонгох*</option>
            {cpus.data.map((cpu) => (
              <option value={cpu.id} key={cpu.id}>
                {cpu.cpu_name}
              </option>
            ))}
          </SelectInput>
          <InputError message={errors.name} className=" mb-2" />
          {/* Cores */}
          <InputLabel htmlFor="core_count" value="Цөмийн тоо" />
          <TextInput
            type="number"
            value={data.core_count}
            placeholder="CPU-ний цөмийн тоо*"
            className="mt-1 block w-full"
            onChange={(e) => setData("core_count", e.target.value)}
          />
          <InputError message={errors.core_count} className=" mb-2" />
          {/* Core speed */}
          <InputLabel htmlFor="core_clock" value="Цөмийн хурд" />
          <TextInput
            type="number"
            value={data.core_clock}
            placeholder="CPU-ний цөмийн энгийн хурд*"
            className="mt-1 block w-full"
            onChange={(e) => setData("core_clock", e.target.value)}
          />
          <InputError message={errors.core_clock} className=" mb-2" />
          {/* Boost clock */}
          <InputLabel htmlFor="boost_clock" value="Цөмийн дээд хурд" />
          <TextInput
            type="number"
            value={data.boost_clock}
            placeholder="CPU-ний цөмийн дээд хурд"
            className="mt-1 block w-full"
            onChange={(e) => setData("boost_clock", e.target.value)}
          />
          <InputError message={errors.boost_clock} className=" mb-2" />
          {/* Tog */}
          <InputLabel htmlFor="tdp" value="Тог зарцуулалт" />
          <TextInput
            type="number"
            value={data.tdp}
            placeholder="CPU-ний тог зарцуулалтын хэмжээ"
            className="mt-1 block w-full"
            onChange={(e) => setData("tdp", e.target.value)}
          />
          <InputError message={errors.tdp} className=" mb-2" />
          {/* Graphic */}
          <InputLabel htmlFor="graphics" value="Кард" />
          <TextInput
            value={data.graphics}
            placeholder="CPU тань өөр дээрээ кардтай бол нэрийг нь бичнэ үү."
            className="mt-1 block w-full"
            onChange={(e) => setData("graphics", e.target.value)}
          />
          <InputError message={errors.graphics} className=" mb-2" />
          {/* Tailbar */}
          <InputLabel htmlFor="tailbar" value="Тайлбар" />
          <TextAreaInput
            value={data.tailbar}
            placeholder="CPU-ний талаарх нэмэлт тайлбар"
            className="mt-1 mb-5 block w-full"
            onChange={(e) => setData("tailbar", e.target.value)}
          />
          <InputError message={errors.tailbar} className=" mb-2" />
          {/* Price */}
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
