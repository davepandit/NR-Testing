import { useState } from "react";
import Hero from "./components/Spline";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Hero /> */}
      <div className="text-center font-bold text-3xl font-audiowide">
        NITK Racing
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae inventore
        nisi delectus.
      </div>
    </>
  );
}

export default App;
