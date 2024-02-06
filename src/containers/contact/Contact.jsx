import React from "react";
import "./contact.css";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const setupCal = async () => {
      try {
        const cal = await getCalApi();

        if (cal && cal.ns && typeof cal.ns["funnel-syndicate"] === "function") {
          cal.ns["funnel-syndicate"]("ui", {
            theme: "dark",
            styles: { branding: { brandColor: "#000000" } },
            hideEventTypeDetails: false,
            layout: "month_view",
          });
        } else {
          console.error("cal.ns.funnel-syndicate is not available:", cal);
        }
      } catch (error) {
        console.error("Error during Cal API setup:", error);
      }
    };

    setupCal();
  }, []);

  return (
    <div className="PM-contact " id="contact">
      <div className="PM-contact-content">
        <h1>Book A Call</h1>
        <p>{" "}</p>
      </div>

      <div className="PM-contact-frame">
        <Cal
          className="iframe"
          namespace="progressor-media"
          calLink="pravitbh/progressor-media"
          style={{ width: "100%", height: "100%" }}
          config={{ layout: "month_view" }}
        />
      </div>

      <div className="PM-contact-content">
        <h3>Take your business to a new level.</h3>
      </div>
    </div>
  );
};

export default Contact;

