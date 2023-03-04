import './App.scss';
import Button from "./components/ui/Button";

function App() {

  return (
    <div className="App">
      <Button
        text="Menu"
        color="#3fb13d"
        background="white"
        fontSize="3rem"
        fontWeight="500"
        padding=" 1em 4em"
      />
    </div>
  );
}

export default App;
