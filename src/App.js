// STYLE SHEET
import './App.scss';

// UI COMPONENTS
import Button from "./components/ui/_button/Button";
import Hero from "./components/sections/_hero/Hero";

// SECTIONS COMPONENTS
import Navigation from './components/ui/_navigation/Navigation';
import Features from './components/sections/_features/Features';
import Newsletter from './components/sections/_newsletter/Newsletter';
import Reservation from './components/sections/_reservation/Reservation';

// LAYOUT COMPONENTS
import Footer from './components/layouts/footer/Footer';



function App() {

  return (
    <div className="App">
      <Navigation />
      <Hero >
        <Button
          text="Menu"
          color="#3fb13d"
          background="white"
          fontWeight="800"
          padding="1.5rem 7rem"
          className="btn btn-primary"
        />
      </Hero>
      <Reservation />
      <Features />
      <Newsletter>
        <Button
          className="btn"
          text="submit"
          color="white"
          background="#3fb13d"
          padding=" 1.5rem 5rem"
          fontWeight="400"
        />
      </Newsletter>
      <Footer />
    </div>
  );
}

export default App;
