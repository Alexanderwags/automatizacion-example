import React from "react";

import "./Main.scss";

const Main = () => {
  return (
    <div className="Main">
      <h1>Main</h1>
      <div className="wrapper">
        <div className="item">
          <h3>Gauge Chart</h3>
          <p>
            A gauge chart is a type of data visualization often used to display
            a single data value with a quantitative context. With a shape that
            resembles a speedometer, this chart aims to track the progress of a
            KPI in comparison to a set target or to other time periods
          </p>
        </div>
        <div className="item">
          <h3>Donut Chart</h3>
          <p>
            A Doughnut Chart is an improved version of Pie Charts to eliminate
            the trickiness of reading pie charts. These charts are known to
            express the relationship of ‘part-to-whole’ where all parts
            represent 100% when collected together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
