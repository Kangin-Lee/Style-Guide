
//📌 ColorButton 컴포넌트

import CodeBlock from "@/app/components/CodeBlock";
import { Button } from "@/components/ui/button";

export function ColorButton() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Color Button</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="dark">dark</Button>
          <Button variant="blueGray">blueGray</Button>
          <Button variant="info">info</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBlock
          code={[
        '<Button variant="default">Default</Button>',
        '<Button variant="secondary">Secondary</Button>',
        '<Button variant="success">Success</Button>',
        '<Button variant="warning">Warning</Button>',
        '<Button variant="dark">dark</Button>',
        '<Button variant="blueGray">blueGray</Button>',
        '<Button variant="info">info</Button>',
        '<Button variant="link">Link</Button>',
          ].join("\n")}
        />
      </section>
    </div>
  );
}
