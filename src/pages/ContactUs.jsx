import React from "react";
import Header from "../components/General-components/Header";
import Footer from "../components/General-components/Footer";
import { BlackButton } from "../components/General-components/Button";

const ContactUs = () => {
  return (
    <div>
      <Header type={"black"} />

      <div className={`pt-[150px] font-outfit lg:px-[375px] `}>
        <div>
          <p
            className={`text-center font-outfit text-[32px] font-semibold lg:text-[64px]`}
          >
            Send Us a Message{" "}
          </p>
          <p
            className={`text-center mt-[10px] font-outfit text-[14px] lg:mt-[96px] lg:text-[20px]`}
          >
            Message Us and you’ll get a response shortly{" "}
          </p>

          <div
            className={"p-8 grid grid-cols-12 gap-5 bg-[#f9f9f9] lg:mt-[35px]"}
          >
            <div className={"col-span-12 lg:col-span-6"}>
              <div className={`space-y-2`}>
                <span className={"font-medium"}>First Name</span>
                <input
                  className={`flex-1 text-gray-dark font-medium 
              bg-transparent focus:outline-none w-full h-[55px] border border-[#ccc] p-[16px]`}
                />
              </div>
            </div>
            <div className={"col-span-12 lg:col-span-6"}>
              <div className={`space-y-2`}>
                <span className={"font-medium"}>Last Name</span>
                <input
                  className={`flex-1 text-gray-dark font-medium 
              bg-transparent focus:outline-none w-full h-[55px] border border-[#ccc] p-[16px]`}
                />
              </div>
            </div>
            <div className={"col-span-12 lg:col-span-12"}>
              <div className={`space-y-2`}>
                <span className={"font-medium"}>Email Address</span>
                <input
                  className={`flex-1 text-gray-dark font-medium 
              bg-transparent focus:outline-none w-full h-[55px] border border-[#ccc] p-[16px]`}
                />
              </div>
            </div>
            <div className={"col-span-12 lg:col-span-12"}>
              <div className={`space-y-2`}>
                <span className={"font-medium"}>Phone Number</span>
                <input
                  className={`flex-1 text-gray-dark font-medium 
              bg-transparent focus:outline-none w-full h-[55px] border border-[#ccc] p-[16px]`}
                />
              </div>
            </div>
            <div className={"col-span-12 lg:col-span-12"}>
              <div className={`space-y-2`}>
                <span className={"font-medium"}>House Address</span>
                <input
                  className={`flex-1 text-gray-dark font-medium 
              bg-transparent focus:outline-none w-full h-[55px] border border-[#ccc] p-[16px]`}
                />
              </div>
            </div>
            <div className={"col-span-12 lg:col-span-12"}>
              <div className={`space-y-2`}>
                <span className={"font-medium"}>Message</span>
                <textarea
                  className={`flex-1 text-gray-dark font-medium 
              bg-transparent focus:outline-none w-full h-[100px] border border-[#ccc] p-[16px]`}
                />
              </div>
            </div>

            <div>
              <BlackButton text={"Send Message"} />
            </div>
          </div>
        </div>
      </div>

      <div className={`lg:border lg:border-t-1 lg:mt-[68px]`}>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
