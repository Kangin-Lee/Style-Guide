// 📌 Basic Structure Grid 컴포넌트

import CodeBlock from "@/app/components/CodeBlock";

export default function ResponsiveGrid() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Responsive Grid</h2>

        <section className="bg-amber-400 p-3">
            <p className="mb-2">{"className = 'grid grid-cols-12 gap-4'"}</p>
          <div className="grid grid-cols-12 gap-4">
            <div className="bg-red-200 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 p-4 text-center">
              1
            </div>
            <div className="bg-blue-200 col-span-12 sm:col-span-6 md:col-span-8 lg:col-span-3 p-4 text-center">
              2
            </div>
            <div className="bg-green-200 col-span-12 lg:col-span-7 p-4 text-center">
              3
            </div>
          </div>
        </section>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBlock
          code={[
            '<div className="grid grid-cols-12 gap-4">',
            '  <div className="bg-red-200 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 p-4 text-center">1</div>',
            '  <div className="bg-blue-200 col-span-12 sm:col-span-6 md:col-span-8 lg:col-span-3 p-4 text-center">2</div>',
            '  <div className="bg-green-200 col-span-12 lg:col-span-7 p-4 text-center">3</div>',
            "</div>",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
