import React from "react";
import "./about.css";
import PB from "../../assets/Founder/Founder.jpg";
import S from "../../assets/Founder/Sayed.jpg";
import { TiBusinessCard } from "react-icons/ti";
import { IoCheckmarkDone } from "react-icons/io5";
const About = () => {
  return (
    <div className="about-founder section__padding" id="about">
      <div className="about-founder-heading">
        <h1>Meet The Founders</h1>
      </div>

      <div className="founders-wrapper">
        <div className="about-founder-content">
          <div className="about-founder-content_data">
            <a
              href="https://www.linkedin.com/in/pravit-emailwizard"
              target="_blank"
              rel="noreferrer"
            >
              <div className="data-header">
                <TiBusinessCard className="icon" />

                <h1>Pravit Bhatia</h1>
              </div>
            </a>
            <p>
              Pravit Bhatia is the founder of Progressor Media, a leading
              digital marketing agency specializing in helping IT firms expand
              their clientele through an innovative AI-based approach known as
              SmartLink. Pravit's forward-thinking leadership has positioned
              Progressor Media as a trailblazer in the industry, leveraging
              artificial intelligence to redefine traditional marketing
              strategies. Under his guidance, the agency thrives on delivering
              personalized solutions and fostering a culture of collaboration
              and innovation.
            </p>

            <ul>
              <li>
                <div className="pointer">
                  <IoCheckmarkDone className="bullet" />
                  <p>Innovative and data-driven marketing strategies</p>
                </div>
              </li>
              <li>
                <div className="pointer">
                  <IoCheckmarkDone className="bullet" />
                  <p>Collaborative partnerships with industry leaders</p>
                </div>
              </li>
              <li>
                <div className="pointer">
                  <IoCheckmarkDone className="bullet" />
                  <p>
                    Continuous adaptation to emerging trends and technologies
                  </p>
                </div>
              </li>
              <li>
                <div className="pointer">
                  <IoCheckmarkDone className="bullet" />
                  <p>
                    Proven track record of increasing brand visibility and
                    engagement
                  </p>
                </div>
              </li>
              <li>
                <div className="pointer">
                  <IoCheckmarkDone className="bullet" />
                  <p>
                    Transparent reporting and regular performance evaluations
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <a
            href="https://www.linkedin.com/in/pravit-emailwizar"
            target="_blank"
            rel="noreferrer"
          >
            <div className="about-founder-content_img">
              <img src={PB} alt="Founder" />
            </div>
          </a>
        </div>

        <div className="about-founder-content rev">
          <div className="about-founder-content_data">
            <a
              href="https://www.linkedin.com/in/sayedbw1"
              target="_blank"
              rel="noreferrer"
            >
              <div className="data-header">
                <TiBusinessCard className="icon" />

                <h1>Sayed</h1>
              </div>
            </a>
            <p>
              With over 13 years of strategic and visionary leadership, Sayed has
              dedicated his career to mastering the art of B2B marketing and
              revenue generation. His approach is rooted in a
              deep understanding of macroeconomics and industry trends, allowing
              him to offer clients a high-level, bird's-eye view that drives
              operational efficiencies and results. Known as a super connector,
              his extensive network enriches the clients' strategies, fostering
              collaborations that propel businesses forward. He is committed to
              causes that matter, leveraging his experience to not just achieve,
              but exceed, his clients' goals. At the core, he is a team worker,
              always ensuring that every voice is heard and every contribution
              valued.
            </p>

            <ul>
              <li>
                <div className="pointer">
                  <IoCheckmarkDone className="bullet" />
                  <p>
                    Directed clean tech strategies, enhancing client's market
                    penetration by 150%.
                  </p>
                </div>
              </li>
              <li>
                <div className="pointer">
                  <IoCheckmarkDone className="bullet" />
                  <p>
                    Implemented outbound techniques, achieving a 200% increase
                    in dream client engagement.
                  </p>
                </div>
              </li>
              <li>
                <div className="pointer">
                  <IoCheckmarkDone className="bullet" />
                  <p>
                    My leadership has resulted in a proven model with a 250%
                    growth in client revenue.
                  </p>
                </div>
              </li>
              <li>
                <div className="pointer">
                  <IoCheckmarkDone className="bullet" />
                  <p>
                    Maintained a 95% client retention rate through transparent
                    and confidential practices.
                  </p>
                </div>
              </li>
              <li>
                <div className="pointer">
                  <IoCheckmarkDone className="bullet" />
                  <p>
                    Fostered sustainable energy projects, leading to a 150% rise
                    in client sustainable engagement.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <a
            href="https://www.linkedin.com/in/sayedbw"
            target="_blank"
            rel="noreferrer"
          >
            <div className="about-founder-content_img">
              <img src={S} alt="Founder" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
