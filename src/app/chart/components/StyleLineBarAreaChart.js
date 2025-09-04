"use client";

import CodeBlock from "@/app/components/CodeBlock";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];

export default function StyleLineBarAreaChart() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Line + Bar + Area Chart</h2>
        <div className="flex gap-4 flex-wrap">
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="amt"
                  fill="#8884d8"
                  stroke="#8884d8"
                />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                <Scatter dataKey="cnt" fill="red" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBlock
          code={[
            '<ResponsiveContainer width="100%" height="100%">',
            "  <ComposedChart width={500} height={400} data={data}",
            "    margin={{ top: 20, right: 20, bottom: 20, left: 20, }}",
            "  >",
            '    <CartesianGrid stroke="#f5f5f5" />',
            '    <XAxis dataKey="name" scale="band" />',
            "    <YAxis />",
            "    <Tooltip />",
            "    <Legend />",
            '    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />',
            '    <Bar dataKey="pv" barSize={20} fill="#413ea0" />',
            '    <Line type="monotone" dataKey="uv" stroke="#ff7300" />',
            '    <Scatter dataKey="cnt" fill="red" />',
            "  </ComposedChart>",
            "</ResponsiveContainer>",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
