import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line, Brush, ReferenceLine
} from "recharts";
import shiso from './lettuce.json';
import './chart.style.css';


const Chart = () => {
  return (
    <div>
      <h2 style={{ textAlign: "left" }}>TEMPERATURE (°C)</h2>
      <ResponsiveContainer width={"90%"} height={400} className="lineChart">
        <LineChart
          data={shiso}
          margin={{ top: 5, right: 80, left: 20, bottom: 10 }}          
        >
          <XAxis
            stroke="white"
            dataKey="timestamp"
            domain={["dataMin", "dataMax"]}
            //interval={0}
            tick={{ fontSize: 10, fill: "grey", strokeWidth: 2 }}
            //angle={30}
          ></XAxis>
          <YAxis
            //dataKey="temp"
            stroke="white"
            type="number"
            domain={["dataMin", "dataMax"]}
            tick={{ fontSize: 10, fill: "grey", strokeWidth: 2 }}
            // ticks={[0, 5, 10, 15, 20, 25, 30]}
          ></YAxis>
          <Tooltip />
          <ReferenceLine y={17} stroke="red" strokeWidth={1} />
          <ReferenceLine y={20} stroke="blue" strokeWidth={1} />
          <ReferenceLine y={23} stroke="red" strokeWidth={1} />
          <Line
            dataKey="temp"
            name="Temperature"
            unit={"°C"}
            fill="black"
            stroke="black"
            type={"natural"}
            strokeWidth={2}
          />
          <Brush
            className="brush"
            startIndex={0}
            endIndex={100}
            height={20}
            dataKey="timeStamp"
            data={shiso}
            stroke="rgb(27, 164, 207)"
            // fill="rgb(250, 252, 252)"
            // style={{fontSize:"80%"}}
            gap={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
