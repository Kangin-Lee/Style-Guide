// 📌 Basic Structure Grid 컴포넌트

import CodeBlock from "@/app/components/CodeBlock";

export function BasicStructureGrid() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Basic Structure Grid</h2>
        <div className="flex flex-col gap-4 flex-wrap">
          <section className="bg-amber-400 p-3">
            <p className="mb-2">{"className = 'grid gap-4'"}</p>

            <div className="grid gap-4 text-center">
              <div className="bg-gray-200">1</div>
              <div className="bg-gray-200">2</div>
              <div className="bg-gray-200">3</div>
            </div>
          </section>

          <hr />

          <section className="bg-amber-400 p-3">
            <p className="mb-2">{"className = 'grid grid-cols-12 gap-4'"}</p>

            <div className="grid grid-cols-12 gap-4 text-center">
              <div className="bg-red-200 col-span-4">col-span-4</div>
              <div className="bg-blue-300 col-span-4">col-span-4</div>
              <div className="bg-yellow-200 col-span-4">col-span-4</div>
            </div>
          </section>

          <hr />

          <section className="bg-amber-400 p-3">
            <p className="mb-2">{"className = 'grid grid-cols-12 gap-4'"}</p>
            <div className="grid grid-cols-12 gap-4 text-center">
              <div className="bg-red-200 col-span-2">col-span-2</div>
              <div className="bg-blue-300 col-span-3">col-span-3</div>
              <div className="bg-yellow-200 col-span-7">col-span-7</div>
            </div>
          </section>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBlock
          code={[
            '<div className="grid gap-4">',
            '  <div className="bg-gray-200">1</div>',
            '  <div className="bg-gray-200">2</div>',
            '  <div className="bg-gray-200">3</div>',
            "</div>",
            "=================================================================",
            '<div className="grid grid-cols-12 gap-4">',
            '  <div className="bg-red-200 col-span-4">col-span-4</div>',
            '  <div className="bg-blue-300 col-span-4">col-span-4</div>',
            '  <div className="bg-yellow-200 col-span-4">col-span-4</div>',
            "</div>",
            "=================================================================",
            '<div className="grid grid-cols-12 gap-4">',
            '  <div className="bg-red-200 col-span-2">col-span-2</div>',
            '  <div className="bg-blue-300 col-span-3">col-span-3</div>',
            '  <div className="bg-yellow-200 col-span-7">col-span-7</div>',
            "</div>",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
