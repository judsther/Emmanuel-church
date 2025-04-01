
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-gray-400 py-8 overflow-y-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-lg font-semibold text-zinc-400">Emmanuel M.C.A.</p>
        <p className="mt-2 text-sm">Llevando el mensaje de amor y esperanza.</p>

        {/* Contacto */}
        <div className="mt-4 flex flex-col md:flex-row items-center justify-center text-start space-x-6 gap-4">
          <a href="mailto:contacto@iglesia.com" className="flex items-center space-x-2 hover:text-white">
            <EnvelopeIcon className="w-5 h-5" />
            <span>contacto@iglesia.com</span>
          </a>
          <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-white">
            <PhoneIcon className="w-5 h-5" />
            <span>(123) 456-7890</span>
          </a>
          <div className="text-zinc-400 text-2xl">
          <Socials />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} Emanuel MCA. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

