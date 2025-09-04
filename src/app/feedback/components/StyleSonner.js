// 📌 StyleSonner 컴포넌트

"use client";

import CodeBlock from "@/app/components/CodeBlock";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Ban, CircleCheck } from "lucide-react";
import { toast } from "sonner";

export function StyleSonner() {
  const openCommonSonner = () => {
    toast("기본 토스트");
  };

  const openSuccessSonner = () => {
    toast("성공적으로 저장되었습니다.", {
      icon: <CircleCheck className="text-[var(--color-success)]" />,
    });
  };

  const openErrorSonner = () => {
    toast("입력값을 다시 한 번 확인해 주세요.", {
      icon: <Ban className="text-[var(--color-warning)]" />,
    });
  };

  const openWarningSonner = () => {
    toast("입력값을 다시 한 번 확인해 주세요.", {
      icon: <AlertTriangle className="text-yellow-500" />,
    });
  };

  const openInfoSonner = () => {
    toast.info("새 버전이 업데이트 되었습니다.");
  };

  const openDurationSonner = () => {
    toast("5초 뒤에 사라집니다.", {
      duration: 5000, // 5초
    });
  };

  const openCancelSonner = () => {
    toast("변경사항이 저장되지 않았습니다.", {
      cancel: {
        label: "취소",
        onClick: () => console.log("취소 클릭"),
      },
    });
  };

  const openDescriptionSonner = () => {
    toast.success("회원가입 완료", {
      description: "환영합니다! 로그인하여 시작하세요.",
    });
  };

  const openActionSonner = () => {
    toast("작업이 완료되지 않았습니다.", {
      action: {
        label: "재시도",
        onClick: () => console.log("재시도 클릭"),
      },
    });
  };

  return (
    <div className="flex flex-col md:flex-row bg-white p-4 gap-8 rounded">
      {/* Preview 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Toast & Sonner</h2>
        <div className="flex gap-4 flex-wrap">
          <Button onClick={openCommonSonner}>기본</Button>
          <Button onClick={openSuccessSonner}>성공</Button>
          <Button onClick={openErrorSonner}>에러</Button>
          <Button onClick={openWarningSonner}>경고</Button>
          <Button onClick={openInfoSonner}>정보</Button>
          <Button onClick={openActionSonner}>액션</Button>
          <Button onClick={openDurationSonner}>시간 조절</Button>
          <Button onClick={openCancelSonner}>취소 버튼</Button>
          <Button onClick={openDescriptionSonner}>서브 텍스트</Button>
        </div>
      </section>

      {/* CodeBlock 영역 */}
      <section className="md:w-1/2 w-full">
        <h2 className="text-lg font-semibold mb-4">Code</h2>
        <CodeBlock
          code={` export function StyleSonner() {
  const openCommonSonner = () => { toast("기본 토스트"); };

  const openSuccessSonner = () => {
    toast("성공적으로 저장되었습니다.", { icon: <CircleCheck className="text-[var(--color-success)]" />, });
  };

  const openErrorSonner = () => {
    toast("입력값을 다시 한 번 확인해 주세요.", { icon: <Ban className="text-[var(--color-warning)]" />, });
  };

  const openWarningSonner = () => {
    toast("입력값을 다시 한 번 확인해 주세요.", { icon: <AlertTriangle className="text-yellow-500" />, });
  };

  const openInfoSonner = () => {
    toast.info("새 버전이 업데이트 되었습니다.");
  };

  const openDurationSonner = () => {
    toast("5초 뒤에 사라집니다.", { duration: 5000, });
  };

  const openCancelSonner = () => {
    toast("변경사항이 저장되지 않았습니다.", {
      cancel: { label: "취소", onClick: () => console.log("취소 클릭"), },
    });
  };

  const openDescriptionSonner = () => {
    toast.success("회원가입 완료", { description: "환영합니다! 로그인하여 시작하세요.", });
  };

  const openActionSonner = () => {
    toast("작업이 완료되지 않았습니다.", {
      action: { label: "재시도", onClick: () => console.log("재시도 클릭"), },
    });
  };

  return (
    <Button onClick={openCommonSonner}>기본</Button>
    <Button onClick={openSuccessSonner}>성공</Button>
    <Button onClick={openErrorSonner}>에러</Button>
    <Button onClick={openWarningSonner}>경고</Button>
    <Button onClick={openInfoSonner}>정보</Button>
    <Button onClick={openActionSonner}>액션</Button>
    <Button onClick={openDurationSonner}>시간 조절</Button>
    <Button onClick={openCancelSonner}>취소 버튼</Button>
    <Button onClick={openDescriptionSonner}>서브 텍스트</Button>
  );
}
`}
        />
      </section>
    </div>
  );
}
