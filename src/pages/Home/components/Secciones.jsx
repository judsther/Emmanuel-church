import { EnvelopeOpenIcon, HeartIcon, NewspaperIcon } from "@heroicons/react/20/solid";


export default function Secciones() {
  return (
<>
<p className="text-center text-2xl font-bold p-4 text-zinc-700">Queremos conocerte.</p>
<hr className="border-t-2 border-gray-300 my-4 mx-10" />
       <section className="grid grid-cols-1 md:grid-cols-3 w-full h-150 md:h-55 text-zinc-700 font-semibold text-center text-2xl">
        <div className="m-4 p-2 content-center bg-blue-100 hover:transform hover:scale-105 hover:bg-amber-200 rounded-md">
          <h2 className="place-items-center">
            <EnvelopeOpenIcon className="size-8" />
            oración
            <p style={{ fontSize: "12pt" }} className="font-light">
              Déjanos orar por tu petición.
            </p>
          </h2>
        </div>
        <div className="m-4 p-2 content-center bg-sky-200 hover:transform hover:scale-105 hover:bg-amber-200 rounded-md">
          <h2 className="place-items-center">
            <HeartIcon className="size-8" />
            ministerios
            <p style={{ fontSize: "12pt" }} className="font-light">
              Únete y sirve con nosotros.
            </p>
          </h2>
        </div>
        <div className="m-4 p-2 content-center bg-sky-100 hover:transform hover:scale-105 hover:bg-amber-200 rounded-md">
          <h2 className="place-items-center">
            <NewspaperIcon className="size-8" />
            actividades
            <p style={{ fontSize: "12pt" }} className="font-light">
              ¡Cuán bueno es habitar juntos!
            </p>
          </h2>
        </div>
      </section>
      </>

  )
}
