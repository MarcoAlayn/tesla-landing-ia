import React from "react";
import ModelPage from "../../components/modelLayout/ModelPage";
import video from "../../assets/videos/model_s.mp4";
import image1 from "../../assets/images/model_s.avif";
import image2 from "../../assets/images/Model-S-Specs-Hero-Desktop-LHD.avif";

import modelYBlack from "../../assets/images/model_3.jpg";
import modelYBlue from "../../assets/images/Model-X-Range_Desktop-LHD.avif";
import modelYRed from "../../assets/images/model_3.jpg";
import modelYWhite from "../../assets/images/model_3.jpg";

const ModelSPage = () => {
  const modelName = "Model S";
  const sourceElement = video;
  const isVideo = true;
  const heroTextColor = "white";

  const imageSlideProps = {
    modelName: "Model S",
    modelImage: image1,
    isTextWhite: false,
    //price: dataFromBackend.price,
  };

  const specificationSlideProps = {
    modelName: "Model S",
    modelImage: image2,
    isTextWhite: true,
    //modelSpecifications: dataFromBackend,
  };

  const colorOptions = [
    { name: "Stealth Grey", hex: "#333333", image: modelYBlack },
    { name: "Blue", hex: "#0000FF", image: modelYBlue },
    { name: "Black", hex: "#000000", image: modelYBlack },
    { name: "Red", hex: "#FF0000", image: modelYRed },
    { name: "White", hex: "#FFFFFF", image: modelYWhite },
  ];

  return (
    <ModelPage
      modelName={modelName}
      sourceElement={sourceElement}
      isVideo={isVideo}
      heroTextColor={heroTextColor}
      imageSlideProps={imageSlideProps}
      specificationSlideProps={specificationSlideProps}
      colorOptions={colorOptions}
    />
  );
};

export default ModelSPage;
