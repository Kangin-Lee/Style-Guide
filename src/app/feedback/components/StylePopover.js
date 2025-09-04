// 📌 StylePopover 컴포넌트

import CodeBlock from "@/app/components/CodeBlock";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function StylePopover() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Popover</h2>
        <div className="flex gap-4 flex-wrap">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="default">버튼</Button>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBlock
          code={[
            "<Popover>",
            "  <PopoverTrigger asChild>",
            '    <Button variant="default">버튼</Button>',
            "  </PopoverTrigger>",
            "  <PopoverContent>",
            "    Place content for the popover here.",
            "  </PopoverContent>",
            "</Popover>",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
