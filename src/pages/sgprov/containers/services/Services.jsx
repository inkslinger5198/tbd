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
          para="We're experts at connecting you with the diverse clients crucial for your growth, spanning utility companies embracing modern grids to policy-making government bodies. We understand the nuts and bolts of grid technologies, including the variety of plugs and smart metering systems. Our knowledge covers the regulatory environment worldwide, ensuring we're aware of incentives and policies affecting the smart grid sector. We tailor a list of ideal targets for you, focusing on strategic markets, and use advanced in-house technology. This approach not only builds vital industry relationships but also aligns your business with the overarching trends in the smart grid industry.
          "
        />
        <Service2
          img={img2}
          heading="Deal Flow Partner "
          para="As your Deal Flow Partner specializing in Smart Grid Technology, we bring a focused approach to navigating the complex sales cycle specific to this industry. By integrating our in-house infrastructure and your case studies, we ensure your solutions stand out to utilities and stakeholders. Our partnership is built on a deep understanding of the smart grid ecosystem, driving deals from initiation to completion with precision and strategic insight. Together, we'll connect your innovations with the opportunities they deserve, powering progress in the smart grid sector.
          "
        />
        <Service
          img={img3}
          heading="Will It Work For Me"
          para="Wondering if we're the right fit? With a rich history of elevating grid solutions through strategic partnerships, we guarantee a 'Yes.' Beyond merely working together, we ensure seamless integration with your projects, prioritizing your confidentiality, ensuring every communication is clear, and every strategy transparent. Our approach isn't one-size-fits-all; it's a bespoke service designed to navigate the complexities of smart grid innovation, underpinned by a proven track record of success."
        />
        <Service2
          img={img4}
          heading="Cost Structure "
          para="Our pricing model is energized by our shared success. We have a one-time engagement fee, covering the initial set up and energy we invest into the project.  Our real earnings are synchronized with your achievements: we only gain when you do, through a 1%-10% success fee on the integration contracts we secure. Specializing in high six figures to eight figure deals, our strategy ensures our growth is in harmony with yours. We don't just collaborate with you; we power forward together.
          "
        />
      </div>
    </div>
  );
};

export default Services;
