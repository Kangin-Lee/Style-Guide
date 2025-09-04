// 📌 Slider 컴포넌트

import CodeBlock from "../components/CodeBlock";
import { SliderComponent } from "./components/SliderComponent";

export const metadata = {
  title: "Slider - IOPS UI Library",
  description: "IOPS Style Guide - Slider",
}

export default function StyleSlider() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Slider Examples</h1>
      <div className="w-96">
        <CodeBlock code={`<Slider defaultValue={[40]} max={100} step={1} />`} />
      </div>

      <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
        {/* Preview 영역 */}
        <SliderComponent />

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={["<Slider defaultValue={[40]} max={100} step={1} />"].join(
              "\n"
            )}
          />
        </section>
      </div>
    </div>
  );
}
