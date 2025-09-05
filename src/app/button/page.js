//📌 Button 페이지
// shadcn UI의 Button 컴포넌트를 사용한 예제와 코드 블록을 보여줌

// 페이지 메타데이터
export const metadata = {
  title: "Button",
  description: "Button",
}

import { ColorButton } from "./components/ColorButton";
import { LineColorButton } from "./components/LineColorButton";
import { SizeButton } from "./components/SizeButton";
import { IconButton } from "./components/IconButton";
import { RoundedButton } from "./components/RoundedButton";
import CodeBlock from "../components/CodeBlock";

export default function ButtonPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Button Examples</h1>
      <div className="w-fit">
        <CodeBlock
          code={`<Button variant="secondary" size="sm" rounded="md">Default</Button>`}
        />
      </div>

      {/* Color Variants */}
      <ColorButton />

      {/* Line Variants */}
      <LineColorButton />

      {/* Size Variants */}
      <SizeButton/>

      {/* Icon Buttons */}
      <IconButton/>

      {/* Outline + Rounded Buttons */}
      <RoundedButton/>
    </div>
  );
}
