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
          para="We specialize in elevating companies in the EV charging market, expertly connecting you with essential clients—from government bodies to commercial and residential seekers of AC and DC solutions. Staying ahead is key, from mastering plug technologies to leveraging green incentives. Our deep regulatory and market insights help pinpoint prime opportunities globally. Through advanced strategies, we link you with industry leaders, positioning you at the forefront of the EV charging wave, poised to fulfill rising infrastructure needs."
        />
        <Service2
          img={img2}
          heading="Deal Flow Partner "
          para="As your dedicated Deal Flow Partner for the EV Charging industry, we extend our expertise beyond mere lead generation, guiding you through the entire sales cycle. Leveraging your unique assets, like impactful case studies, we tailor our outreach to highlight your value in the rapidly evolving EV market. Our commitment is steadfast—from initial contact to deal closure, ensuring your offerings resonate with key stakeholders. In this dynamic partnership, our success is intertwined with yours, driving strategic growth and securing deals that accelerate your business forward."
        />
        <Service
          img={img3}
          heading="Will It Work For Me"
          para="Questioning if our approach will work for your EV Charging business? The answer is a resounding 'Yes.' Beyond being just a service, we act as an integral extension of your team, underpinned by a proven track record in the EV Charging industry. We commit to transparency, open communication, and unwavering confidentiality, ensuring every strategy is crafted to meet your specific needs. Our partnership is built on trust, from safeguarding your information to delivering measurable results. Together, we'll navigate the road to success, making the complex journey simpler and more transparent.
        "
        />
        <Service2
          img={img4}
          heading="Cost Structure "
          para="Our pricing model is energized by our shared success. We have a one-time engagement fee, covering the initial set up and energy we invest into the project.  Our real earnings are synchronized with your achievements: we only gain when you do, through a 1%-10% success fee on the site-host agreements we secure for you. Specializing in dynamic high six figures to eight figure deals, our strategy ensures our growth is in harmony with yours. We don't just collaborate with you; we power forward together as a team.
          "
        />
      </div>
    </div>
  );
};

export default Services;
