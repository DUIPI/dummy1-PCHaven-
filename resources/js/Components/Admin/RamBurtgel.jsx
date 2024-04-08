import React from "react";
import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

export default function RamBurtgel() {
  const { data, setData, post, processing, reset, errors } = useForm({
    memory_gen: "",
    mem_socket: "",
    mem_socket1: "",
    mem_socket2: "",
    mem_socket3: "",
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("masterside/memory"), { onSuccess: () => reset() });
  };

  return (
    <div className="max-w-2xl p-8 m-5">
      <form key={3} onSubmit={submit}>
        <InputLabel htmlFor="memory_gen" value="Ram generation" />
        <TextInput
          value={data.memory_gen}
          className="mt-1 block w-full"
          onChange={(e) => setData("memory_gen", e.target.value)}
          required
        />
        <InputError message={errors.memory_gen} className="mt-2" />

        <InputLabel htmlFor="mem_socket" value="Socket 1" />
        <TextInput
          value={data.mem_socket}
          className="mt-1 block w-full"
          onChange={(e) => setData("mem_socket", e.target.value)}
          required
        />
        <InputError message={errors.mem_socket} className="mt-2" />

        <InputLabel htmlFor="mem_socket1" value="Socket 2" />
        <TextInput
          value={data.mem_socket1}
          className="mt-1 block w-full"
          onChange={(e) => setData("mem_socket1", e.target.value)}
        />
        <InputError message={errors.mem_socket1} className="mt-2" />

        <InputLabel htmlFor="mem_socket2" value="Socket 3" />
        <TextInput
          value={data.mem_socket2}
          className="mt-1 block w-full"
          onChange={(e) => setData("mem_socket2", e.target.value)}
        />
        <InputError message={errors.mem_socket2} className="mt-2" />

        <InputLabel htmlFor="mem_socket3" value="Socket 4" />
        <TextInput
          value={data.mem_socket3}
          className="mt-1 block w-full"
          onChange={(e) => setData("mem_socket3", e.target.value)}
        />
        <InputError message={errors.mem_socket3} className="mt-2" />

        <PrimaryButton className="ms-4 my-4" disabled={processing}>
          Бүртгэх
        </PrimaryButton>
      </form>
    </div>
  );
}
