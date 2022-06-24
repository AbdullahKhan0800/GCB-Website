import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/hero-section';
import Services from './components/ourservisex';
import Particle from './components/particles';
import Navigation from './components/nav';

function App() {
  return (
    <div>
      <Particle />
      <Navigation/>
      <HeroSection />
      <Services />
    </div>
  );
}

export default App;
