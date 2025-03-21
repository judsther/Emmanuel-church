import { Link } from "react-router-dom";


export default function TextoBanner() {
  return (
    <div>
            <div className="absolute flex flex-col gap-y-1 md:gap-y-8 ms-8 lg:ms-28 text-white text-start items-start mt-15 md:mt-45 z-10">
          <p className="text-4xl md:text-6xl font-extrabold">
            ¡Sólo <br />
            <span className="font-stretch-semi-expanded text-amber-200">
              Jesucristo
            </span>
            <br />{" "}
            <span className="underline decoration-dotted decoration-indigo-300">
              salva!
            </span>
          </p>

          <Link
            to="/"
            className="w-32 py-2 mt-3 bg-white  hover:bg-amber-200 text-center text-zinc-800 rounded font-sans font-semibold"
          >
            Visítanos
          </Link>
          
        </div>
    </div>
  )
}
