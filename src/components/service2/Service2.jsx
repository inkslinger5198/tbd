import React, { useEffect, useRef } from "react";
import "./service_.css";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Service = ({ img, heading, para }) => {
  const serviceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-down");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    const refCurrent = serviceRef.current;
    if (refCurrent) {
      observer.observe(refCurrent);
    }

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, []);

  return (
    <div className="service_" ref={serviceRef}>
      <div className="service_-image">
        <img src={img} alt="service_" />
      </div>
      <div className="service_-content">
        <div className="tick_">
          <IoCheckmarkCircleSharp className="check" />
        </div>
        <div className="service_-data">
          <h1>{heading}</h1>
          <p>{para}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
