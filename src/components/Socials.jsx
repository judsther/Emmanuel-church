

export default function Socials() {
  return (
    <div className="flex flex-col items-center justify-center text-neutral-800 py-2 px-4 rounded-lg  ">
       <div className="flex gap-4 text-4xl">
        <a href="https://www.facebook.com/TU_PAGINA" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/TU_PAGINA" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://wa.me/TU_NUMERO" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
          <i className="bi bi-whatsapp"></i>
        </a>
      
      </div>
   
    </div>
  )
}
