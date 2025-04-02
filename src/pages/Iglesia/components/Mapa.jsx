

export default function Mapa() {
  return (
    <div>
            <section className="md:h-[550px] h-auto w-screen bg-neutral-200">
<div className="flex md:flex-row flex-col h-full w-full pt-10 md:pt-0">

<div className="flex flex-col items-star justify-center h-full  w-full md:ps-20 ps-5">
<p className="mb-8" >
<span className="py-4 font-extrabold text-3xl text-indigo-900 text-center">  Visítanos en nuestra dirección: <br /></span>
  Ubicados en 1A Calle Poniente, frente a Pizza Hut en San Vicente, El Salvador. Si no sabes cómo llegar, haz clic en el mapa para obtener indicaciones.
</p>
<p className="text-2xl md:text-xl font-extrabold mb-1 text-zinc-600">
        Horarios:
        </p>
        <p style={{fontSize:"14pt"}} className="md:text-2xl font-medium mb-7">
            <span className="text-indigo-900">Domingo:</span> Culto domínical 9:00am y culto general 4:30pm <br />
            <span className="text-indigo-900">Lunes:</span> Oración 5:00pm <br />
            <span className="text-indigo-900">Miércoles:</span> Estudio bíblico 5:00pm <br />
            <span className="text-indigo-900">Jueves:</span> Culto femenil 4:30pm <br />
        </p>
</div>
<div className="flex items-center justify-center h-full md:w-1/2 w-full md:mx-40">
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
