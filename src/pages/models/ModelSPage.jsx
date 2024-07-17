import React from "react";
import ModelPage from "../../components/modelLayout/ModelPage";
import videoBackgroundHero from "../../assets/videos/model_s.mp4";
import imageBackgroundHero from "../../assets/images/model_s.avif";
import imageSpecificationsHero from "../../assets/images/Model-S-Specs-Hero-Desktop-LHD.avif";

//gris
import firstSG from "../../assets/images/model_s_paintings/Stealth Grey/01.jfif";
import secondSG from "../../assets/images/model_s_paintings/Stealth Grey/02.jfif";
import thirdSG from "../../assets/images/model_s_paintings/Stealth Grey/03.jfif";
import fourthSG from "../../assets/images/model_s_paintings/Stealth Grey/04.jfif";
import blackSG from "../../assets/images/model_s_paintings/Stealth Grey/interiors/black.jfif";
import whiteSG from "../../assets/images/model_s_paintings/Stealth Grey/interiors/white.jfif";
import creamSG from "../../assets/images/model_s_paintings/Stealth Grey/interiors/cream.jfif";

// blanco perla
import firstWp from "../../assets/images/model_s_paintings/White Pearl/01.jfif";
import secondWp from "../../assets/images/model_s_paintings/White Pearl/02.jfif";
import thirdWp from "../../assets/images/model_s_paintings/White Pearl/03.jfif";
import fourthWp from "../../assets/images/model_s_paintings/White Pearl/04.jfif";
import blackWp from "../../assets/images/model_s_paintings/White Pearl/interiors/black.jfif";
import whiteWp from "../../assets/images/model_s_paintings/White Pearl/interiors/white.jfif";
import creamWp from "../../assets/images/model_s_paintings/White Pearl/interiors/cream.jfif";

//deep Metallic blue
import firstDBM from "../../assets/images/model_s_paintings/Deep Blue Metallic/01.jfif";
import secondDBM from "../../assets/images/model_s_paintings/Deep Blue Metallic/02.jfif";
import thirdDBM from "../../assets/images/model_s_paintings/Deep Blue Metallic/03.jfif";
import fourthDBM from "../../assets/images/model_s_paintings/Deep Blue Metallic/04.jfif";
import blackDBM from "../../assets/images/model_s_paintings/Deep Blue Metallic/interiors/black.jfif";
import whiteDBM from "../../assets/images/model_s_paintings/Deep Blue Metallic/interiors/white.jfif";
import creamDBM from "../../assets/images/model_s_paintings/Deep Blue Metallic/interiors/cream.jfif";

//black solid
import firstBS from "../../assets/images/model_s_paintings/Solid Black/01.jfif";
import secondBS from "../../assets/images/model_s_paintings/Solid Black/02.jfif";
import thirdBS from "../../assets/images/model_s_paintings/Solid Black/03.jfif";
import fourthBS from "../../assets/images/model_s_paintings/Solid Black/04.jfif";
import blackBS from "../../assets/images/model_s_paintings/Solid Black/interiors/black.jfif";
import whiteBS from "../../assets/images/model_s_paintings/Solid Black/interiors/white.jfif";
import creamBS from "../../assets/images/model_s_paintings/Solid Black/interiors/cream.jfif";

//ultra red
import firstUR from "../../assets/images/model_s_paintings/Ultra Red/01.jfif";
import secondUR from "../../assets/images/model_s_paintings/Ultra Red/02.jfif";
import thirdUR from "../../assets/images/model_s_paintings/Ultra Red/03.jfif";
import fourthUR from "../../assets/images/model_s_paintings/Ultra Red/04.jfif";
import blackUR from "../../assets/images/model_s_paintings/Ultra Red/interiors/black.jfif";
import whiteUR from "../../assets/images/model_s_paintings/Ultra Red/interiors/white.jfif";
import creamUR from "../../assets/images/model_s_paintings/Ultra Red/interiors/cream.jfif";

//lunar silver
import firstLS from "../../assets/images/model_s_paintings/Lunar Silver/01.jfif";
import secondLS from "../../assets/images/model_s_paintings/Lunar Silver/02.jfif";
import thirdLS from "../../assets/images/model_s_paintings/Lunar Silver/03.jfif";
import fourthLS from "../../assets/images/model_s_paintings/Lunar Silver/04.jfif";
import blackLS from "../../assets/images/model_s_paintings/Lunar Silver/interiors/black.jfif";
import whiteLS from "../../assets/images/model_s_paintings/Lunar Silver/interiors/white.jfif";
import creamLS from "../../assets/images/model_s_paintings/Lunar Silver/interiors/cream.jfif";

const ModelSPage = () => {
  const modelName = "Model S";
  const sourceElement = videoBackgroundHero;
  const isVideo = true;
  const heroTextColor = "white";

  const imageSlideProps = {
    modelName: "Model S",
    modelImage: imageBackgroundHero,
    isTextWhite: false,
    //price: dataFromBackend.price,
  };

  const specificationSlideProps = {
    modelName: "Model S",
    modelImage: imageSpecificationsHero,
    isTextWhite: true,
    //modelSpecifications: dataFromBackend,
  };

  const imagesList = {
    stealth_gray: {
      exteriors: [firstSG, secondSG, thirdSG, fourthSG],
      interiors: [blackSG, whiteSG, creamSG],
    },
    white_pearl: {
      exteriors: [firstWp, secondWp, thirdWp, fourthWp],
      interiors: [blackWp, whiteWp, creamWp],
    },
    deep_Metallic_blue: {
      exteriors: [firstDBM, secondDBM, thirdDBM, fourthDBM],
      interiors: [blackDBM, whiteDBM, creamDBM],
    },
    solid_black: {
      exteriors: [firstBS, secondBS, thirdBS, fourthBS],
      interiors: [blackBS, whiteBS, creamBS],
    },
    ultra_red: {
      exteriors: [firstUR, secondUR, thirdUR, fourthUR],
      interiors: [blackUR, whiteUR, creamUR],
    },
    lunar_silver: {
      exteriors: [firstLS, secondLS, thirdLS, fourthLS],
      interiors: [blackLS, whiteLS, creamLS],
    },
  };

  const exteriorColors = [
    { name: "stealth_gray", label: "Stealth Gray" },
    { name: "white_pearl", label: "Blanco Perla" },
    { name: "deep_Metallic_blue", label: "Azul Profundo Metalizado" },
    { name: "solid_black", label: "Solid Black" },
    { name: "ultra_red", label: "Ultra Red" },
    { name: "lunar_silver", label: "Lunar Silver" },
  ];

  const interiorColors = [
    { name: "black", label: "Completamente Negro" },
    { name: "white", label: "Blanco y Negro" },
    { name: "cream", label: "Crema" },
  ];

  return (
    <ModelPage
      modelName={modelName}
      sourceElement={sourceElement}
      isVideo={isVideo}
      heroTextColor={heroTextColor}
      imageSlideProps={imageSlideProps}
      specificationSlideProps={specificationSlideProps}
      imagesList={imagesList}
      exteriorColors={exteriorColors}
      interiorColors={interiorColors}
    />
  );
};

export default ModelSPage;
