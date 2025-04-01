

import PropTypes from 'prop-types';

export default function MinisteriosSwiper({imagenes}) {

  return (
    <div className="w-full">

      {/*ministerios */}
  
       
        <div className="flex flex-col items-start justify-center">
          {imagenes.map((img, index) => (
              <div key={index} 
              className={`w-full h-full  gap-8 py-3 flex items-center justify-center ${index % 2 === 0 ? "flex-col md:flex-row text-start" : "flex-col md:flex-row-reverse text-end"}`}>
                <div className="flex items-center justify-center w-96 md:h-80 md:w-[35rem]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="object-cover h-full w-full rounded-xl"
                    />        
                </div>
                <p className="text-zinc-700 font-medium mt-1 mb-4 mx-4"><span className="font-black">{img.title}<br/></span>{img.description}</p>
           </div>))}
           </div>
        </div>
  );
}

MinisteriosSwiper.propTypes = {
  imagenes: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
        