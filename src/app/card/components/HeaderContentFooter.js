//📌 HeaderContentFooter 컴포넌트
// shadcn UI의 Card 컴포넌트를 사용한 예제

import CodeBlock from "@/app/components/CodeBlock";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge, MoveRight } from "lucide-react";

export function HeaderContentFooter() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">
          Header + Content + Footer Card
        </h2>
        <div className="flex gap-4 flex-wrap">
          <Card>
            <CardHeader>
              <Badge size={20} />
              <CardTitle>카드 제목</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p>카드 본문에 들어갈 내용을 작성하세요.</p>
            </CardContent>
            <CardFooter className="justify-between text-sm text-muted-foreground">
              작성자: 홍길동
              <MoveRight size={18} />
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBlock
          code={[
            "<Card>",
            "  <CardHeader>",
            "    <Badge size={20} />",
            "    <CardTitle>카드 제목</CardTitle>",
            "  </CardHeader>",
            '  <CardContent className="p-6">',
            "    <p>카드 본문에 들어갈 내용을 작성하세요.</p>",
            "  </CardContent>",
            '  <CardFooter className="justify-between text-sm text-muted-foreground">',
            "    작성자: 홍길동",
            "    <MoveRight size={18} />",
            "  </CardFooter>",
            "</Card>",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
