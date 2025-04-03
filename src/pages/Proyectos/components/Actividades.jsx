import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Actividades() {
  const [date, setDate] = useState(new Date());
  
  const activities = [
    { date: "2025/Abril/05", title: "Impacto Evangelístico" },
    { date: "2025/Abril/06", title: "Servicio de Ayuno y Oración" },
    { date: "2025/Abril/06", title: "Servicio de Santa Cena" },
    { date: "2025/Abril/07-11 ", title: "Semana de Oración" },
  ];

  return (
    <div className="py-8 rounded-lg flex flex-col items-center  overflow-x-hidden">

      <div className="flex flex-col md:flex-row items-center gap-15 md:px-0 px-12">
        <div className="bg-amber-300 p-1 rounded-md">
      <Calendar onChange={setDate} value={date} className="rounded-md bg-amber-300" />
      </div>
        <div className="w-full">
        <p className="text-center text-gray-600 mb-6">
        Te esperamos en nuestras actividades próximas. ¡No te las pierdas!
      </p>
      <h2 className="text-2xl font-bold text-start text-indigo-900 mb-4">Próximas Actividades</h2>
          <ul className="space-y-2">
            {activities.map((event, index) => (
              <li
                key={index}
                className="p-3 bg-indigo-100 border-l-4 border-indigo-900 rounded-md shadow-sm text-zinc-700"
              >
            <i className="bi bi-calendar-fill text-indigo-900"></i>  <strong>{event.date}:</strong> {event.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
