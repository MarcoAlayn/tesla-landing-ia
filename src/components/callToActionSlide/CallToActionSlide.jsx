import React, { useState } from "react";
import axios from "axios";
import HornIcon from "../../assets/images/bocina.png";
import PlayIcon from "../../assets/images/Music_Player_Buttons/play.png";
import PauseIcon from "../../assets/images/Music_Player_Buttons/pause.png";
import StopIcon from "../../assets/images/Music_Player_Buttons/stop.png";
import RecommendationBackground from "../../assets/images/dark_background.png";
import IaIcon from "../../assets/images/ia_icon.png";
import Alert from "../alert/Alert";
import Loader from "../loader/Loader";

const CallToActionSlide = ({ point, image }) => {
  console.log(point);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [audio, SetAudio] = useState(null);

  const handleButtonClick = async () => {
    const text = `${point?.title} ${point?.description} ${point?.CTA}`;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://nodeapiopenai.azurewebsites.net/audio/speech",
        { text },
        {
          responseType: "arraybuffer", // Esperar una respuesta binaria
        }
      );
      console.log("audio");
      const audioBlob = new Blob([response.data], { type: "audio/mp3" });
      const audioUrl = URL.createObjectURL(audioBlob);
      const newAudio = new Audio(audioUrl);
      SetAudio(newAudio);
      newAudio.play();
    } catch (err) {
      setError(
        "Error al convertir texto en audio, por favor inténtelo de nuevo."
      );
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePlay = () => {
    if (audio) {
      audio.play();
    }
  };

  const handlePause = () => {
    if (audio) {
      audio.pause();
    }
  };
  const handleStop = () => {
    if (audio) {
      audio.currentTime = 0; // Reiniciar el audio
    }
  };

  return (
    <div className='snap-start flex flex-col items-center justify-center w-full h-screen relative bg-white/15'>
      <Alert message={error} />
      <div className='absolute inset-0 flex flex-col items-center justify-center h-full'>
        <div className='flex flex-col items-center justify-center bg-gray w-full h-full'>
          <div className='mb-5 block lg:hidden 2xl:block'>
            <img
              className='w-16 h-auto hidden lg:block'
              src={IaIcon}
              alt='ia icon'
            />
          </div>
          <div className='flex flex-col lg:flex-row lg:gap-x-10 w-full lg:w-3/5 justify-center items-center'>
            <div className='w-5/6 sm:6/6 lg:w-1/2 '>
              <img
                className='rounded-2xl'
                src={image}
                alt='model image'
                style={{ boxShadow: "rgb(0 0 0 / 9%) 0px 12px 8px 0px" }}
              />
            </div>
            <div className='w-full lg:w-1/2 text-left h-full px-10 sm:px-16 lg:px-0'>
              <ul>
                <li>
                  <h3 className='text-xl'>
                    <strong>{point?.title}</strong>
                  </h3>
                  <p className='my-2'>{point?.description}</p>
                  <p className='my-2'>{point?.CTA}</p>
                  <p className='italic my-2'>{point?.emotional_connection}</p>
                </li>
                {audio ? (
                  <div className='flex gap-4'>
                    <button className='hover:opacity-50' onClick={handlePlay}>
                      <img className='w-8 h-8' src={PlayIcon} alt='Play Icon' />
                      {loading && <span>Loading...</span>}
                    </button>
                    <button className='hover:opacity-50' onClick={handlePause}>
                      <img
                        className='w-8 h-8'
                        src={PauseIcon}
                        alt='Pause Icon'
                      />
                    </button>
                    <button className='hover:opacity-50' onClick={handleStop}>
                      <img className='w-8 h-8' src={StopIcon} alt='Stop Icon' />
                    </button>
                  </div>
                ) : loading ? (
                  <Loader />
                ) : (
                  <button
                    className='hover:opacity-50'
                    onClick={handleButtonClick}
                    disabled={loading}
                  >
                    <img className='w-8 h-8' src={HornIcon} alt='Horn Icon' />
                  </button>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 -z-10'>
        <img
          className='object-center object-cover w-full h-full'
          src={RecommendationBackground}
          alt='Background'
        />
      </div>
      <footer className='absolute bottom-10 w-full flex items-center justify-center z-20'>
        <a
          href=''
          className='text-white border-2 border-white bg-white/5 backdrop-blur-sm text-sm rounded font-medium px-4 py-2 inline-block 
                hover:bg-white hover:text-black transition-colors ease-out duration-300'
        >
          Agendar prueba de manejo
        </a>
      </footer>
    </div>
  );
};

export default CallToActionSlide;
