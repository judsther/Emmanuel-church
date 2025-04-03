import { useState } from "react";
import { db } from "../../../services/firebase/firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function FormularioPeticiones() {
  const [nombre, setNombre] = useState("");
  const [peticion, setPeticion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !peticion) return alert("Todos los campos son obligatorios.");

    try {
      await addDoc(collection(db, "peticiones"), {
        name : nombre,
        requestMsg: peticion,
        time: serverTimestamp(),
      });
      setNombre("");
      setPeticion("");
      alert("Oración enviada con éxito!");
    } catch (error) {
      console.error("Error al enviar la oración:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-auto p-4 m-4">
      <h2>Comparte tu petición</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center container outline-2 outline-amber-300 bg-neutral-600 rounded md:w-2xl p-4">
        <div className="flex items-start w-full">
        <label htmlFor="nombre" className="me-1 text-white">
            Nombre:
          </label>
          <input 
          id="nombre"
          type="text" 
          placeholder="Tu nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)}
          className="bg-white rounded-sm" 
        />
        </div>
        <div className="flex items-start w-full">
        <label htmlFor="peticion" className="me-1 text-white">
            Petición:
          </label>
        <textarea 
          id="peticion"
          placeholder="Escribe tu petición" 
          value={peticion} 
          onChange={(e) => setPeticion(e.target.value)} 
          className="bg-white rounded-sm w-full h-20"
        />
           </div>
        <button className="bg-amber-300 px-4 rounded" type="submit">Enviar</button>
      </form>
    </div>
  );
}
