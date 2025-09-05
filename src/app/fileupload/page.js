// 📌 FileUpload 페이지


import CodeBlock from "../components/CodeBlock";
import MultileFileUpload from "./components/MultileFileUpload";
import SingleFileUpload from "./components/SingleFileUpload";

// 페이지 메타데이터
export const metadata = {
  title: "FileUpload",
  description: "FileUpload",
}

export default function FileUpload() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">FileUpload Examples</h1>

      <div className="w-fit">
        <CodeBlock
          code={`<Input type='file' accept='.pdf,.hwp,.docx,.ppt'  />`}
        />
        <p className="text-red-500 text-sm mt-2">* 유효성 검사는 코드 확인</p>
      </div>

      {/* 싱글 파일 업로드================================= */}
      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">SingleFileUpload</h2>
          <div className="flex gap-4 flex-wrap">
            <SingleFileUpload />
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              "<Input ref={inputRef} type='file' accept='.pdf,.hwp,.docx,.ppt' onChange={handleChange} />",
            ].join("\n")}
          />
        </section>
      </div>
      {/* 싱글 파일 업로드================================= */}

      {/* 멀티 파일 업로드 ========================================== */}
      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">MultileFileUpload</h2>
          <div className="flex gap-4 flex-wrap">
            <MultileFileUpload />
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              "<Input ref={inputRef} multiple type='file' accept='.pdf,.hwp,.docx,.ppt' onChange={handleChange} />",
            ].join("\n")}
          />
        </section>
      </div>
      {/* 멀티 파일 업로드 ========================================== */}
    </div>
  );
}
