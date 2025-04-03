

//<hr className="border-2 border-indigo-400 rounded-4xl px-44 md:px-96 my-5" />

import { Link } from "react-router-dom";

export default function Secciones() {
  return (
<>
<section className="overflow-hidden h-[500px] bg-neutral-100 ">
<div className=" h-full flex flex-col items-center justify-center">



       <section className="h-[440px] w-full overflow-x-auto scrollbar-hide flex lg:justify-center items-center text-zinc-700 font-semibold text-center text-2xl ">
        <div className="flex flex-row gap-15 w-max h-[350px] mx-10 md:mx-0 ">
       <Link to="/oracion">
        <div className="flex-col h-[350px] w-[300px] p-12 flex items-center rounded-[10pt] shadow-md shadow-gray-600 active:shadow-none justify-center bg-neutral-100 outline-4 outline-indigo-900 transform transition-transform duration-300 hover:scale-105">
        <i className="bi bi-box2-heart p-3 text-5xl text-amber-300"></i>
          <h2 className="" style={{ fontSize: "18pt", placeItems: "center" }}>
          <span className="bg-amber-300 px-2 text-zinc-800 rounded">Oración</span>
            <p style={{ fontSize: "14pt" }} className="font-light mt-3">
              Déjanos orar por tu petición.
              Accede aquí a nuestro muro de oración y escribe tu petición. 
            </p>
          </h2>
        </div>
        </Link>
       <Link to="/ministerios">
        <div className="flex-col h-[350px] w-[300px] p-12 flex items-center rounded-[10pt] shadow-md shadow-gray-600 active:shadow-none justify-center bg-neutral-100 outline-4 outline-indigo-900 transform transition-transform duration-300 hover:scale-105">
        <i className="bi bi-heart p-3 text-5xl text-amber-300"></i>
          <h2 className="place-items-center" style={{ fontSize: "18pt", placeItems: "center"  }}>
            <span className="bg-amber-300 px-2 text-zinc-800 rounded">Ministerios</span>
            <p style={{ fontSize: "14pt" }} className="font-light mt-3">
              Únete y sirve con nosotros. Aquí puedes conocer todos nuestros ministerios y cómo involucrarte.
            </p>
          </h2>
        </div>
        </Link>
        <Link to="/proyectos">
        <div className="flex-col h-[350px] w-[300px] p-12 flex items-center rounded-[10pt] shadow-md shadow-gray-600 active:shadow-none justify-center bg-neutral-100 outline-4 outline-indigo-900 transform transition-transform duration-300 hover:scale-105">
        <i className="bi bi-house p-3 text-5xl text-amber-300"></i>
          <h2 className="place-items-center" style={{ fontSize: "18pt", placeItems: "center"  }}>
            <span className="bg-amber-300 px-2 text-zinc-800 rounded">Actividades</span>
            <p style={{ fontSize: "14pt" }} className="font-light mt-3">
              ¡Cuán bueno es habitar juntos! Entra y conoce nuestras actividades y fechas.
            </p>
          </h2>
        </div>
        </Link>
        <Link to="/contacto">
        <div className="flex-col h-[350px] w-[300px] p-12 flex items-center rounded-[10pt] shadow-md shadow-gray-600 active:shadow-none justify-center bg-neutral-100 outline-4 outline-indigo-900 transition-transform duration-300 hover:scale-105">
        <i className="bi bi-person p-3 text-5xl text-amber-300"></i>
          <h2 className="place-items-center" style={{ fontSize: "18pt", placeItems: "center"  }}>
            <span className="bg-amber-300 px-2 text-zinc-800 rounded">Visitación</span>
            <p style={{ fontSize: "14pt" }} className="font-light mt-2">
              Solicita una visita pastoral por medio de nuestros medios de contacto.
            </p>
          </h2>
        </div>
        </Link>
        </div>
      
      </section>
      </div>
      </section>
      </>
     

  )
}
