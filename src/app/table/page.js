// 📌 Table 컴포넌트

import CodeBlock from "../components/CodeBlock";
import { ReactTable } from "./components/ReactTable";

// 페이지 메타데이터
export const metadata = {
  title: "Table",
  description: "Table",
}

export default function StyleTable() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Table Examples</h1>
      <div className="w-fit">
        <CodeBlock
          code={[
            "//npm install",
            "npx shadcn@latest add table",
            "npm install @tanstack/react-table",
          ].join("\n")}
        />
        <p className="text-sm text-red-500 mt-2">
            {"※ 'use client'가 선언된 클라이언트 컴포넌트에서는 next/fetch보다@tanstack/react-query를 사용하는 것이 훨씬 더 적절하고 실용적 "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">
            Shadcn/ui Table + React Table
          </h2>
          <div className="flex gap-4 flex-wrap">
            <ReactTable />
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              "<Table>",
              "  <TableHeader>",
              "    <TableRow>",
              '      <TableHead className="hidden sm:table-cell w-[100px]">ID</TableHead>',
              '      <TableHead className="w-[100px]">Invoice</TableHead>',
              '      <TableHead className="hidden sm:table-cell">Status</TableHead>',
              '      <TableHead className="hidden sm:table-cell">Method</TableHead>',
              '      <TableHead className="hidden sm:table-cell">Date</TableHead>',
              '      <TableHead className="hidden sm:table-cell text-right">Amount</TableHead>',
              '      <TableHead className="sm:hidden text-right">상세보기</TableHead>',
              "    </TableRow>",
              "  </TableHeader>",
              "",
              "  <TableBody>",
              "    {user.map((user, index) => (",
              "      <TableRow",
              "        key={index}",
              '        className="sm:table-row block border-b sm:border-0"',
              "      >",
              '        <TableCell className="hidden sm:table-cell">{user.id}</TableCell>',
              "        <TableCell>{user.invoice}</TableCell>",
              '        <TableCell className="hidden sm:table-cell">{user.status}</TableCell>',
              '        <TableCell className="hidden sm:table-cell">{user.method}</TableCell>',
              '        <TableCell className="hidden sm:table-cell">{user.date}</TableCell>',
              '        <TableCell className="hidden sm:table-cell text-right">{user.amount}</TableCell>',
              "      </TableRow>",
              "  </TableBody>",
              "</Table>",
            ].join("\n")}
          />
        </section>
      </div>
    </div>
  );
}
