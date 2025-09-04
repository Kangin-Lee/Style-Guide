// 📌 StyleAlert 컴포넌트

import {
  AlertTriangle,
  CheckCircle,
  Info,
  XCircle,
} from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function StyleAlert() {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      <section>
        <p>정보 알림</p>
        <Alert className="border-blue-500 bg-blue-50 text-blue-800">
          <Info className="h-4 w-4" />
          <AlertTitle>정보</AlertTitle>
          <AlertDescription>처리가 완료되었습니다.</AlertDescription>
        </Alert>
      </section>

      <section>
        <p>성공</p>
        <Alert className="border-green-500 bg-green-50 text-green-800">
          <CheckCircle className="h-4 w-4" />
          <AlertTitle>성공</AlertTitle>
          <AlertDescription>정상적으로 저장되었습니다.</AlertDescription>
        </Alert>
      </section>

      <section>
        <p>경고</p>
        <Alert className="border-yellow-500 bg-yellow-50 text-yellow-800">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>경고</AlertTitle>
          <AlertDescription>입력값을 확인해 주세요.</AlertDescription>
        </Alert>
      </section>

      <section>
        <p>에러</p>
        <Alert className="border-red-500 bg-red-50 text-red-800">
          <XCircle className="h-4 w-4" />
          <AlertTitle>에러 발생</AlertTitle>
          <AlertDescription>저장에 실패했습니다.</AlertDescription>
        </Alert>
      </section>
    </div>
  );
}
