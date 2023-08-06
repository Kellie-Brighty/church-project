import React, { useState, useEffect } from "react";
import Logo from "../../assets/church-logo.svg";
import MenuIcon from "../../assets/menu-icon.svg";
import BlackMenu from "../../assets/black-menu.png";

const Header = ({ type }) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full flex items-center justify-between top-0 
      px-[16px] lg:px-[104px] border-b lg:border-0 py-[10px] transition-colors duration-300 ${
        scrolling ? "bg-[#b76344]" : "bg-transparent"
      }`}
    >
      <div>
        <img src={Logo} alt="church-logo" className={`w-[60px] h-[60px]`} />
      </div>

      <div>
        {type === "black" ? (
          <img
            src={BlackMenu}
            alt="menu-icon"
            className={`h-[24px] w-[24px] lg:hidden`}
          />
        ) : (
          <img
            src={MenuIcon}
            alt="menu-icon"
            className={`h-[24px] w-[24px] lg:hidden`}
          />
        )}
        <div
          className={`hidden lg:flex items-center space-x-[60px] lg:text-[#fff]`}
        >
          <p
            className={`font-lato  cursor-pointer ${
              scrolling ? "text-white" : "text-[#000]"
            }`}
          >
            Who we are
          </p>
          <p
            className={`font-lato  cursor-pointer ${
              scrolling ? "text-white" : "text-[#000]"
            }`}
          >
            Contact us
          </p>
          <p
            className={`font-lato  cursor-pointer ${
              scrolling ? "text-white" : "text-[#000]"
            }`}
          >
            Testimonies
          </p>
          <p
            className={`font-lato  cursor-pointer ${
              scrolling ? "text-white" : "text-[#000]"
            }`}
          >
            Media
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
