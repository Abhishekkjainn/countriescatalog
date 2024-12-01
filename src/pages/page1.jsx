import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
export default function Page1() {
  return (
    <div className="page1">
      <div className="section1">
        <div className="heading">
          Empowering Your Apps with Global Knowledge.
        </div>
        <div className="subheadline">
          Effortlessly access accurate, country-specific data to power your
          apps. From population stats to currency details, our free API delivers
          it all—fast, reliable, and always up-to-date.
        </div>
        <div className="buttonssection">
          <a
            href="https://github.com/Abhishekkjainn/countriesAPI/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="primarybutton"
          >
            API Docs <img src="/arrow.png" alt="arrow" className="arrowdown" />
          </a>
          <a
            href="https://github.com/Abhishekkjainn/countriesAPI/"
            target="_blank"
            rel="noopener noreferrer"
            className="secondarybutton"
          >
            Contribute
            <img src="/arrow.png" alt="arrow" className="arrowdown" />
          </a>
        </div>
      </div>
      <div className="section2">
        <Player
          src="/globe.json"
          className="player"
          loop
          autoplay
          // background="black"
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
}
