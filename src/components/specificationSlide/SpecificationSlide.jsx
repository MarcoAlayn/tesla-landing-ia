import React from "react";

const SpecificationSlide = ({ modelName, modelImage, isTextWhite = true }) => {
  return (
    <section
      className="landing-section bg-black h-screen w-screen relative overflow-hidden"
      data-header-color={`${isTextWhite ? "white" : "black"}`}
    >
      <div className="z-30 relative h-full flex">
        {/* Sección izquierda: Imagen */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <img
            src={modelImage}
            alt={modelName}
            className="h-3/4 object-cover object-center"
          />
        </div>
        {/* Sección derecha: Especificaciones */}
        <div className="w-1/2 h-full flex flex-col justify-center text-left p-12">
          <header className="">
            <h2
              className={`${
                isTextWhite ? "text-white" : "text-black"
              } text-4xl font-medium mb-4`}
            >
              Especificaciones del {modelName}
            </h2>
            
          </header>
          <div
            className=" text-white flex
              [&>ul>li]:flex [&>ul>li]:flex-col [&>ul>li]:text-sm [&>ul>li]:py-5 [&>ul>li]:px-3
              [&>ul>div]:border-t-[1px] [&>ul>div]:border-white/60 [&>ul>div]:max-w-8 [&>ul>div]:ml-3 "
          >
            <ul>
              <div></div>
              <li>
                <strong>Autonomía (est. EPA)</strong> 578 km
              </li>

              <div></div>

              <li>
                <strong>Cuarto de Milla</strong>9.23 a 250 km/h en trampa de
                velocidad
              </li>

              <div></div>

              <li>
                <strong>Potencia Máxima</strong>1,020 hp
              </li>

              <div></div>

              <li>
                <strong>Aceleración</strong>De 0 a 100 km/h en 2.1 s menos el
                rodaje inicial
              </li>

              <div></div>

              <li>
                <strong>Rines</strong>19" o 21"
              </li>

              <div></div>

              <li>
                <strong>Carga</strong>793 litros
              </li>

              <div></div>

              <li>
                <strong>Peso (masa en vacío)</strong>2,167 kg
              </li>
            </ul>
            <ul>
              <div></div>
              <li>
                <strong>Velocidad máxima</strong>322 km/h cuando está equipado
                con actualizaciones de hardware de pago
              </li>

              <div></div>

              <li>
                <strong>Coeficiente de arrastre</strong>0.208 Cd
              </li>

              <div></div>

              <li>
                <strong>Sistema de propulsión</strong>Tri Motor
              </li>

              <div></div>

              <li>
                <strong>Máximo de Supercharger</strong>250 kW
              </li>

              <div></div>

              <li>
                <strong>Garantía</strong>Vehículo básico4 años u 80,000 km, lo
                que ocurra primero. Batería y unidad de potencia8 años o 240,000
                km, lo que ocurra primero
              </li>
            </ul>
          </div>
          <p className="mt-8 text-white">
            Se muestra modelo y especificaciones disponibles en EEUU
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecificationSlide;
