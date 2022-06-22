import './App.css';
import HeroSection from './components/hero-section';
import Nav from './components/nav';
import Services from './components/ourservisex';
import Particle from './components/particles';

function App() {
  return (
    <div>
      <Particle />
      <Nav/>
      <HeroSection />
      <Services />
    </div>
  );
}

export default App;
