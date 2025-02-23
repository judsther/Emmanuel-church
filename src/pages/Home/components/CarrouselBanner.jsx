import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "https://res.cloudinary.com/djsdqleik/image/upload/v1738612007/church/bxlggit2dyeqehdzmr7z.jpg",
  "https://res.cloudinary.com/djsdqleik/image/upload/v1738612007/church/rzfq5wzaj2mvdozenmck.jpg",
  "https://res.cloudinary.com/djsdqleik/image/upload/v1738611997/church/pdqbmaensbw2xckpe3y8.jpg",
];

export default function CarrouselBanner() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Carrusel de Imágenes */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="absolute top-0 left-0 w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={src}
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Texto sobre el carrusel */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 p-6">
        <p className="text-2xl md:text-4xl font-extrabold mb-1">
          Sólo falta que tú estés aquí.
        </p>
        <p className="text-xl md:text-2xl font-light mb-7">
          Ven tal como eres. ¡Jesús te ama!
        </p>
      </div>
    </section>
  );
}
