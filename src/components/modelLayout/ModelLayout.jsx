import React, { useState } from "react";
import Header from "../../components/header/Header";
import ModelHero from "../../components/modelHero/ModelHero";
import ImageSlide from "../../components/imageSlide/ImageSlide";
import SpecificationSlide from "../../components/specificationSlide/SpecificationSlide";
import PaintingSide from "../paintingSlide/PaintingSlide";

const ModelLayout = ({
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
    <div className='font-sans'>
      <Header />
      <div className='snap-y snap-mandatory relative w-full h-screen overflow-x-hidden scroll-smooth'>
        <div className='h-screen w-screen text-center relative overflow-hidden snap-start'>
          <ModelHero
            isTextWhite={heroTextColor === "white"}
            modelName={modelName}
            sourceElement={sourceElement}
            isVideo={isVideo}
          />
          <div className='absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none'></div>
        </div>
        <div className='h-screen w-screen text-center relative overflow-hidden snap-start'>
          <ImageSlide {...imageSlideProps} />
          <div className='absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none'></div>
          <div className='absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none'></div>
        </div>
        <div className='h-screen w-screen text-center relative overflow-hidden snap-start'>
          <SpecificationSlide {...specificationSlideProps} />
          <div className='absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none'></div>
        </div>
        <div className='h-screen w-screen text-center relative overflow-hidden snap-start'>
          <PaintingSide
            imagesList={imagesList}
            exteriorColors={exteriorColors}
            interiorColors={interiorColors}
          />
        </div>
      </div>
    </div>
  );
};

export default ModelLayout;
