import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 400,
    pv: 240,
    amt: 240
  },
  {
    name: "Page B",
    uv: 300,
    pv: 139,
    amt: 221
  },
  {
    name: "Page C",
    uv: 200,
    pv: 980,
    amt: 229
  },
  {
    name: "Page D",
    uv: 278,
    pv: 390,
    amt: 200
  },
  {
    name: "Page E",
    uv: 189,
    pv: 480,
    amt: 218
  },
  {
    name: "Page F",
    uv: 239,
    pv: 380,
    amt: 250
  },
  {
    name: "Page G",
    uv: 349,
    pv: 430,
    amt: 210
  }
];

export default function App() {
  return (
    <BarChart
      width={800}
      height={500}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="pv" fill="#FF7A00" background={{ fill: "#eee" }} />
    </BarChart>
  );
}
