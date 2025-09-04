"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import clsx from "clsx"; // tailwind 조건부 클래스용
import { Upload, X } from "lucide-react";
import { Input } from "@/components/ui/input";

const schema = z.object({
  files: z
    .array(z.instanceof(File))
    .nonempty({ message: "최소 하나 이상의 파일을 선택하세요." })
    .refine(
      (files) =>
        files.every((file) =>
          ["pdf", "hwp", "docx", "ppt"].includes(
            file.name.split(".").pop()?.toLowerCase() || ""
          )
        ),
      {
        message: "pdf, hwp, docx, ppt 형식의 파일만 업로드할 수 있습니다.",
      }
    )
    .refine((files) => files.every((file) => file.size <= 10 * 1024 * 1024), {
      message: "모든 파일은 10MB 이하만 업로드할 수 있습니다.",
    }),
});

export default function MultileFileUpload() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { files: [] },
  });

  const updateFileList = (newFiles) => {
    const deduped = newFiles.filter(
      (file) =>
        !selectedFiles.some((f) => f.name === file.name && f.size === file.size)
    );
    const updatedFiles = [...selectedFiles, ...deduped];
    setSelectedFiles(updatedFiles);
    form.setValue("files", updatedFiles, { shouldValidate: true });
  };

  const handleInputChange = (e) => {
    const files = Array.from(e.target.files);
    updateFileList(files);
    e.target.value = "";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    updateFileList(files);
  };

  const handleRemove = (index) => {
    const updated = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updated);
    form.setValue("files", updated, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    console.log("제출된 파일:", data.files);
    toast.success(`파일 ${data.files.length}개 업로드 준비 완료`);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-[420px]"
      >
        <FormField
          name="files"
          control={form.control}
          render={() => (
            <FormItem>
              <FormLabel>파일 업로드 (드래그 앤 드롭 가능)</FormLabel>

              {/* 드래그 앤 드롭 영역 */}
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
                    <Upload className="border rounded-full p-2" size={38}/>
                    <span className="mt-2">
                      파일을 이곳에 드래그하거나&nbsp;
                      <span className="underline">클릭</span>하여 선택하세요
                    </span>
                  </p>

                  {/* 숨겨진 input */}
                  <Input
                    ref={inputRef}
                    type="file"
                    multiple
                    accept=".pdf,.hwp,.docx,.ppt"
                    onChange={handleInputChange}
                    className="hidden"
                  />
                </div>
              </FormControl>

              {/* 선택된 파일 목록 */}
              {selectedFiles.length > 0 && (
                <ul className="mt-2 text-sm">
                  {selectedFiles.map((file, index) => (
                    <li key={index} className="flex justify-between items-center text-sm text-gray-700 mt-2 hover:underline hover:cursor-pointer">
                      {file.name}
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        onClick={() => handleRemove(index)}
                      >
                        <X/>
                      </Button>
                    </li>
                  ))}
                </ul>
              )}

              {/* 에러 메시지 */}
              {form.formState.errors.files && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.files.message}
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
