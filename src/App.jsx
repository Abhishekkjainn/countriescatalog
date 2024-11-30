import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/header';
import Page1 from './pages/page1';
import Page2 from './pages/page2';

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
      <Header />
      <Page1 />
      <Page2 />
    </>
  );
}

export default App;
