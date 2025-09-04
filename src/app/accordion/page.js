// 📌 Accordion 페이지
// shadcn UI의 Accordion 컴포넌트를 사용한 예제와 코드 블록을 보여줌

import CodeBlock from "@/app/components/CodeBlock";
import AccordionComponent from "./components/AccordionComponent";

// 페이지 메타데이터
export const metadata = {
  title: "Accordion - IOPS UI Library",
  description: "IOPS Style Guide - Accordion",
}

export default function StyleAccordion() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Accordion Examples</h1>
      <div className="w-96">
        <CodeBlock
          code={["//npm install", "npx shadcn@latest add accordion"].join("\n")}
        />
      </div>

      {/* accordion */}
      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Accordion</h2>
          <div className="flex gap-4 flex-wrap">
            <AccordionComponent />
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              "<Accordion",
              '  type="single" //여러개를 열고 싶다면 multiple로 수정',
              '  collapsible="true"',
              '  className="w-full"',
              ">",
              '  <AccordionItem value="item-1">',
              "    <AccordionTrigger>첫번째 탭</AccordionTrigger>",
              '    <AccordionContent className="flex flex-col gap-4 text-balance">',
              "      <p>첫번째 탭입니다.</p>",
              "    </AccordionContent>",
              "  </AccordionItem>",
              '  <AccordionItem value="item-2">',
              "    <AccordionTrigger>두번째 탭</AccordionTrigger>",
              '    <AccordionContent className="flex flex-col gap-4 text-balance">',
              "      <p>두번째 탭입니다.</p>",
              "    </AccordionContent>",
              "  </AccordionItem>",
              '  <AccordionItem value="item-3">',
              "    <AccordionTrigger>세번째 탭</AccordionTrigger>",
              '    <AccordionContent className="flex flex-col gap-4 text-balance">',
              "      <p>세번째 탭입니다.</p>",
              "    </AccordionContent>",
              "  </AccordionItem>",
              "</Accordion>",
            ].join("\n")}
          />
        </section>
      </div>
    </div>
  );
}
