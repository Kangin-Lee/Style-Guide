// 📌 EditorField 컴포넌트

"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  BrushCleaning,
  Code,
  Heading,
  Italic,
  List,
  ListOrdered,
  Redo2,
  RemoveFormatting,
  Strikethrough,
  TextQuote,
  Type,
  UnderlineIcon,
  Undo2,
} from "lucide-react";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

export function EditorField({value, onChange}) {
  const editor = useEditor({
    content: value,
    autofocus: true,
    immediatelyRender: false,
    extensions: [
      TextStyle,
      Color,
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
        history: {
          depth: 100,
          newGroupDelay: 300,
        },
        paragraph: {
          HTMLAttributes: {
            class: "is-empty",
          },
        },
      }),
      Underline,
      Placeholder.configure({
        placeholder:
          "내용을 입력해 주세요.",
        showOnlyWhenEditable: true,
        showOnlyCurrent: false, // 여러 개 표시 방지
      }),
    ],
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML()); //react-hook-form에 값 전달
    },
  });

  const isRed = editor?.isActive("textStyle", { color: "#fb2c36" });
  const isHighlighted = editor?.isActive("highlight");

  if (!editor) return null;

  return (
    <div className="w-2xl">
      {/* <p className="font-semibold text-sm">에디터</p> */}
      <section className="bg-white flex justify-between border px-2 py-1 rounded-t-md">
        <TooltipProvider>
          <div>
            {/* 되돌리기 */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => editor.chain().focus().undo().run()}
                  disabled={!editor.can().undo()}
                  className="disabled:opacity-50 mr-1 hover:bg-slate-300 p-1 rounded-md"
                >
                  <Undo2 />
                </button>
              </TooltipTrigger>
              <TooltipContent>되돌리기 (Undo)</TooltipContent>
            </Tooltip>

            {/* 다시하기 */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => editor.chain().focus().redo().run()}
                  disabled={!editor.can().redo()}
                  className="disabled:opacity-50 hover:bg-slate-300 p-1 rounded-md"
                >
                  <Redo2 />
                </button>
              </TooltipTrigger>
              <TooltipContent>다시하기 (Redo)</TooltipContent>
            </Tooltip>
          </div>

          {/* ==================서식부분=================== */}
          <div>
            {/* 굵게 */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={
                    editor.isActive("bold")
                      ? "bg-slate-300 p-1 rounded-md mr-1"
                      : "hover:bg-slate-300 p-1 rounded-md mr-1"
                  }
                  onClick={() => editor.chain().focus().toggleBold().run()}
                >
                  <Bold />
                </button>
              </TooltipTrigger>
              <TooltipContent>굵게</TooltipContent>
            </Tooltip>

            {/* 기울기 */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={
                    editor.isActive("italic")
                      ? "bg-slate-300 p-1 rounded-md mr-1"
                      : "hover:bg-slate-300 p-1 rounded-md mr-1"
                  }
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                >
                  <Italic />
                </button>
              </TooltipTrigger>
              <TooltipContent>기울기</TooltipContent>
            </Tooltip>

            {/* 밑줄 */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={
                    editor.isActive("underline")
                      ? "bg-slate-300 p-1 rounded-md mr-1"
                      : "hover:bg-slate-300 p-1 rounded-md mr-1"
                  }
                  onClick={() => editor.chain().focus().toggleUnderline().run()}
                >
                  <UnderlineIcon />
                </button>
              </TooltipTrigger>
              <TooltipContent>밑줄</TooltipContent>
            </Tooltip>

            {/* 취소선 */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={
                    editor.isActive("strike")
                      ? "bg-slate-300 p-1 rounded-md mr-1"
                      : "hover:bg-slate-300 p-1 rounded-md mr-1"
                  }
                  onClick={() => editor.chain().focus().toggleStrike().run()}
                >
                  <Strikethrough />
                </button>
              </TooltipTrigger>
              <TooltipContent>취소선</TooltipContent>
            </Tooltip>

            {/* 서식제거 */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => editor.chain().focus().unsetAllMarks().run()}
                  className="hover:bg-slate-300 p-1 rounded-md"
                >
                  <RemoveFormatting />
                </button>
              </TooltipTrigger>
              <TooltipContent>서식제거</TooltipContent>
            </Tooltip>
          </div>

          {/* ==================서식부분=================== */}

          {/* ==================헤딩부분=================== */}
          <div>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={
                    editor.isActive("heading", { level: 2 })
                      ? "bg-slate-300 p-1 rounded-md mx-1"
                      : "hover:bg-slate-300 p-1 rounded-md mx-1"
                  }
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                  }
                >
                  <Heading />
                </button>
              </TooltipTrigger>
              <TooltipContent>제목</TooltipContent>
            </Tooltip>
          </div>

          {/* ==================헤딩부분=================== */}

          {/* ==================정렬부분=================== */}
          <div>
            {/* 왼쪽정렬 */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={
                    editor.isActive({ textAlign: "left" })
                      ? "bg-slate-300 p-1 rounded-md mr-1"
                      : "hover:bg-slate-300 p-1 rounded-md mr-1"
                  }
                  onClick={() =>
                    editor.chain().focus().setTextAlign("left").run()
                  }
                >
                  <AlignLeft />
                </button>
              </TooltipTrigger>
              <TooltipContent>왼쪽</TooltipContent>
            </Tooltip>

            {/* 가운데정렬 */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={
                    editor.isActive({ textAlign: "center" })
                      ? "bg-slate-300 p-1 rounded-md mr-1"
                      : "hover:bg-slate-300 p-1 rounded-md mr-1"
                  }
                  onClick={() =>
                    editor.chain().focus().setTextAlign("center").run()
                  }
                >
                  <AlignCenter />
                </button>
              </TooltipTrigger>
              <TooltipContent>가운데</TooltipContent>
            </Tooltip>

            {/* 오른쪽정렬 */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={
                    editor.isActive({ textAlign: "right" })
                      ? "bg-slate-300 p-1 rounded-md"
                      : "hover:bg-slate-300 p-1 rounded-md"
                  }
                  onClick={() =>
                    editor.chain().focus().setTextAlign("right").run()
                  }
                >
                  <AlignRight />
                </button>
              </TooltipTrigger>
              <TooltipContent>오른쪽</TooltipContent>
            </Tooltip>
          </div>

          {/* ==================정렬부분=================== */}

          {/* ==================리스트부분=================== */}
          <div>
            {/* 점 리스트*/}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={
                    editor.isActive("bulletList")
                      ? "bg-slate-300 p-1 rounded-md mr-1"
                      : "hover:bg-slate-300 p-1 rounded-md mr-1"
                  }
                  onClick={() =>
                    editor.chain().focus().toggleBulletList().run()
                  }
                >
                  <List />
                </button>
              </TooltipTrigger>
              <TooltipContent>리스트 1</TooltipContent>
            </Tooltip>

            {/* 숫자 리스트*/}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={
                    editor.isActive("orderedList")
                      ? "bg-slate-300 p-1 rounded-md"
                      : "hover:bg-slate-300 p-1 rounded-md"
                  }
                  onClick={() =>
                    editor.chain().focus().toggleOrderedList().run()
                  }
                >
                  <ListOrdered />
                </button>
              </TooltipTrigger>
              <TooltipContent>리스트 2</TooltipContent>
            </Tooltip>
          </div>

          {/* ==================리스트부분=================== */}

          {/* ==================인용/코드 부분=================== */}
          <div>
            {/* 인용*/}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={
                    editor.isActive("blockquote")
                      ? "bg-slate-300 p-1 rounded-md mr-1"
                      : "hover:bg-slate-300 p-1 rounded-md mr-1"
                  }
                  onClick={() =>
                    editor.chain().focus().toggleBlockquote().run()
                  }
                >
                  <TextQuote />
                </button>
              </TooltipTrigger>
              <TooltipContent>인용</TooltipContent>
            </Tooltip>

            {/* 코드드*/}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={
                    editor.isActive("codeBlock")
                      ? "bg-slate-300 p-1 rounded-md"
                      : "hover:bg-slate-300 p-1 rounded-md"
                  }
                  onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                >
                  <Code />
                </button>
              </TooltipTrigger>
              <TooltipContent>코드</TooltipContent>
            </Tooltip>
          </div>

          {/* ==================인용/코드 부분=================== */}

          {/* ==================색 강조 부분=================== */}
          <div>
            {/* 텍스트 강조*/}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .setColor(isRed ? null : "#fb2c36")
                      .run()
                  }
                  className={
                    isRed 
                      ? "bg-slate-300 p-1 rounded-md mr-1"
                      : "hover:bg-slate-300 p-1 rounded-md mr-1"
                  }
                >
                  <Type className="text-red-500" />
                </button>
              </TooltipTrigger>
              <TooltipContent>텍스트 강조</TooltipContent>
            </Tooltip>

            {/* 배경 강조*/}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => {
                    if (isHighlighted) {
                      // 하이라이트가 적용되어 있으면 제거
                      editor.chain().focus().unsetHighlight().run();
                    } else {
                      // 적용되어 있지 않으면 지정한 색상으로 하이라이트 적용
                      editor
                        .chain()
                        .focus()
                        .toggleHighlight({ color: "#facc15" })
                        .run();
                    }
                  }}
                  className={
                    isHighlighted
                      ? "bg-yellow-300 text-black p-1 rounded-md"
                      : "hover:bg-yellow-200 p-1 rounded-md"
                  }
                >
                  <Type />
                </button>
              </TooltipTrigger>
              <TooltipContent>배경 강조</TooltipContent>
            </Tooltip>
          </div>

          {/* ==================색 강조 부분=================== */}

          {/* ==================전체 삭제=================== */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => editor.commands.clearContent()}
                className="hover:bg-slate-300 p-1 rounded-md"
              >
                <BrushCleaning />
              </button>
            </TooltipTrigger>
            <TooltipContent>전체 삭제</TooltipContent>
          </Tooltip>
          {/* ==================전체 삭제=================== */}
        </TooltipProvider>
      </section>

      <section>
        <EditorContent
          editor={editor}
          className="bg-white px-2 editor-content border rounded-b-md min-h-[200px]"
        />
      </section>
    </div>
  );
}
