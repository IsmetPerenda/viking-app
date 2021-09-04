import React from 'react';
import Footer from '../Footer/index';
import Contact from '../ContactForm/index';
import Events from '../Events/index';
import BestFromUs from './bestFromUs';
import title from "./images/naslov.png"
import './index.css';
import BookTable from '../BookTable';

function LandingPage() {
  return (
    <>
      <div className="landingPagePhotoContainer">
        <div className="landingPageTextContainer">
        <img className="title"src={title} alt="logo img"></img>
          <h3>
            {' '}
            Traveling – it leaves you speechless, <br></br>then turns you into a storyteller{' '}
          </h3>
   
        </div>
      </div>
      <BestFromUs />
      <BookTable />
      <Events />
      <Contact />
      <Footer />
    </>
  );
}

export default LandingPage;
