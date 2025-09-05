// 📌 Pagination 컴포넌트
import CodeBlock from "../components/CodeBlock";
import PaginationComponent from "./components/PaginationComponent";

export const metadata = {
  title: "Pagination",
  description: "Pagination",
}

export default function StylePagenation() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Pagenaion Examples</h1>
      <div className="w-96">
        <CodeBlock
          code={["//npm install", "npx shadcn@latest add pagination"].join(
            "\n"
          )}
        />
      </div>

      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Pagination</h2>
          
          {/* 페이지네이션 컴포넌트 */}
          <PaginationComponent />
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              "<Pagination>",
              "  <PaginationContent>",
              "    <PaginationItem>",
              '      <PaginationPrevious href="#" />',
              "    </PaginationItem>",
              "    <PaginationItem>",
              '      <PaginationLink isActive={true} href="#">',
              "        1",
              "      </PaginationLink>",
              "    </PaginationItem>",
              "    <PaginationItem>",
              '      <PaginationLink href="#">2</PaginationLink>',
              "    </PaginationItem>",
              "    <PaginationItem>",
              '      <PaginationLink href="#">3</PaginationLink>',
              "    </PaginationItem>",
              "    <PaginationItem>",
              "      <PaginationEllipsis />",
              "    </PaginationItem>",
              "    <PaginationItem>",
              '      <PaginationNext href="#" />',
              "    </PaginationItem>",
              "  </PaginationContent>",
              "</Pagination>",
            ].join("\n")}
          />
        </section>
      </div>
    </div>
  );
}
