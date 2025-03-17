import { useState } from "react";

export default function MailForm() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4 items-end justify-center"
        action="https://formsubmit.co/mcasanvicente@gmail.com"
        method="POST"
      >
        <div>
          <label htmlFor="name" className="">
            Nombre:{" "}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            placeholder=" tu nombre"
            required
            onChange={handleChange}
            className=" w-80 h-10 border border-amber-400 bg-white rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="">
            Email:{" "}
          </label>
          <input
            type="email"
            autoComplete="email"
            name="email"
            id="email"
            placeholder=" tucorreo@ejemplo.com"
            required
            onChange={handleChange}
            className=" w-80 h-10 border border-amber-400 bg-white rounded-md"
          />
        </div>
        <div>
          <label htmlFor="message" className="">
            Mensaje:{" "}
          </label>
          <textarea
            name="message"
            id="message"
            placeholder=" tu mensaje"
            required
            onChange={handleChange}
            className=" w-80 h-18 border border-amber-400 bg-white rounded-md"
          />
        </div>
        <div>
          <label htmlFor="number" className="">
            Número:{" "}
          </label>
          <input
            type="text"
            name="number"
            id="number"
            autoComplete="number"
            placeholder=" tu número de WhatsApp (opcional)"
            onChange={handleChange}
            className=" w-80 h-10 border border-amber-400 bg-white rounded-md"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-white border border-amber-400 hover:bg-amber-200 shadow-md text-center text-zinc-800 rounded font-sans font-semibold"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
