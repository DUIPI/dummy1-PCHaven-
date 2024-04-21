import React from "react";
import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

export default function SocketBurtgel() {
  const { data, setData, post, processing, reset, errors } = useForm({
    socket_name: "",
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("masterside/socket"), { onSuccess: () => reset() });
  };
  return (
    <>
      {/* Socket burtgel */}
      <div className="max-w-2xl p-8 m-5">
        <form key={1} onSubmit={submit}>
          <InputLabel htmlFor="socket_name" value="Сокет нэр" />

          <TextInput
            value={data.socket_name}
            placeholder="Сокетны нэрийг оруулах"
            className="mt-1 block w-full"
            onChange={(e) => setData("socket_name", e.target.value)}
            required
          />
          <InputError message={errors.socket_name} className="mt-2" />
          <PrimaryButton className="ms-4 my-4" disabled={processing}>
            Бүртгэх
          </PrimaryButton>
        </form>
      </div>
    </>
  );
}
