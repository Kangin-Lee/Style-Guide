// 📌 Tabs 컴포넌트

import CodeBlock from "../components/CodeBlock";
import { TabsComponent } from "./components/TabsComponent";

// 페이지 메타데이터
export const metadata = {
  title: "Tabs",
  description: "Tabs",
}

export default function StyleTabs() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Tabs Examples</h1>
      <div className="w-96">
        <CodeBlock
          code={["//npm install", "npx shadcn@latest add tabs"].join("\n")}
        />
      </div>

      {/* tabs example */}
      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Tabs</h2>
            <TabsComponent/>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              '<Tabs defaultValue="tab1" className="w-full">',
              "  <TabsList>",
              '    <TabsTrigger value="tab1">첫번째 탭</TabsTrigger>',
              '    <TabsTrigger value="tab2">두번째 탭</TabsTrigger>',
              '    <TabsTrigger value="tab3">세번째 탭</TabsTrigger>',
              '    <TabsTrigger value="tab4">네번째 탭</TabsTrigger>',
              "  </TabsList>",
              '  <TabsContent value="tab1" className="p-5">',
              "    첫번째 탭",
              "  </TabsContent>",
              '  <TabsContent value="tab2" className="p-5">',
              "    두번째 탭",
              "  </TabsContent>",
              '  <TabsContent value="tab3" className="p-5">',
              "    세번째 탭",
              "  </TabsContent>",
              '  <TabsContent value="tab4" className="p-5">',
              "    네번째 탭",
              "  </TabsContent>",
              "</Tabs>",
            ].join("\n")}
          />
        </section>
      </div>
    </div>
  );
}
