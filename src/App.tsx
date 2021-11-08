import React from "react";
import OffBulb from "./assets/images/OFFbulb.jpg";
import OnBulb from "./assets/images/ONbulb.jpg";

import "./App.css";

function App() {
  const [bulb, setBulb] = React.useState(false);

  const handleClick = () => {
    setBulb((prevState) => !prevState);
  };
  return (
    <div className="App">
      <img src={bulb ? OnBulb : OffBulb} className="bulb" alt="Bulb on/off" />
      <p onClick={() => handleClick()}>{bulb ? "OFF" : "ON"}</p>
    </div>
  );
}

export default App;
