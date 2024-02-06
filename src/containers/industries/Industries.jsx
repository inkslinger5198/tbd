import React from 'react';
import './industries.css';
import { IndustriesCardmain } from '../../components';
import ev from "../../assets/industries/Electric car-bro (1).png";
import sg from "../../assets/industries/sg.jpg";
import es from "../../assets/industries/es.png";
import em from "../../assets/industries/Factory-cuate.png"
import re from "../../assets/industries/re.png"

const Industries = () => {
  return (
    <div className="industriesmain section__padding" id="industries">
      <div className="industries-title">
        <h1>Industries</h1>
      </div>
      <div className="industry-main-container">
        <IndustriesCardmain 
        img={ev}
        title="Electric Vehicle (EV) Charging Infrastructure Providers"
        content="We help EV charging infrastructure providers to develop and implement their marketing strategy, including branding, lead generation, and sales support. We also help them to develop their business strategy, including market research, competitive analysis, and business development."
        url="/ev-charging"
        />
        <IndustriesCardmain 
        img={sg}
        title="Smart Grid Technology Providers"
        content="We help smart grid providers to develop and implement their marketing strategy, including branding, lead generation, and sales support. We also help them to develop their business strategy, including market research, competitive analysis, and business development.."
        url="/sg-prov"
        />
        <IndustriesCardmain 
        img={es}
        title="Large-Scale Energy Storage Manufacturers"
        content="We help Large-Scale Energy Storage Manufacturers to develop and implement their marketing strategy, including branding, lead generation, and sales support. We also help them to develop their business strategy, including market research, competitive analysis, and business development."
        url="/es-manufacturers"
        />
        <IndustriesCardmain 
        img={em}
        title="Infrastructure and Engineering Firms in Renewable Energy"
        content="We help Infrastructure and Engineering Firms in Renewable Energy to develop and implement their marketing strategy, including branding, lead generation, and sales support. We also help them to develop their business strategy, including market research, competitive analysis, and business development.."
        url="/i-e-firms"
        /><IndustriesCardmain 
        img={re}
        title="Renewable Energy Project Developers"
        content="We help Renewable Energy Project Developers to develop and implement their marketing strategy, including branding, lead generation, and sales support. We also help them to develop their business strategy, including market research, competitive analysis, and business development."
        url="/ep-developers"
        />
      </div>
    </div>
  )
}

export default Industries
