// 📌 RadioGroup 페이지
// - RadioGroup 컴포넌트 사용 예시 및 코드 블록을 포함합니다.

import CodeBlock from "@/app/components/CodeBlock";
import { RadioGroupField } from "./components/RadioGroupField";

// 페이지 메타데이터
export const metadata = {
  title: "RadioGroup",
  description: "RadioGroup",
}

export default function ControlCheckbox() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">RadioGroup Examples</h1>
      <div className="w-fit">
        <CodeBlock
          code={`<RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="space-y-2" >...</RadioGroup>`}
        />
        <p className="text-red-500 text-sm mt-2">* 유효성 검사는 코드 확인</p>
      </div>

      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">RadioGroup</h2>
          <div className="flex gap-4 flex-wrap">
            <RadioGroupField />
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              "<RadioGroup",
              "  onValueChange={field.onChange}",
              "  defaultValue={field.value}",
              '  className="space-y-2"',
              ">",
              '  <div className="flex items-center space-x-2">',
              '    <RadioGroupItem value="option-one" id="option-one" />',
              '    <Label htmlFor="option-one">선택 1</Label>',
              "  </div>",
              '  <div className="flex items-center space-x-2">',
              '    <RadioGroupItem value="option-two" id="option-two" />',
              '    <Label htmlFor="option-two">선택 2</Label>',
              "  </div>",
              "</RadioGroup>",
            ].join("\n")}
          />
        </section>
      </div>
    </div>
  );
}
