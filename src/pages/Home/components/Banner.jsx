
//<section className="relative bg-[url(https://res.cloudinary.com/djsdqleik/image/upload/v1738612001/church/lgxwlwedwnklfboclz4t.jpg)] w-screen h-85 md:h-140 bg-cover flex items-center justify-start"></section>
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "https://res.cloudinary.com/djsdqleik/image/upload/v1738612003/church/fqlcfb86u7gsfgnfqrea.jpg",
  "https://res.cloudinary.com/djsdqleik/image/upload/v1738611980/church/mh8uaeff5wn0zkbtu8js.jpg",
  "https://res.cloudinary.com/djsdqleik/image/upload/v1738611997/church/mo2gbiekch4k4gfpdgei.jpg",
  "https://res.cloudinary.com/djsdqleik/image/upload/v1738612009/church/xkkrlwx7hrarnuxc7sjl.jpg"
];

export default function Banner() {
  return (
 
           <section className="bg-cover relative w-full h-[300px] md:h-[600px] overflow-hidden flex items-center justify-start">
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
