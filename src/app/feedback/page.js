// 📌 Feedback 페이지
// - Alert, Dialog, Popover, Tooltip, Toast(Sonner) 컴포넌트 사용 예시 및 코드 블록을 포함합니다.
import CodeBlock from "../components/CodeBlock";
import { StyleAlert } from "./components/StyleAlert";
import { StyleDialog } from "./components/StyleDialog";
import { StylePopover } from "./components/StylePopover";
import { StyleSonner } from "./components/StyleSonner";
import { StyleTooltip } from "./components/StyleTooltip";

// 페이지 메타데이터
export const metadata = {
  title: "Feedback",
  description: "Feedback",
};

export default function StyleFeedback() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Feedback Examples</h1>
      <div className="w-fit">
        <CodeBlock
          code={`<Tooltip><TooltipContent><p>Add to library</p></TooltipContent></Tooltip>`}
        />
      </div>

      {/* Alert */}
      <section className="bg-white p-4">
        <h2 className="text-lg font-semibold mb-4">Alert</h2>
        <div className="flex gap-4 flex-wrap">
          <StyleAlert />
        </div>
        <p className="mt-3 text-sm text-red-500">
          {`* Alert 컴포넌트는 "클릭해서 뜨는 알림 UI"가 아니라, "페이지 상의 상태 메시지용 정적(Static) 컴포넌트" 입니다.
  버튼을 눌러서 뜨는 알림은 Alert이 아니라 Toast나 Dialog를 사용해 주세요.`}
        </p>
      </section>

      {/* Dialog */}
      <StyleDialog />

      {/* Popover */}
      <StylePopover />

      {/* Tooltip */}
      <StyleTooltip />

      {/* Toast (Sonner) */}
      <StyleSonner />
    </div>
  );
}
