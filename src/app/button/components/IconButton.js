
//📌 IconButton 컴포넌트

import CodeBlock from "@/app/components/CodeBlock";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Loader2, Mail } from "lucide-react";

export function IconButton() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Icon Button</h2>
        <div className="flex gap-4 flex-wrap items-center">
          <Button>
            <Mail className="mr-2" />
            메일 보내기
          </Button>

          <Button>
            다음 단계
            <ArrowRight className="ml-2" />
          </Button>

          <Button size="icon">
            <CheckCircle />
          </Button>

          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            처리 중...
          </Button>
        </div>
      </section>

      {/* Code 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBlock
          code={[
            "<Button>",
            '  <Mail className="mr-2" />',
            "  메일 보내기",
            "</Button>",
            "<Button>",
            "  다음 단계",
            '  <ArrowRight className="ml-2" />',
            "</Button>",
            '<Button size="icon">',
            "  <CheckCircle />",
            "</Button>",
            "<Button disabled>",
            '  <Loader2 className="mr-2 h-4 w-4 animate-spin" />',
            "  처리 중...",
            "</Button>",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
