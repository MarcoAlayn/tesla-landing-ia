import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getRecommendedModel, getSuggestionProfile } from "../../redux/actions";
import InputSection from "../../components/InputSection/InputSection";
import RecommendationSection from "../../components/RecommendationSection/RecommendationSection";
import StartSection from "../../components/StartSection/StartSection";
import image from "../../assets/images/Model-choose.png";
import desktopVideo from "../../assets/videos/Help_Me_Choose_Landing_Desktop.webm";
import Showroom from "../../assets/images/Showroom.jpg";
import Alert from "../../components/alert/Alert";
import Loader from "../../components/loader/Loader";
import ShieldBackground from "../../assets/images/Tesla_Shield.jpg";

const Choose = () => {
  const [displayInputView, setDisplayInputView] = useState(false);
  const [text, setText] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const [displayRecommendationView, setDisplayRecommendationView] =
    useState(false);

  const suggestedProfile = useSelector((state) => state.suggestedProfile);
  const recommendedModel = useSelector((state) => state.recommendedModel);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  console.log(recommendedModel);

  const dispatch = useDispatch();
  const textareaRef = useRef(null);

  const handlerDisplayInputView = () => {
    setDisplayInputView(!displayInputView);
  };

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
    // setIsLoading(true);
    await dispatch(getRecommendedModel(text));
  };

  const handlerSuggestProfile = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    await dispatch(getSuggestionProfile(e.target.value));
  };

  useEffect(() => {
    if (suggestedProfile) {
      setText(suggestedProfile);
      // setIsLoading(false);
    }
    console.count("suggestedProfile");
  }, [suggestedProfile]);

  useEffect(() => {
    if (Object.keys(recommendedModel).length !== 0) {
      // setIsLoading(false);
      setText("");
      setDisplayRecommendationView(true);
    }
    console.count("recommendedModel");
  }, [recommendedModel]);

  // useEffect(() => {
  //   console.count("error useEffect");
  // }, [error]);

  return (
    <div className='font-sans'>
      <Header />
      <Alert message={error} />
      <div className='snap-y snap-mandatory relative w-full h-screen overflow-x-hidden scroll-smooth text-white'>
        {loading && (
          <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
            <Loader />
          </div>
        )}
        {displayInputView ? (
          displayRecommendationView ? (
            <RecommendationSection
              image={image}
              recommendedModel={recommendedModel}
            />
          ) : (
            <InputSection
              text={text}
              isLoading={loading}
              handleInputChange={handleInputChange}
              handlerSendCustomerNeeds={handlerSendCustomerNeeds}
              handlerSuggestProfile={handlerSuggestProfile}
              textareaRef={textareaRef}
              background={ShieldBackground}
            />
          )
        ) : (
          <StartSection
            handlerDisplayInputView={handlerDisplayInputView}
            desktopVideo={desktopVideo}
          />
        )}
      </div>
    </div>
  );
};

export default Choose;
