import React from "react";

const ImageSlide = ({ modelName, modelImage, isTextWhite = true }) => {
  return (
    <section
      className="landing-section bg-black h-screen w-screen text-center relative overflow-hidden"
      data-header-color={`${isTextWhite ? "white" : "black"}`}
    >
      <div className="z-30 relative h-full flex flex-col">
        <header className="">
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

        <footer className=" flex flex-col flex-grow justify-end pb-20">
          <div className="gap-x-4 flex mx-auto">
            <a
              className="border-2 hover:border-white hover:bg-white/5 backdrop-blur-sm text-sm rounded font-medium px-20 py-2 inline-block 
                    bg-white text-black transition-colors border-white hover:text-white"
              href="#"
            >
              Ordenar
            </a>
            <a
              className="text-white  text-sm rounded font-medium px-12 py-2 inline-block 
                 transition-colors hover:bg-gray-700 bg-gray-800 border-2 border-gray-800 hover:border-gray-700"
              href="#"
            >
              Prueba de manejo
            </a>
          </div>
        </footer>
      </div>
      <div className="absolute top-0 bottom-0  w-full h-full z-10">
        <img
          src={modelImage}
          alt={modelName}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default ImageSlide;
