import Marquee from 'react-fast-marquee';
export default function Page3({ countries }) {
  return (
    <div className="page3">
      <Marquee pauseOnHover gradient={false} speed={100}>
        {countries.map(({ flag }) => (
          <div key={flag}>
            <img src={flag} alt="" className="flag" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
