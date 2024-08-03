import React, { useState } from "react";
import axios from "axios";
import arrow from "../../assets/images/flecha abajo.gif";
import HornIcon from "../../assets/images/bocina.png";
import PlayIcon from "../../assets/images/Music_Player_Buttons/play.png";
import PauseIcon from "../../assets/images/Music_Player_Buttons/pause.png";
import StopIcon from "../../assets/images/Music_Player_Buttons/stop.png";
import RecommendationBackground from "../../assets/images/dark_background.png";
import IaIcon from "../../assets/images/ia_icon.png";
import Alert from "../alert/Alert";
import Loader from "../../components/loader/Loader";

const CallToActionSlide = ({ point, image }) => {
  console.log(point);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [audio, SetAudio] = useState(null);

  const handleButtonClick = async () => {
    const text = `${point?.title} ${point?.description} ${point?.CTA}`
     
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
    <div
      className={`snap-start flex items-center justify-center w-full h-screen flex-col relative bg-white/15`}
    >
      <Alert message={error} />
      <div className='absolute inset-0 flex items-center justify-center flex-col h-full'>
        <div className='flex items-center justify-center flex-col bg-gray h-full w-full'>
          <div className='mb-5'>
            <img width={"60px"} height={"600px"} src={IaIcon} alt='ia icon' />
          </div>
          <div className='flex justify-start items-start w-3/5 gap-x-10 flex-row-reverse'>
            <div className='w-3/6'>
              <img
                className='rounded-2xl'
                src={image}
                alt='model image'
                style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 17px 4px 7px" }}
              />
            </div>
            <div className='w-3/6 text-left h-full'>
              <ul>
                <li className=''>
                  <h3 className=' text-3xl'>
                    <strong>{point?.title}</strong>
                  </h3>
                  <br />
                  <span>{point?.description}</span>
                  <br />
                  <br />
                  <span>{point?.CTA}</span>
                  <br />
                  <br />
                  <span className='italic'>{point?.emotional_connection}</span>
                </li>
                {/* Botón que ejecutará la conversión de texto a voz */}
                {/* si ya hay un audio que s muestre el reproductor */}
                {audio ? (
                  <div>
                    <button className='hover:opacity-50' onClick={handlePlay}>
                      <img
                        width={"35px"}
                        height={"35px"}
                        src={PlayIcon}
                        alt='Play Icon'
                      />
                      {loading && <span>Loading...</span>}
                    </button>
                    <button className='hover:opacity-50' onClick={handlePause}>
                      <img
                        width={"35px"}
                        height={"35px"}
                        src={PauseIcon}
                        alt='Pause Icon'
                      />
                    </button>
                    <button className='hover:opacity-50' onClick={handleStop}>
                      <img
                        width={"35px"}
                        height={"35px"}
                        src={StopIcon}
                        alt='Stop Icon'
                      />
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
                    <img
                      width={"35px"}
                      height={"35px"}
                      src={HornIcon}
                      alt='Horn Icon'
                    />
                  </button>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute top-0 bottom-0  w-full h-full -z-10'>
        <img
          className='object-center object-cover w-full h-full'
          src={RecommendationBackground}
          alt='tst'
        />
      </div>
      <footer className='absolute bottom-10 w-full flex items-center justify-center z-20'>
        <a
          href=''
          className='text-white border-2 border-white bg-white/5 backdrop-blur-sm text-sm rounded font-medium px-12 py-2 inline-block 
                hover:bg-white hover:text-black transition-colors'
        >
          Agendar prueba de manejo
        </a>
      </footer>
    </div>
  );
};

export default CallToActionSlide;
