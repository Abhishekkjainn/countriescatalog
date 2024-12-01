import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Page4({ country }) {
  const [searchCountry, setSearchCountry] = useState(null); // Stores searched country data
  const [error, setError] = useState(null);

  // Initially set searchCountry to India when the page is first loaded
  useEffect(() => {
    fetchCountry('india'); // Set India as the default country
  }, [country]);

  // Fetch country data based on the name entered
  // const fetchCountry = async (name) => {
  //   try {
  //     const response = await axios.get(
  //       `https://countries-api-abhishek.vercel.app/countries/${name}`
  //     );
  //     setError(null);
  //     setSearchCountry(response.data.data); // Update state with the fetched data
  //   } catch (err) {
  //     console.error('Error fetching country:', err);
  //     setError(response.data.message);
  //   }
  // };

  const fetchCountry = async (name) => {
    try {
      const response = await axios.get(
        `https://countries-api-abhishek.vercel.app/countries/${name}`
      );
      setError(null); // Clear any previous errors
      setSearchCountry(response.data.data); // Update state with the fetched country data
    } catch (err) {
      console.error('Error fetching country:', err);

      // Check if the error is from the API and set the error message
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.details || err.response.data.message); // Set error message or details from the response
      } else {
        setError('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="page4">
      <div className="headingpage4">Search For Any Country</div>
      <div className="subheadingpage4">
        Showing Results for{' '}
        <span className="count">
          {searchCountry ? searchCountry.name : 'India'}{' '}
          {/* Default to India if no search */}
        </span>
      </div>
      <div className="searchbar">
        <img src="/logo.png" alt="icon" className="searchicon" />
        <input
          type="text"
          className="searchfield"
          placeholder="Enter country name"
        />
        <img
          src="/search.png"
          alt="search"
          className="searchIcon"
          onClick={() =>
            fetchCountry(document.querySelector('.searchfield').value)
          }
        />
      </div>

      {/* Error handling */}
      {error && <div className="error">{error}</div>}

      {/* Display country data */}
      <div className="searchresult">
        <div className="flagresult">
          <img
            src={searchCountry ? searchCountry.flag : '/default-flag.png'} // Default flag when no search result
            alt="flag"
            className="flagimage"
          />
        </div>
        <div className="resultinfo">
          <pre className="res">
            {JSON.stringify(searchCountry || country, null, 2)}{' '}
            {/* Show India if no search */}
          </pre>
        </div>
      </div>
    </div>
  );
}
