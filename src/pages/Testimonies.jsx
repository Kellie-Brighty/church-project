import React from "react";
import Header from "../components/General-components/Header";
import testimonies from "../components/General-components/testimonies.json";
import ExperienceGod from "../components/Testimonies-components/ExperienceGod";
import Footer from "../components/General-components/Footer";

const Testimonies = () => {
  return (
    <div>
      <Header type={"black"} />

      <div className={`pt-[150px] px-[16px] lg:px-[104px]`}>
        <p className={`text-center font-outfit text-[32px] font-semibold`}>
          Testimonies
        </p>

        <div
          className={`space-y-5 font-lato grid grid-cols-12 gap-5 lg:space-y-0 mt-[40px] lg:mt-[112px]`}
        >
          {testimonies.map((testimony) => (
            <div
              className={`border border-[#EBEBEB] p-[36px] col-span-12 lg:col-span-4`}
            >
              <div className={`flex items-center space-x-5`}>
                <img src={testimony.icon} alt="" className={`w-[64px]`} />
                <div>
                  <p>{testimony.name}</p>
                  <p>{testimony.role}</p>
                </div>
              </div>

              <div className={`mt-[24px]`}>
                <p>
                  He has given me fulfillment and purpose and joy. I am not
                  perfect and I still mess up, but God loves me despite my flaws
                  and imperfections.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`mt-[125px] bg-[#f9f9f9]`}>
        <ExperienceGod />
      </div>
      <Footer />
    </div>
  );
};

export default Testimonies;
