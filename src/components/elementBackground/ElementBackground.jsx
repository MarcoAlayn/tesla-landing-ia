import React from "react";

const ElementBackground = ({ isVideo, sourceElement, modelName }) => {
  return (
    <div className='absolute inset-0'>
      {isVideo ? (
        <video
          className='h-full w-full object-cover'
          autoPlay
          muted
          loop
          playsInline
          src={sourceElement}
        />
      ) : (
        <img
          src={sourceElement}
          alt={modelName}
          className='h-full w-full object-cover'
        />
      )}
    </div>
  );
};

export default ElementBackground;
