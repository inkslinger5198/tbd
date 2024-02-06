import React from "react";
import "./footer_.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Footer_ = () => {
  return (
    <div className="footer_">
      <div className="footer_-logo">
        <div className="footer_-circle">PM</div>
        <div className="footer_-title">
          <h1>Progressor Media</h1>
        </div>
      </div>

      <div className="footer_-links">
        <div className="socials">
          <div className="PM-socials">
            <h1>Get in Touch</h1>
            <a
              className=""
              href="https://app.cal.com/pravitbh/progressor-media"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex-link">
                <h1>Book A Call</h1>
                <FiPhoneCall className="social-icon" />
              </div>
            </a>
          </div>

          <div className="founder-socials">
            <h1>Socials</h1>
            <a
              href="https://twitter.com/pravitb_?s=21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex-link">
                <h1>Twitter</h1>
                <FaXTwitter className="social-icon" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/pravit_bhatia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex-link">
                <h1>Instagram</h1>
                <FaInstagram className="social-icon" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/pravit-emailwizard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex-link">
                <h1>LinkedIn</h1>
                <FaLinkedin className="social-icon" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer_;
