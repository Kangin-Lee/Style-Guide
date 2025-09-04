// 📌 PasswordField 컴포넌트

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
  //refine()은 사용자 정의 검사 조건을 통합적으로 적용할 때 유용
  password: z.string().refine(
    (value) => {
      return (
        value.length >= 8 &&
        /[a-z]/.test(value) &&
        /[A-Z]/.test(value) &&
        /[0-9]/.test(value) &&
        /[^a-zA-Z0-9]/.test(value)
      );
    },
    {
      message:
        "영문 대소문자, 숫자, 특수문자를 모두 포함한 8자 이상이어야 합니다.",
    }
  ),
});

export function PasswordField() {
  //react-hook-form의 핵심 훅으로, 폼 상태와 로직을 관리
  const form = useForm({
    resolver: zodResolver(schema), //Zod 스키마를 react-hook-form에 연결하여, 자동으로 유효성 검사를 수행

    //입력 필드의 초기값을 지정
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (data) => {
    toast(`입력된 값: ${data.password}`);
    form.reset(); // ← 폼 초기화
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호 입력</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  {...field}
                  className="w-96"
                />
              </FormControl>

              {/* 유효성 에러가 있을 때만 출력 */}
              {form.formState.errors.password && (
                <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                  <CircleAlert size={14} />
                  {form.formState.errors.password.message}
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
