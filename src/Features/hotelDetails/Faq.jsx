import React, { useState } from "react";
import "./style.css";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Can I get the refund?",
      answer:
        "Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat cancellation ploicy: For a full refund, cancel at least 24 hours in advance of the start date of the experience. Discover and book Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat",
    },
    {
      question: "Can I change the travel date?",
      answer: "No",
    },
    {
      question: "When and where does the tour end?",
      answer: "It takes 10 Days",
    },
    {
      question: "Do you arrange airport transfers?",
      answer: "Yes",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="faq pb-4 w-75">
      <h1 className="pt-3 pb-4">FAQ</h1>
      <div>
        <div className="pb-4 faq-items">
          {faqData.map((item, index) => (
            <div key={index} className="mb-3 faq-box">
              <div onClick={() => handleToggle(index)} className="questions">
                <span>{item.question}</span>
                <button className={`toggle-btn ${
                activeIndex === index ? "expanded" : "collapsed"
              }`}>{activeIndex === index ? "-" : "+"}</button>
              </div>
              {activeIndex === index && <div className="answer pb-2">{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
