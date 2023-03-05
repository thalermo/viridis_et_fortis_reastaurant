import './App.scss';
import Button from "./components/ui/Button";
// import BowlImg from "./assets/images/mein-dish_2_2x-removebg.png"

function App() {

  return (
    <div className="App">
      <header className='header'>

        <div className="text-box">
          <h1 className='text-box__title u-title'>Viridis et Fortis</h1>
          <h2 className='text-box__sub-title u-sub-title'>Who says Vegan food Has to be <strong>Boring.</strong>&nbsp;
            Come over and Taste for yourself.</h2>
        </div>

        <Button
          text="Menu"
          color="#3fb13d"
          background="white"
          fontSize="1.5rem"
          fontWeight="500"
          padding=" 1.25rem 6rem"
          className="btn btn-primary"
        />

      </header>
    </div>
  );
}

export default App;
