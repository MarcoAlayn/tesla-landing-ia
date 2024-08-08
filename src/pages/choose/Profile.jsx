import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getRecommendedModel, getSuggestionProfile } from "../../redux/actions";
import ShieldBackground from "../../assets/images/Tesla_Shield.jpg";
import Header from "../../components/header/Header";
import Alert from "../../components/alert/Alert";
import InputSection from "../../components/InputSection/InputSection";
import Loader from "../../components/loader/Loader";

const Profile = () => {
  const [text, setText] = useState("");
  const loading = useSelector((state) => state.loading);
  const suggestedProfile = useSelector((state) => state.suggestedProfile);
  const recommendedModel = useSelector((state) => state.recommendedModel);
  const error = useSelector((state) => state.error);
  const textareaRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setText(e.target.value);
    autoResize();
  };

  const autoResize = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    autoResize();
    console.count("resize");
  }, [text, suggestedProfile]);

  const handlerSendCustomerNeeds = async (e) => {
    e.preventDefault();
    await dispatch(getRecommendedModel(text));
  };

  const handlerSuggestProfile = async (e) => {
    e.preventDefault();
    await dispatch(getSuggestionProfile(e.target.value));
  };

  useEffect(() => {
    if (suggestedProfile) {
      setText(suggestedProfile);
    }
    console.count("suggestedProfile");
  }, [suggestedProfile]);

  useEffect(() => {
    console.log("recommendedModel:", recommendedModel);
    console.log(recommendedModel && recommendedModel.length !== 0);
    if (recommendedModel && recommendedModel.length !== 0) {
      navigate("/recommendation");
    }
  }, [recommendedModel, navigate]);

  return (
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
            <InputSection
              text={text}
              isLoading={loading}
              handleInputChange={handleInputChange}
              handlerSendCustomerNeeds={handlerSendCustomerNeeds}
              handlerSuggestProfile={handlerSuggestProfile}
              textareaRef={textareaRef}
              background={ShieldBackground}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Profile;
