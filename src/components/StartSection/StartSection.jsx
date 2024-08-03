import React from "react";

const StartSection = ({ handlerDisplayInputView,desktopVideo }) => {
  return (
    <div className='snap-start'>
      <section className='bg-black h-screen w-screen text-center relative overflow-hidden'>
        <div className='z-30 relative h-full flex flex-col'>
          <header className=''>
            <h2 className='text-white pt-40 text-5xl font-medium'>
              Ayúdame a elegir
            </h2>
            <p className='text-white text-sm pt-5'>
              Proporciona tus gustos, preferencias y necesidades para recibir
              una recomendación personalizada del modelo de Tesla ideal para ti
            </p>
            <p className='text-white text-sm'>
              Nuestra IA analizará tus necesidades y te dirá por qué es tu
              modelo ideal.
            </p>
          </header>
          <footer className=' flex flex-col flex-grow justify-start pt-5'>
            <div>
              <button
                className='text-white border-2 border-white bg-white/5 backdrop-blur-sm text-sm rounded font-medium px-12 py-2 inline-block 
                hover:bg-white hover:text-black transition-colors'
                onClick={handlerDisplayInputView}
              >
                Comenzar
              </button>
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
    </div>
  );
};

export default StartSection;
