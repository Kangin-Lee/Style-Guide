// 📌 CheckBoxField 컴포넌트
// shadcn UI의 Checkbox 컴포넌트를 사용한 예제

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
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CircleAlert } from "lucide-react";

// ✅ z.boolean().refine 으로 처리
const schema = z.object({
  terms: z.boolean().refine((val) => val === true, {
    message: "약관에 동의하셔야 합니다.",
  }),
});

export function CheckBoxField() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      terms: false,
    },
  });

  const onSubmit = (data) => {
    toast("약관에 동의하였습니다.");
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex items-start gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  // ✅ boolean 값만 들어가도록 보장
                  onCheckedChange={(checked) => field.onChange(checked === true)}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-medium">
                  이용 약관에 동의합니다.
                </FormLabel>

                {/* 유효성 에러가 있을 때만 출력 */}
                {form.formState.errors.terms && (
                  <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                    <CircleAlert size={14} />
                    {form.formState.errors.terms.message}
                  </p>
                )}
              </div>
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
