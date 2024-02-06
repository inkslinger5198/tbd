import React, {useEffect} from 'react';
import './sgprov.css';

import {Navbar, Bookcall} from '../components';
import {Win, RevCal, Contact, Footer} from '../../containers';
import {Header, Services, News, Industries} from './containers';

const SgProv = () => {
  useEffect(() => {
    // Set the document title for the main page
    document.title = 'Smart Grid Technology Providers | Progressor Media';
    
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

export default SgProv
