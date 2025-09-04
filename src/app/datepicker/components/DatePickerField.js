// 📌 DatePickerField 컴포넌트

"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { format } from "date-fns";
import CodeBlock from "@/app/components/CodeBlock";

export function DatePickerField() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(undefined);

  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Date Picker</h2>
        <div className="flex flex-col gap-3">
          <Label htmlFor="date" className="px-1">
            날짜 선택
          </Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date"
                className="w-48 justify-between font-normal border border-input"
              >
                {date ? (
                  date.toLocaleDateString()
                ) : (
                  <span className="text-muted-foreground">날짜 선택</span>
                )}
                <CalendarIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setDate(date);
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
          <span className="text-sm text-muted-foreground">
            선택한 날짜: {date ? format(date, "yyyy-MM-dd") : "없음"}
          </span>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBlock
          code={[
            'import { format } from "date-fns";',
            "",
            "export function DatePickerField() {",
            "  const [open, setOpen] = useState(false);",
            "  const [date, setDate] = useState(undefined);",
            "",
            "  return (",
            "    <Popover open={open} onOpenChange={setOpen}>",
            "      <PopoverTrigger asChild>",
            "        <Button",
            '          variant="outline"',
            '          id="date"',
            '          className="w-48 justify-between font-normal border border-input"',
            "        >",
            "          {date ? (",
            "            date.toLocaleDateString()",
            "          ) : (",
            '            <span className="text-muted-foreground">날짜 선택</span>',
            "          )}",
            "          <CalendarIcon />",
            "        </Button>",
            "      </PopoverTrigger>",
            '      <PopoverContent className="w-auto overflow-hidden p-0" align="start">',
            "        <Calendar",
            '          mode="single"',
            "          selected={date}",
            '          captionLayout="dropdown"',
            "          onSelect={(date) => {",
            "            setDate(date);",
            "            setOpen(false);",
            "          }}",
            "        />",
            "      </PopoverContent>",
            "    </Popover>",
            '    <span className="text-sm text-muted-foreground">',
            '      선택한 날짜: {date ? format(date, "yyyy-MM-dd") : "없음"}',
            "    </span>",
            "  );",
            "}",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
