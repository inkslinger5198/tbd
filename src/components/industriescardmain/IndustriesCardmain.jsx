import React from "react";
import { Link } from "react-router-dom";
import "./industriescard.css";

const IndustriesCardmain = ({ img, title, content, url }) => {
  return (
    <Link to={url} target="_blank" rel="noreferrer">
      <div className="industrymain">
        <div className="industrymain-img">
          <img src={img} alt="industrymain" />
        </div>
        <div className="industrymain-data">
          <div className="industrymain-title">
            <h3>{title}</h3>
          </div>
          <div className="redirect-main">Learn More ...</div>
        </div>
      </div>
    </Link>
  );
};

export default IndustriesCardmain;
