

export default function Clinica() {
  return (
    <div>
    
           <section className="overflow-auto  bg-blue-900 min-h-160 md:min-h-90 flex flex-col md:flex-row items-center">
           <div className="w-full md:w-1/2 m-4">
      <img className=" object-contain p-4" src="https://res.cloudinary.com/djsdqleik/image/upload/v1738612010/church/vlxqfj2cffq2w77pldbc.jpg" alt="" />
        </div>
        <div className=" w-full md:w-1/2 text-white text-center z-10 mt-6">
          <p className=" text-2xl md:text-4xl font-extrabold mb-1">
            Clínica Emmanuel
          </p>
          <p className="text-xl md:text-2xl font-light mb-7">
            Abierto en horarios de culto.
          </p>
        </div>
       
      </section>

    </div>
  )
}
