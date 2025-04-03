import Actividades from "./components/Actividades";
import Bautismo from "./components/Bautismo";
import Clinica from "./components/Clinica";
import Evangelismo from "./components/Evangelismo";


export default function Proyectos() {
  return (
    <div>
      <section className="w-auto h-auto bg-center bg-cover bg-[url(https://res.cloudinary.com/djsdqleik/image/upload/v1743540136/484853895_3394127380721743_7979396885016842023_n_igdtca.jpg)]">

<div className="bg-zinc-800/70 h-68 flex items-center justify-center">
<p className="text-center font-bold italic text-3xl text-amber-300">Proyectos y actividades.</p>
</div>
        </section>

   
 <Bautismo />
 <Evangelismo />
 <Clinica />
 <Actividades />
    </div>
  )
}
