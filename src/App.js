// STYLE SHEET
import './App.scss';

// UI COMPONENTS
import Button from "./components/ui/_button/Button";
import Hero from "./components/sections/_hero/Hero";

// SECTIONS COMPONENTS
import Navigation from './components/ui/_navigation/Navigation';

import Newsletter from './components/sections/_newsletter/Newsletter';
import Reservation from './components/sections/_reservation/Reservation';

// LAYOUT COMPONENTS
import Footer from './components/layouts/footer/Footer';


import featureDish1 from "./assets/images/feature_dish1@2x.png";
import featureDish2 from "./assets/images/feature_dish2@2x.png";

import Feature from './components/layouts/feature/Feature';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Hero >
        <Button
          text="Menu"
          className="btn btn-primary"
        />
      </Hero>
      <Reservation />

      <section className='features'>
        <Feature
          header="about us"
          text="“Viridis et Fortis” means green and strong.
          The point of this extraordinary establishment
          is to open th eyes of people (both vegan and
          non-vegan) and to also introduce their taste
          buds to a plethora of intricate flavours and
          nutritional benefits of the vegan food"
          img={featureDish1}
          id="about"
        />
        <Feature
          header="why us"
          text="“Viridis et Fortis” is dedicated to saving the planet by suggesting you go green, and the way we’re going right now, we think we are achieving that one convincing plate at a time. What we are doing is helping them realize that vegetables equally have the qualities meat have. We give you a plate and you choose for yourself."
          img={featureDish2}
          className="left-align"
          id="why"
        />
      </section>


      <Newsletter>
        <Button className="btn btn-inverse" text="submit" />
      </Newsletter>

      <Footer />
    </div>
  );
}

export default App;
