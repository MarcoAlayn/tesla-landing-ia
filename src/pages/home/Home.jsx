import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import ModelHero from "../../components/modelHero/ModelHero";
import ImageMs from "../../assets/images/Homepage-Model-S-Desktop-v2.avif";
import ImageM3 from "../../assets/images/New-Model-3-Performance-Main-Hero-Desktop-LHD.avif";
import ImageMx from "../../assets/images/Model-X-Main-Hero-Desktop.avif";
import ImageMy from "../../assets/images/New-Model-Y-Main-Hero-Desktop-LHD.avif";
import Alert from "../../components/alert/Alert";
import HomeHero from "../../components/homeHero/HomeHero";

const Home = () => {
  const error = useSelector((state) => state.error);
  const modelSpecifications = useSelector(
    (state) => state?.modelSpecifications
  );
  return (
    <div className='font-sans'>
      <Header />
      <Alert message={error} />
      <div className='snap-y snap-mandatory relative w-full h-screen overflow-x-hidden scroll-smooth'>
        <div className='snap-start'>
          <HomeHero />
        </div>
        <div className='snap-start'>
          <ModelHero
            modelName={"Model S"}
            isTextWhite={true}
            sourceElement={ImageMs}
            modelSpecifications={modelSpecifications[0]}
          />
        </div>
        <div className='snap-start'>
          <ModelHero
            modelName={"Model 3"}
            isTextWhite={false}
            sourceElement={ImageM3}
            modelSpecifications={modelSpecifications[1]}
          />
        </div>
        <div className='snap-start'>
          <ModelHero
            modelName={"Model X"}
            isTextWhite={false}
            sourceElement={ImageMx}
            modelSpecifications={modelSpecifications[2]}
          />
        </div>
        <div className='snap-start'>
          <ModelHero
            modelName={"Model Y"}
            isTextWhite={false}
            sourceElement={ImageMy}
            modelSpecifications={modelSpecifications[3]}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
