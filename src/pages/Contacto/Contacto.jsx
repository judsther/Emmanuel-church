
import MailForm from "../../components/MailForm";


export default function Contacto() {
  return (
    <div>
        <section className="w-auto h-auto bg-center  bg-cover bg-[url(https://res.cloudinary.com/djsdqleik/image/upload/v1743448809/193144844_2206929989441494_3409832407596579072_n_pgpp8y.jpg)]">

<div className="bg-zinc-800/60 h-68 flex items-center justify-center">
<p className="text-center font-bold italic text-3xl text-amber-300">Contáctanos</p>
</div>
        </section>


          <section className="w-screen overflow-y-hidden h-auto bg-neutral-100 md:p-10">
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center text-center pb-12">

            <div className=" text-neutral-600 flex flex-col items-center justify-center mt-10">
              <p className="text-2xl font-bold text-neutral-700 mb-4">Envíanos un correo directo:</p>
            <div className="flex items-center justify-center text-center w-96 p-4 rounded-md text-zinc-600  md:border-2 border-neutral-500">
             <MailForm />
            </div>
          </div>

              <div className="text-[12pt] text-neutral-600 flex flex-col items-start justify-center gap-3">
                <p className="text-2xl font-bold mb-4 text-neutral-700">Otros medios de contacto:</p>
                <a href="https://www.facebook.com/IGLESIAEMANUELMCA" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 flex flex-row items-center">
          <i className="bi bi-facebook text-amber-400 "></i>
          <p className="pl-2 text-[12pt] underline">Misión Centroamericana &quot;Emanuel&quot;</p>
        </a>
        <a href="https://www.instagram.com/TU_PAGINA" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 flex flex-row items-center">
          <i className="bi bi-instagram text-amber-400"></i>
          <p className="pl-2 text-[12pt] underline">MCA Iglesia &quot;Emanuel&quot;</p>

        </a>
        <a href="https://wa.me/TU_NUMERO" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 flex flex-row items-center">
          <i className="bi bi-whatsapp text-amber-400"></i>
          <p className="pl-2 text-[12pt] underline">1234-5678</p>

        </a>
                <a href="mailto:contacto@iglesia.com" className="flex items-center justify-center space-x-2 hover:text-white">
            <i className="bi bi-envelope-fill text-amber-400"></i>
            <span className="underline">contacto@iglesia.com</span>
          </a>
          <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-white">
            <i className="bi bi-telephone-fill  text-amber-400" ></i>
            <span>(123) 456-7890</span>
          </a>
              </div>
          </div>
            </section>
    </div>
  )
}
