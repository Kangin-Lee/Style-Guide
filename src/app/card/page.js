//📌 Card 페이지
// shadcn UI의 Card 컴포넌트를 사용한 예제와 코드 블록을 보여줌

// 페이지 메타데이터
export const metadata = {
  title: "Card - IOPS UI Library",
  description: "IOPS Style Guide - Card",
}

import CodeBlock from "../components/CodeBlock";
import { ContentCard } from "./components/ContentCard";
import { ContentFooterCard } from "./components/ContentFooterCard";
import { HeaderContentCard } from "./components/HeaderContentCard";
import { HeaderContentFooter } from "./components/HeaderContentFooter";

export default function StyleCard() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Card Examples</h1>
      <div className="w-fit">
        <CodeBlock code={`<Card><CardContent>카드내용</CardContent></Card>`} />
      </div>

      <ContentCard />

      <HeaderContentCard />

      <ContentFooterCard />

      <HeaderContentFooter />
    </div>
  );
}
