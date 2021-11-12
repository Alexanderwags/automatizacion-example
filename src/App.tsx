import React from "react";
import firebase from "./firebase";
import Bulb from "./components/Bulb/Bulb";
import Donut from "./components/Donut/Donut";
import Footer from "./components/Footer/Footer";
import Gauge from "./components/Gauge/Gauge";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

import "./App.scss";

function App() {
  const [bulb, setBulb] = React.useState(false);

  const handleClick = async () => {
    setBulb((value) => !value);
    const todoRef = firebase
      .database()
      .ref("state")
      .child("auto-example17-default-rtdb");

    try {
      todoRef.update({
        enc: !bulb,
      });
    } catch (error) {}
  };

  return (
    <div className="App">
      <Sidebar />
      <Donut />
      <Bulb handleClick={handleClick} bulb={bulb} />
      <Gauge />
      <Main />
      <Footer />
    </div>
  );
}
export default App;
