// 📌 PhoneField 컴포넌트

"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CircleAlert } from "lucide-react";

//zod를 통해 폼 데이터 전체 구조를 정의
const schema = z.object({
  phone: z
    .string()
    .regex(/^01[016789]-?\d{3,4}-?\d{4}$/, {
      message: "유효한 휴대폰 번호 양식을 입력해주세요.",
    })
    .transform((val) => val.replace(/-/g, "")), // 하이픈 자동 제거
});

export function PhoneField() {
  //react-hook-form의 핵심 훅으로, 폼 상태와 로직을 관리
  const form = useForm({
    resolver: zodResolver(schema), //Zod 스키마를 react-hook-form에 연결하여, 자동으로 유효성 검사를 수행

    //입력 필드의 초기값을 지정
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = (data) => {
    toast(`입력된 값: ${data.phone}`);
    form.reset(); // ← 폼 초기화
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>휴대폰 번호 입력</FormLabel>
              <FormControl>
                <Input
                  placeholder="휴대폰 번호를 입력하세요"
                  {...field}
                  className="w-96"
                />
              </FormControl>

              {/* 유효성 에러가 있을 때만 출력 */}
              {form.formState.errors.phone && (
                <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                  <CircleAlert size={14} />
                  {form.formState.errors.phone.message}
                </p>
              )}
            </FormItem>
          )}
        />

        <div className="w-96 flex justify-end">
          <Button type="submit">등록</Button>
        </div>
      </form>
    </Form>
  );
}
