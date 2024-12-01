import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/header';
import Home from './components/home';
import Countries from './components/countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState([]);

  //Routes to be added
  // / - home -- Done
  // /countries - Load all the countries with a UI -- Done
  // /countries/india - Load all the data related to India with a UI -- Done
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
        setCountries(response.data.data);
        setCountry(response2.data.data);
      } catch (err) {
        console.error('Error fetching countries:', err);
        setError('Failed to fetch countries. Please try again later.');
      }
    };

    fetchCountries();
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home countries={countries} country={country} />}
        />
        <Route
          path="/countries"
          element={<Countries countries={countries} country={country} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
