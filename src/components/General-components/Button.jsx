import React from "react";
import RightArrow from "../../assets/right-arrow.svg";
import WhiteRightArrow from "../../assets/white-right-arrow.svg";

export const Button = ({ text, type }) => {
  return (
    <div
      className={`${
        type === "outlined"
          ? `cursor-pointer flex p-[20px] bg-transparent border border-black w-[200px] items-center 
          justify-center rounded-xl space-x-5`
          : `bg-[#fff] flex p-[20px] w-[200px] items-center 
          justify-center rounded-xl cursor-pointer space-x-5`
      }`}
    >
      <p className={`text-[14px] font-outfit font-medium`}>{text}</p>
      <img src={RightArrow} alt="" />
    </div>
  );
};

export const BlackButton = ({ text, type }) => {
  return (
    <div
      className={`${
        type === "outlined"
          ? "cursor-pointer"
          : `bg-[#2A2A2A] flex p-[20px] w-[200px] items-center 
          justify-center rounded-xl cursor-pointer space-x-5`
      }`}
    >
      <p className={`text-[14px] font-outfit font-medium text-[#fff]`}>
        {text}
      </p>
      <img src={WhiteRightArrow} alt="" />
    </div>
  );
};
