import React from "react";
import ModelPage from "../../components/modelLayout/ModelPage";
import image0 from "../../assets/images/Model-X-Range_Desktop-LHD.avif";
import image1 from "../../assets/images/Model-X-Main-Hero-Desktop.avif";
import image2 from "../../assets/images/Model-X-Specs-Desktop_Mobile-Global.avif";

import modelYBlack from "../../assets/images/model_3.jpg";
import modelYBlue from "../../assets/images/Model-X-Range_Desktop-LHD.avif";
import modelYRed from "../../assets/images/model_3.jpg";
import modelYWhite from "../../assets/images/model_3.jpg";

const ModelXPage = () => {
  const modelName = "Model X";
  const sourceElement = image0;
  const isVideo = true;
  const heroTextColor = "black";

  const imageSlideProps = {
    modelName: "Model X",
    modelImage: image1,
    isTextWhite: false,
    //price: dataFromBackend.price,
  };

  const specificationSlideProps = {
    modelName: "Model X",
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

export default ModelXPage;
