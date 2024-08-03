import React from "react";

const ElementBackground = ({ isVideo, sourceElement, modelName }) => {
  return (
    <div>
      {isVideo ? (
        <video
          className="h-full w-full object-cover object-center"
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
          className="h-screen w-full object-cover object-center"
        />
      )}
    </div>
  );
};

export default ElementBackground;
