import React from "react";
import "./services.css";
import Service from "../../../../components/service/Service";
import Service2 from "../../../../components/service2/Service2";
import img1 from "../../../../assets/BS/icp.png";
import img2 from "../../../../assets/BS/deal.png";
import img3 from "../../../../assets/BS/what.png";
import img4 from "../../../../assets/BS/cost.png";

const Services = () => {
  return (
    <div className="services" id="aboutus">
      <div className="services__heading">
        <h1>About Us</h1>
      </div>
      <div className="services__data">
        <Service
          img={img1}
          heading="ICP"
          para="​​We specialize in connecting you with key stakeholders vital for your success in renewable energy, from technology innovators to financial backers. Our profound understanding of the renewable energy landscape, spanning solar, wind, hydro, biomass, and geothermal technologies, equips us to address the unique challenges engineering firms face. We adeptly navigate substantial investment needs and leverage government incentives to ensure project feasibility and prosperity. Through curated contacts and advanced in-house technologies and strategies, we forge strategic partnerships, empowering your firm to lead in evolving renewable energy projects
          "
        />
        <Service2
          img={img2}
          heading="Deal Flow Partner "
          para="As Deal Flow Partners for Engineering Firms in the Renewable Energy sector, we're dedicated to enhancing your visibility and value across the sales cycle. Utilizing your project successes and technical expertise as a foundation, we customize our outreach to showcase your capabilities to potential clients and partners. Our collaboration is designed to navigate the renewable energy landscape effectively, securing deals that leverage your strengths and drive sustainable growth"
        />
        <Service
          img={img3}
          heading="Will It Work For Me"
          para="Questioning whether we can help your Renewable Energy Engineering firm scale? The answer lies in our tailored collaboration. We're not just another consultancy; we're your strategic ally, dedicated to enhancing your project's lifecycle with unparalleled confidentiality, ongoing dialogue, and transparency. Our track record? A series of successful, sustainable projects across the globe, achieved by aligning our innovative strategies with your engineering prowess.
        "
        />
        <Service2
          img={img4}
          heading="Cost Structure "
          para="Our pricing model, designed for Engineering Firms in the Renewable Projects sector, thrives on mutual success. We initiate with a one-time fee, setting the foundation for our collaboration and your project's momentum. Our earnings directly reflect your triumphs: we benefit only when you do, through a 1%-10% success fee on the EPC contracts we help you secure. Targeting significant six to seven figure projects, our approach ensures that our progress is interlinked with yours. Together, we advance toward sustainable success."
        />
      </div>
    </div>
  );
};

export default Services;
