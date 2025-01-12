import React from "react";
import PropTypes from "prop-types";

const Blur = () => {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #003f5b 0%, #2b4b7d 14%, #5f5195 28%, #98509d 42%, #cc4c91 56%, #f25375 70%, #ff6f4e 84%, #ff9913 100%)",
        position: "absolute"
      }}
      className="z-5 w-screen h-screen sm:w-96 sm:h-96 md:w-96 md:h-96  rounded-full blur-3xl mx-auto scale-y-150 scale-x-150 opacity-70"
    />
  );
};

Blur.propTypes = {
  coordinates: PropTypes.object.isRequired,
};

export default Blur;