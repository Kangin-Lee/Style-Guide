// 📌 TextAreaField 컴포넌트

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
import { Textarea } from "@/components/ui/textarea"; // ✅ 추가
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CircleAlert } from "lucide-react";

const schema = z.object({
  message: z.string().min(10, { message: "10자 이상 입력해주세요." }),
});

export function TextAreaField() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = (data) => {
    toast(`입력된 내용: ${data.message}`);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>메시지 입력</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="메시지를 입력하세요"
                  {...field}
                  className="w-96 h-32 resize-none"
                />
              </FormControl>

              {form.formState.errors.message && (
                <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                  <CircleAlert size={14} />
                  {form.formState.errors.message.message}
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
