import { useState } from "react";

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
      <div className='relative h-full flex flex-col md:flex-row'>
        {/* Imagen */}
        <div className='relative flex flex-col items-center justify-center md:h-full md:w-3/4 [&>button]:hover:hover:bg-gray-400/50 [&>button]:hover:text-white'>
          <button
            className='absolute top-1/2 transform -translate-y-1/2 left-4 rounded-md w-8 h-8 md:w-12 md:h-12 text-2xl bg-transparent text-transparent'
            onClick={handlePreviousNumber}
          >
            {"<"}
          </button>
          <div
            className='flex items-center justify-center w-full '
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          >
            <img
              src={imagesList[currentColor][currentView][currentImageNumber]}
              alt='Car view'
              className='object-contain w-full h-full animate-fadeIn'
            />
          </div>
          <button
            className='absolute top-1/2 transform -translate-y-1/2 right-4 rounded-md w-8 h-8 md:w-12 md:h-12 text-2xl bg-transparent text-transparent'
            onClick={handleNextNumber}
          >
            {">"}
          </button>
        </div>

        {/* Selectores */}
        <div className='w-full md:w-1/4 h-full flex flex-col justify-center items-center gap-y-6'>
          {/* Selector de pintura */}
          <div className='flex flex-col gap-y-6'>
            <span className='text-xl md:text-2xl font-semibold'>Pintura</span>
            <div className='flex gap-x-4'>
              {exteriorColors.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleExteriorColor(option.name)}
                >
                  <img
                    src={exteriorIcons[option.name]}
                    alt={option.label}
                    className='w-8 h-8 md:w-12 md:h-12'
                  />
                </button>
              ))}
            </div>
            <span className='text-sm md:text-base'>
              {
                exteriorColors.find((option) => option.name === currentColor)
                  .label
              }
            </span>
          </div>

          {/* Selector de interior */}
          <div className='flex flex-col gap-y-6'>
            <span className='text-xl md:text-2xl font-semibold'>Interior</span>
            <div className='flex flex-col gap-y-6 justify-center items-center'>
              <div className='flex gap-x-4'>
                {interiorColors.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleInteriorColor(index, option.name)}
                  >
                    <img
                      src={interiorIcons[option.name]}
                      alt={option.label}
                      className='w-8 h-8 md:w-12 md:h-12'
                    />
                  </button>
                ))}
              </div>
              <span className='text-sm md:text-base'>
                {
                  interiorColors.find(
                    (option) => option.name === currentColorInterior
                  ).label
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaintingSide;
