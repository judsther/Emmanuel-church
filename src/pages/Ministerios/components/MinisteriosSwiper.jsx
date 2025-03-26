import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


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
  },
];

export default function MinisteriosSwiper() {
  return (
    <div className="">

      {/*ministerios swiper */}
      
        <div className="h-full">
        <div className="flex items-center justify-center">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop={true}
            className="h-[450px] w-[350px] md:w-[800px] "
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

        </div>
        
        )};