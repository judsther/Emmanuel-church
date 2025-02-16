import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "https://res.cloudinary.com/djsdqleik/image/upload/v1738612007/church/bxlggit2dyeqehdzmr7z.jpg",
  "https://res.cloudinary.com/djsdqleik/image/upload/v1738612007/church/rzfq5wzaj2mvdozenmck.jpg",
  "https://res.cloudinary.com/djsdqleik/image/upload/v1738611997/church/pdqbmaensbw2xckpe3y8.jpg",
];



export default function Carrousel() {
  return (
    <section className="overflow-hidden bg-white min-h-100 md:min-h-80 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 text-zinc-600 text-center z-10 mt-6 p-4">
        <p className="text-2xl md:text-4xl font-extrabold mb-1">
          Sólo falta que tú estés aquí.
        </p>
        <p className="text-xl md:text-2xl font-light mb-7">
          Ven tal como eres. ¡Jesús te ama!
        </p>
      </div>

      {/* Carrusel de Imágenes */}
      <div className="w-full md:w-1/2">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                className="object-cover w-full h-80 p-4"
                src={src}
                alt={`Slide ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}



