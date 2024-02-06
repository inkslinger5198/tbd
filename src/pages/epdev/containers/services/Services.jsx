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
          para="We're experts in connecting with key figures in the renewable energy sector, from tech suppliers and EPC contractors to investors passionate about sustainable projects. Our knowledge covers all renewable sources like solar, wind, hydro, biomass, and geothermal. Understanding the importance of investment, we focus on linking up with investors eager to promote a sustainable future. We're also skilled in leveraging government incentives critical for the success of renewable projects. By curating a list of ideal clients and investors, designed to fit the technological and financial facets of the industry, we employ advanced in-house infrastructure, opening doors to growth and innovation."
        />
        <Service2
          img={img2}
          heading="Deal Flow Partner "
          para="Partnering with Renewable Energy Project Developers, we act as your Deal Flow Partner, committed to advancing your projects from concept to fruition. By highlighting your innovative approaches and project impacts, our strategy is tailored to attract the right mix of investors, partners, and stakeholders. Understanding the intricacies of renewable energy development, we guide each deal with strategic foresight and persistence, aligning our efforts with your project goals for mutual success."
        />
        <Service
          img={img3}
          heading="Will It Work For Me"
          para="We specialize in transforming renewable energy visions into tangible successes, acting as more than a service provider but as an integral part of your team. Through steadfast commitment to confidentiality, clear communication, and a transparent process, we bring a history of proven outcomes to your table, specifically geared towards the renewable sector's unique challenges and opportunities.

        "
        />
        <Service2
          img={img4}
          heading="Cost Structure "
          para="Our pricing model is crafted for Renewable Energy Project Developers, focusing on collective achievement. We start with a one-time fee, laying the groundwork for our joint venture and your project's development. Our earnings are directly tied to your success: we gain only if you do, through a 1%-10% success fee on the projects we help bring to fruition. Specializing in impactful high six to nine figure projects, our strategy is designed to ensure our growth moves in tandem with yours. As we collaborate, we both advance towards a more sustainable and prosperous future"
        />
      </div>
    </div>
  );
};

export default Services;
