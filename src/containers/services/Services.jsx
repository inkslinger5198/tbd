import React from "react";
import "./services.css";
import Service from "../../components/service/Service";
import Service2 from "../../components/service2/Service2";
import img1 from "../../assets/Services/1.jpg";
import img2 from "../../assets/Services/2.jpg";
import img3 from "../../assets/Services/3.jpg";
import img4 from "../../assets/Services/4.jpg";

const Services = () => {
  return (
    <div className="services" id="about">

    <div className="services__heading">
      <h1>Our Services</h1>
    </div>
    <div className="services__data">
      <Service
        img={img1}
        heading="Tailoring Your Approach To Your Ideal Customer"
        para="Creating a strong compelling offer is gonna be the foundation to closing 7-8 figure deals. Having a dynamite offer that echoes with your ideal customer is key. We know how to help you restructure your offer in a way that resonates with your brand and prospects."
      />
      <Service2
        img={img2}
        heading="Building Your Ideal Customer Profile"
        para="We help you build you Ideal customer profile and help you identify the right people to target and the people to avoid. This tailored strategy not only amplifies your reach to high-potential leads but also minimizes wasted efforts on unqualified prospects.
        "
      />
      <Service
        img={img3}
        heading="Client Acquisition Infrastructure"
        para=" We will setup a complete dealflow infrastructure for you across multiple channels which will predictably generate 7-15 high quality meetings on autopilot every month. We leverage inhouse tools and al kinds of cool tech stuff to get this meetings and this is how we have booked thousands of meetings for our partners
        "
      />
      <Service2
        img={img4}
        heading="Mastering Sales Velocity"
        para="As meetings begin to flow in, we'll help you refine your sales process, crafting detailed nurturing sequences to vet leads. We'll also automate your CRM for smooth, hassle-free operations, all designed to boost your sales velocity and expedite deal closures."
      />
    </div>
    </div>
  );
};

export default Services;
