import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../../components/header/Header";
import Alert from "../../components/alert/Alert";
import Loader from "../../components/loader/Loader";
import RecommendationSection from "../../components/RecommendationSection/RecommendationSection";
import image from "../../assets/images/Model-choose.png";

const Recommendation = () => {
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const recommendedModel = useSelector((state) => state.recommendedModel);

  return (
    <div>
      <div className='font-sans'>
        <Header />
        <Alert message={error} />
        <AnimatePresence>
        <motion.div
          className='w-full md:pt-0 md:border-transparent md:dark:border-transparent'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
        <div className='snap-y snap-mandatory relative w-full h-screen overflow-x-hidden scroll-smooth text-white'>
          {loading && (
            <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
              <Loader />
            </div>
          )}
          <RecommendationSection
            image={image}
            recommendedModel={recommendedModel}
          />
        </div>
        </motion.div>
      </AnimatePresence>
      </div>
    </div>
  );
};

export default Recommendation;
