// 📌 Breadcrumb 페이지
// shadcn UI의 Breadcrumb 컴포넌트를 사용한 예제

import CodeBlock from "../components/CodeBlock";
import BreadcrumbComponent from "./components/BreadcrumbComponent";

// 페이지 메타데이터
export const metadata = {
  title: "Breadcrumb",
  description: "Breadcrumb",
}

export default function Breadcrumb() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Breadcrumb</h1>
      <div className="w-96">
        <CodeBlock code={`<BreadcrumbComponent />`} />
      </div>

      <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Breadcrumb</h2>
          <BreadcrumbComponent />
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              "<Breadcrumb>",
              "  <BreadcrumbList>",
              "    <BreadcrumbItem>",
              "      <BreadcrumbLink asChild>",
              '        <Link href="/">Home</Link>',
              "      </BreadcrumbLink>",
              "    </BreadcrumbItem>",
              "    <BreadcrumbSeparator />",
              "    <BreadcrumbItem>",
              "      <BreadcrumbLink asChild>",
              '        <Link href="/style-guide">Style Guide</Link>',
              "      </BreadcrumbLink>",
              "    </BreadcrumbItem>",
              "    <BreadcrumbSeparator />",
              "    <BreadcrumbItem>",
              "      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>",
              "    </BreadcrumbItem>",
              "  </BreadcrumbList>",
              "</Breadcrumb>",
            ].join("\n")}
          />
        </section>
      </div>
    </div>
  );
}
