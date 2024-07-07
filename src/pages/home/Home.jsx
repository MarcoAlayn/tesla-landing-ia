import React, { useEffect } from "react";
// 1. Importamos los hooks de react-redux
import { useSelector, useDispatch } from "react-redux";

// 2. Importamos las acciones
import { getAllPokemons, getAllModels } from "../../redux/actions";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import ModelHero from "../../components/modelHero/ModelHero";
import ImageMS from "../../assets/images/Homepage-Model-S-Desktop-v2.avif";

const Home = () => {
  // 3. Creamos las constantes para usar los hooks
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const tesla = useSelector((state) => state.allTeslaModels);
  console.log(tesla);

  // 4. Creamos la función para llamar a la acción
  const getPokemons = () => {
    dispatch(getAllPokemons());
  };

  const getAllTeslaModels = () => {
    dispatch(getAllModels());
  };

  // utilizando el hook useEffect pintamos
  useEffect(() => {
    //getAllTeslaModels();
    //getPokemons();
  }, []);

  return (
    <div className="font-sans ">
      <Header />

      <div className="snap-y snap-mandatory relative w-full h-screen overflow-x-hidden scroll-smooth">
        <div className="snap-start">
          <Hero />
        </div>
        <div className="snap-start">
          <ModelHero
            modelName={"Model S"}
            modelImage={ImageMS}
            isTextWhite={true}
          />
        </div>
        <div className="snap-start">
          <ModelHero
            modelName={"Model S"}
            modelImage={ImageMS}
            isTextWhite={false}
          />
        </div>
        
        <div className="snap-start">
          <Hero />
        </div>
        <div className="snap-start">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Home;
