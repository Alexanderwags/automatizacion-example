import React from "react";
import { Chart } from "react-google-charts";

import "./Gauge.scss";

const Gauge = () => {
  const [memory, setMemory] = React.useState(80);
  const [cpu, setCpu] = React.useState(55);
  const [network, setNetwork] = React.useState(68);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMemory(Math.floor(Math.random() * 100));
      setCpu(Math.floor(Math.random() * 100));
      setNetwork(Math.floor(Math.random() * 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Gauge">
      <h1>Gauge chart</h1>
      <div className="gauge-wrapper">
        <Chart
          width={400}
          height={120}
          chartType="Gauge"
          loader={<div>Loading Chart</div>}
          data={[
            ["Label", "Value"],
            ["Memory", memory],
            ["CPU", cpu],
            ["Network", network],
          ]}
          options={{
            redFrom: 90,
            redTo: 100,
            yellowFrom: 75,
            yellowTo: 90,
            minorTicks: 5,
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    </div>
  );
};

export default Gauge;
