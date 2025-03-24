//import { Link } from "react-router-dom";
/**      <Link
to="/"
className="w-32 py-2 mt-3 bg-white  hover:bg-amber-200 text-center text-zinc-800 rounded font-sans font-semibold"
>
Visítanos
</Link>*/


export default function TextoBanner() {
  return (
    <div className="flex items-center">
            <div className="absolute flex ms-10 lg:ms-28 text-white text-start items-center z-10 mt-80 md:mt-[550px]">
          <p className="text-4xl md:text-8xl font-extrabold flex flex-col">
            ¡Sólo <br />
            <span className="font-stretch-semi-expanded text-amber-300">
              Jesucristo
            </span>
            
            <span className="">
              salva!
            </span>
          </p>

     
        </div>
    </div>
  )
}
