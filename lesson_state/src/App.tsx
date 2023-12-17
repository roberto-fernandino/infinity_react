import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div id="main">
        <h1>Value is: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Click here </button>
      </div>
    </>
  );
}

export default App;
