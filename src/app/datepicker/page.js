// 📌 DatePicker 페이지
// - DatePicker 컴포넌트 사용 예시 및 코드 블록을 포함합니다.


import CodeBlock from "../components/CodeBlock";
import { DateField } from "./components/DateField";
import { DatePickerField } from "./components/DatePickerField";
import { DateTimePickerField } from "./components/DateRangePickerField";
import { DateRangePickerField } from "./components/DateTimePickerField";



// 페이지 메타데이터
export const metadata = {
  title: "DatePicker - IOPS UI Library",
  description: "IOPS Style Guide - DatePicker",
}

export default function StyleDatePicker() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">DatePicker Examples</h1>
      <div className="w-96">
        <CodeBlock
          code={[
            "//npm install",
            "npx shadcn@latest add calendar",
            "npm i date-fns",
          ].join("\n")}
        />
      </div>

      {/* Date Select */}
      <DateField />

      <DatePickerField />

      {/* Date Time Picker */}
      <DateTimePickerField />

      {/* Date Range Picker */}
      <DateRangePickerField />
    </div>
  );
}
