// STYLE SHEET
import './App.scss';

// UI COMPONENTS
import Button from "./components/ui/Button";
import Hero from "./components/sections/Hero";

// SECTIONS COMPONENTS
import Navigation from './components/ui/Navigation';
import Features from './components/sections/Features';
import Newsletter from './components/ui/Newsletter';
import Reservation from './components/sections/Reservation';

// LAYOUT COMPONENTS
import Footer from './components/layouts/Footer';



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
