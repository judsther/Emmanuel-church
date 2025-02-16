import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white-800 fixed top-0 left-0 w-full bg-neutral-50/80 backdrop-blur-xs z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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
            <div className="flex shrink-0 items-center">
              <img className="h-10 w-auto" src="https://res.cloudinary.com/djsdqleik/image/upload/v1739663131/church/w0mtnmqfz5rzakyfpskg.png" alt="Logo" />
            </div>
            <div className="hidden sm:block">
              <div className="flex space-x-4 ms-4">
                <a href="#" className="rounded-md px-3 py-4 text-sm font-medium text-gray-600 hover:bg-gray-700 hover:text-white">Misión</a>
                <a href="#" className="rounded-md px-3 py-4 text-sm font-medium text-gray-600 hover:bg-gray-700 hover:text-white">Nosotros</a>
                <a href="#" className="rounded-md px-3 py-4 text-sm font-medium text-gray-600 hover:bg-gray-700 hover:text-white">Proyectos</a>
                <a href="#" className="rounded-md px-3 py-4 text-sm font-medium text-gray-600 hover:bg-gray-700 hover:text-white">Calendario</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menú móvil controlado por estado */}
      <div className={`${menuOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Dashboard</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
        </div>
      </div>
    </nav>
  );
}
