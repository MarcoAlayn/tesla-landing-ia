import React from "react";
import ElementBackground from "../elementBackground/ElementBackground";

const ModelHero = ({
  modelName,
  sourceElement,
  isTextWhite = true,
  isVideo = false,
}) => {
  return (
    <section
      className='landing-section bg-black h-screen w-screen text-center relative overflow-hidden'
      data-header-color={`${isTextWhite ? "white" : "black"}`}
    >
      <div className='z-30 relative h-full flex flex-col'>
        <header className=''>
          <h2
            className={`${
              isTextWhite ? "text-white" : "text-black"
            } pt-40 text-5xl font-medium`}
          >
            {modelName}
          </h2>
          <p
            className={`${
              isTextWhite ? "text-white" : "text-black"
            } text-sm pt-4`}
          >
            Concertar una prueba de conducción
          </p>
        </header>

        <footer className=' flex flex-col flex-grow justify-end pb-20 text-white'>
          <div className='flex mx-auto pb-10 gap-8 font-semibold'>
            <div className='flex flex-col'>
              <div>
                <span className='text-2xl'>578</span> <span>km</span>
              </div>
              <span className='text-sm font-normal'>Autonomía</span>
            </div>
            <div className='flex flex-col'>
              <div>
                <span className='text-2xl'>2.1</span> <span>s</span>
              </div>
              <span className='text-sm font-normal'>0 a 100 km/h*</span>
            </div>
            <div className='flex flex-col'>
              <div>
                <span className='text-2xl'>322</span> <span>km/h</span>
              </div>
              <span className='text-sm font-normal'>Velocidad Máxima*</span>
            </div>
            <div className='flex flex-col'>
              <div>
                <span className='text-2xl'>1,020</span> <span>hp</span>
              </div>
              <span className='text-sm font-normal'>Potencia Máxima</span>
            </div>
          </div>
          <div className='gap-x-4 flex mx-auto transition-colors ease-out duration-300'>
            <a
              className='border-2 hover:border-white hover:bg-white/5 backdrop-blur-sm text-sm rounded font-medium px-20 py-2 inline-block 
                    bg-white text-black border-white hover:text-white transition-colors ease-out duration-300'
              href='#'
            >
              Ordenar
            </a>
            <a
              className='text-white  text-sm rounded font-medium px-12 py-2 inline-block 
               hover:bg-gray-700 bg-gray-800 border-2 border-gray-800 hover:border-gray-700 transition-colors ease-out duration-300'
              href='#'
            >
              Prueba de manejo
            </a>
          </div>
        </footer>
      </div>
      <div className='absolute top-0 bottom-0  w-full h-full z-10 bg-black'>
        <ElementBackground
          alt={modelName}
          className='h-full w-full object-cover object-center'
          isVideo={isVideo}
          sourceElement={sourceElement}
        />
      </div>
    </section>
  );
};

export default ModelHero;
