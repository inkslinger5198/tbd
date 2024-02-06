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
          para="We help you connect seamlessly with essential stakeholders in the Energy Storage industry, from utility giants to forward-thinking investors. Our expertise spans across Lithium Ion, Sodium Ion, Thermal Energy Systems, and Gravity Batteries, just to name a few. Understanding the critical role of investment in this sector, we target and connect with investors who are keen on backing groundbreaking energy storage solutions. We create a list of your ideal targets and use our in-house infrastructure to build connections that matter. These efforts position you strategically within the energy storage market."
        />
        <Service2
          img={img2}
          heading="Deal Flow Partner "
          para="For Energy Storage Manufacturers, our role as your Deal Flow Partner is to illuminate the path from lead generation to deal closure, emphasizing the unique benefits of your storage solutions. Leveraging your technological advantages and success stories, we craft targeted outreach that speaks directly to investors and project developers. Our commitment to your growth in the competitive energy storage market is unwavering, ensuring each deal is pursued with the diligence and strategic acumen it requires to succeed."
        />
        <Service
          img={img3}
          heading="Will It Work For Me"
          para="Can Energy Storage Manufacturers like you achieve more with us? Absolutely. We differentiate ourselves by deeply understanding the nuances of energy storage, from lithium-ion to emerging technologies. By valuing your intellectual property with the highest confidentiality and maintaining open lines of communication, we align our proven methodologies specifically to your production and market objectives, ensuring a partnership that transcends conventional service models.
        "
        />
        <Service2
          img={img4}
          heading="Cost Structure "
          para="Our pricing model, ideal for Energy Storage Companies, is built on shared success. It starts with a one-time fee for initial setup and project investment. Our real earnings are linked to your success: we profit only if you do, through a 1%-10% fee on the Power Purchase Agreements we secure for you. Focusing on high six figures to eight figure deals, our strategy ensures our growth aligns with yours. In partnership, we advance, storing success together."
        />
      </div>
    </div>
  );
};

export default Services;
