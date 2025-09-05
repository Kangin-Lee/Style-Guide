// 📌 Form OTP 페이지

import CodeBlock from "@/app/components/CodeBlock";
import { OtpField } from "./components/OtpField";

// 페이지 메타데이터
export const metadata = {
  title: "OTP",
  description: "OTP",
}

export default function FormOTP() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">OTP Examples</h1>
      <div className="w-fit">
        <CodeBlock
          code={`<Textarea placeholder="메시지를 입력하세요" className="w-96 h-32 resize-none" />`}
        />
        <p className="text-red-500 text-sm mt-2">* 유효성 검사는 코드 확인</p>
      </div>

      {/* otp============================================== */}
      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">OTPInput</h2>
          <div className="flex gap-4 flex-wrap">
            <OtpField />
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              "<InputOTP",
              "  maxLength={6}",
              "  value={field.value}",
              "  onChange={field.onChange}",
              ">",
              "  <InputOTPGroup>",
              "    {[0, 1, 2].map((i) => (",
              "      <InputOTPSlot key={i} index={i} />",
              "    ))}",
              "  </InputOTPGroup>",
              "  <InputOTPSeparator />",
              "  <InputOTPGroup>",
              "    {[3, 4, 5].map((i) => (",
              "      <InputOTPSlot key={i} index={i} />",
              "    ))}",
              "  </InputOTPGroup>",
              "</InputOTP>",
            ].join("\n")}
          />
        </section>
      </div>
    </div>
  );
}
