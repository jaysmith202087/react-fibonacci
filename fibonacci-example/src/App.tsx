import "./App.css";
import { FibButton } from "./components/FibButton";

function App() {

  
  return (
    <>
      <h1>Fibonacci Counter</h1>
      <p>
        {" "}
        Clicking the button will give you the next number in the&nbsp;
        <a
          href="https://en.wikipedia.org/wiki/Fibonacci_sequence"
          target="_blank"
        >
          Fibonacci sequence
        </a>{" "}
        starting from one on each reload{" "}
      </p>
      <h2> Example </h2>
      <div className="card sm-padding row">
        <p className="example-text"> If the current in sequence is 1 clicking the button will return 1, after clicking the button again it should return 2</p> 
      </div>
      <div className="card">
        <p> Click the button below</p>
        <FibButton />
      </div>
    </>
  );
}

export default App;
