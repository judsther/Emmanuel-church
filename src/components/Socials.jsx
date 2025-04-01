

export default function Socials() {
  return (
    <div className="flex flex-col rounded-lg ">
       <div className="flex gap-4 lg:flex-row flex-col">
        <a href="https://www.facebook.com/IGLESIAEMANUELMCA" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 flex flex-row items-center">
          <i className="bi bi-facebook"></i>
          <p className="pl-2 text-[12pt] underline">Misión Centroamericana &quot;Emanuel&quot;</p>
        </a>
        <a href="https://www.instagram.com/TU_PAGINA" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 flex flex-row items-center">
          <i className="bi bi-instagram"></i>
          <p className="pl-2 text-[12pt] underline">MCA Iglesia &quot;Emanuel&quot;</p>

        </a>
        <a href="https://wa.me/TU_NUMERO" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 flex flex-row items-center">
          <i className="bi bi-whatsapp"></i>
          <p className="pl-2 text-[12pt] underline">1234-5678</p>

        </a>
      
      </div>
   
    </div>
  )
}
