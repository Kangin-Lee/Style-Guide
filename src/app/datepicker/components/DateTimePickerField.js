// 📌 DateTimePickerField 컴포넌트

"use client";

import { useState } from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { CalendarIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as DatePickerCalendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import CodeBlock from "@/app/components/CodeBlock";

export function DateRangePickerField() {
  const [selectedDate, setSelectedDate] = useState();

  const handleClear = () => setSelectedDate(undefined);

  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Date Range Picker</h2>
        <div className="flex gap-4 flex-wrap">
          <div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="date" className="px-1">
                기간 선택
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-64 justify-between text-left font-normal border border-input"
                    id="date"
                  >
                    {/* <CalendarIcon className="mr-2 h-4 w-4 shrink-0" /> */}
                    <span className="truncate">
                      {selectedDate?.from ? (
                        selectedDate.to ? (
                          <>
                            {format(selectedDate.from, "yyyy-MM-dd", {
                              locale: ko,
                            })}{" "}
                            ~{" "}
                            {format(selectedDate.to, "yyyy-MM-dd", {
                              locale: ko,
                            })}
                          </>
                        ) : (
                          format(selectedDate.from, "yyyy-MM-dd", {
                            locale: ko,
                          })
                        )
                      ) : (
                        <span className="text-muted-foreground">기간 선택</span>
                      )}
                    </span>
                    <CalendarIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto p-0">
                  <DatePickerCalendar
                    mode="range"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                    locale={ko}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="text-sm text-muted-foreground pt-3">
              선택한 날짜:{" "}
              {selectedDate?.from && selectedDate?.to
                ? `${format(selectedDate.from, "yyyy년 M월 d일", {
                    locale: ko,
                  })} ~ ${format(selectedDate.to, "yyyy년 M월 d일", {
                    locale: ko,
                  })}`
                : "없음"}
            </div>
          </div>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBlock
          code={[
            'import { useState } from "react";',
            'import { format } from "date-fns";',
            'import { ko } from "date-fns/locale";',
            'import { Calendar as DatePickerCalendar } from "@/components/ui/calendar";',
            "",
            "export function DateRangePickerField() {",
            "  const [selectedDate, setSelectedDate] = useState();",
            "",
            "  return (",
            '    <section className="md:w-1/2 w-full">',
            '      <h2 className="text-lg font-semibold mb-4">Date Range Picker</h2>',
            '      <div className="flex gap-4 flex-wrap">',
            "        <div>",
            '          <div className="flex flex-col gap-3">',
            '            <Label htmlFor="date" className="px-1">기간 선택</Label>',
            "            <Popover>",
            "              <PopoverTrigger asChild>",
            "                <Button",
            '                  variant="outline"',
            '                  className="w-64 justify-between text-left font-normal border border-input"',
            '                  id="date"',
            "                >",
            '                  <span className="truncate">',
            "                    {selectedDate?.from ? (",
            "                      selectedDate.to ? (",
            "                        <>",
            "                          {format(selectedDate.from, 'yyyy-MM-dd', { locale: ko })} ~ ",
            "                          {format(selectedDate.to, 'yyyy-MM-dd', { locale: ko })}",
            "                        </>",
            "                      ) : (",
            "                        format(selectedDate.from, 'yyyy-MM-dd', { locale: ko })",
            "                      )",
            "                    ) : (",
            '                      <span className="text-muted-foreground">기간 선택</span>',
            "                    )}",
            "                  </span>",
            "                  <CalendarIcon />",
            "                </Button>",
            "              </PopoverTrigger>",
            '              <PopoverContent align="start" className="w-auto p-0">',
            "                <DatePickerCalendar",
            '                  mode="range"',
            "                  selected={selectedDate}",
            "                  onSelect={setSelectedDate}",
            "                  initialFocus",
            "                  locale={ko}",
            "                  numberOfMonths={2}",
            "                />",
            "              </PopoverContent>",
            "            </Popover>",
            "          </div>",
            '          <div className="text-sm text-muted-foreground pt-3">',
            "            선택한 날짜: {selectedDate?.from && selectedDate?.to",
            "              ? `${format(selectedDate.from, 'yyyy년 M월 d일', { locale: ko })} ~ ${format(selectedDate.to, 'yyyy년 M월 d일', { locale: ko })}`",
            '              : "없음"}',
            "          </div>",
            "        </div>",
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
