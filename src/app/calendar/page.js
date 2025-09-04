"use client";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ko } from "date-fns/locale";
import CustomToolbar from "./CustomToolbar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { addDays, subDays } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as DatePickerCalendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import { useModalStore } from "../store/modalStore";

const locales = {
  ko: ko,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

export default function StyleCalendar() {
  // ✅ 실제 구현 시에는 데이터 패칭을 통해 구현 해야 함.
  const [events, setEvents] = useState([
    {
      title: "팀 회의",
      start: new Date(),
      end: new Date(new Date().getTime() + 60 * 60 * 1000),
    },
    {
      title: "디자인 리뷰",
      start: new Date(new Date().setDate(new Date().getDate() + 2)),
      end: new Date(new Date().setDate(new Date().getDate() + 2)),
    },
  ]);

  const {
    isOpen,
    open,
    close,
    selectedDate,
    setDate,
    inputValue,
    setInputValue,
  } = useModalStore();

  const handleAddEvent = () => {
    if (!inputValue || !selectedDate?.from || !selectedDate?.to) return;

    const newEvent = {
      title: inputValue,
      start: selectedDate.from,
      end: addDays(selectedDate.to, 1), // 종료일은 react-big-calendar에 하루 추가
    };

    setEvents((prev) => [...prev, newEvent]);
    setInputValue("");
    setDate(null);
    close();
  };

  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Calendar</h1>

      <div className="h-[1080px] w-full  mx-auto p-4">
        <Calendar
          className="border-t-2 pt-4 border-black"
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView="month"
          views={["month"]}
          style={{ height: "100%" }}
          selectable
          onSelectSlot={({ start, end }) => {
            setDate({
              from: start,
              to: subDays(end, 1), // ✅ react-big-calendar는 'to'가 다음날이므로 하루 빼줌
            });
            open();
          }}
          messages={{
            today: "오늘",
            next: "다음",
            previous: "이전",
            month: "월",
            agenda: "일정",
            date: "날짜",
            time: "시간",
            event: "일정",
            showMore: (count) => `+${count}개 더보기`,
          }}
          components={{
            toolbar: CustomToolbar, //툴바 커스텀 툴바로 변경
          }}
          formats={{
            //한글로 포멧 변경
            monthHeaderFormat: (date) =>
              format(date, "yyyy년 M월", { locale: ko }),
            weekdayFormat: (date) => format(date, "eee", { locale: ko }),
          }}
        />
      </div>

      <Dialog
        open={isOpen}
        onOpenChange={(value) => (value ? open() : close())}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>일정 추가</DialogTitle>
            <DialogDescription>
              개인적인 일정들을 추가해 보세요.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 mt-4">
            <div>
              <div className="font-bold mb-1">일정 내용</div>
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="예: 회의, 출장, 식사 약속 등"
              />
            </div>

            <div>
              <div className="font-bold mb-1">기간</div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outlineDefault"
                    className="w-64 justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
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
                        format(selectedDate.from, "yyyy-MM-dd", { locale: ko })
                      )
                    ) : (
                      <span className="text-muted-foreground">날짜 선택</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto p-0">
                  <DatePickerCalendar
                    mode="range"
                    selected={selectedDate}
                    onSelect={setDate}
                    initialFocus
                    locale={ko}
                    numberOfMonths={2} // 선택사항: 양쪽 달 보기
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="text-sm text-muted-foreground">
              선택한 날짜:{" "}
              {selectedDate?.from && selectedDate?.to
                ? `${format(selectedDate.from, "yyyy년 M월 d일", {
                    locale: ko,
                  })} ~ ${format(selectedDate.to, "yyyy년 M월 d일", {
                    locale: ko,
                  })}`
                : "없음"}
            </div>

            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button variant="dark">닫기</Button>
              </DialogClose>
              <Button variant="default" onClick={handleAddEvent}>
                등록
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
