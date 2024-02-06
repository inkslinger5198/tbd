import React, { useEffect, useRef } from "react";
import "./service.css";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Service = ({ img, heading, para }) => {
  const serviceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-down");
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    if (serviceRef.current) {
      observer.observe(serviceRef.current);
    }

    return () => {
      if (serviceRef.current) {
        observer.unobserve(serviceRef.current);
      }
    };
  }, []);

  return (
    <div className="service" ref={serviceRef}>
      <div className="service-content">
        <div className="tick">
          < IoCheckmarkCircleSharp className="check" />
        </div>
        <div className ="service-data">
          <h1>{heading}</h1>
          <p>
            {para}
          </p>
        </div>
      </div>
      <div className="service-image">
        <img src={img} alt="service" />
      </div>
    </div>
  );
};

export default Service;
