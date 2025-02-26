
export default function Headline() {
  return (
    <div className="">
      <section className="overflow-hidden bg-indigo-950 min-h-100 md:min-h-80 flex items-center">
      <div className="w-full text-white text-center z-10 mt-6 p-4">
        <p className="text-2xl md:text-4xl font-extrabold mb-1">
        ¡Bienvenido a casa!
        </p>
        <p style={{fontSize:"14pt"}} className=" md:text-2xl font-medium mb-7">
          Somos iglesia Emmanuel Misión Centroamericana de San Vicente. <br />Congrégate con nosotros.
        </p>
        <p className="text-2xl md:text-3xl font-extrabold mb-1">
        Horarios de Servicio:
        </p>
        <p style={{fontSize:"14pt"}} className="md:text-2xl font-medium mb-7">
            <span className="text-amber-200">Domingo:</span> culto domínical 9:00am y culto general 4:30pm <br />
            <span className="text-amber-200">Lunes:</span> oración 5:00pm <br />
            <span className="text-amber-200">Miércoles:</span> Estudio bíblico 5:00pm <br />
            <span className="text-amber-200">Jueves:</span> Culto femenil 4:30pm <br />
        </p>
      </div>
      </section>
    </div>
  )
}
