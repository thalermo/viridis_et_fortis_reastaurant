import './App.scss';
import Button from "./components/ui/Button";
// import BowlImg from "./assets/images/mein-dish_2_2x-removebg.png"
import Header from "./components/layouts/Header";
import Reservation from './components/Reservation';
import Navigation from './components/ui/Navigation';
import Feature from './components/layouts/Feature';
// import Reservation from './components/Reservation'; 
import featureDish1 from "./assets/images/feature_dish1@2x.png";
import featureDish2 from "./assets/images/feature_dish2@2x.png";
import Newsletter from './components/ui/Newsletter';
import Footer from './components/layouts/Footer';



function App() {

  return (
    <div className="App">
      <Navigation />
      <Header >
        <Button
          text="Menu"
          color="#3fb13d"
          background="white"
          fontWeight="800"
          padding="1.5rem 7rem"
          className="btn btn-primary"
        />
      </Header>
      <Reservation />
      <Feature
        header="about us"
        text="“Viridis et Fortis” means green and strong.
          The point of this extraordinary establishment
          is to open th eyes of people (both vegan and
          non-vegan) and to also introduce their taste
          buds to a plethora of intricate flavours and
          nutritional benefits of the vegan food"
        img={featureDish1}
      />
      <Feature
        header="why us"
        text="“Viridis et Fortis” is dedicated to saving the planet by suggesting you go green, and the way we’re going right now, we think we are achieving that one convincing plate at a time. We are not in anyway trying to force non-vegans out of their meat eating culture, what we are doing is helping them realize that vegetables equally have the qualities meat have. We give you a plate and you choose for yourself."
        img={featureDish2}
        className="left-align"
      />
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
