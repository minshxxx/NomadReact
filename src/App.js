import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render");
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
