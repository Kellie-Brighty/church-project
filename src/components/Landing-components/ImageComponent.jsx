import React from "react";

const ImageComponent = ({ image, name }) => {
  return (
    <div
      className={`w-full bg-[#fff] p-[24px] rounded-md border border-[#EBEBEB]`}
    >
      <img src={image} alt="team" className={`w-full`} />
      <p className={`mt-[24px]`}>{name}</p>
    </div>
  );
};

export default ImageComponent;
