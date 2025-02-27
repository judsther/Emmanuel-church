import { EnvelopeOpenIcon, HeartIcon, NewspaperIcon } from "@heroicons/react/20/solid";


export default function Secciones() {
  return (
<>
<p className="flex items-center justify-center text-2xl font-bold p-4 text-zinc-700">Queremos conocerte.</p>
<hr className="border-t-2 border-gray-300 my-4 mx-10" />
       <section className="grid  grid-cols-1 md:grid-cols-3 w-full h-150 md:h-55 text-white font-semibold text-center text-2xl mb-6">
        <div className="m-2 p-2 flex items-center justify-center bg-indigo-800 hover:transform hover:scale-105 hover:bg-amber-200">
          <h2 className="place-items-center" style={{ fontSize: "14pt" }}>
            <EnvelopeOpenIcon className="size-8" />
            Oración
            <p style={{ fontSize: "12pt" }} className="font-light">
              Déjanos orar por tu petición.
            </p>
          </h2>
        </div>
        <div className="m-2 p-2 flex items-center justify-center bg-indigo-900 hover:transform hover:scale-105 hover:bg-amber-200">
          <h2 className="place-items-center" style={{ fontSize: "14pt" }}>
            <HeartIcon className="size-8" />
            Ministerios
            <p style={{ fontSize: "12pt" }} className="font-light">
              Únete y sirve con nosotros.
            </p>
          </h2>
        </div>
        <div className="m-2 p-2 flex items-center justify-center bg-indigo-700 hover:transform hover:scale-105 hover:bg-amber-200">
          <h2 className="place-items-center" style={{ fontSize: "14pt" }}>
            <NewspaperIcon className="size-8" />
            Actividades
            <p style={{ fontSize: "12pt" }} className="font-light">
              ¡Cuán bueno es habitar juntos!
            </p>
          </h2>
        </div>
      </section>
      </>

  )
}
