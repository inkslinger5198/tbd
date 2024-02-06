import React from "react";
import "./footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <div className="footer-circle">PM</div>
          <div className="footer-title">
            <h1>Progressor Media</h1>
          </div>
        </div>

        <div className="footer-links">
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
              <a
                className=""
                href="mailto:inkaws3018@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex-link">
                  <h1>Email</h1>
                  <FiPhoneCall className="social-icon" />
                </div>
              </a>
            </div>

            <div className="founder-socials">
              <h1>Socials</h1>
              <a
                href="https://www.linkedin.com/in/pravit-emailwizar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex-link">
                  <h1>Pravit Bhatia</h1>
                  <FaLinkedin className="social-icon" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/sayedbw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex-link">
                  <h1>Sayed</h1>
                  <FaLinkedin className="social-icon" />
                </div>
              </a>
              
            </div>
          </div>

          <div className="navigation">
            <h1>Navigate</h1>
            <Link to="home" smooth={true} duration={100} offset={-90}>
              Home
            </Link>

            <Link to="services" smooth={true} duration={100} offset={-80}>
              Services
            </Link>

            <Link to="wins" smooth={true} duration={100} offset={-80}>
              Wins
            </Link>

            <Link to="contact" smooth={true} duration={100} offset={-100}>
              Contact
            </Link>
            <Link to="about" smooth={true} duration={100} offset={-90}>
              About
            </Link>
          </div>
        </div>
      </div>
      <hr className="footer-div-line"/>

      <div className="footer-bottom">
        <h2>Copyright © Progressor Media 2020. All Rights Reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;
