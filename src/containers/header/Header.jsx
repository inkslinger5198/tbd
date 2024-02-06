import React from 'react';
import './header.css';

// Simplified TxtRotate as a class-based component
class TxtRotate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: '',
      isDeleting: false,
      loopNum: 0,
    };
    this.period = parseInt(props.period, 10) || 2000;
    this.toRotate = props.toRotate;
  }

  componentDidMount() {
    this.tick();
  }

  tick = () => {
    let { loopNum, txt, isDeleting } = this.state;
    const fullTxt = this.toRotate[loopNum % this.toRotate.length];

    let delta = 200 - Math.random() * 100;

    if (!isDeleting) {
      // Typing logic
      this.setState({ txt: fullTxt.substring(0, txt.length + 1) });
      if (txt === fullTxt) {
        // Prepare to delete
        delta = this.period;
        this.setState({ isDeleting: true });
      }
    } else {
      // Deleting logic
      this.setState({ txt: txt.substring(0, txt.length - 1) });
      if (txt === '') {
        // Finished deleting, move to next text
        this.setState({
          isDeleting: false,
          loopNum: loopNum + 1,
        });
      }
    }

    setTimeout(this.tick, delta);
  };

  render() {
    return (
      <span className="wrap blue txt-rotate sog_header-dynamic-text">{this.state.txt}</span>
    );
  }
}

// Header component
const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header-title">
        <h1>
          We help {""}
          <TxtRotate
            toRotate={[ "EV Charging Companies", "Smart Grid Providers", "Renewable Project Developers" ]}
            period={2000} 
          />Get <br /> multiple 7-8 figure deals with their <br/> <span className='blue'>Ideal Clients{" "}</span>
          in 6 months
        </h1>
        <p>Using Omnipresence Acquisition Systems.</p>
      </div>
      <div className="header-vsl">
        <iframe
          src="https://www.youtube.com/embed/oPWaOwlmfQQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div className="header-button">
        <a
          className=""
          href="https://app.cal.com/pravitbh/progressor-media"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Book A Call</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
