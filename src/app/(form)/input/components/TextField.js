// 📌 TextField 컴포넌트

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
  text: z
    //각 조건은 실패 시 message를 통해 사용자에게 보여질 에러 메시지를 제공
    .string() //필드는 문자열(string)이어야 한다.
    .min(2, { message: "2자 이상 입력해주세요." }) //최소값
    .max(20, { message: "20자 이하로 입력해주세요." }), //최대값
});

export function TextField() {
  //react-hook-form의 핵심 훅으로, 폼 상태와 로직을 관리
  const form = useForm({
    resolver: zodResolver(schema), //Zod 스키마를 react-hook-form에 연결하여, 자동으로 유효성 검사를 수행
    mode: "onChange",
    //입력 필드의 초기값을 지정
    defaultValues: {
      text: "",
    },
  });

  const onSubmit = (data) => {
    toast(`입력된 값: ${data.text}`);
    form.reset(); // ← 폼 초기화
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>텍스트 입력</FormLabel>
              <FormControl>
                <Input
                  placeholder="텍스트를 입력하세요"
                  {...field}
                  className="w-96"
                />
              </FormControl>

              {/* 유효성 에러가 있을 때만 출력 */}
              {form.formState.errors.text && (
                <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                  <CircleAlert size={14} />
                  {form.formState.errors.text.message}
                </p>
              )}
            </FormItem>
          )}
        />

        <div className="w-96 flex justify-end">
          <Button type="submit" disabled={!form.formState.isValid}>등록</Button>
        </div>
      </form>
    </Form>
  );
}
