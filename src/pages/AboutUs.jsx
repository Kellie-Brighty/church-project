import React from "react";
import Header from "../components/General-components/Header";
import AboutImage from "../assets/about-img.png";
import ExperienceGod from "../components/Testimonies-components/ExperienceGod";
import Footer from "../components/General-components/Footer";

const AboutUs = () => {
  return (
    <div>
      <Header type={"black"} />

      <div className={`font-outfit pt-[150px] px-[16px] lg:px-[104px]`}>
        <p className={`text-center text-[32px] font-semibold`}>
          The Story So Far
        </p>

        <div className={`mt-[29px] lg:mt-[126px]`}>
          <div className={`lg:flex lg:space-x-[39px]`}>
            <div className={`flex justify-center `}>
              <img
                src={AboutImage}
                alt=""
                className={`w-[380px] lg:w-[2700px] object-contain`}
              />
            </div>
            <div className={`mt-[32px]`}>
              <p className={`text-[18px] lg:text-[32px]`}>
                Jesus Christ the Son of God for all Souls Ministries Worldwide{" "}
              </p>
              <p className={`mt-[16px] text-[14px] font-normal lg:text-[20px]`}>
                We are a family who gathers to welcome the presence of God and
                to live out the calling He has placed on our lives. We firmly
                believe that everyone should be qualified to inherit the kingdom
                of God and enjoy eternal Life prepared For us by Our Lord Jesus
                Christ. Everyone everywhere, all over the world should accept
                Jesus as Lord and savior and proclaim the gospel of Christ all
                over the world without compromise and eradicate false teaching
                and extortion from false prophet and ministers and we will
                achieve these using every available medium.
              </p>
            </div>
          </div>
          <p
            className={`mt-[8px] text-[14px] font-normal lg:mt-[48px] lg:text-[20px]`}
          >
            When God notice that churches are not carrying His message to his
            people and ministers have come with ideas of putting themselves in
            the position of God and kingdom. When God notice that churches are
            not carrying His message to his people and ministers have come with
            ideas of putting themselves in the position of God and kingdom. The
            Lord came with His supernatural power on His servant and continue to
            send him to several places about His standard. He didn’t want to
            answer the call, but God found His way and he then realized it is a
            must to answer God’s calling and God gave him ways to establish
            programs on Fridays and Tuesday where people rushed in and many were
            delivered and there were signs and wonders. At the beginning of this
            ministry signs, wonders and miracles happened in all programs. Dead
            were raised, the blind regained their sights, people with ulcer,
            kidney diseases were healed while so many with insanity were made
            whole again, many barren women became mother of children, lame
            walked, deaf could hear, dumb speaks just to mention a few. A lot of
            people gave their lives to Jesus Christ, he never thought of
            establishing a church, but God told him he needed to use the power
            He gave to him to increase the kingdom of God. Having used the
            power, he then increased the number of programs from Friday to
            everyday, he continues to attend to the people every day without
            complaint. He will be there on Sunday to attend to the people that
            comes for deliverance, counselling and God’s message at the mountain
            opposite CAN building Aranse-olu area, Modakeke, Osun state Nigeria.
            He loved evangelism and winning souls for Christ at times he spent
            his money meant for food and house rent for ministration.
          </p>
        </div>
      </div>

      <div className={`mt-[44px]`}>
        <ExperienceGod />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
