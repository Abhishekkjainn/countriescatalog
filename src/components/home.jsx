import React, { useEffect, useState } from 'react';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Page3 from '../pages/page3';
import Page4 from '../pages/page4';

export default function Home({ countries, country }) {
  return (
    <>
      <Page1 />
      <Page2 />
      <Page3 countries={countries} />
      <Page4 countries={countries} country={country} />
    </>
  );
}
