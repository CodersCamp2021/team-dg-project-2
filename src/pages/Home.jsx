import '../styles/Home.css';

import frame from '../../public/frame.png';

import Button from '../components/Button.jsx';


const Home = () => {
  return (
    <div className="home">
      <section className="home__section">
        <div className="home__text">
          <h1>Build your portfolio website</h1>
          <h5>One page in less than 5 minutes!</h5>
          <Button pathname="/sign-up" text="Build up" />
        </div>
        <div className="home__img">
          <img src={frame} className="home__frame" alt="showcase-img" />
        </div>
        <div className="home__wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
              className="shape-fill"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Home;