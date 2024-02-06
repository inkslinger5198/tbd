import React from "react";
import { Link } from "react-router-dom";
import "./industriescard.css";

const IndustriesCard = ({ img, title, content, url }) => {
  return (
    <Link to={url} target="_blank" rel="noreferrer">
      <div className="industry">
        <div className="industry-img">
          <img src={img} alt="industry" />
        </div>
        <div className="industry-data">
          <div className="industry-title">
            <h3>{title}</h3>
          </div>
          <div className="redirect">Learn More ...</div>
        </div>
      </div>
    </Link>
  );
};

export default IndustriesCard;
