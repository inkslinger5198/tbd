import React from "react";
import "./revCal.css";
import Calculator from "../../components/calculator/Calculator";
import { FaArrowRight } from "react-icons/fa6";

const RevCal = () => {
  return (
    <div className="revcal-block section__padding">
      <div className="revcal-content">
        <h1>Calculate Your Revenue With Us</h1>
        <h3>Our partners get 7-15 high quality meetings per month with us. </h3>
        <p>
          Enter your average deal size and winning rate, then match it with our
          average monthly meeting figures.
          <br /> <br />
          Fancy a broader view? Try calculating with annual figures :)
        </p>
        <div className="rev-cal-book-call">
          <a
            className=""
            href="https://app.cal.com/pravitbh/progressor-media"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button><div>Book A Call </div><div className="arrow-icon"><FaArrowRight/></div></button>
          </a>
        </div>
      </div>

      <div className="revcal-calculator">
        <Calculator />
      </div>
    </div>
  );
};

export default RevCal;
