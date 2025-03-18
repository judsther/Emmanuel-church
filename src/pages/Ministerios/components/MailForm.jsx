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

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
     
      const response = await fetch("https://formsubmit.co/ajax/23c839649ee8d0165b1fc8d4731e2abe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json(); 

      if (result.success) {
        alert("¡Mensaje enviado con éxito!"); 
        setFormData({ name: "", number: "", email: "", message: "" }); 
      } else {
        alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
      }
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
    }
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4 items-center md:items-end text-zinc-500 justify-center"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name" className="text-white">
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
            className="w-full md:w-80 h-10 border border-amber-400 bg-white rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-white">
            Correo:{" "}
          </label>
          <input
            type="email"
            autoComplete="email"
            name="email"
            id="email"
            placeholder=" tucorreo@ejemplo.com"
            required
            onChange={handleChange}
            className="w-full md:w-80 h-10 border border-amber-400 bg-white rounded-md"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-white">
            Mensaje:{" "}
          </label>
          <textarea
            name="message"
            id="message"
            placeholder=" tu mensaje"
            required
            onChange={handleChange}
            className="w-full  md:w-80 h-18 border border-amber-400 bg-white rounded-md"
          />
        </div>
        <div>
          <label htmlFor="number" className="text-white">
            Número:{" "}
          </label>
          <input
            type="text"
            name="number"
            id="number"
            autoComplete="number"
            placeholder=" tu número de WhatsApp (opcional)"
            onChange={handleChange}
            className="w-full md:w-80 h-10 border border-amber-400 bg-white rounded-md"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 mt-3 bg-indigo-500 border border-amber-400 hover:bg-amber-200 active:bg-amber-200 shadow-md text-center text-white hover:text-zinc-600 active:text-zinc-600 rounded font-sans font-semibold"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
