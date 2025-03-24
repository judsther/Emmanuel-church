import MailForm from "../../components/MailForm";
import Socials from "../../components/Socials";

export default function Iglesia() {
  return (
    <div>
      <section className="md:h-[550px] h-auto w-screen bg-neutral-200">
<div className="flex md:flex-row flex-col h-full w-full pt-20 md:pt-0">

<div className="flex items-center justify-center h-full md:w-1/2 w-full ">
<p className="h-full w-full flex flex-col items-center justify-center px-8 text-center" >
  <span className="py-4 font-extrabold text-3xl text-indigo-900">¡Visítanos! Te esperamos en nuestra dirección:</span>
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

      <section className="w-screen h-auto md:h-[550px] bg-neutral-800">
        <div className="flex flex-col-reverse md:flex-row gap-2">
       
        <div className="flex items-center justify-center md:w-1/2">
          <img className="md:p-28 p-4" src="https://res.cloudinary.com/djsdqleik/image/upload/v1742424189/481338681_3380605122073969_5022854454823692543_n_acxnss.jpg" alt="foto de iglesia emanuel mca de los primeros años" />
        </div>
        <div className="flex items-center justify-center md:w-1/2">
        <p className="md:p-20 p-4 text-white flex flex-col">
        <span className="py-4 font-extrabold text-3xl">Un Poco de Nuestra Historia.</span>
        La Iglesia Misión Centroamericana &quot;Emanuel&quot; en San Vicente, El Salvador, forma parte de la Misión Centroamericana (MCA), una organización evangélica con presencia en varios países de Centroamérica. La MCA celebró su 129 aniversario en 2025, destacando su larga trayectoria en la región.
       <br />
       <br />
        Iglesia &quot;Emanuel&quot; fue fundada en la ciudad de San Vicente en el año 1939 bajo el nombre de &quot;Rosa de Sarón&quot; por los misioneros estadounidenses...
        </p>
        </div>

        </div>

      </section>

      <section className="w-screen h-[700px] md:h-[550px] bg-neutral-100">
      <div className="w-full h-full flex flex-col md:flex-row md:gap-60 gap-10 items-center justify-center text-center ">
        <div>
          <p className="text-3xl font-extrabold mb-4 text-neutral-700">Ponte en contacto con nosotros:</p>
          <Socials />
        </div>
      <div className="flex items-center justify-center  w-96 p-4 rounded-md text-zinc-600  md:border-2 border-neutral-500">
       <MailForm />
      </div>
      </div>
      </section>


    </div>
  )
}
