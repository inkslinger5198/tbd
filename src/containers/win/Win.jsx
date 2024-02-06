import React from "react";
import "./win.css";
import { FaTrophy } from "react-icons/fa6";
import a1 from "../../assets/WINS/1.jpg";
import a2 from "../../assets/WINS/2.jpg";
import a3 from "../../assets/WINS/3.jpg";
import a4 from "../../assets/WINS/4.jpg";
import a5 from "../../assets/WINS/5.jpg";
import a6 from "../../assets/WINS/6.jpg";
import a7 from "../../assets/WINS/7.jpg";
import a8 from "../../assets/WINS/8.jpg";

const Win = () => {
  return (
    <div className="wins section__padding" id="win">
      <div className="wins-heading">
        <h1>Recent Wins</h1>
        <FaTrophy className="awards" />
      </div>

      <div className="wins-gallery">
        <div className="grid-wrapper">
          

          

          <div className="normal">
            <img src={a4} alt="wins" />
          </div>



          <div className="normal">
            <img src={a5} alt="wins" />
          </div>

          <div className="wide">
            <img src={a6} alt="wins" />
          </div>

          <div className="wideish">
            <img src={a7} alt="wins" />
          </div>

          <div className="wideish">
            <img src={a8} alt="wins" />
          </div>

          <div className="wideish">
            <img src={a3} alt="wins" />
          </div>

          <div className="wideish">
            <img src={a2} alt="wins" />
          </div>
          <div className="normal center">
            <img src={a1} alt="wins" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Win;
