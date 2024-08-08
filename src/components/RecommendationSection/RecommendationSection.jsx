import React from "react";
import RecommendationSlide from "../recommendationSlide/RecommendationSlide";
import CallToActionSlide from "../callToActionSlide/CallToActionSlide";
import { photoList } from "../../utils/photoList";

const RecommendationSection = ({ recommendedModel }) => {
  console.log(recommendedModel);

  return (
    <section className='snap-y snap-mandatory relative w-full h-screen overflow-auto font-sans scroll-smooth'>
      <RecommendationSlide
        image={photoList[recommendedModel?.model]?.[recommendedModel?.paint]?.first}
        point={recommendedModel?.key_points?.[0]}
        modelName={recommendedModel?.model}
        paint={recommendedModel?.paint}
      />
      <RecommendationSlide
        image={photoList[recommendedModel?.model]?.[recommendedModel?.paint]?.second}
        point={recommendedModel?.key_points?.[1]}
      />
      <RecommendationSlide
        image={photoList[recommendedModel?.model]?.[recommendedModel?.paint]?.third}
        point={recommendedModel?.key_points?.[2]}
      />
      {/* <RecommendationSlide
        color='bg-black/75'
        image={photoList[recommendedModel?.model]?.[recommendedModel?.paint]?.fourth}
        point={recommendedModel?.key_points?.[3]}
      />
      <RecommendationSlide
        image={photoList[recommendedModel?.model]?.[recommendedModel?.paint]?.fifth}
        point={recommendedModel?.key_points?.[4]}
      /> */}
      {/* falta modificar el call to action */}
      <CallToActionSlide
        color='bg-black/55'
        image={photoList[recommendedModel?.model]?.[recommendedModel?.paint].cta}
        point={recommendedModel?.call_to_action}
      />
    </section>
  );
};

export default RecommendationSection;
