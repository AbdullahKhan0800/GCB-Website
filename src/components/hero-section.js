import './assets/style.css'
import LogoImage from './images/logo.png'
export default function HeroSection() {
  return (
    <div className="maindivheorseftion">
      <div>
        <h1>
          <img className='thisiaLogoimage' src={LogoImage} />
        </h1>
      </div>
    </div>
  );
}