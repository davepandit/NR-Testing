import { useState } from "react";
import Hero from "./components/Spline";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
    </>
  );
}

export default App;
