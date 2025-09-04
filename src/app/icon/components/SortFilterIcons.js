// 📌 Sort/Filter Icon 컴포넌트

import CodeBlock from "@/app/components/CodeBlock";
import {
  Filter,
  SortAsc,
  SortDesc,
} from "lucide-react";

export function SortFilterIcons() {
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">SortFilter Icon</h2>
          <div className="flex gap-4 flex-col flex-wrap">
            <div className="flex gap-4">
              <Filter />
              <SortAsc />
              <SortDesc />
            </div>
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              "<Filter />  <SortAsc />  <SortDesc />",
            ].join("\n")}
          />
        </section>
      </div>
    </div>
  );
}
