import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter(p => p + 1);
  console.log("i run all the time");
  const runOnlyOnce = () => console.log("i run only once");
  useEffect(runOnlyOnce, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
