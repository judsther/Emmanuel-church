import FormularioPeticiones from "./components/FormularioPeticiones";
import Muro from "./components/Muro";


export default function Oracion() {
  return (
    <div>
       <section className="w-auto h-auto bg-center bg-cover bg-[url(https://res.cloudinary.com/djsdqleik/image/upload/v1743608800/2149548010_r7bv4x.jpg)]">
<div className="bg-zinc-800/70 h-68 flex items-center justify-center">
<p className="text-center font-bold italic text-3xl text-amber-300">Muro de peticiones.</p>
</div>
        </section>

        <FormularioPeticiones />
        <h2 className="text-center" >Muro de Oraciones</h2>
        <Muro />
    </div>
  )
}
