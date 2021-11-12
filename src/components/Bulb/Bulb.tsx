import React from "react";

import OffBulb from "../../assets/images/OFFbulb.jpg";
import OnBulb from "../../assets/images/ONbulb.jpg";

import "./Bulb.scss";

interface BulbProps {
  bulb: boolean;
  handleClick: () => void;
}

const Bulb = ({ bulb, handleClick }: BulbProps) => {
  return (
    <div className="Bulb">
      <h1>Bulb</h1>
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
};

export default Bulb;
