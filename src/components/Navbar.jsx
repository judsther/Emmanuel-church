import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-end">
    <nav className=" fixed rounded-4xl bg-indigo-900 m-6 z-50 drop-shadow-lg shadow-zinc-800">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="inset-y-0 left-0 flex items-center sm:hidden">
            {/* Botón para abrir/cerrar el menú */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              
              {/* Ícono de hamburguesa */}
              <svg className={`${menuOpen ? "hidden" : "block"} size-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              {/* Ícono de cerrar */}
              <svg className={`${menuOpen ? "block" : "hidden"} size-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center group">
              <Link to="/">
              <img className="h-10 w-auto absolute transition-opacity duration-300 group-hover:opacity-0 active:opacity-0" 
              src="https://res.cloudinary.com/djsdqleik/image/upload/v1741453742/Subtract_qhklqx.png" alt="Logo" />
              <img className="h-10 w-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100 active:size-12" 
              src="https://res.cloudinary.com/djsdqleik/image/upload/v1739662964/church/tjekueix26jhmgsrhta3.png" alt="Logo" />
              </Link>

            </div>
            <div className="hidden sm:block">
              <div className="flex space-x-4 ms-4">
              <Link to="/" className="rounded-4xl px-3 py-4 text-sm font-medium text-white hover:bg-amber-300 hover:text-gray-600">Inicio</Link>
              <Link to="/iglesia" className="rounded-4xl px-3 py-4 text-sm font-medium text-white hover:bg-amber-300 hover:text-gray-600">Iglesia</Link>
                <Link to="/ministerios" className="rounded-4xl px-3 py-4 text-sm font-medium text-white hover:bg-amber-300 hover:text-gray-600">Ministerios</Link>
                <Link to="/proyectos" className="rounded-4xl px-3 py-4 text-sm font-medium text-white hover:bg-amber-300 hover:text-gray-600">Proyectos</Link>
                <Link to="/contacto" className="rounded-4xl px-3 py-4 text-sm font-medium text-white hover:bg-amber-300 hover:text-gray-600">Contacto</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menú móvil controlado por estado */}
      <div className={`${menuOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
        <Link to="/" className="rounded-4xl block active:bg-gray-900 px-3 py-2 text-base font-medium text-white hover:bg-amber-200 hover:text-gray-600">Inicio</Link>
          <Link to="/iglesia" className="rounded-4xl block active:bg-gray-900 px-3 py-2 text-base font-medium text-white hover:bg-amber-200 hover:text-gray-600">Iglesia</Link>
          <Link to="/ministerios" className="rounded-4xl block active:bg-gray-900 px-3 py-2 text-base font-medium text-white hover:bg-amber-200 hover:text-gray-600">Ministerios</Link>
          <Link to="/proyectos" className="rounded-4xl block active:bg-gray-900 px-3 py-2 text-base font-medium text-white hover:bg-amber-200 hover:text-gray-600">Proyectos</Link>
          <Link to="/contacto" className="rounded-4xl block active:bg-gray-900 px-3 py-2 text-base font-medium text-white hover:bg-amber-200 hover:text-gray-600">Contacto</Link>
        </div>
      </div>
    </nav>
    </div>
  );
}
