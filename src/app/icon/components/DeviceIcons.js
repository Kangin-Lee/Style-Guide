// 📌 Device Icon 컴포넌트

import CodeBlock from "@/app/components/CodeBlock";
import {
  Smartphone,
  Laptop,
  Moon,
  Sun,
} from "lucide-react";

export function DeviceIcons() {
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Device Icon</h2>
          <div className="flex gap-4 flex-col flex-wrap">
            <div className="flex gap-4">
              <Smartphone />
              <Laptop />
              <Moon />
              <Sun />
            </div>
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              "<Smartphone />  <Laptop />  <Moon />  <Sun /> ",
            ].join("\n")}
          />
        </section>
      </div>
    </div>
  );
}
