

export default function Mapa() {
  return (
    <div>
            <section className="md:h-[550px] h-auto w-screen bg-neutral-200">
<div className="flex md:flex-row flex-col h-full w-full pt-20 md:pt-0">

<div className="flex items-center justify-center h-full md:w-1/2 w-full ">
<p className="h-full w-full flex flex-col items-center justify-center px-8 text-center" >
<span className="py-4 font-extrabold text-3xl text-indigo-900">  Te esperamos en nuestra dirección:</span>
  Ubicados en 1A Calle Poniente, frente a Pizza Hut en San Vicente, El Salvador. Si no sabes cómo llegar, haz clic en el mapa para obtener indicaciones.
</p>
</div>
<div className="flex items-center justify-center h-full md:w-1/2 w-full">
<a
  href="https://maps.app.goo.gl/BJiu2LiQj2aXuUdB7"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-80 h-80 md:w-[500px] my-5 md:my-0 md:h-[500px] rounded-full overflow-hidden shadow-sm active:shadow-none hover:size-[520px] transition-all duration-300"
>
  <img
    className="object-cover h-full w-full"
    src="https://res.cloudinary.com/djsdqleik/image/upload/v1742493259/Screenshot_2025-03-20_at_11.53.51_AM_zhhqyl.png"
    alt="Mapa de ubicación de Iglesia Emanuel de San Vicente"
  />
</a>

</div>

</div>
      </section>
    </div>
  )
}
