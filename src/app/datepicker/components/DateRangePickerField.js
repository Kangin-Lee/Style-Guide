// 📌 DateTimePickerField 컴포넌트

"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { format } from "date-fns";
import CodeBlock from "@/app/components/CodeBlock";

export function DateTimePickerField() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(undefined);
  const [time, setTime] = useState("00:00");

  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Date Time Picker</h2>
        <div className="flex flex-col gap-4 flex-wrap">
          <div className="flex gap-4">
            <div className="flex flex-col gap-3">
              <Label htmlFor="date" className="px-1">
                날짜
              </Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date"
                    className="w-48 justify-between font-normal border-input border"
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
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="time" className="px-1">
                시간
              </Label>
              <Input
                type="time"
                id="time"
                step="60" //초까지 보고싶으면 1로 설정정
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              />
            </div>
          </div>
          <span className="text-sm text-muted-foreground block">
            선택한 일시:{" "}
            {date ? `${format(date, "yyyy-MM-dd")} ${time}` : "없음"}
          </span>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBlock
          code={[
            'import { useState } from "react";',
            'import { format } from "date-fns";',
            "",
            "export function DateTimePickerField() {",
            "  const [open, setOpen] = useState(false);",
            "  const [date, setDate] = useState(undefined);",
            '  const [time, setTime] = useState("00:00");',
            "",
            "  return (",
            '    <section className="md:w-1/2 w-full">',
            '      <h2 className="text-lg font-semibold mb-4">Color Badge</h2>',
            '      <div className="flex flex-col gap-4 flex-wrap">',
            '        <div className="flex gap-4">',
            '          <div className="flex flex-col gap-3">',
            '            <Label htmlFor="date" className="px-1">날짜</Label>',
            "            <Popover open={open} onOpenChange={setOpen}>",
            "              <PopoverTrigger asChild>",
            "                <Button",
            '                  variant="outline"',
            '                  id="date"',
            '                  className="w-48 justify-between font-normal border-input border"',
            "                >",
            "                  {date ? (",
            "                    date.toLocaleDateString()",
            "                  ) : (",
            '                    <span className="text-muted-foreground">날짜 선택</span>',
            "                  )}",
            "                  <CalendarIcon />",
            "                </Button>",
            "              </PopoverTrigger>",
            '              <PopoverContent className="w-auto overflow-hidden p-0" align="start">',
            "                <Calendar",
            '                  mode="single"',
            "                  selected={date}",
            '                  captionLayout="dropdown"',
            "                  onSelect={(date) => {",
            "                    setDate(date);",
            "                    setOpen(false);",
            "                  }}",
            "                />",
            "              </PopoverContent>",
            "            </Popover>",
            "          </div>",
            '          <div className="flex flex-col gap-3">',
            '            <Label htmlFor="time" className="px-1">시간</Label>',
            "            <Input",
            '              type="time"',
            '              id="time"',
            '              step="60"',
            "              value={time}",
            "              onChange={(e) => setTime(e.target.value)}",
            '              className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"',
            "            />",
            "          </div>",
            "        </div>",
            '        <span className="text-sm text-muted-foreground block">',
            '          선택한 일시: {date ? `${format(date, "yyyy-MM-dd")} ${time}` : "없음"}',
            "        </span>",
            "      </div>",
            "    </section>",
            "  );",
            "}",
          ].join("\n")}
        />
      </section>
    </div>
  );
}
