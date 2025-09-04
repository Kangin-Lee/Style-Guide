// 📌 Form Input 페이지
// shadcn UI의 Input 컴포넌트를 사용한 예제와 코드 블록을 보여줌

import CodeBlock from "@/app/components/CodeBlock";
import { TextField } from "./components/TextField";
import { PasswordField } from "./components/PasswordField";
import { EmailField } from "./components/EmailField";
import { NumberField } from "./components/NumberField";
import { PhoneField } from "./components/PhoneField";

// 페이지 메타데이터
export const metadata = {
  title: "Input - IOPS UI Library",
  description: "IOPS Style Guide - Input",
}

export default function FormInput() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Input Examples</h1>
      <div className="w-fit">
        <CodeBlock
          code={`<Input placeholder="텍스트를 입력하세요" className="w-96" />`}
        />
        <p className="text-red-500 text-sm mt-2">* 유효성 검사는 코드 확인</p>
      </div>

      {/* 텍스트============================================== */}
      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">TextInput</h2>
          <div className="flex gap-4 flex-wrap">
            <TextField />
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              '<Input placeholder="텍스트를 입력하세요" className="w-96" />',
            ].join("\n")}
          />
        </section>
      </div>
      {/* 텍스트============================================== */}

      {/* 비밀번호============================================== */}
      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">PasswordInput</h2>
          <div className="flex gap-4 flex-wrap">
            <PasswordField />
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              '<Input type="password" placeholder="비밀번호를 입력하세요" className="w-96" />',
            ].join("\n")}
          />
        </section>
      </div>
      {/* 비밀번호============================================== */}

      {/* 이메일============================================== */}
      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">EmailInput</h2>
          <div className="flex gap-4 flex-wrap">
            <EmailField />
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              '<Input type="email" placeholder="이메일을 입력하세요" className="w-96" />',
            ].join("\n")}
          />
        </section>
      </div>
      {/* 이메일============================================== */}

      {/* 숫자============================================== */}
      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">NumberInput</h2>
          <div className="flex gap-4 flex-wrap">
            <NumberField />
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              '<Input type="number" placeholder="숫자를 입력하세요" className="w-96" />',
            ].join("\n")}
          />
        </section>
      </div>
      {/* 숫자============================================== */}

      {/* 휴대폰============================================== */}
      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">PhoneInput</h2>
          <div className="flex gap-4 flex-wrap">
            <PhoneField />
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              '<Input type="number" placeholder="휴대폰 번호를 입력하세요" className="w-96" /> //자세한 코드 확인 필요',
            ].join("\n")}
          />
        </section>
      </div>
      {/* 휴대폰============================================== */}
    </div>
  );
}
