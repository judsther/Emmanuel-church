
//<section className="relative bg-[url(https://res.cloudinary.com/djsdqleik/image/upload/v1738612001/church/lgxwlwedwnklfboclz4t.jpg)] w-screen h-85 md:h-140 bg-cover flex items-center justify-start"></section>
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "https://res.cloudinary.com/djsdqleik/image/upload/v1738612003/church/fqlcfb86u7gsfgnfqrea.jpg",
  "https://res.cloudinary.com/djsdqleik/image/upload/v1742424193/482030169_1060668312757106_7329793987348902809_n_ovcbie.jpg",
  "https://res.cloudinary.com/djsdqleik/image/upload/v1742424204/484315176_1063987332425204_944934232276870587_n_jexy5p.jpg",
  "https://res.cloudinary.com/djsdqleik/image/upload/v1742424190/485073891_3394127314055083_5446914150604550677_n_b85aup.jpg"
];

export default function Banner() {
  return (
 <>
  <div className="flex items-center">
            <div className="absolute flex ms-10 lg:ms-28 text-white text-start items-center z-10 mt-80 md:mt-[550px]">
          <p className="text-4xl md:text-8xl font-extrabold flex flex-col">
            ¡Sólo <br />
            <span className="font-stretch-semi-expanded text-amber-300">
              Jesucristo
            </span>
            
            <span className="">
              salva!
            </span>
          </p>

     
        </div>
    </div>
           <section className="bg-cover relative w-full h-[300px] md:h-[600px] overflow-hidden flex items-center justify-start">
            
      {/* Carrusel de Imágenes */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
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
      </>
  );
}
