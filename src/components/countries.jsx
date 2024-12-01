import Page3 from '../pages/page3';
import Page4 from '../pages/page4';

export default function Countries({ country, countries }) {
  return (
    <>
      <div className="height"></div>
      <Page4 countries={countries} country={country} />
      <Page3 countries={countries} />
    </>
  );
}
