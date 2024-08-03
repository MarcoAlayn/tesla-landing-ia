import React, { useEffect } from "react";
// 1. Importamos los hooks de react-redux
import { useSelector, useDispatch } from "react-redux";

// 2. Importamos las acciones
import { getAllModels } from "../../redux/actions";
import Header from "../../components/header/Header";
import ModelHero from "../../components/modelHero/ModelHero";
import ImageMs from "../../assets/images/Homepage-Model-S-Desktop-v2.avif";
import ImageM3 from "../../assets/images/New-Model-3-Performance-Main-Hero-Desktop-LHD.avif";
import ImageMx from "../../assets/images/Model-X-Main-Hero-Desktop.avif";
import ImageMy from "../../assets/images/New-Model-Y-Main-Hero-Desktop-LHD.avif";

import HomeHero from "../../components/homeHero/HomeHero";

const Home = () => {
  // 3. Creamos las constantes para usar los hooks
  const dispatch = useDispatch();
  const tesla = useSelector((state) => state.allTeslaModels);
  console.log(tesla);

  // 4. Creamos la función para llamar a la acción


  const getAllTeslaModels = () => {
    dispatch(getAllModels());
  };

  // utilizando el hook useEffect pintamos
  useEffect(() => {
    //getAllTeslaModels();
    
  }, []);

  return (
    <div className='font-sans '>
      <Header />

      <div className='snap-y snap-mandatory relative w-full h-screen overflow-x-hidden scroll-smooth'>
        <div className='snap-start'>
          <HomeHero />
        </div>
        <div className='snap-start'>
          <ModelHero
            modelName={"Model S"}
            isTextWhite={true}
            sourceElement={ImageMs}
          />
        </div>
        <div className='snap-start'>
          <ModelHero
            modelName={"Model 3"}
            isTextWhite={false}
            sourceElement={ImageM3}
          />
        </div>
        <div className='snap-start'>
          <ModelHero
            modelName={"Model X"}
            isTextWhite={false}
            sourceElement={ImageMx}
          />
        </div>
        <div className='snap-start'>
          <ModelHero
            modelName={"Model Y"}
            isTextWhite={false}
            sourceElement={ImageMy}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
