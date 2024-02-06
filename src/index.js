import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "../src/pages/App/App";
import Confirm from "./pages/confirm/Confirm";

import EvCharging from "./pages/evcharging/EvCharging";
import SgProv from "./pages/sgprov/SgProv";
import EsMan from "./pages/EsMan/EsMan";
import IeFirms from "./pages/IeFirms/IeFirms";
import EpDev from "./pages/epdev/EpDev";

import "./index.css";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/confirm" element={<Confirm />} />
      <Route path="/ev-charging" element={<EvCharging />} />
      <Route path="/sg-prov" element={<SgProv />} />
      <Route path="/es-manufacturers" element={<EsMan />} />
      <Route path="/i-e-firms" element={<IeFirms />} />
      <Route path="/ep-developers" element={<EpDev />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
