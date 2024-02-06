import React from "react";
import "./navbar_.css";

const Navbar_ = () => {
  return (
    <div className="navbar_" id="nav">
      <div className="navbar_-logo">
        <div className="navbar_-circle">PM</div>
        <div className="align">
          <div className="navbar_-title">
            <h1>Progressor Media</h1>
          </div>
          <div className="PM__navbar-links_logo-return">
            <a href="/">Return to Main Site</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar_;
