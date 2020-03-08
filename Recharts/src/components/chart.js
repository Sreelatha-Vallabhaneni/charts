import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line, Brush, ReferenceLine
} from "recharts";
//import sampleData from '../data/sampleData.json';
import shiso from './lettuce.json';


const Chart = () => {
  return (
    <div>
      <h2 style={{ textAlign: "left" }}>TEMPERATURE (°C)</h2>
      <button>
        <ResponsiveContainer width={"100%"} height={400}>
          <LineChart
            data={shiso}
            margin={{ top: 5, right: 40, left: 20, bottom: 10 }}
          >
            <XAxis
              stroke="white"
              dataKey="timestamp"
              domain={["dataMin", "dataMax"]}
              //interval={0}
              tick={{ fontSize: 10, fill: "blue", strokeWidth: 2 }}
              angle={30}
            ></XAxis>
            <YAxis
              //dataKey="temp"
              stroke="white"
              type="number"
              domain={["dataMin", "dataMax"]}
              tick={{ fontSize: 10, fill: "blue", strokeWidth: 2 }}
              // ticks={[0, 5, 10, 15, 20, 25, 30]}
            ></YAxis>
            <Tooltip />
            <ReferenceLine y={17} stroke="green" strokeWidth={2} />
            <ReferenceLine y={20} stroke="blue" strokeWidth={1} />
            <ReferenceLine y={24} stroke="red" strokeWidth={1} />
            <Line
              dataKey="temp"
              name="Temperature"
              unit={"°C"}              
              fill="blue"
              type={"natural"}
              strokeWidth={2}
            />
            <Brush />
          </LineChart>
        </ResponsiveContainer>
      </button>
    </div>
  );
};

export default Chart;
