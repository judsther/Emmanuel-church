


export default function Secciones() {
  return (
<>
<section className="overflow-hidden h-[470px] bg-neutral-200 ">
<div className=" h-full flex flex-col items-center justify-center">
<p className="flex items-center justify-center text-2xl font-bold text-zinc-700 mt-4 md:mt-2">Queremos conocerte.</p>
<hr className="border-2 border-indigo-400 rounded-4xl px-44 md:px-96 my-5" />

       <section className="h-[350px] w-full overflow-x-auto scrollbar-hide flex lg:justify-center items-center text-white font-semibold text-center text-2xl md:mt-5">
        <div className="flex gap-6 w-max h-[300px] mx-20 ">

        <div className="flex-col h-full w-[300px] p-12 flex items-center rounded-full justify-center bg-indigo-900 outline-indigo-400 outline-4 -outline-offset-4 transform transition-transform duration-300 hover:scale-105">
        <i className="bi bi-box2-heart p-3 text-5xl text-amber-200"></i>
          <h2 className="" style={{ fontSize: "18pt", placeItems: "center" }}>
            Oración
            <p style={{ fontSize: "14pt" }} className="font-light">
              Déjanos orar por tu petición.
            </p>
          </h2>
        </div>
        <div className="flex-col h-full w-[300px] p-12 flex items-center rounded-full justify-center bg-indigo-900 outline-indigo-400 outline-4 -outline-offset-4 transform transition-transform duration-300 hover:scale-105">
        <i className="bi bi-heart p-3 text-5xl text-amber-200"></i>
          <h2 className="place-items-center" style={{ fontSize: "18pt", placeItems: "center"  }}>
            Ministerios
            <p style={{ fontSize: "14pt" }} className="font-light">
              Únete y sirve con nosotros.
            </p>
          </h2>
        </div>
        <div className="flex-col h-full w-[300px] p-12 flex items-center rounded-full justify-center bg-indigo-900 outline-indigo-400 outline-4 -outline-offset-4 transform transition-transform duration-300 hover:scale-105">
        <i className="bi bi-house p-3 text-5xl text-amber-200"></i>
          <h2 className="place-items-center" style={{ fontSize: "18pt", placeItems: "center"  }}>
            Actividades
            <p style={{ fontSize: "14pt" }} className="font-light">
              ¡Cuán bueno es habitar juntos!
            </p>
          </h2>
        </div>
        <div className="flex-col h-full w-[300px] p-12 flex items-center rounded-full justify-center bg-indigo-900 outline-indigo-400 outline-4 transform -outline-offset-4 transition-transform duration-300 hover:scale-105">
        <i className="bi bi-person p-3 text-5xl text-amber-200"></i>
          <h2 className="place-items-center" style={{ fontSize: "18pt", placeItems: "center"  }}>
            Visitación
            <p style={{ fontSize: "14pt" }} className="font-light">
              Solicita una visita pastoral.
            </p>
          </h2>
        </div>
        </div>
      
      </section>
      </div>
      </section>
      </>
     

  )
}
