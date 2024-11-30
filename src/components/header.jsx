export default function Header() {
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
    </>
  );
}
