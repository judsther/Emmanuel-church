import { useState } from "react"


export default function MailForm() {

    const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
          e.preventDefault();

          const response = await fetch("http://jud-dev.infinityfreeapp.com/sendMail.php", 
            {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
          });

         const result = await response.json();
         alert(result.message);    
    };    

  return (
    <div>
          <form className="flex flex-col gap-4 items-end justify-center" onSubmit={handleSubmit}>
          <div>
           <label htmlFor="" className="">Nombre: </label>
           <input type="text" name="name" placeholder=" tu nombre" required onChange={handleChange} className=" w-80 h-10 border border-amber-400 bg-white rounded-md" />
           </div>
            <div>
            <label className="">Email: </label>
           <input type="email" name="email" placeholder=" tucorreo@ejemplo.com" required onChange={handleChange} className=" w-80 h-10 border border-amber-400 bg-white rounded-md" />
           </div>
           <div>
           <label htmlFor="" className="">Mensaje: </label>
           <textarea name="message" placeholder=" tu mensaje" required onChange={handleChange} className=" w-80 h-18 border border-amber-400 bg-white rounded-md" />
           </div>
           <div>
           <label htmlFor="" className="">Número: </label>
           <input type="text" name="number" placeholder=" tu número de WhatsApp (opcional)" onChange={handleChange} className=" w-80 h-10 border border-amber-400 bg-white rounded-md" />
           </div>
           <button type="submit" className="py-2 px-4 bg-white border border-amber-400 hover:bg-amber-200 shadow-md text-center text-zinc-800 rounded font-sans font-semibold">
              Enviar
           </button>
          </form>
    </div>
  )
}
