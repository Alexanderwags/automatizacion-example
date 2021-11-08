import React from "react";

import OffBulb from "./assets/images/OFFbulb.jpg";
import OnBulb from "./assets/images/ONbulb.jpg";

import "./App.css";
import firebase from "./firebase";

function App() {
  const [bulb, setBulb] = React.useState(false);

  const handleClick = async () => {
    setBulb((value) => !value);
    const todoRef = firebase
      .database()
      .ref("state")
      .child("-MnxTUbYg981TJ8ixMl2");

    try {
      todoRef.update({
        enc: !bulb,
      });
    } catch (error) {}
  };

  return (
    <div className="App">
      <img src={bulb ? OnBulb : OffBulb} className="bulb" alt="Bulb on/off" />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        {bulb ? "OFF" : "ON"}
      </button>
    </div>
  );
}
export default App;
