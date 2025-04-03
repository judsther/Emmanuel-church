import Mapa from "./components/Mapa";

export default function Iglesia() {
  const images = [
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1742424200/484119913_1063986469091957_5967134497165308574_n_nr8kkl.jpg",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1742424199/484108139_1063986529091951_132258474771696987_n_lkekvh.jpg",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1742424191/481991134_1060656796091591_1345340539620723581_n_qvtlhb.jpg",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1742424189/480716812_3375464829254665_4315484884471608745_n_yedia3.jpg",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1742424206/484382143_1067002115457059_7797616091610669051_n_tapghb.jpg",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1742424203/484313287_1063986309091973_375395124324652774_n_kox6sy.jpg",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1742424189/34087925_1226920637442439_7264178926182727680_n_pwmjnj.jpg",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1742424199/484188794_1063986189091985_1348106853948501642_n_mrbzwv.jpg",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1742424204/484411035_1063986665758604_5279342218186758903_n_l0rvtw.jpg",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1738611993/church/raxku17tardolx5yybr0.jpg",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1738611988/church/sgwdtkkasafpykzirsfw.jpg",
    },
    {
      src: "https://res.cloudinary.com/djsdqleik/image/upload/v1738611997/church/pdqbmaensbw2xckpe3y8.jpg",
    },
  ];

  return (
    <div>
      <section className="w-auto h-auto bg-center bg-cover bg-[url(https://res.cloudinary.com/djsdqleik/image/upload/v1742424191/481991134_1060656796091591_1345340539620723581_n_qvtlhb.jpg)]">
        <div className="bg-zinc-800/70 h-68 flex items-center justify-center">
          <p className="text-center font-bold italic text-3xl text-amber-300">
            ¡Tu casa te espera!
          </p>
        </div>
      </section>
      <Mapa />

      <section className="w-screen h-auto md:h-[550px] bg-neutral-800">
        <div className="flex flex-col-reverse md:flex-row gap-2">
          <div className="flex items-center justify-center md:w-1/2 md:p-28 p-4">
            <img
              className=" rounded-2xl object-cover"
              src="https://res.cloudinary.com/djsdqleik/image/upload/v1742424189/481338681_3380605122073969_5022854454823692543_n_acxnss.jpg"
              alt="foto de iglesia emanuel mca de los primeros años"
            />
          </div>
          <div className="flex items-center justify-center md:w-1/2">
            <p className="md:p-20 p-4 text-white flex flex-col">
              <span className="py-4 font-extrabold text-3xl">
                Un Poco de Nuestra Historia.
              </span>
              La Iglesia Misión Centroamericana &quot;Emanuel&quot; en San
              Vicente, El Salvador, forma parte de la Misión Centroamericana
              (MCA), una organización evangélica con presencia en varios países
              de Centroamérica. La MCA celebró su 129 aniversario en 2025,
              destacando su larga trayectoria en la región.
              <br />
              <br />
              Iglesia &quot;Emanuel&quot; fue fundada en la ciudad de San
              Vicente en el año 1939 bajo el nombre de &quot;Rosa de Sarón&quot;
              por los misioneros estadounidenses...
            </p>
          </div>
        </div>
      </section>

      <section className="w-full h-[420px] md:h-[350px] flex flex-col items-center justify-center bg-neutral-800 px-4">
  <p className="text-white text-3xl font-bold text-center mb-9">
    Galería:
  </p>

  <div className="w-full overflow-x-auto scroll-smooth whitespace-nowrap">
    <div className="inline-flex h-auto space-x-4"> 
      {images.map((img, index) => (
       
        <div 
          key={index} 
          className="inline-block flex-shrink-0" 
        >
           <div className="h-58 w-auto flex items-center justify-center">
          <img 
            src={img.src} 
            alt={img.alt || "Imagen de galería"} 
            className="h-full w-full object-cover rounded"
          />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
}
