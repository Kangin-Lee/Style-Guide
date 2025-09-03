// 📌 AccordionComponent 컴포넌트
// shadcn UI의 Accordion 컴포넌트를 사용한 예제

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionComponent() {
  return (
    <Accordion
      type="single" //여러개를 열고 싶다면 multiple로 수정
      collapsible="true"
      className="w-full"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>첫번째 탭</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>첫번째 탭입니다.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>두번째 탭</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>두번째 탭입니다.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>세번째 탭</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>세번째 탭입니다.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
