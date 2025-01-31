import './App.css';
import FlightSection from './components/FlightSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import PartnersSection from './components/PartnersSection';
import SearchFlights from './components/SearchFlights';

function App() {
  return (
    <div>
      <Navbar/>

      <HeroSection/>
      
      <SearchFlights/>

      <FlightSection/>
      
      <PartnersSection/>
      

      <Footer/>
      
    </div>
  );
}

export default App;
