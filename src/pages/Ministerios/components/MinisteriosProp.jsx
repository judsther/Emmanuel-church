
import MinisteriosSwiper from "./MinisteriosSwiper";

const  MinisteriosProp = () => {

  const imagenes = [
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1738612001/church/lgxwlwedwnklfboclz4t.jpg",
      alt: "Ministerio Femenil",
      title: "Ministerio Femenil",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna vitae nunc.",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1738611995/church/aigheennfcrgz7aqxxoh.jpg",
      alt: "Ministerio de Servidores",
      title: "Ministerio de Servidores",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna vitae nunc.",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1742424194/482345607_1061410152682922_7691800340893153712_n_sgcu2u.jpg",
      alt: "Ministerio de Evangelismo",
      title: "Ministerio de Evangelismo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna vitae nunc.",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1738612009/church/xkkrlwx7hrarnuxc7sjl.jpg",
      alt: "Ministerio Social",
      title: "Ministerio Social",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna vitae nunc.",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1738612004/church/rmftjh2jofkqzavn2qgv.jpg",
      alt: "Ministerio Dominical",
      title: "Ministerio Dominical",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna vitae nunc.",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1738611988/church/pk2wa8bivrmmznobnjy7.jpg",
      alt: "Ministerio de Alabanza",
      title: "Ministerio de Alabanza",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna vitae nunc.",
    },]

  return( 
    <div className="MinisteriosProp">
  <MinisteriosSwiper imagenes={imagenes} />
    </div>
)
}

export default MinisteriosProp;