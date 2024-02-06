import React, {useEffect} from 'react';
import './App.css';

import { Navbar} from '../../components';
import {Header, Services, Win, RevCal, Contact, About, Footer, News, Industries} from '../../containers';
const App = () => {
  useEffect(() => {
    // Set the document title for the main page
    document.title = 'Progressor Media';
    
    // Optionally, reset the title when the component unmounts
    return () => {
      document.title = 'Progressor Media';
    };
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Industries />
      <Win />
      <Contact />
      <News />
      <About />
      <Footer />
    </div>
  );
};

export default App;
