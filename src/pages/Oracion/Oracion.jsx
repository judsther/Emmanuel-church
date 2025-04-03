import FormularioPeticiones from "./components/FormularioPeticiones";
import Muro from "./components/Muro";


export default function Oracion() {
  return (
    <div>
       <section className="w-auto h-auto bg-center bg-cover bg-[url(https://res.cloudinary.com/djsdqleik/image/upload/v1743608800/2149548010_r7bv4x.jpg)]">
<div className="bg-zinc-800/70 h-68 flex flex-col items-center justify-center">
<p className="text-center font-bold italic text-3xl text-amber-300">Muro de peticiones</p>
<p className="text-center italic text-[11pt] md:text-xl text-white px-1 md:px-56">Otra vez os digo, que si dos de vosotros se ponen de acuerdo en la tierra acerca de cualquier cosa que pidan, les será hecho por mi Padre que está en los cielos. - Mateo 18:19</p>
</div>
        </section>

        <FormularioPeticiones />
        <h2 className="text-center" >Muro de Oraciones</h2>
        <Muro />
    </div>
  )
}
