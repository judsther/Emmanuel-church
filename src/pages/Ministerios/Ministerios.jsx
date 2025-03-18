
import "swiper/css";
import "swiper/css/pagination";
import MailForm from "./components/MailForm";
import MinisteriosSwiper from "./components/MinisteriosSwiper";
/**<div className="mb-4 gap-3 flex flex-wrap justify-center">
      <i className="bi bi-book-half text-indigo-500 text-3xl"/>
      <i className="bi bi-music-note text-indigo-500 text-3xl"/>
      <i className="bi bi-house-heart-fill text-indigo-500 text-3xl"/>
      <i className="bi bi-palette-fill text-indigo-500 text-3xl"/>
      <i className="bi bi-megaphone-fill text-indigo-500 text-3xl"/>
      </div>*/

export default function Ministerios() {
  return (
    <div className="">

      <section className="w-screen md:h-[550px] h-[650px] bg-neutral-100">
        <div className="h-full w-full flex flex-col md:flex-row gap-2 items-center justify-center">

      <div className="h-[700px] md:h-full flex md:items-center items-end justify-center mx-18">
      <MinisteriosSwiper />
      </div>

      <div className="md:h-full flex items-center justify-center text-[18px] text-center md:text-end bg-amber-200">
      <p className="leading-relaxed font-extrabold md:text-6xl text-2xl ms-6 p-2 mx-8" >DESCUBRE TU LLAMADO, <span className="underline decoration-indigo-400 decoration-dotted">SIRVE</span> CON PASIÓN.</p>
     </div>

      </div>
      </section>
      

      {/*text */}
      <section className="h-[450px] md:h-[550px] bg-neutral-200">
      <div className="w-full h-full flex flex-col items-center justify-center md:px-30 px-5 text-[18px] text-center">
      <p className="md:text-3xl mb-6">Los ministerios de nuestra iglesia son espacios abiertos donde cada persona tiene el privilegio de servir al Señor según sus talentos y pasiones. Ya sea a través de la música, la enseñanza, la ayuda social o cualquier otra área, aquí encontrarás un lugar donde Dios puede usarte para bendecir a otros.</p>  
<p className="md:text-2xl italic">
&quot;Cada uno según el don que ha recibido, minístrelo a los otros, como buenos administradores de la multiforme gracia de Dios.&quot; — 1 Pedro 4:10
</p>
</div>
      </section>

      {/* */}
      <section className="h-[600px] md:h-[550px]  bg-neutral-700 ">
        <div className="w-full h-full flex flex-col md:grid grid-cols-2 items-center p-5 justify-around text-zinc-100 text-center">
        <div className="mb-6">
         <p className="text-lg md:text-2xl"> <span className="font-bold">¿Te gustaría participar en alguno de nuestros ministerios?</span><br />Envíanos un correo o contáctanos <br />por cualquiera de estos medios:</p>
        </div>
        
        <div className="flex items-center justify-center">
     <MailForm />
        </div>
        </div>
      </section>
    </div>
  );
}
