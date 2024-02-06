import React, {useEffect} from 'react';
import './evcharging.css';

import { Navbar, Bookcall} from '../components';
import { Win, RevCal, Contact, Footer} from '../../containers';
import {Header, Services, News, Industries} from './containers';

const EvCharging = () => {
  useEffect(() => {
    // Set the document title for the main page
    document.title = 'Electric Vehicle (EV) Charging Infrastructure Providers | Progressor Media';
    
    // Optionally, reset the title when the component unmounts
    return () => {
      document.title = 'Progressor Media';
    };
  }, []);
  return (
    <div className="epdev">
      <Navbar />
      <Header />
      <Services />    
      <RevCal /> 
      <Win />
      <Bookcall />
      <News />     
      <Contact />           
      <Industries /> 
      <Footer />
    </div>
  )
}

export default EvCharging;
