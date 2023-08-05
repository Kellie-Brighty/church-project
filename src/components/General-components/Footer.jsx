import React from "react";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";
import Spotify from "../../assets/spotify.svg";
import Facebook from "../../assets/facebook.svg";
import Youtube from "../../assets/youtube.svg";

const Footer = () => {
  return (
    <div className={`py-[50px] px-[16px] bg-[#fff] font-outfit lg:px-[104px]`}>
      <div className={`lg:flex lg:justify-between`}>
        <div>
          <p className={`text-[20px] font-normal`}>Stay connected </p>

          <div className={`flex items-center mt-[24px] space-x-5`}>
            <img src={Twitter} alt="" className={`cursor-pointer`} />
            <img src={Instagram} alt="" className={`cursor-pointer`} />
            <img src={Spotify} alt="" className={`cursor-pointer`} />
            <img src={Facebook} alt="" className={`cursor-pointer`} />
            <img src={Youtube} alt="" className={`cursor-pointer`} />
          </div>
        </div>

        <div className={`mt-[52px] lg:mt-0`}>
          <p>chrsitforallsoulsministryuk.org</p>
          <p className={`mt-[10px]`}>+447534208883</p>
          <p className={`w-[250px] mt-[10px]`}>
            30 Ovaltine Drive, Kings Langley Watford, Hertforshire{" "}
          </p>
        </div>

        <div className={`mt-[52px] space-y-2 lg:mt-0`}>
          <p className={`cursor-pointer`}>About Us</p>
          <p className={`cursor-pointer`}>Our Teams</p>
          <p className={`cursor-pointer`}>Board of Trusties</p>
        </div>

        <div className={`hidden lg:inline-block lg:space-y-2`}>
          <p className={`cursor-pointer`}>Resources</p>
          <p className={`cursor-pointer`}>Sermon</p>
          <p className={`cursor-pointer`}>Blog</p>
        </div>
      </div>

      <div className={`mt-[40px] flex items-center space-x-3 lg:mt-[268px]`}>
        <p>&copy;</p>
        <p className={`w-[310px] lg:w-full`}>
          2023 All Rights Reserved - Jesus Christ The Son of God for all Souls
          Ministry Worldwide{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
