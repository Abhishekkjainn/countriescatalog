import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <div className="header">
        <div className="comp">
          <img src="/logo.png" alt="" className="complogo" />
          <div className="compname">NationNode</div>
        </div>
        <div className="menu">
          <Link to={'/'} className="link">
            Home
          </Link>
          <Link to={'/countries'} className="link">
            Countries
          </Link>
          {/* <Link
            to={'https://countries-api-abhishek.vercel.app/'}
            className="link"
          >
            API
          </Link> */}
          <a
            href="https://countries-api-abhishek.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            API
          </a>
          {/* <Link
            to={
              'https://github.com/Abhishekkjainn/countriesAPI/blob/main/README.md'
            }
            className="link"
          >
            Docs
          </Link> */}
          <a
            href="https://github.com/Abhishekkjainn/countriesAPI/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Docs
          </a>
          <div className="link">About</div>
          <div className="link">Contact</div>
          {/* <Link
            to={'https://abhishekjainn.vercel.app'}
            className="link highligted"
          >
            Portfolio
          </Link> */}
          <a
            href="https://abhishekjainn.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Portfolio
          </a>
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
    </>
  );
}
