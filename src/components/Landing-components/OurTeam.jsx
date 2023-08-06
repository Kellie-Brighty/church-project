import React from "react";
import ImageComponent from "./ImageComponent";
import Debbie from "../../assets/debbie-bodunde.png";
import Muyiwa from "../../assets/muyiwa-ige.png";
import Kemi from "../../assets/kemi-ige.png";

const OurTeam = () => {
  return (
    <div className={`mt-[56px] pb-[50px] px-[16px] font-outfit lg:px-[104px]`}>
      <p className={`text-[12px] font-outfit font-normal lg:text-[24px]`}>
        OUR TEAM
      </p>
      <p
        className={`text-[32px] font-semibold leading-tight w-[315px] lg:w-[676px] lg:text-[64px]`}
      >
        Get to Know the Board of Trusties
      </p>

      <div
        className={`mt-[32px] space-y-[32px] lg:flex lg:items-center lg:space-x-[57px] lg:space-y-0`}
      >
        <ImageComponent name={"Debbie Bodunde"} image={Debbie} />
        <ImageComponent name={"Muyiwa Ige"} image={Muyiwa} />
        <ImageComponent name={"Oluwakemi Ige"} image={Kemi} />
      </div>
    </div>
  );
};

export default OurTeam;