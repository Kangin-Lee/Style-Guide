import { ChevronLeft, ChevronRight } from "lucide-react";

// components/CustomToolbar.jsx
export default function CustomToolbar({ label, onNavigate }) {
  return (
    <div className="flex items-center justify-between mb-4 px-2">
      {/* 가운데: 라벨 */}
      <div className="flex-grow">
        <span className="text-xl font-bold">{label}</span>
      </div>
      <div className="flex-none w-[96px]" /> {/* 버튼 3개 크기 맞춤
      {/* 왼쪽: 버튼들 */}
      <div className="flex items-center space-x-2 flex-none">
        <button onClick={() => onNavigate("PREV")} className="rounded hover:bg-slate-300 transition">
          <ChevronLeft />
        </button>
        <button
          onClick={() => onNavigate("TODAY")}
          className="px-3 transition py-1 rounded hover:bg-[var(--color-primary)] hover:text-white"
        >
          오늘
        </button>
        <button onClick={() => onNavigate("NEXT")} className="rounded hover:bg-slate-300 transition">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
