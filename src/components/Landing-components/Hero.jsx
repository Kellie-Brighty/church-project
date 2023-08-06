import React from "react";
// import HeroBg from "../../assets/hero-bg.svg";
import Header from "../General-components/Header";
import { Button } from "../General-components/Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/Contact-us");
  };
  return (
    <div
      className={`h-[100vh] lg:h-[120vh] bg-cover bg-no-repeat bg-center lg:pt-[125px]`}
      style={{ backgroundImage: "url('/hero-bg.svg')" }}
    >
      <Header />
      <div className={`pt-[125px] px-[16px] lg:px-[104px]`}>
        <p className={`font-outfit text-[#fff]`}>Welcome to Church</p>
        <p
          className={`text-[32px] font-bold text-[#fff] mt-[13px] font-outfit 
          lg:text-[76px] lg:w-[926px] lg:leading-tight`}
        >
          Jesus Christ the Son of God for all Souls Ministries Worldwide{" "}
        </p>
        <p className={`text-[#fff] mt-[13px] font-outfit lg:w-[550px]`}>
          Join Us as we encounter signs and wonders and the supernatural power
          of God in every meeting{" "}
        </p>

        <div className={`mt-[36px]`}>
          <Button text={"Join Us"} bg="#fff" action={goToContact} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
