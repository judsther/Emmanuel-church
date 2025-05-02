
import MinisteriosSwiper from "./MinisteriosSwiper";

const  MinisteriosProp = () => {

  const imagenes = [
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1738612001/church/lgxwlwedwnklfboclz4t.jpg",
      alt: "Ministerio Femenil",
      title: "Ministerio Femenil",
      description:
        "Fortalecer la vida espiritual de cada mujer mediante comunión, oración y enseñanza bíblica, fomentando una identidad firme en Cristo y un testimonio que impacte su hogar, iglesia y comunidad.",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1738611995/church/aigheennfcrgz7aqxxoh.jpg",
      alt: "Ministerio de Servidores",
      title: "Ministerio de Servidores",
      description:
        "Servir con humildad, orden y amor a toda persona que asiste a nuestras reuniones y actividades, reflejando el carácter de Cristo en cada acción y creando un ambiente de bienvenida y respeto.",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1742424194/482345607_1061410152682922_7691800340893153712_n_sgcu2u.jpg",
      alt: "Ministerio de Evangelismo",
      title: "Ministerio de Evangelismo",
      description:
        "Llevar el mensaje del Evangelio a toda persona, en todo lugar, proclamando a Jesús como Señor y Salvador con valentía, claridad y amor, siguiendo el ejemplo del corazón misionero de Dios.",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1738612009/church/xkkrlwx7hrarnuxc7sjl.jpg",
      alt: "Ministerio Social",
      title: "Ministerio Social",
      description:
        "Mostrar el amor de Cristo a través de acciones concretas y apoyar a personas en necesidad dentro y fuera de la iglesia mediante donaciones, visitas y campañas solidarias.",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1738612004/church/rmftjh2jofkqzavn2qgv.jpg",
      alt: "Ministerio Dominical",
      title: "Ministerio Dominical",
      description:
        "Formar discípulos de todas las edades a través del estudio sistemático y vivencial de la Palabra de Dios, sembrando fundamentos firmes para una vida cristiana sólida y fructífera.",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1738611988/church/pk2wa8bivrmmznobnjy7.jpg",
      alt: "Ministerio de Alabanza",
      title: "Ministerio de Alabanza",
      description:
        "Guiar a la congregación en una adoración genuina y centrada en Dios, utilizando la música como expresión de gratitud, entrega y comunión con el Señor, cultivando una atmósfera donde Su presencia se manifieste.",
    },
  ];

  return( 
    <div className="MinisteriosProp">
  <MinisteriosSwiper imagenes={imagenes} />
    </div>
)
}

export default MinisteriosProp;