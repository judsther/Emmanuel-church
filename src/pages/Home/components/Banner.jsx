
//<section className="relative bg-[url(https://res.cloudinary.com/djsdqleik/image/upload/v1738612001/church/lgxwlwedwnklfboclz4t.jpg)] w-screen h-85 md:h-140 bg-cover flex items-center justify-start"></section>
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "https://res.cloudinary.com/djsdqleik/image/upload/v1738612001/church/lgxwlwedwnklfboclz4t.jpg",
  "https://res.cloudinary.com/djsdqleik/image/upload/v1738612007/church/bxlggit2dyeqehdzmr7z.jpg",
  "https://res.cloudinary.com/djsdqleik/image/upload/v1738612007/church/rzfq5wzaj2mvdozenmck.jpg",
  "https://res.cloudinary.com/djsdqleik/image/upload/v1738611997/church/pdqbmaensbw2xckpe3y8.jpg",
];

export default function Banner() {
  return (
 
           <section className="bg-cover mt-16 relative w-full h-[300px] md:h-[600px] overflow-hidden flex items-center justify-start">
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
        <div className="absolute inset-0 bg-zinc-900/65 z-1"></div>
      </section>
   
  );
}
