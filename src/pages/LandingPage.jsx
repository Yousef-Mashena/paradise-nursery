import { useNavigate } from 'react-router-dom';
import landingPageBg from '../assets/imgs/landingPageBg.jpg';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="landing-page"
      style={{ backgroundImage: `url(${landingPageBg})` }}
    >
      <div className="welcome-text">
        <h1 className="landing-header">Paradise Nursery</h1>
        <p className="landing-text">
          Welcome to Paradise Nursery! We offer a wide variety of beautiful
          houseplants to make your home greener and fresher!
        </p>
        <button onClick={() => navigate('/products')} className="button">
          Get Started
        </button>
      </div>
    </div>
  );
}
