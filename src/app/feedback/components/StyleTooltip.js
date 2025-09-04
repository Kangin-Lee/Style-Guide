// 📌 StyleTooltip 컴포넌트

import CodeBlock from "@/app/components/CodeBlock";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function StyleTooltip() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Tooltip</h2>
        <div className="flex gap-4 flex-wrap">
          <Tooltip>
            <TooltipTrigger>Hover</TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBlock
          code={[
            "<Tooltip>",
            "  <TooltipTrigger>Hover</TooltipTrigger>",
            "  <TooltipContent>",
            "    <p>Add to library</p>",
            "  </TooltipContent>",
            "</Tooltip>",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
