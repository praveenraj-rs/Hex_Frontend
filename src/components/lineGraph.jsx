import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "7:00",
    temp: 32,
    atmtemp: 33.3,
    amt: 2400,
  },
  {
    name: "7:30",
    temp: 33,
    atmtemp: 34,
    amt: 2210,
  },
  {
    name: "8:00",
    temp: 33,
    atmtemp: 36,
    amt: 2290,
  },
  {
    name: "8:30",
    temp: 31,
    atmtemp: 34.5,
    amt: 2000,
  },
  {
    name: "9:00",
    temp: 32,
    atmtemp: 36,
    amt: 2181,
  },
  {
    name: "9:30",
    temp: 30,
    atmtemp: 38,
    amt: 2500,
  },
  {
    name: "10:00",
    temp: 28,
    atmtemp: 34,
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
      <YAxis
        label={{
          value: `Temperature °C`,

          style: { textAnchor: "middle" },
          angle: -90,
          position: "left",
          offset: 0,
        }}
      />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="atmtemp"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="temp" stroke="#82ca9d" />
    </LineChart>
  );
};

export default LineGraph;
