// 📌 DateField 컴포넌트

"use client";

import { useState } from "react";
import { format } from "date-fns";
import CodeBlock from "@/app/components/CodeBlock";
import { Calendar } from "@/components/ui/calendar";

export function DateField() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Calendar</h2>
        <div className="flex gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap flex-col">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(d) => d && setDate(d)}
              className="rounded-lg border"
            />
            <span className="text-sm text-muted-foreground">
              선택한 날짜: {format(date, "yyyy-MM-dd")}
            </span>
          </div>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBlock
          code={[
            "import { format } from 'date-fns'",
            "",
            "export function DateField() {",
            "  const [date, setDate] = useState(new Date());",
            "return(",
            " <Calendar",
            '  mode="single"',
            "  selected={date}",
            "  onSelect={(d) => d && setDate(d)}",
            '  className="rounded-lg border"',
            " />",
            ' <span className="text-sm text-muted-foreground">',
            '   선택한 날짜: {format(date, "yyyy-MM-dd")}',
            " </span>",
            ")",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
