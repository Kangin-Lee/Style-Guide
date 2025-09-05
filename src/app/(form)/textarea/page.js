// 📌 Form TextArea 페이지

import CodeBlock from "@/app/components/CodeBlock";
import { TextAreaField } from "./components/TextAreaField";

// 페이지 메타데이터
export const metadata = {
  title: "TextArea",
  description: "TextArea",
}

export default function FormTextArea() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">TextArea Examples</h1>
      <div className="w-fit">
        <CodeBlock
          code={`<Textarea placeholder="메시지를 입력하세요" className="w-96 h-32 resize-none" />`}
        />
        <p className="text-red-500 text-sm mt-2">* 유효성 검사는 코드 확인</p>
      </div>

      {/* 텍스트에어리아============================================== */}
      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">TextAreaInput</h2>
          <div className="flex gap-4 flex-wrap">
            <TextAreaField />
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              '<Textarea placeholder="메시지를 입력하세요" className="w-96 h-32 resize-none" />',
            ].join("\n")}
          />
        </section>
      </div>
    </div>
  );
}
