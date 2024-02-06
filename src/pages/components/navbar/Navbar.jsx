import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <nav>
    <Link to="home" smooth={true} duration={100} offset={-90}>
      Home
    </Link>
    <Link to="aboutus" smooth={true} duration={100} offset={-80}>
      About Us
    </Link>
    <Link to="wins" smooth={true} duration={100} offset={-80}>
      Wins
    </Link>
    <Link to="contact" smooth={true} duration={100} offset={-100}>
      Contact
    </Link>
    <Link to="industries" smooth={true} duration={100} offset={-80}>
      Industries
    </Link>
    
    <span></span>
  </nav>
);

const Phone_menu = () => (
  <>
    <Link to="home" smooth={true} duration={100} offset={-90}>
      Home
    </Link>
    <Link to="about" smooth={true} duration={100} offset={-80}>
      About Us
    </Link>
    <Link to="wins" smooth={true} duration={100} offset={-80}>
      Wins
    </Link>
    <Link to="contact" smooth={true} duration={100} offset={-100}>
      Contact
    </Link>
    <Link to="industries" smooth={true} duration={100} offset={-80}>
      Industries
    </Link>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar" id="nav">
      <a href="/" className="navbar-return">
        <div className="navbar-logo">
          <div className="navbar-circle">PM</div>
          <div className="navbar-title">
            <h1>Progressor Media</h1>
          </div>
        </div>
      </a>

      <div className="navbar-links">
        <div className="navbar-laptop">
          <Menu />
        </div>
      </div>

      <div className="navbar-button">
        <button>
          <a
            className=""
            href="https://app.cal.com/pravitbh/progressor-media"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book A Call
          </a>
        </button>

        <div className="navbar-phone">
          {toggleMenu ? (
            <RiCloseLine
              color="#000"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#000"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && (
            <div className="navbar-phone-container scale-up-center">
              <div className="navbar-phone-links">
                <Phone_menu />
                <div className="navbar-phone-button">
                  <button>
                    <a
                      className=""
                      href="https://app.cal.com/pravitbh/progressor-media"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book A Call
                    </a>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
