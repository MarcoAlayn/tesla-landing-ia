import React, { useEffect } from "react";
import desktopVideo from "../../assets/videos/Homepage-Demo-Drive-Desktop-NA.webm";
import { useDispatch, useSelector } from "react-redux";
import { getAllModels } from "../../redux/actions";

const HomeHero = () => {
  const dispatch = useDispatch();

  const modelSpecifications = useSelector(
    (state) => state?.modelSpecifications
  );

  const getAllTeslaModels = async (e) => {
    await dispatch(getAllModels());
    console.log("se ejecuta");
  };

  useEffect(() => {
    console.log(modelSpecifications.length !== 0);
    if (modelSpecifications.length !== 0) return;
    getAllTeslaModels();
  }, [dispatch]);

  return (
    <section className='bg-black h-screen w-screen text-center relative overflow-hidden'>
      <div className='z-30 relative h-full flex flex-col'>
        <header className=''>
          <h2 className='text-white pt-40 text-5xl font-medium'>
            Vive la experiencia Tesla
          </h2>
          <p className='text-white text-lg mt-3'>
            Programe una prueba de conducción hoy mismo
          </p>
        </header>

        <footer className=' flex flex-col flex-grow justify-end pb-20'>
          <div>
            <a
              className='text-white border-2 border-white bg-white/5 backdrop-blur-sm text-sm rounded font-medium px-12 py-2 inline-block 
                hover:bg-white hover:text-black transition-colors'
              href='#'
            >
              Prueba de conducción
            </a>
          </div>
        </footer>
      </div>
      <div className='absolute top-0 bottom-0  w-full h-full z-10'>
        <video
          className='object-center object-cover w-full h-full'
          autoPlay
          muted
          loop
          playsInline
          src={desktopVideo}
        />
      </div>
    </section>
  );
};

export default HomeHero;
