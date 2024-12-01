import { Link } from 'react-router-dom';
export default function Page2() {
  return (
    <div className="page2">
      <div className="section2page2">
        <div className="headingpage2">Why NationNode?</div>
        <div className="reason">
          Access fast, reliable, and up-to-date country-specific data, from
          demographics to currencies, with seamless integration. Our free,
          low-latency API is developer-friendly and ideal for powering global
          applications effortlessly.
        </div>
        <div className="buttonsectionpage2">
          <a
            href="https://github.com/Abhishekkjainn/countriesAPI/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="primarybutton"
          >
            Check Docs{' '}
            <img src="/arrow.png" alt="arrow" className="arrowdown" />
          </a>
        </div>
      </div>
      <div className="section1page2"></div>
    </div>
  );
}
