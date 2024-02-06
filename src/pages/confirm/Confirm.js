import React from "react";
import "./Confirm.css";

// eslint-disable-next-line
import { Navbar_ , Confirmed} from "../../components";
import { Footer_ } from "../../containers";
const Confirm = () => {
  return (
    <div className="confirm">
      <Navbar_ />
      <Confirmed />
      <Footer_ />
    </div>
  );
};

export default Confirm;
