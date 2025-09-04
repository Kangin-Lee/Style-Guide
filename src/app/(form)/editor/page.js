// 📌 Control Editor 페이지

import CodeBlock from "@/app/components/CodeBlock";
import { EditorField } from "./components/EditorField";

// 페이지 메타데이터
export const metadata = {
  title: "Editor - IOPS UI Library",
  description: "IOPS Style Guide - Editor",
};

export default function ControlEditor() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Editor Examples</h1>
      <div className="w-fit">
        <CodeBlock
          code={`<EditorContent editor={editor} className="px-2 editor-content border rounded-b-md min-h-[200px]" />`}
        />
        <p className="text-red-500 text-sm mt-2">* 유효성 검사는 코드 확인</p>
      </div>

      {/* 텍스트============================================== */}
      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">TextInput</h2>
          <div className="flex gap-4 flex-wrap">
            <EditorField />
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBlock
            code={[
              "export function EditorField() {",
              "  const editor = useEditor({",
              "    autofocus: true,",
              "    extensions: [",
              "      TextStyle,",
              "      Color,",
              "      Highlight,",
              '      TextAlign.configure({ types: ["heading", "paragraph"] }),',
              "      StarterKit.configure({",
              "        heading: { levels: [1, 2, 3] },",
              "        history: { depth: 100, newGroupDelay: 300 },",
              '        paragraph: { HTMLAttributes: { class: "is-empty" } },',
              "      }),",
              "      Underline,",
              "      Placeholder.configure({",
              '        placeholder: "내용을 입력해 주세요.",',
              "        showOnlyWhenEditable: true,",
              "        showOnlyCurrent: false,",
              "      }),",
              "    ],",
              "  });",
              "",
              '  const isRed = editor?.isActive("textStyle", { color: "#fb2c36" });',
              '  const isHighlighted = editor?.isActive("highlight");',
              "",
              "  if (!editor) return null;",
              "",
              "  return (",
              '    <div className="w-2xl">',
              '      <p className="font-semibold text-sm">에디터</p>',
              '      <section className="flex justify-between border px-2 py-1 rounded-t-md">',
              "        {/* 버튼들: Bold, Italic, Underline 등 */}",
              "        <button onClick={() => editor.chain().focus().toggleBold().run()}>Bold</button>",
              "        <button onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</button>",
              "        <button onClick={() => editor.chain().focus().toggleUnderline().run()}>Underline</button>",
              "        <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>서식 제거</button>",
              "        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>제목</button>",
              '        <button onClick={() => editor.chain().focus().setTextAlign("left").run()}>왼쪽 정렬</button>',
              "        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>● 리스트</button>",
              "        <button onClick={() => editor.chain().focus().toggleBlockquote().run()}>인용</button>",
              '        <button onClick={() => editor.chain().focus().toggleHighlight({ color: "#facc15" }).run()}>강조</button>',
              "        <button onClick={() => editor.commands.clearContent()}>전체 삭제</button>",
              "      </section>",
              "",
              "      <section>",
              "        <EditorContent",
              "          editor={editor}",
              '          className="px-2 editor-content border rounded-b-md min-h-[200px]"',
              "        />",
              "      </section>",
              "    </div>",
              "  );",
              "}",
            ].join("\n")}
          />
        </section>
      </div>
    </div>
  );
}
