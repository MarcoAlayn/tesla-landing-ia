import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Importación de íconos de pintura exterior
import paintSgray from "../../assets/images/Paint_StealthGrey.avif";
import paintWhite from "../../assets/images/Paint_White.avif";
import paintBlue from "../../assets/images/Paint_Blue.avif";
import paintBlack from "../../assets/images/Paint_Black.avif";
import paintRed from "../../assets/images/Paint_Red.avif";
import paintLunar from "../../assets/images/Paint_LSilver.avif";

// Importación de íconos de pintura interior
import paintWhiteInterior from "../../assets/images/white_interior.avif";
import paintBlackInterior from "../../assets/images/black_interior.avif";
import paintCreamInterior from "../../assets/images/cream_interior.avif";

function PaintingSide({ imagesList, exteriorColors, interiorColors }) {
  const [currentColor, setCurrentColor] = useState(exteriorColors[0].name);
  const [currentView, setCurrentView] = useState("exteriors");
  const [currentImageNumber, setCurrentImageNumber] = useState(0);
  const [currentColorInterior, setCurrentColorInterior] = useState("black");

  const handleExteriorColor = (color) => {
    setCurrentColor(color);
    setCurrentView("exteriors");
    setCurrentImageNumber(0);
  };

  const handleInteriorColor = (colorIndex, color) => {
    setCurrentView("interiors");
    setCurrentImageNumber(colorIndex);
    setCurrentColorInterior(color);
  };

  const maxImageNumber = imagesList[currentColor][currentView].length - 1;
  const minImageNumber = 0;

  const handleNextNumber = () => {
    currentImageNumber < maxImageNumber &&
      setCurrentImageNumber(currentImageNumber + 1);
  };

  const handlePreviousNumber = () => {
    currentImageNumber > minImageNumber &&
      setCurrentImageNumber(currentImageNumber - 1);
  };

  const exteriorIcons = {
    stealth_gray: paintSgray,
    white_pearl: paintWhite,
    deep_Metallic_blue: paintBlue,
    solid_black: paintBlack,
    ultra_red: paintRed,
    lunar_silver: paintLunar,
  };

  const interiorIcons = {
    black: paintBlackInterior,
    white: paintWhiteInterior,
    cream: paintCreamInterior,
  };

  return (
    <section
      className='landing-section h-screen w-screen relative bg-white'
      data-header-color='black'
    >
      <div className='relative h-full flex flex-col justify-center items-center lg:flex-row'>
        {/* Imagen */}
        <div className='relative flex flex-col items-center justify-center h-full w-full'>
          <button
            className='absolute top-1/2 transform -translate-y-1/2 left-4 rounded-md w-8 h-8 md:w-12 md:h-12 text-2xl z-30
            bg-gray-400 text-white hover:bg-gray-400/50 transition-colors ease-out duration-500 disabled:pointer-events-none disabled:bg-gray-200'
            onClick={handlePreviousNumber}
            disabled={currentImageNumber <= minImageNumber}
          >
            {"<"}
          </button>
          <div className='relative flex items-center justify-center w-full h-full'>
            <AnimatePresence>
              <motion.img
                key={imagesList[currentColor][currentView][currentImageNumber]}
                src={imagesList[currentColor][currentView][currentImageNumber]}
                alt='Car view'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='object-contain w-full h-full absolute'
              />
            </AnimatePresence>
          </div>
          <button
            className='absolute top-1/2 transform -translate-y-1/2 right-4 rounded-md w-8 h-8 md:w-12 md:h-12 text-2xl
            bg-gray-400 text-white hover:bg-gray-400/50 transition-colors ease-out duration-500 disabled:pointer-events-none disabled:bg-gray-200'
            onClick={handleNextNumber}
            disabled={currentImageNumber >= maxImageNumber}
          >
            {">"}
          </button>
        </div>

        {/* Selectores */}
        <div className='w-full md:w-1/2 h-full flex flex-col justify-center items-center gap-y-6 p-4 md:p-0'>
          {/* Selector de pintura */}
          <div className='flex flex-col gap-y-6 items-center'>
            <span className='text-xl md:text-2xl font-semibold'>Pintura</span>
            <div className='flex gap-x-4'>
              {exteriorColors.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleExteriorColor(option.name)}
                  className={`focus:outline-none ${
                    currentColor === option.name
                      ? "border-4 border-blue-500 rounded-full"
                      : ""
                  }`}
                >
                  <img
                    src={exteriorIcons[option.name]}
                    alt={option.label}
                    className='w-8 h-8 md:w-12 md:h-12'
                  />
                </button>
              ))}
            </div>
            <span className='text-sm md:text-base text-center'>
              {
                exteriorColors.find((option) => option.name === currentColor)
                  .label
              }
            </span>
          </div>

          {/* Selector de interior */}
          <div className='flex flex-col gap-y-6 items-center'>
            <span className='text-xl md:text-2xl font-semibold'>Interior</span>
            <div className='flex gap-x-4'>
              {interiorColors.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleInteriorColor(index, option.name)}
                  className={`focus:outline-none ${
                    currentColorInterior === option.name
                      ? "border-4 border-blue-500 rounded-full"
                      : ""
                  }`}
                >
                  <img
                    src={interiorIcons[option.name]}
                    alt={option.label}
                    className='w-8 h-8 md:w-12 md:h-12'
                  />
                </button>
              ))}
            </div>
            <span className='text-sm md:text-base text-center'>
              {
                interiorColors.find(
                  (option) => option.name === currentColorInterior
                ).label
              }
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaintingSide;
