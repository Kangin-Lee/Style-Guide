// 📌 Toggle 페이지
// - Toggle 컴포넌트 사용 예시 및 코드 블록을 포함합니다.

import { ToggleField } from "./components/ToggleField";
import { SwitchField } from "./components/SwitchField";
import CodeBlock from "@/app/components/CodeBlock";

// 페이지 메타데이터
export const metadata = {
  title: "Toggle - IOPS UI Library",
  description: "IOPS Style Guide - Toggle",
}

export default function ControlToggle() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Toggle Examples</h1>
      <div className="w-fit">
        <CodeBlock
          code={`<Checkbox checked={field.value} onCheckedChange={field.onChange} />`}
        />
        <p className="text-red-500 text-sm mt-2">* 유효성 검사는 코드 확인</p>
      </div>

      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Toggle</h2>
          <div className="flex gap-4 flex-wrap">
            <ToggleField />
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock code={["<Toggle>Toggle</Toggle>"].join("\n")} />
        </section>
      </div>

      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Switch</h2>
          <div className="flex gap-4 flex-wrap">
            <SwitchField />
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock code={[`<Switch checked={field.value} onCheckedChange={field.onChange} id="agree" />`].join("\n")} />
        </section>
      </div>
    </div>
  );
}
