import React from "react";
import ServiceOne from "../../assets/serviceOne.png";
import ServiceTwo from "../../assets/serviceTwo.png";
import ServiceThree from "../../assets/serviceThree.png";
import Time from "../../assets/time.svg";
import Location from "../../assets/location.svg";
import { Button } from "../General-components/Button";

const OurServices = () => {
  return (
    <div
      className={`px-[16px] py-[20px] mt-[56px] lg:px-[104px] lg:mt-[200px]`}
    >
      <p
        className={`font-outfit font-normal text-[12px] text-right lg:text-[24px]`}
      >
        OUR SERVICES
      </p>
      <p
        className={`text-[32px] font-outfit font-semibold text-right 
        lg:text-[64px]  leading-tight`}
      >
        Join Our Weekly Gatherings
      </p>

      <div className={`w-full lg:flex lg:item-center lg:space-x-10`}>
        <div
          className={`flex items-center space-x-1 mt-[32px] lg:space-x-5 justify-center`}
        >
          <div className={`space-y-2 lg:space-y-4`}>
            <img
              src={ServiceOne}
              alt=""
              className={`lg:w-[211px] lg:h-[142px] object-cover lg:rounded-tl-xl`}
            />
            <img
              src={ServiceTwo}
              alt=""
              className={`lg:w-[211px] lg:h-[215px] object-cover lg:rounded-bl-xl`}
            />
          </div>
          <div>
            <img
              src={ServiceThree}
              alt=""
              className={`lg:w-[374px] lg:h-[373px] object-cover lg:rounded-tr-xl`}
            />
          </div>
        </div>

        <div>
          <p
            className={`text-[16px] font-outfit font-normal mt-[32px] w-[341px] lg:text-[20px] lg:w-[560px]`}
          >
            Join Us as we encounter signs and wonders and the supernatural power
            of God in every meeting. We can’t wait to see you.{" "}
          </p>

          <div className={`mt-[32px] font-outfit space-y-5`}>
            <div className={`flex items-center space-x-5`}>
              <img src={Time} alt="" className={`w-[24px] h-[24px]`} />
              <p className={`lg:text-[20px]`}>Saturdays 12pm - 2pm</p>
            </div>
            <div className={`flex items-center space-x-5`}>
              <img
                src={Time}
                alt=""
                className={`w-[24px] h-[24px] invisible`}
              />
              <p className={`lg:text-[20px]`}>Sundays 10am - 12pm</p>
            </div>
            <div className={`flex items-center space-x-5`}>
              <img src={Location} alt="" className={`w-[24px] h-[24px]`} />
              <p className={`lg:text-[20px]`}>
                WD4 8SG, 30 Ovaltine Drive, Kings Langley
              </p>
            </div>
          </div>
          <div className={`mt-[32px]`}>
            <Button text={"Contact Us"} type={"outlined"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
