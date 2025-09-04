// 📌 TextSize 컴포넌트

import CodeBlock from "@/app/components/CodeBlock";

export function TextSize() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Text Size</h2>
        <div className="flex gap-4 flex-wrap">
          <div className="flex gap-6 flex-wrap text-lg items-end text-center">
            <div>
              <p className="text-xs">프리탠다드 폰트입니다.</p>
              <p>text-xs</p>
            </div>

            <div>
              <p className="text-sm">프리탠다드 폰트입니다.</p>
              <p>text-sm</p>
            </div>

            <div>
              <p className="text-base">프리탠다드 폰트입니다.</p>
              <p>text-base</p>
            </div>

            <div>
              <p className="text-lg">프리탠다드 폰트입니다.</p>
              <p>text-lg</p>
            </div>

            <div>
              <p className="text-xl">프리탠다드 폰트입니다.</p>
              <p>text-xl</p>
            </div>

            <div>
              <p className="text-2xl">프리탠다드 폰트입니다.</p>
              <p>text-2xl</p>
            </div>

            <div>
              <p className="text-3xl">프리탠다드 폰트입니다.</p>
              <p>text-3xl</p>
            </div>

            <div>
              <p className="text-4xl">프리탠다드 폰트입니다.</p>
              <p>text-4xl</p>
            </div>
          </div>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBlock
          code={[
            "<p className='text-xs'>프리탠다드 폰트입니다.</p>",
            "<p className='text-sm'>프리탠다드 폰트입니다.</p>",
            "<p className='text-base'>프리탠다드 폰트입니다.</p>",
            "<p className='text-lg'>프리탠다드 폰트입니다.</p>",
            "<p className='text-xl'>프리탠다드 폰트입니다.</p>",
            "<p className='text-2xl'>프리탠다드 폰트입니다.</p>",
            "<p className='text-3xl'>프리탠다드 폰트입니다.</p>",
            "<p className='text-4xl;'>프리탠다드 폰트입니다.</p>",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
