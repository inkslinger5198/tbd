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
      <span className="wrap blue txt-rotate sog_subheader-dynamic-text">{this.state.txt}</span>
    );
  }
}

// subHeader component
const Header = () => {
  return (
    <div className="subheader" id="home">
      <div className="subheader-title">
        <h1>
          We help <span className="blue">Renewable Energy Project Developers</span>{" "}<br />Get  7-8 figure EPC Contracts With{" "}<br/>
          <TxtRotate
            toRotate={[ "Governments", "Developers", "Investors", "Utility Companies" ]}
            period={2000} 
          />
          in 6 months or Less
        </h1>
        <p>Using Omnipresence Acquisition Systems</p>
      </div>
      
      <div className="subheader-button">
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
