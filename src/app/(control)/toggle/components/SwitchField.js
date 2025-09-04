"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { CircleAlert } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  agree: z.boolean().refine((val) => val === true, {
    message: "동의가 필요합니다.",
  }),
});

export function SwitchField() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      agree: false,
    },
  });

  const onSubmit = (data) => {
    toast(`약관에 동의하였습니다.`);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="agree"
          render={({ field }) => (
            <FormItem>
              <FormLabel>개인정보 수집 및 이용에 동의</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="agree"
                />
              </FormControl>

              {form.formState.errors.agree && (
                <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                  <CircleAlert size={14} />
                  {form.formState.errors.agree.message}
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
