import React from "react";
import ImageOne from "../../assets/imgOne.png";
import ImageTwo from "../../assets/imgTwo.png";
import ImageThree from "../../assets/imgThree.png";
import { BlackButton } from "../General-components/Button";

const AboutSection = () => {
  return (
    <div className={`mt-[56px] px-[16px] lg:px-[104px] pb-[20px]`}>
      <p className={`font-outfit text-[#1b0b0b] text-[12px] lg:text-[24px]`}>
        ABOUT US
      </p>
      <p
        className={`font-semibold font-outfit text-[32px] leading-tight lg:text-[64px] lg:w-[608px]`}
      >
        Encountering the Supernatural{" "}
      </p>

      <div className={`w-full lg:flex lg:item-center lg:space-x-10`}>
        <div className={`flex items-center space-x-1 mt-[32px] lg:space-x-5`}>
          <div>
            <img
              src={ImageOne}
              alt=""
              className={`lg:w-[374px] lg:h-[373px] object-cover lg:rounded-tl-xl`}
            />
          </div>
          <div className={`space-y-2 lg:space-y-4`}>
            <img
              src={ImageTwo}
              alt=""
              className={`lg:w-[211px] lg:h-[142px] object-cover lg:rounded-tr-xl`}
            />
            <img
              src={ImageThree}
              alt=""
              className={`lg:w-[211px] lg:h-[215px] object-cover lg:rounded-br-xl`}
            />
          </div>
        </div>

        <div>
          <p
            className={`mt-[32px] w-[350px] font-outfit text-[14px] font-normal lg:text-[20px] lg:w-[560px]`}
          >
            Everyone should be qualified to inherit the kingdom of God and enjoy
            eternal Life prepared For us by Our Lord Jesus Christ. Everyone
            everywhere, all over the world should accept Jesus as Lord and
            savior and proclaim the gospel of Christ all over the world without
            compromise and eradicate false teaching and extortion from false
            prophet and ministers and we will achieve these using every
            available medium
          </p>

          <div className={`mt-[32px]`}>
            <BlackButton text={"More About Us"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
