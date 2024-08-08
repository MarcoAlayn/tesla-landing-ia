import React from "react";
import ModelPage from "../../components/modelLayout/ModelPage";
import videoBackgroundHero from "../../assets/videos/Model-Y-Utility-Desktop.webm";
import imageBackgroundHero from "../../assets/images/New-Model-Y-Main-Hero-Desktop-LHD.avif";
import imageSpecificationsHero from "../../assets/images/model_y.jpg";

//gris
import firstSG from "../../assets/images/model_3_paintings/Stealth Grey/01.jfif";
import secondSG from "../../assets/images/model_3_paintings/Stealth Grey/02.jfif";
import thirdSG from "../../assets/images/model_3_paintings/Stealth Grey/03.jfif";
import fourthSG from "../../assets/images/model_3_paintings/Stealth Grey/04.jfif";
import blackSG from "../../assets/images/model_3_paintings/Stealth Grey/interiors/black.jfif";
import whiteSG from "../../assets/images/model_3_paintings/Stealth Grey/interiors/white.jfif";

// blanco perla
import firstWp from "../../assets/images/model_3_paintings/White Pearl/01.jfif";
import secondWp from "../../assets/images/model_3_paintings/White Pearl/02.jfif";
import thirdWp from "../../assets/images/model_3_paintings/White Pearl/03.jfif";
import fourthWp from "../../assets/images/model_3_paintings/White Pearl/04.jfif";
import blackWp from "../../assets/images/model_3_paintings/White Pearl/interiors/black.jfif";
import whiteWp from "../../assets/images/model_3_paintings/White Pearl/interiors/white.jfif";

//deep Metallic blue
import firstDBM from "../../assets/images/model_3_paintings/Deep Blue Metallic/01.jfif";
import secondDBM from "../../assets/images/model_3_paintings/Deep Blue Metallic/02.jfif";
import thirdDBM from "../../assets/images/model_3_paintings/Deep Blue Metallic/03.jfif";
import fourthDBM from "../../assets/images/model_3_paintings/Deep Blue Metallic/04.jfif";
import blackDBM from "../../assets/images/model_3_paintings/Deep Blue Metallic/interiors/black.jfif";
import whiteDBM from "../../assets/images/model_3_paintings/Deep Blue Metallic/interiors/white.jfif";

//black solid
import firstBS from "../../assets/images/model_3_paintings/Solid Black/01.jfif";
import secondBS from "../../assets/images/model_3_paintings/Solid Black/02.jfif";
import thirdBS from "../../assets/images/model_3_paintings/Solid Black/03.jfif";
import fourthBS from "../../assets/images/model_3_paintings/Solid Black/04.jfif";
import blackBS from "../../assets/images/model_3_paintings/Solid Black/interiors/black.jfif";
import whiteBS from "../../assets/images/model_3_paintings/Solid Black/interiors/white.jfif";

//ultra red
import firstUR from "../../assets/images/model_3_paintings/Ultra Red/01.jfif";
import secondUR from "../../assets/images/model_3_paintings/Ultra Red/02.jfif";
import thirdUR from "../../assets/images/model_3_paintings/Ultra Red/03.jfif";
import fourthUR from "../../assets/images/model_3_paintings/Ultra Red/04.jfif";
import blackUR from "../../assets/images/model_3_paintings/Ultra Red/interiors/black.jfif";
import whiteUR from "../../assets/images/model_3_paintings/Ultra Red/interiors/white.jfif";
import { useSelector } from "react-redux";

const ModelYPage = () => {
  const modelName = "Model Y";
  const sourceElement = videoBackgroundHero;
  const isVideo = true;
  const heroTextColor = "white";

  const imageSlideProps = {
    modelName: "Model Y",
    modelImage: imageBackgroundHero,
    isTextWhite: false,
    //price: dataFromBackend.price,
  };

  const specificationSlideProps = {
    modelName: "Model Y",
    modelImage: imageSpecificationsHero,
    isTextWhite: true,
    //modelSpecifications: dataFromBackend,
  };

  const imagesList = {
    stealth_gray: {
      exteriors: [firstSG, secondSG, thirdSG, fourthSG],
      interiors: [blackSG, whiteSG],
    },
    white_pearl: {
      exteriors: [firstWp, secondWp, thirdWp, fourthWp],
      interiors: [blackWp, whiteWp],
    },
    deep_Metallic_blue: {
      exteriors: [firstDBM, secondDBM, thirdDBM, fourthDBM],
      interiors: [blackDBM, whiteDBM],
    },
    solid_black: {
      exteriors: [firstBS, secondBS, thirdBS, fourthBS],
      interiors: [blackBS, whiteBS],
    },
    ultra_red: {
      exteriors: [firstUR, secondUR, thirdUR, fourthUR],
      interiors: [blackUR, whiteUR],
    },
  };

  const exteriorColors = [
    { name: "stealth_gray", label: "Stealth Gray" },
    { name: "white_pearl", label: "Blanco Perla" },
    { name: "deep_Metallic_blue", label: "Azul Profundo Metalizado" },
    { name: "solid_black", label: "Solid Black" },
    { name: "ultra_red", label: "Ultra Red" },
  ];

  const interiorColors = [
    { name: "black", label: "Completamente Negro" },
    { name: "white", label: "Blanco y Negro" },
  ];

  const modelSpecifications = useSelector((state) => state.modelSpecifications);
  console.log(modelSpecifications[3]);

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
      modelSpecifications={modelSpecifications[3]}
    />
  );
};

export default ModelYPage;
