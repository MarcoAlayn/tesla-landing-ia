import React from "react";
import ModelLayout from "../../components/modelLayout/ModelLayout";

const ModelPage = ({
  modelName,
  sourceElement,
  isVideo,
  heroTextColor,
  imageSlideProps,
  specificationSlideProps,
  imagesList,
  exteriorColors,
  interiorColors,
}) => {
  return (
    <ModelLayout
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

export default ModelPage;
