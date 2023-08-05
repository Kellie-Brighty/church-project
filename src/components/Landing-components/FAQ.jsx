import React, { useState } from "react";
import ArrowDown from "../../assets/arrow-down.svg";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What time should i arrive?",
      answer: "Arrival time",
    },
    {
      question: "Can my kids stay with me during service?",
      answer: "Kids questions",
    },
    {
      question: "How do i get more involved?",
      answer: "Involving question",
    },
    {
      question: "What if i need counselling?",
      answer: "Do you need counselling",
    },
    {
      question:
        "How do i stay connected to be well informed about church activities?",
      answer: "Connecting question",
    },
    {
      question: "Do you live stream your services every Sunday?",
      answer: "Live stream question",
    },
  ];

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="max-w-3xl mx-auto pb-[100px] px-[16px] mt-[56px]">
      <h1 className={`text-3xl font-semibold text-center mb-8 font-outfit`}>
        Frequently Asked Questions
      </h1>
      <p
        className={`text-[16px] font-outfit font-normal text-center mb-[32px] mt-[16px]`}
      >
        If you have any other questions about the church or our service time,
        please contact us and I’ll get back to you shortly.
      </p>
      <div>
        {faqData.map((item, index) => (
          <div
            key={index}
            className=" border-t border-gray-300 py-4 font-outfit"
          >
            <div
              className={`flex justify-between items-center cursor-pointer `}
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-lg font-medium text-[16px]">
                {item.question}
              </h2>
              <img src={ArrowDown} alt="" className={`w-[16px] h-[16px]`} />
            </div>
            <div
              className={`mt-2 text-gray-600 ${
                activeIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              } transition-all duration-500 overflow-hidden`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
