import React, { useState, useEffect } from "react";
import Logo from "../../assets/church-logo.svg";
import MenuIcon from "../../assets/menu-icon.svg";
import BlackMenu from "../../assets/black-menu.png";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  console.log(window.location.pathname);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed w-full flex items-center justify-between top-0 
      px-[16px] lg:px-[104px] border-b lg:border-0 py-[10px] transition-colors duration-300 ${
        scrolling ? "bg-[#b76344]" : "bg-transparent"
      }`}
    >
      <div onClick={() => navigate("/")} className={`cursor-pointer`}>
        <img src={Logo} alt="church-logo" className={`w-[60px] h-[60px]`} />
      </div>

      <div className="relative lg:flex items-center space-x-[60px] lg:text-[#fff]">
        {type === "black" ? (
          <img
            src={BlackMenu}
            alt="menu-icon"
            className={`h-[24px] w-[24px] lg:hidden cursor-pointer`}
            onClick={toggleMenu}
          />
        ) : (
          <img
            src={MenuIcon}
            alt="menu-icon"
            className={`h-[24px] w-[24px] lg:hidden cursor-pointer`}
            onClick={toggleMenu}
          />
        )}

        {isMenuOpen && (
          <div
            className={`absolute right-0 mt-2 py-2 bg-white rounded shadow-lg z-10 lg:hidden`}
          >
            <p
              className={`block px-4 py-2 font-lato cursor-pointer ${
                scrolling ? "text-black" : "text-[#000]"
              }`}
              onClick={() => {
                navigate("/About-us");
                toggleMenu(); // Close menu dropdown after clicking a link
              }}
            >
              Who we are
            </p>
            <p
              className={`block px-4 py-2 font-lato cursor-pointer ${
                scrolling ? "text-black" : "text-[#000]"
              }`}
              onClick={() => {
                navigate("/Contact-us");
                toggleMenu(); // Close menu dropdown after clicking a link
              }}
            >
              Contact us
            </p>
            <p
              className={`block px-4 py-2 font-lato cursor-pointer ${
                scrolling ? "text-black" : "text-[#000]"
              }`}
              onClick={() => {
                navigate("/Testimonies");
                toggleMenu(); // Close menu dropdown after clicking a link
              }}
            >
              Testimonies
            </p>
            <p
              className={`block px-4 py-2 font-lato cursor-pointer ${
                scrolling ? "text-black" : "text-[#000]"
              }`}
            >
              Media
            </p>
          </div>
        )}

        <div className="hidden lg:flex items-center space-x-[60px]">
          <p
            className={`font-lato cursor-pointer ${
              scrolling
                ? "text-white"
                : window.location.pathname === "/"
                ? "text-[#fff]"
                : "text-[#000]"
            }`}
            onClick={() => navigate("/About-us")}
          >
            Who we are
          </p>
          <p
            className={`font-lato cursor-pointer ${
              scrolling
                ? "text-white"
                : window.location.pathname === "/"
                ? "text-[#fff]"
                : "text-[#000]"
            }`}
            onClick={() => navigate("/Contact-us")}
          >
            Contact us
          </p>
          <p
            className={`font-lato cursor-pointer ${
              scrolling
                ? "text-white"
                : window.location.pathname === "/"
                ? "text-[#fff]"
                : "text-[#000]"
            }`}
            onClick={() => navigate("/Testimonies")}
          >
            Testimonies
          </p>
          <p
            className={`font-lato cursor-pointer ${
              scrolling
                ? "text-white"
                : window.location.pathname === "/"
                ? "text-[#fff]"
                : "text-[#000]"
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
