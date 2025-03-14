import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import MailForm from "./components/MailForm";

const imgs = [
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
    src: "https://res.cloudinary.com/djsdqleik/image/upload/v1738611997/church/pdqbmaensbw2xckpe3y8.jpg",
    alt: "Ministerio de Evangelismo",
    title: "Ministerio de Evangelismo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna vitae nunc.",
  },
  {
    src: "https://res.cloudinary.com/djsdqleik/image/upload/v1738611993/church/raxku17tardolx5yybr0.jpg",
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
  },
];

export default function Ministerios() {
  return (
    <div className="">

      {/*ministerios swiper */}
      <section className="h-[550px] bg-indigo-100">
        <div className="h-full">
        <div className="flex items-center justify-center">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop={true}
            className="h-[450px] mt-14"
          >
            {imgs.map((img, index) => (
              <SwiperSlide key={index} className="w-full h-full text-center flex items-center justify-center">
                <div className="flex items-center justify-center w-full">
                  <div className="rounded-full w-80 h-80 overflow-hidden border-4 border-indigo-400">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="object-cover h-full w-full"
                    />
                  </div>                  
                </div>
                <p className="text-zinc-700 font-semibold text-2xl mt-4 ">{img.title}</p>
                <p className="text-zinc-700 font-medium mt-1 mb-4 mx-4">{img.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>
      </section>

      {/*headline */}
      <section className="h-[550px]  bg-indigo-200">

        <div className="w-full h-full md:flex items-center grid grid-rows-2 p-5 justify-around text-zinc-700 text-center">

          <div>
         <p className="text-2xl">Envíanos un correo <br />o contáctanos por cualquiera de estos medios:</p>

        </div>
        
        <div>
     <MailForm />
        </div>

        </div>
   
      </section>
    </div>
  );
}
