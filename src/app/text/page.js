// 📌 Text 스타일 가이드 페이지
import CodeBlock from "../components/CodeBlock";
import { FontName } from "./components/FontName";
import { TextSize } from "./components/TextSize";
import { TextWeigth } from "./components/TextWeigth";

// 페이지 메타데이터
export const metadata = {
  title: "Text - IOPS UI Library",
  description: "IOPS Style Guide - Text",
}

export default function StyleText() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Text Examples</h1>
      <div className="w-96">
        <CodeBlock
          code={[
            "//pretendard download",
            "https://noonnu.cc/font_page/694",
          ].join("\n")}
        />
      </div>

      {/* Font */}
      <FontName />

      {/* Text Size */}
      <TextSize />

      {/* Text Weight */}
      <TextWeigth />
    </div>
  );
}
