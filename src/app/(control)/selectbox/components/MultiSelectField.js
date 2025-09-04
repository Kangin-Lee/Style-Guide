"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Command,
  CommandItem,
  CommandInput,
  CommandList,
  CommandEmpty,
} from "@/components/ui/command";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { X, CircleAlert, CircleMinus } from "lucide-react";
import { useEffect, useState } from "react";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { useMultiSelectStore } from "@/app/store/multiSelectStore";
import userData from "@/mock/user.json";

const schema = z.object({
  tagInput: z.string().min(1, { message: "빈 태그는 추가할 수 없습니다." }),
});

export default function MultiSelectField() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      tagInput: "",
    },
  });

  const [open, setOpen] = useState(false);

  // Zustand에서 상태 가져오기
  const {
    options,
    selected,
    addSelected,
    removeSelected,
    setOptions,
    clearSelected,
  } = useMultiSelectStore();

  // 마운트 시 mock 데이터 초기화
  useEffect(() => {
    setOptions(userData);
  }, [setOptions]);

  //사용자가 항목을 선택했을 때 실행
  const handleSelect = (item) => {
    addSelected(item); // selected 배열에 항목 추가
    form.setValue("tagInput", "");
  };

  //입력한 태그가 options에 있을 경우에만 addSelected로 선택 목록에 추가
  const handleAddCustom = (inputValue) => {
    const result = schema.safeParse({ tagInput: inputValue });
    if (!result.success) {
      form.setError("tagInput", {
        message: result.error.errors[0].message,
      });
      return;
    }

    const existsInOptions = options.some((opt) => opt.invoice === inputValue);
    if (!existsInOptions) {
      //에러처리리
      form.setError("tagInput", {
        message: `"${inputValue}" 는 유효한 태그가 아닙니다.`,
      });
      return;
    }

    addSelected(inputValue); //상태 업데이트
    form.setValue("tagInput", "");
    form.clearErrors("tagInput");
  };

  return (
    <Form {...form}>
      <form className="space-y-2">
        <Label>선택한 항목</Label>
        <div className="flex flex-wrap gap-2">
          {selected.map((tag) => (
            <span
              key={tag}
              className="flex items-center px-2 py-1  border border-[var(--color-primary)] text-[var(--color-primary)] font-bold rounded text-sm hover:bg-[var(--color-primary)] hover:text-white cursor-pointer transition"
            >
              {tag}
              <X
                className="ml-1 h-4 w-4 cursor-pointer"
                onClick={() => removeSelected(tag)}
              />
            </span>
          ))}
        </div>

        <FormField
          control={form.control}
          name="tagInput"
          render={({ field }) => (
            <FormItem>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button type="button">+ 태그 추가</Button>
                </PopoverTrigger>
                <div className="flex items-center">
                  <Button
                    type="button"
                    onClick={clearSelected}
                    variant="outlineDefault"
                  >
                    <CircleMinus />
                    선택 초기화
                  </Button>
                </div>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput
                      placeholder="태그 검색 또는 입력"
                      value={field.value}
                      onValueChange={field.onChange}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddCustom(field.value);
                        }
                      }}
                    />
                    <CommandList>
                      {options.filter((item) =>
                        item.invoice
                          .toLowerCase()
                          .includes(field.value.toLowerCase())
                      ).length === 0 ? (
                        <CommandEmpty>
                          선택할 수 있는 태그가 없습니다.
                        </CommandEmpty>
                      ) : (
                        options
                          .filter(
                            (item) =>
                              item.invoice
                                .toLowerCase()
                                .includes(field.value.toLowerCase()) &&
                              !selected.includes(item.invoice)
                          )
                          .map((item) => (
                            <CommandItem
                              key={item.id}
                              onSelect={() => handleSelect(item.invoice)}
                            >
                              {item.invoice}
                            </CommandItem>
                          ))
                      )}
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              {/* 오류 메시지 표시 */}
              {form.formState.errors.tagInput && (
                <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                  <CircleAlert size={14} />
                  {form.formState.errors.tagInput.message}
                </p>
              )}
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
