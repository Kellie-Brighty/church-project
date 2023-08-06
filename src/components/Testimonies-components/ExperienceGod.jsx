import React from "react";
import Image from "../../assets/experience-god.png";
import { BlackButton } from "../General-components/Button";
import { useNavigate } from "react-router-dom";

const ExperienceGod = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/Contact-us");
  };

  return (
    <div
      className={`font-outfit p-[16px] lg:flex lg:justify-evenly lg:items-center`}
    >
      <div>
        <p className={`text-[12px] lg:text-[20px]`}>EXPERIENCE GOD </p>
        <p className={`text-[14px] mt-[14px] lg:w-[571px] lg:text-[20px]`}>
          Everyone should be qualified to inherit the kingdom of God and enjoy
          eternal Life prepared For us by Our Lord Jesus Christ. Everyone
          everywhere, all over the world should accept Jesus as Lord and savior
          and proclaim the gospel of Christ all over the world without
          compromise.{" "}
        </p>
        <div className={`mt-[36px]`}>
          <BlackButton text={"Join Us"} icon={true} action={goToContact} />
        </div>
      </div>

      <div className={`flex justify-center`}>
        <img src={Image} alt="" className={`object-contain`} />
      </div>
    </div>
  );
};

export default ExperienceGod;
