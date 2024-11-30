import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Player } from '@lottiefiles/react-lottie-player';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  //Routes to be added
  // / - home
  // /countries - Load all the countries with a UI
  // /countries/india - Load all the data related to India with a UI
  // /API - Take to API URL
  // /Docs - Take to API Docs
  // /About - About Abhishek Jain Developer
  // /Contact - Contact Form to telegram bot
  // /Portfolio - Open my portfolio

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          'https://countries-api-abhishek.vercel.app/countries'
        );
        setCountries(response.data);
      } catch (err) {
        console.error('Error fetching countries:', err);
        setError('Failed to fetch countries. Please try again later.');
      }
    };

    fetchCountries();
  }, []);
  return (
    <>
      <div className="header">
        <div className="comp">
          <img src="/logo.png" alt="" className="complogo" />
          <div className="compname">NationNode</div>
        </div>
        <div className="menu">
          <div className="link">Home</div>
          <div className="link">Countries</div>
          <div className="link">API</div>
          <div className="link">Docs</div>
          <div className="link">About</div>
          <div className="link">Contact</div>
          <div className="link highligted">Portfolio</div>
        </div>
        <div className="respmenubutton">
          <img
            src="/menu.png"
            alt="Menu Icons"
            className="menubutton"
            onClick={() => {
              const respmenudiv = document.querySelector('.respmenudiv');
              respmenudiv.style.transition = 'transform 0.3s ease-in-out';
              respmenudiv.style.transform = 'translateX(0)';
            }}
          />
        </div>
      </div>
      <div className="respmenudiv">
        <div
          className="close"
          onClick={() => {
            const respmenudiv = document.querySelector('.respmenudiv');
            respmenudiv.style.transition = 'transform 0.3s ease-in-out';
            respmenudiv.style.transform = 'translateX(100%)';
          }}
        >
          x
        </div>
      </div>
      <div className="page1">
        <div className="section1"></div>
        <div className="section2"></div>
      </div>
    </>
  );
}

export default App;

{
  /* <img
            src="/menu.png"
            alt="Menu Icons"
            className="menubutton"
            onClick={() => {
              const respmenudiv = document.querySelector('.respmenudiv');
              respmenudiv.style.transition = 'transform 0.3s ease-in-out';
              respmenudiv.style.transform = 'translateX(0)';
            }}
          />
          <div
            className="close"
            onClick={() => {
              const respmenudiv = document.querySelector('.respmenudiv');
              respmenudiv.style.transition = 'transform 0.3s ease-in-out';
              respmenudiv.style.transform = 'translateX(100%)';
            }}
          >
            x
          </div> */
}

{
  /* <Player
          src="/globe.json"
          className="player"
          loop
          autoplay
          background="black"
          style={{ height: '700px', width: '700px' }}
        /> */
}
