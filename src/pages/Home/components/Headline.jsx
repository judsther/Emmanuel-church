
export default function Headline() {
  return (
    <div className="">
      <section className="h-[500px]  bg-neutral-200">
      <div className="w-full h-full flex flex-col items-center justify-center text-zinc-600 text-center z-10 p-4">
        <div className="w-20 h-20 md:w-25 md:h-25 m-4">
        <img src="https://res.cloudinary.com/djsdqleik/image/upload/v1739662964/church/tjekueix26jhmgsrhta3.png" alt="logo de iglesias mision centro americana" />
        </div>
        <p className="text-2xl md:text-4xl font-extrabold mb-1">
        ¡Bienvenido a casa!
        </p>
        <p style={{fontSize:"14pt"}} className=" md:text-2xl font-medium mb-7">
          Somos iglesia &quot;Emanuel&quot; Misión Centroamericana de San Vicente. <br />Congrégate con nosotros.
        </p>
        <p className="text-2xl md:text-3xl font-extrabold mb-1">
        Horarios:
        </p>
        <p style={{fontSize:"14pt"}} className="md:text-2xl font-medium mb-7">
            <span className="text-indigo-900">Domingo:</span> Culto domínical 9:30am y culto general 4:00pm <br />
            <span className="text-indigo-900">Lunes:</span> Oración 5:00pm <br />
            <span className="text-indigo-900">Miércoles:</span> Estudio bíblico 5:00pm <br />
            <span className="text-indigo-900">Jueves:</span> Culto femenil 4:30pm <br />
        </p>
      </div>
      </section>
    </div>
  )
}
