import React, {useEffect} from 'react';
import './epdev.css';

import { Bookcall, Navbar} from '../components';
import {Win, RevCal, Contact, Footer} from '../../containers';
import {Header, Services, News, Industries} from './containers';

const EpDev = () => {
  useEffect(() => {
    // Set the document title for the main page
    document.title = 'Renewable Energy Project Developers | Progressor Media';
    
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

export default EpDev
