// 📌 Common Icon 컴포넌트

import CodeBlock from "@/app/components/CodeBlock";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  MoreVertical,
  MoreHorizontal,
  Plus,
  Minus,
  Upload,
  Download,
  Trash,
  Edit,
  Save,
  Copy,
  Undo,
  Redo,
  Eye,
  EyeOff,
  RefreshCcw,
} from "lucide-react";

export function CommonIcons() {
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Common Icon</h2>
          <div className="flex gap-4 flex-col flex-wrap">
            <div className="flex gap-4">
              <Search />
              <Menu />
              <X />
              <ChevronDown />
              <ChevronUp />
            </div>

            <div className="flex gap-4">
              <ChevronLeft />
              <ChevronRight />
              <ArrowUp />
              <ArrowDown />
              <ArrowLeft />
            </div>

            <div className="flex gap-4">
              <ArrowRight />
              <MoreVertical />
              <MoreHorizontal />
              <Plus />
              <Minus />
            </div>

            <div className="flex gap-4">
              <Upload />
              <Download />
              <Trash />
              <Edit />
              <Save />
            </div>

            <div className="flex gap-4">
              <Copy />
              <Undo />
              <Redo />
              <Eye />
              <EyeOff />
            </div>

            <RefreshCcw />
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              "<Search />  <Menu />  <X />  <ChevronDown />  <ChevronUp />",
              "<ChevronLeft />  <ChevronRight />  <ArrowUp />  <ArrowDown />  <ArrowLeft />",
              "<ArrowRight />  <MoreVertical />  <MoreHorizontal />  <Plus />  <Minus />",
              "<Upload />  <Download />  <Trash />  <Edit />  <Save />",
              "<Copy />  <Paste />  <Undo />  <Redo />  <Eye />",
              "<EyeOff />  <RefreshCcw />",
            ].join("\n")}
          />
        </section>
      </div>
    </div>
  );
}
