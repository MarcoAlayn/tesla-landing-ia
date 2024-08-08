import React from "react";

const SpecificationSlide = ({
  modelName,
  modelImage,
  isTextWhite = true,
  modelSpecifications,
}) => {
  console.log(modelSpecifications);
  return (
    <section
      className='landing-section bg-black h-screen w-screen relative overflow-hidden'
      data-header-color={`${isTextWhite ? "white" : "black"}`}
    >
      <div className='z-30 relative h-full flex flex-col lg:flex-row'>
        {/* Sección izquierda: Imagen */}
        <div className='w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center p-4 lg:p-8'>
          <img
            src={modelImage}
            alt={modelName}
            className='h-full max-h-96 lg:max-h-full object-cover object-center'
          />
        </div>
        {/* Sección derecha: Especificaciones */}
        <div className='w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center text-left p-4 lg:p-12'>
          <header>
            <h2
              className={`${
                isTextWhite ? "text-white" : "text-black"
              } text-2xl lg:text-4xl font-medium mb-4`}
            >
              Especificaciones del {modelName ?? "N/A"}
            </h2>
          </header>
          <div className='text-white grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 '>
            <ul className='space-y-2'>
              <li>
                <strong>Autonomía (est. EPA)</strong>{" "}
                {modelSpecifications?.autonomyKm ?? "N/A"}
              </li>
              <li>
                <strong>Cuarto de Milla</strong>{" "}
                {modelSpecifications?.quarterMile ?? "N/A"}
              </li>
              <li>
                <strong>Potencia Máxima</strong>{" "}
                {modelSpecifications?.maximumPowerHp ?? "N/A"}
              </li>
              <li>
                <strong>Aceleración</strong>{" "}
                {modelSpecifications?.acceleration0100Kmh ?? "N/A"}
              </li>
              <li>
                <strong>Rines</strong> {modelSpecifications?.rims ?? "N/A"}
              </li>
              <li>
                <strong>Carga</strong>{" "}
                {modelSpecifications?.loadCapacityL ?? "N/A"}
              </li>
              <li>
                <strong>Peso (masa en vacío)</strong>{" "}
                {modelSpecifications?.weightKg ?? "N/A"}
              </li>
            </ul>
            <ul className='space-y-2'>
              <li>
                <strong>Velocidad máxima</strong>{" "}
                {modelSpecifications?.maximumSpeedKmh ?? "N/A"}
              </li>
              <li className='hidden md:block'>
                <strong>Coeficiente de arrastre</strong>{" "}
                {modelSpecifications?.dragCoefficient ?? "N/A"}
              </li>
              <li className='hidden md:block'>
                <strong>Sistema de propulsión</strong>{" "}
                {modelSpecifications?.propulsionSystem ?? "N/A"}
              </li>
              <li className='hidden md:block'>
                <strong>Máximo de Supercharger</strong>{" "}
                {modelSpecifications?.maxSuperchargerKW ?? "N/A"} kW
              </li>
              <li className='hidden md:block'>
                <strong>Garantía</strong>{" "}
                {modelSpecifications?.warranty ?? "N/A"}
              </li>
            </ul>
          </div>
          <p className='mt-4 lg:mt-8 text-white hidden md:block'>
            Se muestra modelo y especificaciones disponibles en EEUU
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecificationSlide;
