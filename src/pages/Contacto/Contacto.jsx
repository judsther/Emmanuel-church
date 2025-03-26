import MailForm from "../../components/MailForm";
import Socials from "../../components/Socials";


export default function Contacto() {
  return (
    <div>
          <section className="w-screen h-auto bg-neutral-100 md:p-10">
            <div className="w-full h-full flex flex-col gap-10 items-center justify-center text-center md:pt-20 pt-26">
              <div className="text-4xl text-neutral-600 flex flex-col items-center justify-center">
                <p className="text-3xl font-extrabold mb-4 text-neutral-700">Contáctanos a través de nuestras redes:</p>
                
                <Socials />
             
              </div>
              </div>
              <div className=" text-neutral-600 flex flex-col items-center justify-center mt-10">
              <p className="text-3xl font-extrabold text-neutral-700 mb-4">O envíanos un correo:</p>
            <div className="flex items-center justify-center w-96 p-4 rounded-md text-zinc-600  md:border-2 border-neutral-500">
             <MailForm />
            </div>
          </div>

            </section>
    </div>
  )
}
