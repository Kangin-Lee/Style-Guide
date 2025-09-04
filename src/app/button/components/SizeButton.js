//📌 SizeButton 컴포넌트

import CodeBlock from "@/app/components/CodeBlock";
import { Button } from "@/components/ui/button";

export function SizeButton() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Size Button</h2>
        <div className="flex gap-4 flex-wrap">
          <Button size="xs">XS Button</Button>
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
          <Button size="xl">XL Button</Button>
          <Button size="full">Full Width Button</Button>
        </div>
      </section>

      {/* Code 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBlock
          code={[
            '<Button size="xs">XS Button</Button>',
            '<Button size="sm">Small Button</Button>',
            '<Button size="md">Medium Button</Button>',
            '<Button size="lg">Large Button</Button>',
            '<Button size="xl">XL Button</Button>',
            '<Button size="full">Full Width Button</Button>',
          ].join("\n")}
        />
      </section>
    </div>
  );
}