import React from "react";
import firebase from "./firebase";
import Sidebar from "./components/Sidebar/Sidebar";
import Bulb from "./components/Bulb/Bulb";

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
      <Sidebar />
      <div className="donus">Donus Chart</div>
      <Bulb handleClick={handleClick} bulb={bulb}/>
      <div className="gauge">Gauge Chart</div>
      <div className="main">Main?</div>
    </div>
  );
}
export default App;
