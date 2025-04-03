/**<div className="mb-4 gap-3 flex flex-wrap justify-center">
      <i className="bi bi-book-half text-indigo-500 text-3xl"/>
      <i className="bi bi-music-note text-indigo-500 text-3xl"/>
      <i className="bi bi-house-heart-fill text-indigo-500 text-3xl"/>
      <i className="bi bi-palette-fill text-indigo-500 text-3xl"/>
      <i className="bi bi-megaphone-fill text-indigo-500 text-3xl"/>
      </div>*/

import { Link } from "react-router-dom";
import MinisteriosProp from './components/MinisteriosProp';


export default function Ministerios() {
  return (
    <div className="">

      <section className="w-screen h-auto bg-neutral-100">
        

        <div className="h-auto flex items-center justify-center text-[18px] text-center md:text-end bg-neutral-800">
      <p className="leading-relaxed font-extrabold text-2xl py-36 p-2 italic text-amber-200" >DESCUBRE TU <span className="underline decoration-indigo-400 decoration-dotted">LLAMADO</span>.</p>
     </div>

      <div className="h-auto md:h-full flex md:items-center items-end py-10 justify-center mx-18">
      <MinisteriosProp/>
      </div>

   

   
      </section>
      

      {/*text */}
      <section className="h-[450px] md:h-[550px] bg-neutral-200">
      <div className="w-full h-full flex flex-col items-center justify-center md:px-30 px-5 text-[18px] text-center">
      <p className="md:text-3xl mb-6">Los ministerios de nuestra iglesia son espacios abiertos donde cada miembro tiene el privilegio de servir al Señor según sus talentos y pasiones. Ya sea a través de la música, la enseñanza, la ayuda social o cualquier otra área, aquí encontrarás un lugar donde Dios puede usarte para bendecir a otros.</p>  
<p className="md:text-2xl italic">
&quot;Cada uno según el don que ha recibido, minístrelo a los otros, como buenos administradores de la multiforme gracia de Dios.&quot; — 1 Pedro 4:10
</p>
</div>
      </section>

      {/* */}
      <section className="h-[300px] md:h-[550px]  bg-neutral-700 ">
        <div className="w-full h-full flex flex-col items-center p-2 md:p-15 justify-center text-zinc-100 text-center">
       
         <p className="text-xl"> <span className="font-bold text-lg md:text-4xl">¿Te gustaría participar en alguno de nuestros ministerios?</span><br /></p>
        <div className="m-8">
        <Link
to="/contacto"
className="w-32 py-2 px-3 md:mt-3 bg-amber-300  hover:bg-white text-center text-zinc-700 hover:text-indigo-800 rounded font-sans font-semibold"
>
Contactar
</Link>
        </div>
      
        
        </div>
      </section>
    </div>
  );
}

