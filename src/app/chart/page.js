//📌 Chart 페이지
// Recharts 라이브러리를 사용한 다양한 차트 예제와 코드 블록을 보여줌


import CodeBlock from "../components/CodeBlock";
import StyleAreaChart from "./components/StyleAreaChart";
import StyleBarChart from "./components/StyleBarChart";
import StyleLineBarAreaChart from "./components/StyleLineBarAreaChart";
import StyleLineChart from "./components/StyleLineChart";
import StylePieChart from "./components/StylePieChart";
import StyleRadarChart from "./components/StyleRadarChart";

// 페이지 메타데이터
export const metadata = {
  title: "Chart",
  description: "Chart",
}

export default function StyleChart() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Chart Examples</h1>
      <div className="w-fit">
        <CodeBlock
          code={`<LineChart width={400} height={400} data={data}><Line type="monotone" dataKey="uv" stroke="#c1c1c1"/></LineChart>`}
        />
      </div>

      <StyleLineChart />
      <StyleAreaChart />
      <StyleBarChart/>
      <StyleLineBarAreaChart/>
      <StylePieChart/>
      <StyleRadarChart/>
    </div>
  );
}
