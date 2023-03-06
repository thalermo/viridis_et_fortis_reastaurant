import './App.scss';
import Button from "./components/ui/Button";
// import BowlImg from "./assets/images/mein-dish_2_2x-removebg.png"
import Header from "./components/layouts/Header";
import Reservation from './components/Reservation';
// import Reservation from './components/Reservation'; 


function App() {

  return (
    <div className="App">
      <p>hey</p>
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
    </div>
  );
}

export default App;
