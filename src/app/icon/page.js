// 📌 Icon 컴포넌트

import CodeBlock from "../components/CodeBlock";
import Link from "next/link";
import { CommonIcons } from "./components/CommonIcons";
import { UserIcons } from "./components/UserIcons";
import { ContentIcons } from "./components/ContentIcons";
import { StateInteractionIcons } from "./components/StateInteractionIcons";
import { SystemIcons } from "./components/SystemIcons";
import { DeviceIcons } from "./components/DeviceIcons";
import { SortFilterIcons } from "./components/SortFilterIcons";

// 페이지 메타데이터
export const metadata = {
  title: "Icon",
  description: "Icon",
}

export default function StylesIcon() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Icon</h1>
      <div className="w-96">
        <CodeBlock
          code={[
            "//npm install",
            "npm install lucide-react //shadcn 컴포넌트 설치 시 자동 설치됨",
          ].join("\n")}
        />
        <Link
          href="https://lucide.dev/icons/"
          className="underline text-[var(--color-font-gray)] text-sm"
        >
          https://lucide.dev/icons/
        </Link>
      </div>

      <CommonIcons />
      <UserIcons />
      <ContentIcons />
      <StateInteractionIcons />
      <SystemIcons />
      <DeviceIcons />
      <SortFilterIcons />
    </div>
  );
}
