import React from "react";
import { Chart } from "react-google-charts";
import "./Donut.scss";

const Donut = () => {
  return (
    <div className="Donut">
      <h1>Donut chart</h1>
      <div className="donut-wrapper">
        <Chart
          width={"400px"}
          height={"300px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Task", "Hours per Day"],
            ["Memory", 88],
            ["CPU", 69],
            ["Network", 63],
          ]}
          options={{
            title: "Computational resources",
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    </div>
  );
};

export default Donut;
