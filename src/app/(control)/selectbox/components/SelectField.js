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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CircleAlert } from "lucide-react";

const schema = z.object({
  category: z.string().min(1, { message: "부서를 선택해주세요." }),
});

export function SelectField() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      category: "", // 기본 선택 없음
    },
  });

  const onSubmit = (data) => {
    toast(`선택된 카테고리: ${data.category}`);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>카테고리 선택</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sd">SD부</SelectItem>
                    <SelectItem value="ia">AI부</SelectItem>
                    <SelectItem value="dp">DP부</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>

              {/* 유효성 에러가 있을 때만 출력 */}
              {form.formState.errors.category && (
                <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                  <CircleAlert size={14} />
                  {form.formState.errors.category.message}
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
