import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/header';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState([]);

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
        const response2 = await axios.get(
          'https://countries-api-abhishek.vercel.app/countries/india'
        );
        setCountries(response.data);
        setCountry(response2.data);
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
      <Page3 countries={countries} />
      <Page4 countries={countries} country={country} />
    </>
  );
}

export default App;
