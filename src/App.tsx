import React from "react";
import firebase from "./firebase";
import Sidebar from "./components/Sidebar/Sidebar";
import Bulb from "./components/Bulb/Bulb";
import Donut from "./components/Donut/Donut";
import Gauge from "./components/Gauge/Gauge";
import Header from "./components/Header/Header";

import "./App.scss";

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
      <Header />
      <Sidebar />
      <Donut />
      <Bulb handleClick={handleClick} bulb={bulb} />
      <Gauge />
      <div className="main">Main?</div>
    </div>
  );
}
export default App;
