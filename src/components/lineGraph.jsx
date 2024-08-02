import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    temp: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    temp: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    temp: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    temp: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    temp: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    temp: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    temp: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const LineGraph = () => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="temp" stroke="#82ca9d" />
    </LineChart>
  );
};

export default LineGraph;
