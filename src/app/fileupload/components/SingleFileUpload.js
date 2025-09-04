// 📌 SingleFileUpload 컴포넌트

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRef, useState } from "react";
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
import clsx from "clsx";
import { Upload, X } from "lucide-react";

// 스키마 정의
const schema = z
  .object({
    file: z.any().optional(), //필수 값이 아니라 선택사항이라는 뜻
  })
  .superRefine((data, ctx) => { // superRefine은 복합 검증 로직을 커스터마이징 할 수 있음.
    const file = data.file?.[0];
    if (!file) return;

    const allowed = ["pdf", "hwp", "docx", "ppt"]; //확장자 제한
    const ext = file.name.split(".").pop()?.toLowerCase();
    const maxSize = 10 * 1024 * 1024; //파일 크기 10MB 이하만 가능

    if (!allowed.includes(ext)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["file"],
        message: "pdf, hwp, docx, ppt 파일만 업로드할 수 있습니다.",
      });
    }

    if (file.size > maxSize) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["file"],
        message: "파일 크기는 10MB 이하여야 합니다.",
      });
    }
  });

export default function SingleFileUpload() {

    //파일 선택 및 드래그 앤 드롭 처리
  const [selectedFile, setSelectedFile] = useState(null);  // 현재 선택된 파일을 state로 관리
  const [isDragging, setIsDragging] = useState(false); // 드래그 상태 스타일을 토글하기 위해 사용
  const inputRef = useRef(null); // <input type="file" />를 클릭 트리거 하기 위함

  //React Hook Form 설정
  const form = useForm({
    resolver: zodResolver(schema), //resolver로 zod 유효성 검사를 연결
    defaultValues: {
      file: undefined,
    },
  });

  // 파일 선택 처리 함수
  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      form.setValue("file", [file], { shouldValidate: true });
    }
    e.target.value = "";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
      form.setValue("file", [file], { shouldValidate: true });
    }
  };

  const handleRemove = () => {
    setSelectedFile(null);
    form.setValue("file", undefined, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    const file = data.file?.[0];
    if (file) toast.success(`선택한 파일: ${file.name}`);
    else toast.info("파일이 선택되지 않았습니다.");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-[420px]"
      >
        <FormField
          control={form.control}
          name="file"
          render={() => (
            <FormItem>
              <FormLabel>파일 업로드 (드로그 앤 드롭 가능)</FormLabel>
              <FormControl>
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  onClick={() => inputRef.current?.click()}
                  className={clsx(
                    "border border-dashed border-[var(--color-border)] rounded-md p-6 text-center transition-colors cursor-pointer",
                    isDragging ? "bg-blue-50 border-blue-400" : "bg-white"
                  )}
                >
                  <p className="text-[var(--color-font-gray)] text-sm flex flex-col items-center">
                    <Upload className="border rounded-full p-2" size={38} />
                    <span className="mt-2">
                      파일을 이곳에 드래그하거나&nbsp;
                      <span className="underline">클릭</span>하여 선택하세요
                    </span>
                  </p>
                  <Input
                    ref={inputRef}
                    type="file"
                    accept=".pdf,.hwp,.docx,.ppt"
                    onChange={handleChange}
                    className="hidden"
                  />
                </div>
              </FormControl>

              {selectedFile && (
                <div className="flex justify-between items-center text-sm text-gray-700 mt-2 hover:underline hover:cursor-pointer">
                  <span>{selectedFile.name}</span>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={handleRemove}
                  >
                    <X/>
                  </Button>
                </div>
              )}

              {form.formState.errors.file && (
                <p className="text-sm text-red-500 mt-1">
                  {form.formState.errors.file.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <Button type="submit">업로드</Button>
      </form>
    </Form>
  );
}
