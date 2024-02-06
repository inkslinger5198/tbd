import React, {useEffect} from 'react';
import './iefirms.css';

import { Bookcall, Navbar} from '../components';
import {Win, RevCal, Contact, Footer} from '../../containers';
import {Header, Services, News, Industries} from './containers';

const IeFirms = () => {
  useEffect(() => {
    // Set the document title for the EV Charging page
    document.title = 'Infrastructure and Engineering Firms in Renewable Energy | Progressor Media';
    
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

export default IeFirms
