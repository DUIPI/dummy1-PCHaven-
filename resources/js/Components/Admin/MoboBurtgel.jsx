import React from "react";
import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

export default function MoboBurtgel() {
  const { data, setData, post, processing, reset, errors } = useForm({
    mobo_name: "",
    mobo_socket: "",
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("masterside/mobo"), { onSuccess: () => reset() });
  };

  return (
    <div className="max-w-2xl p-8 m-5">
      <form key={2} onSubmit={submit}>
        <InputLabel htmlFor="mobo_name" value="Motherboard нэр" />
        <TextInput
          value={data.mobo_name}
          className="mt-1 block w-full"
          onChange={(e) => setData("mobo_name", e.target.value)}
          required
        />
        <InputError message={errors.mobo_name} className="mt-2" />

        <InputLabel htmlFor="mobo_socket" value="Socket ID" />
        <TextInput
          value={data.mobo_socket}
          className="mt-1 block w-full"
          onChange={(e) => setData("mobo_socket", e.target.value)}
          required
        />
        <InputError message={errors.mobo_socket} className="mt-2" />

        <PrimaryButton className="ms-4 my-4" disabled={processing}>
          Бүртгэх
        </PrimaryButton>
      </form>
    </div>
  );
}
